/**
 * GoldMajlis — Cloudflare Worker v8
 * ─────────────────────────────────
 * Routes:
 *   GET /price?last=QAR&last_ts=ms   → live gold price + optional alert
 *   GET /history                      → 7-day price history from KV
 *   GET /bullion-prices               → Alfardan bar prices from KV
 *   GET /health                       → public status JSON
 *   GET /dashboard?key=SECRET         → private HTML health dashboard
 *
 * Scheduled (cron):
 *   every 12 hours → fetchAndStoreAlfardanPrices()
 *
 * CLOUDFLARE SETUP:
 *   KV namespace "GOLDMAJLIS_PRICES" bound as PRICE_STORE
 *   Environment variables:
 *     DASHBOARD_KEY = your secret string
 *   Cron trigger: add "0 6,18 * * *" in Worker → Triggers → Cron Triggers
 *   (runs at 06:00 and 18:00 UTC = 09:00 and 21:00 Qatar time)
 *
 *   Custom domain: api.goldmajlis.com
 */

import { WorkerEntrypoint } from 'cloudflare:workers';

const RAPIDAPI_KEY   = 'f41dc0214cmsh1a4f3387c2f5510p1d713djsn21f0afd7bf03';
const RAPIDAPI_HOST  = 'metal-sentinel.p.rapidapi.com';
const UPSTREAM       = `https://${RAPIDAPI_HOST}/gold-price?currency=QAR`;
const OZ_TO_GRAM     = 31.1035;
const HISTORY_DAYS   = 7;
const REFRESH_MS     = 10 * 60 * 1000;
const ALERT_THRESHOLD = 0.01;

const KV_HISTORY_KEY    = 'price_history_v1';
const KV_LAST_WRITE_KEY = 'last_write_ts_v1';
const KV_FETCH_LOG_KEY  = 'fetch_log_v1';
const KV_BULLION_KEY    = 'alfardan_bullion_v1';
const MAX_LOG_ENTRIES   = 100;

const ALFARDAN_URL = 'https://www.alfardanexchange.com.qa/api/gold-rates';

const ALLOWED_ORIGINS = [
  'https://goldmajlis.com',
  'https://www.goldmajlis.com',
  'https://goldmajlis.qa',
  'https://www.goldmajlis.qa',
];

/* ── In-memory cache ── */
let _cache       = null;
let _cacheHits   = 0;
let _cacheMisses = 0;

/* ─────────────────────────────────────────────────────────────────── */

export default {

  /* ── HTTP handler ── */
  async fetch(request, env) {
    const url    = new URL(request.url);
    const path   = url.pathname;
    const origin = request.headers.get('Origin') || '';
    const cors   = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

    if (request.method === 'OPTIONS')
      return new Response(null, { status: 204, headers: corsHeaders(cors) });

    if (path === '/price' || path === '/')  return handlePrice(request, env, cors, url);
    if (path === '/history')                return handleHistory(env, cors);
    if (path === '/bullion-prices')         return handleBullionPrices(env, cors);
    if (path === '/health')                 return handleHealth(cors);
    if (path === '/dashboard')              return handleDashboard(request, env, url);

    return new Response('Not found', { status: 404 });
  },

  /* ── Scheduled cron: fetch Alfardan prices every 12h ── */
  async scheduled(event, env, ctx) {
    ctx.waitUntil(fetchAndStoreAlfardanPrices(env));
  },
};

/* ─── /price ─────────────────────────────────────────────────────── */
async function handlePrice(request, env, cors, url) {
  const now = Date.now();
  let payload, fromCache = false;

  if (_cache && (now - _cache.fetchedAt) < REFRESH_MS) {
    payload = _cache.payload;
    fromCache = true;
    _cacheHits++;
  } else {
    _cacheMisses++;
    try {
      const upstream = await fetch(UPSTREAM, {
        method: 'GET',
        headers: {
          'Content-Type':    'application/json',
          'x-rapidapi-key':  RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
        },
      });
      if (!upstream.ok) throw new Error(`Upstream HTTP ${upstream.status}`);

      const data   = await upstream.json();
      const result = data?.results?.[0];
      if (!result?.mid) throw new Error('Missing mid price');

      const spotQAR    = parseFloat(result.mid);
      const perGram24k = +(spotQAR / OZ_TO_GRAM).toFixed(4);
      const fetchedAt  = new Date().toISOString();

      payload = {
        source:       'metal-sentinel',
        currency:     'QAR',
        spot_oz:      spotQAR,
        per_gram_24k: perGram24k,
        per_gram_22k: +(spotQAR / OZ_TO_GRAM * (22/24)).toFixed(4),
        per_gram_21k: +(spotQAR / OZ_TO_GRAM * (21/24)).toFixed(4),
        per_gram_18k: +(spotQAR / OZ_TO_GRAM * (18/24)).toFixed(4),
        ask: result.ask, bid: result.bid, high: result.high, low: result.low,
        fetched_at: fetchedAt,
      };

      _cache = { payload, fetchedAt: now };

      if (env?.PRICE_STORE) {
        appendFetchLog(env.PRICE_STORE, {
          ts: fetchedAt, ok: true, price: perGram24k, src: 'metal-sentinel',
        }).catch(() => {});
        rateLimitedKVWrite(env.PRICE_STORE, perGram24k, fetchedAt, now).catch(() => {});
      }

    } catch (err) {
      if (env?.PRICE_STORE) {
        appendFetchLog(env.PRICE_STORE, {
          ts: new Date().toISOString(), ok: false, error: err.message, src: 'metal-sentinel',
        }).catch(() => {});
      }
      if (_cache) payload = { ..._cache.payload, stale: true };
      else        return errResp(err.message, 502, cors);
    }
  }

  /* Price alert */
  const lastPrice = parseFloat(url.searchParams.get('last') || '0');
  const lastTsMs  = parseInt(url.searchParams.get('last_ts') || '0');
  const curr      = payload.per_gram_24k;
  let price_alert = null;

  if (lastPrice > 10 && curr > 10) {
    const delta = (curr - lastPrice) / lastPrice;
    if (Math.abs(delta) >= ALERT_THRESHOLD) {
      const pct   = Math.abs(delta * 100).toFixed(1);
      const isUp  = delta > 0;
      const sign  = isUp ? '+' : '-';
      const lv    = formatLastVisit(lastTsMs);
      price_alert = {
        delta_pct: parseFloat(sign + pct),
        direction: isUp ? 'up' : 'down',
        color:     isUp ? '#34C759' : '#FF3B30',
        arrow:     isUp ? '▲' : '▼',
        prev_price: lastPrice, curr_price: curr,
        msg_en: `${isUp?'▲':'▼'} Gold ${isUp?'up':'down'} ${sign}${pct}% since ${lv.en} · Was QAR ${lastPrice.toFixed(2)}, now ${curr.toFixed(2)}`,
        msg_ar: `${isUp?'▲':'▼'} الذهب ${isUp?'ارتفع':'انخفض'} ${sign}${pct}٪ منذ ${lv.ar} · كان ${lastPrice.toFixed(2)}، الآن ${curr.toFixed(2)} ريال`,
      };
    }
  }

  const response = price_alert ? { ...payload, price_alert } : payload;
  return json(response, 200, cors, 'no-store');
}

/* ─── /history ───────────────────────────────────────────────────── */
async function handleHistory(env, cors) {
  if (!env?.PRICE_STORE) return errResp('KV not configured', 503, cors);
  try {
    const raw    = await env.PRICE_STORE.get(KV_HISTORY_KEY);
    const points = raw ? JSON.parse(raw) : [];
    return json({ points, count: points.length }, 200, cors, 'public, max-age=60');
  } catch (err) {
    return errResp(err.message, 500, cors);
  }
}

/* ─── /bullion-prices ────────────────────────────────────────────── */
async function handleBullionPrices(env, cors) {
  if (!env?.PRICE_STORE) return errResp('KV not configured', 503, cors);
  try {
    const raw  = await env.PRICE_STORE.get(KV_BULLION_KEY);
    if (!raw)  return json({ prices: {}, source: null, fetched_at: null }, 200, cors, 'public, max-age=3600');
    const data = JSON.parse(raw);
    return json(data, 200, cors, 'public, max-age=3600');
  } catch (err) {
    return errResp(err.message, 500, cors);
  }
}

/* ─── /health ────────────────────────────────────────────────────── */
async function handleHealth(cors) {
  const cacheAge = _cache ? Math.round((Date.now() - _cache.fetchedAt) / 1000) : null;
  return json({
    ok:           true,
    cache_age_s:  cacheAge,
    cache_hits:   _cacheHits,
    cache_misses: _cacheMisses,
    last_price:   _cache?.payload?.per_gram_24k || null,
    ts:           new Date().toISOString(),
  }, 200, cors);
}

/* ─── Alfardan scraper (cron + manual trigger) ────────────────────
   Fetches /api/gold-rates from alfardanexchange.com.qa
   Stores cheapest price per weight in KV.
   Keeps previous price if a weight is not found in new fetch.
─────────────────────────────────────────────────────────────────── */
async function fetchAndStoreAlfardanPrices(env) {
  if (!env?.PRICE_STORE) return;

  /* Read previous prices so we can keep them if a size goes missing */
  let prev = {};
  try {
    const raw = await env.PRICE_STORE.get(KV_BULLION_KEY);
    if (raw) prev = JSON.parse(raw).prices || {};
  } catch {}

  let rawData = null;
  try {
    const TO = new Promise((_,rej) => setTimeout(() => rej(new Error('timeout')), 15000));
    const r  = await Promise.race([
      fetch(ALFARDAN_URL, {
        headers: {
          'Accept':           'application/json, text/plain, */*',
          'Accept-Language':  'en-US,en;q=0.9,ar;q=0.8',
          'Origin':           'https://www.alfardanexchange.com.qa',
          'Referer':          'https://www.alfardanexchange.com.qa/services/gold-bars-and-coins',
          'User-Agent':       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest',
        },
      }),
      TO,
    ]);

    if (!r.ok) throw new Error(`Alfardan HTTP ${r.status}`);
    rawData = await r.json();
    console.info('[GM] Alfardan fetch OK:', JSON.stringify(rawData).slice(0, 200));

  } catch (err) {
    console.warn('[GM] Alfardan fetch failed:', err.message);
    /* Store the failure in the log but keep previous prices */
    await appendFetchLog(env.PRICE_STORE, {
      ts: new Date().toISOString(), ok: false, error: err.message, src: 'alfardan',
    }).catch(() => {});
    return; /* Keep previous prices unchanged */
  }

  /* Parse the response — handle multiple possible shapes */
  const parsed = parseAlfardanResponse(rawData, prev);

  await env.PRICE_STORE.put(KV_BULLION_KEY, JSON.stringify({
    prices:     parsed,
    source:     'alfardan',
    fetched_at: new Date().toISOString(),
    raw_sample: JSON.stringify(rawData).slice(0, 500), /* for dashboard debugging */
  }), { expirationTtl: 2 * 24 * 3600 }); /* 2-day TTL safety net */

  await appendFetchLog(env.PRICE_STORE, {
    ts: new Date().toISOString(), ok: true,
    src: 'alfardan', price: parsed['1g'] || null,
    detail: `${Object.keys(parsed).length} weights stored`,
  }).catch(() => {});

  console.info('[GM] Alfardan prices stored:', JSON.stringify(parsed));
}

/* ─── Parse Alfardan response — flexible shape handler ─────────────
   Alfardan may return:
   A. Array: [{ weight: "1g", price: 230.5, karat: 24, currency: "QAR" }, ...]
   B. Object: { "1g": 230.5, "2.5g": 576.25, ... }
   C. Nested: { bars: [...], coins: [...] }
   D. Unknown shape — log and keep previous

   Rules:
   - Keep only 24K bar prices (skip coins, lower karats)
   - Pick CHEAPEST price if multiple entries per weight
   - Keep previous price if weight not found in new data
─────────────────────────────────────────────────────────────────── */
function parseAlfardanResponse(raw, prev) {
  const result = { ...prev }; /* start with previous prices */

  /* Weight normalizer: "1 gram", "1g", "1 Gram", "1.0g" → "1g" */
  function normalizeWeight(w) {
    if (!w) return null;
    const s = String(w).toLowerCase().trim()
      .replace(/\s+/g, '')
      .replace('gram', 'g')
      .replace('grams', 'g')
      .replace('tola', 'tola')
      .replace('ounce', 'oz')
      .replace('oz.', 'oz');
    /* Remove trailing .0 */
    return s.replace(/\.0+([a-z])/g, '$1');
  }

  /* Candidate array of {weight, price} */
  const candidates = []; /* { weight: string, price: number } */

  if (Array.isArray(raw)) {
    raw.forEach(item => {
      const price = parseFloat(item.price || item.Price || item.rate || item.Rate || 0);
      const weight = normalizeWeight(
        item.weight || item.Weight || item.unit || item.Unit || item.size || item.Size
      );
      const karat = parseInt(item.karat || item.Karat || item.purity || 24);
      /* Only 24K bars (skip coins, lower karats) */
      if (weight && price > 0 && (karat >= 24 || !item.karat)) {
        candidates.push({ weight, price });
      }
    });
  } else if (raw && typeof raw === 'object') {
    /* Try common nested keys */
    const arrays = [
      raw.bars, raw.Bars, raw.gold_bars, raw.goldBars,
      raw.data, raw.Data, raw.items, raw.rates,
    ].filter(Array.isArray);

    if (arrays.length > 0) {
      /* Recursively parse the array */
      return parseAlfardanResponse(arrays[0], prev);
    }

    /* Flat object: { "1g": 230.5, "2.5g": 576.25, ... } */
    Object.entries(raw).forEach(([key, val]) => {
      const weight = normalizeWeight(key);
      const price  = parseFloat(val);
      if (weight && price > 0) candidates.push({ weight, price });
    });
  }

  /* Apply candidates — pick cheapest per weight */
  candidates.forEach(({ weight, price }) => {
    if (!result[weight] || price < result[weight].price) {
      result[weight] = { price, currency: 'QAR', weight };
    }
  });

  /* Clean up: if result still has old-format entries, normalize */
  const cleaned = {};
  Object.entries(result).forEach(([k, v]) => {
    const price = typeof v === 'object' ? v.price : v;
    if (price > 0) cleaned[k] = { price, currency: 'QAR', weight: k };
  });

  return cleaned;
}

/* ─── /dashboard ─────────────────────────────────────────────────── */
async function handleDashboard(request, env, url) {
  const provided = url.searchParams.get('key') || '';
  const expected = env?.DASHBOARD_KEY || '';
  if (!expected || provided !== expected)
    return new Response('Unauthorized', { status: 401 });

  const now = Date.now();
  const cacheAge  = _cache ? Math.round((now - _cache.fetchedAt) / 1000) : null;
  const cacheOk   = cacheAge !== null && cacheAge < 660;
  const hitRate   = (_cacheHits + _cacheMisses) > 0
    ? Math.round(_cacheHits / (_cacheHits + _cacheMisses) * 100) : 0;

  let histPoints = [], fetchLog = [], bullionData = null, lastWrite = null;

  if (env?.PRICE_STORE) {
    try { const r = await env.PRICE_STORE.get(KV_HISTORY_KEY); histPoints = r ? JSON.parse(r) : []; } catch {}
    try { const r = await env.PRICE_STORE.get(KV_FETCH_LOG_KEY); fetchLog = r ? JSON.parse(r) : []; } catch {}
    try { const r = await env.PRICE_STORE.get(KV_BULLION_KEY); bullionData = r ? JSON.parse(r) : null; } catch {}
    try { const r = await env.PRICE_STORE.get(KV_LAST_WRITE_KEY); lastWrite = r ? new Date(parseInt(r)).toISOString() : null; } catch {}
  }

  const successes    = fetchLog.filter(e => e.ok);
  const failures     = fetchLog.filter(e => !e.ok);
  const goldFetches  = fetchLog.filter(e => e.src === 'metal-sentinel');
  const alfardanFetches = fetchLog.filter(e => e.src === 'alfardan');
  const avgLatency   = goldFetches.filter(e=>e.latency).length
    ? Math.round(goldFetches.filter(e=>e.latency).reduce((s,e)=>s+(e.latency||0),0)/goldFetches.filter(e=>e.latency).length) : null;

  const newest = histPoints[histPoints.length-1];
  const oldest = histPoints[0];
  const spanH  = oldest && newest ? ((new Date(newest.ts)-new Date(oldest.ts))/3600000).toFixed(1) : 0;

  const bullionPrices = bullionData?.prices || {};
  const bullionCount  = Object.keys(bullionPrices).length;
  const bullionFetch  = bullionData?.fetched_at?.slice(0,19).replace('T',' ')+' UTC' || '—';
  const bullionOk     = bullionCount > 0;

  const html = `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>GoldMajlis · Dashboard</title>
<script>setTimeout(()=>location.reload(),60000)</script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0a0a0a;color:#e0e0e0;padding:20px}
h1{font-size:18px;font-weight:700;color:#FFD700;margin-bottom:4px}
.sub{font-size:11px;color:#555;margin-bottom:20px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-bottom:20px}
.card{background:#111;border:1px solid #222;border-radius:10px;padding:16px}
.ct{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#555;margin-bottom:10px}
.big{font-size:28px;font-weight:700;color:#FFD700;margin-bottom:2px}
.lbl{font-size:11px;color:#555}
.row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1a1a1a;font-size:12px}
.row:last-child{border-bottom:none}
.v{font-weight:600}
.ok{color:#34C759}.warn{color:#FF9500}.err{color:#FF3B30}
.dot{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:5px}
.dot.ok{background:#34C759}.dot.warn{background:#FF9500}.dot.err{background:#FF3B30}
table{width:100%;border-collapse:collapse;font-size:11px}
th{text-align:left;padding:5px 6px;color:#444;font-weight:600;border-bottom:1px solid #1a1a1a}
td{padding:4px 6px;border-bottom:1px solid #111;font-family:monospace}
.banner{padding:10px 14px;border-radius:8px;margin-bottom:16px;font-size:12px;font-weight:600}
.banner.ok{background:#0a1f0a;border:1px solid #34C759;color:#34C759}
.banner.err{background:#1f0a0a;border:1px solid #FF3B30;color:#FF3B30}
.refresh{font-size:10px;color:#333;text-align:center;margin-top:16px}
</style></head><body>
<h1>⚡ GoldMajlis API Health</h1>
<div class="sub">Private · Auto-refreshes 60s · ${new Date().toUTCString()}</div>

<div class="banner ${cacheOk && bullionOk ? 'ok' : 'err'}">
${cacheOk && bullionOk ? '✓ All systems operational' : '⚠ One or more systems need attention'}
</div>

<div class="grid">
<div class="card">
  <div class="ct"><span class="dot ${cacheOk?'ok':'err'}"></span>Gold Price · Metal Sentinel</div>
  <div class="big">${_cache ? 'QAR '+_cache.payload.per_gram_24k.toFixed(2) : '—'}</div>
  <div class="lbl">24K / gram</div>
  <div style="margin-top:12px">
    <div class="row"><span>Cache age</span><span class="v ${cacheOk?'ok':'err'}">${cacheAge!=null?cacheAge+'s':'No cache'}</span></div>
    <div class="row"><span>Hit rate</span><span class="v ${hitRate>80?'ok':'warn'}">${hitRate}%</span></div>
    <div class="row"><span>Fetched</span><span class="v">${_cache?.payload?.fetched_at?.slice(0,19).replace('T',' ')||'—'} UTC</span></div>
    <div class="row"><span>22K</span><span class="v">${_cache?'QAR '+_cache.payload.per_gram_22k.toFixed(2):'—'}</span></div>
    <div class="row"><span>21K</span><span class="v">${_cache?'QAR '+_cache.payload.per_gram_21k.toFixed(2):'—'}</span></div>
    <div class="row"><span>18K</span><span class="v">${_cache?'QAR '+_cache.payload.per_gram_18k.toFixed(2):'—'}</span></div>
  </div>
</div>

<div class="card">
  <div class="ct"><span class="dot ${bullionOk?'ok':'warn'}"></span>Alfardan Bullion Prices</div>
  <div class="big">${bullionCount}</div>
  <div class="lbl">weight sizes cached</div>
  <div style="margin-top:12px">
    <div class="row"><span>Last fetch</span><span class="v">${bullionFetch}</span></div>
    ${Object.entries(bullionPrices).slice(0,6).map(([w,d])=>
      `<div class="row"><span>${w}</span><span class="v">QAR ${typeof d==='object'?d.price?.toFixed(2):Number(d).toFixed(2)}</span></div>`
    ).join('')}
    ${bullionCount===0?'<div class="row"><span class="warn">No prices yet — cron not run</span></div>':''}
    ${bullionData?.raw_sample?`<div style="margin-top:8px;font-size:10px;color:#333;word-break:break-all">Raw: ${bullionData.raw_sample.slice(0,100)}…</div>`:''}
  </div>
</div>

<div class="card">
  <div class="ct"><span class="dot ${histPoints.length>0?'ok':'warn'}"></span>KV History</div>
  <div class="big">${histPoints.length}</div>
  <div class="lbl">data points</div>
  <div style="margin-top:12px">
    <div class="row"><span>Span</span><span class="v">${spanH}h</span></div>
    <div class="row"><span>Newest</span><span class="v">${newest?.ts?.slice(0,16).replace('T',' ')||'—'}</span></div>
    <div class="row"><span>Newest price</span><span class="v">${newest?.p?.toFixed(4)||'—'}</span></div>
    <div class="row"><span>Last KV write</span><span class="v">${lastWrite?.slice(0,16).replace('T',' ')||'—'}</span></div>
  </div>
</div>

<div class="card">
  <div class="ct"><span class="dot ${failures.length<3?'ok':'err'}"></span>Fetch Log</div>
  <div class="big ok">${successes.length}</div>
  <div class="lbl">successful fetches</div>
  <div style="margin-top:12px">
    <div class="row"><span>Failures</span><span class="v ${failures.length===0?'ok':failures.length<5?'warn':'err'}">${failures.length}</span></div>
    <div class="row"><span>Avg latency</span><span class="v">${avgLatency?avgLatency+'ms':'—'}</span></div>
    <div class="row"><span>Alfardan fetches</span><span class="v">${alfardanFetches.length} (${alfardanFetches.filter(e=>e.ok).length} ok)</span></div>
    ${failures.slice(-3).reverse().map(e=>`<div class="row"><span class="err">${e.ts?.slice(0,16).replace('T',' ')}</span><span class="v err">${(e.error||'').slice(0,25)}</span></div>`).join('')}
  </div>
</div>
</div>

<div style="margin-bottom:8px;font-size:12px;font-weight:600;color:#555">Recent Fetches</div>
<div class="card">
<table>
<thead><tr><th>Time (UTC)</th><th>Source</th><th>Status</th><th>Price/Detail</th></tr></thead>
<tbody>
${[...fetchLog].reverse().slice(0,25).map(e=>`
<tr>
  <td>${e.ts?.slice(0,19).replace('T',' ')}</td>
  <td>${e.src||'—'}</td>
  <td class="${e.ok?'ok':'err'}">${e.ok?'✓ OK':'✗ FAIL'}</td>
  <td>${e.price?'QAR '+e.price:e.detail||e.error?.slice(0,30)||'—'}</td>
</tr>`).join('')||'<tr><td colspan="4" style="text-align:center;color:#333;padding:12px">No log entries yet</td></tr>'}
</tbody></table>
</div>

<div class="refresh">Auto-refreshes every 60s</div>
</body></html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html;charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
  });
}

/* ─── KV helpers ──────────────────────────────────────────────────── */
async function rateLimitedKVWrite(kv, perGram24k, ts, nowMs) {
  const lastWriteRaw = await kv.get(KV_LAST_WRITE_KEY);
  const lastWrite    = lastWriteRaw ? parseInt(lastWriteRaw) : 0;
  if (nowMs - lastWrite < REFRESH_MS) return;
  const raw    = await kv.get(KV_HISTORY_KEY);
  const points = raw ? JSON.parse(raw) : [];
  points.push({ ts, p: perGram24k });
  const cutoff = nowMs - HISTORY_DAYS * 24 * 60 * 60 * 1000;
  const pruned = points.filter(pt => new Date(pt.ts).getTime() > cutoff);
  await Promise.all([
    kv.put(KV_HISTORY_KEY, JSON.stringify(pruned), { expirationTtl: HISTORY_DAYS*24*3600+3600 }),
    kv.put(KV_LAST_WRITE_KEY, String(nowMs), { expirationTtl: REFRESH_MS/1000*3 }),
  ]);
}

async function appendFetchLog(kv, entry) {
  const raw     = await kv.get(KV_FETCH_LOG_KEY);
  const entries = raw ? JSON.parse(raw) : [];
  entries.push(entry);
  if (entries.length > MAX_LOG_ENTRIES) entries.splice(0, entries.length - MAX_LOG_ENTRIES);
  await kv.put(KV_FETCH_LOG_KEY, JSON.stringify(entries), { expirationTtl: 30*24*3600 });
}

/* ─── Formatting helpers ─────────────────────────────────────────── */
function formatLastVisit(tsMs) {
  if (!tsMs || tsMs < 1e12) return { en: 'your last visit', ar: 'زيارتك الأخيرة' };
  const d = new Date(tsMs);
  const me = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const ma = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const hh = String(d.getHours()).padStart(2,'0');
  const mm = String(d.getMinutes()).padStart(2,'0');
  return {
    en: `${me[d.getMonth()]} ${d.getDate()} at ${hh}:${mm}`,
    ar: `${d.getDate()} ${ma[d.getMonth()]} الساعة ${hh}:${mm}`,
  };
}

function json(data, status, cors, cache) {
  const h = { 'Content-Type': 'application/json', ...corsHeaders(cors) };
  if (cache) h['Cache-Control'] = cache;
  return new Response(JSON.stringify(data), { status, headers: h });
}
function errResp(msg, status, cors) { return json({ error: msg }, status, cors); }
function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin':  origin,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age':       '86400',
  };
}
