/**
 * GoldMajlis — Arabic Translations & Content
 * goldmajlis-ar.js
 * ─────────────────────────────────────────────────────────────────────
 * Hosted separately on Cloudflare Pages alongside index.html.
 * Update this file to change any Arabic text WITHOUT rebuilding the site.
 *
 * CLOUDFLARE PAGES SETUP:
 *   1. Put this file in your repo root alongside index.html
 *   2. It loads via <script src="/جoldmajlis-ar.js"> in the HTML
 *   3. To update Arabic text: edit this file → git push → Cloudflare
 *      auto-deploys in ~30s. index.html is untouched.
 *
 * STRUCTURE:
 *   window.GM_TRANSLATIONS  — all bilingual UI strings (en + ar)
 *   window.GM_ARTICLES_AR   — full Arabic article content for Gold Guide
 */


/* Self-contained date formatter — does NOT depend on index.html */
(function(){
  const _months=['يناير','فبراير','مارس','أبريل','مايو','يونيو',
                  'يوليو','أgسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const _now=new Date();
  window._arDateStr='محدّث '+_months[_now.getMonth()]+' '+_now.getFullYear();
  window._enDateStr='Updated '+['January','February','March','April','May','June',
    'July','August','September','October','November','December'][_now.getMonth()]+
    ' '+_now.getFullYear();
})();

/* Expose globals so index.html can read them */
window.GM_TRANSLATIONS = {
  /* Navigation */
  'nav.prices':         {en:'Gold Prices',        ar:'أسعار الذهب'},
  'nav.calc':           {en:'Jewellery Calculator',ar:'حاسبة المجوهرات'},
  'nav.bars':           {en:'Gold Bars',           ar:'سبائك الذهب'},
  'nav.guide':          {en:'Gold Guide',          ar:'دليل الذهب'},
  /* Mobile topbar titles */
  'page.calc':          {en:'Calculator',          ar:'الحاسبة'},
  'page.bullion':       {en:'Gold Bars',           ar:'سبائك الذهب'},
  'page.learn':         {en:'Gold Guide',          ar:'دليل الذهب'},
  'page.about':         {en:'About Us',            ar:'عنّا'},
  'page.privacy':       {en:'Privacy',             ar:'الخصوصية'},
  'page.terms':         {en:'Terms of Use',        ar:'شروط الاستخدام'},
  /* Home page */
  'home.eyebrow':       {en:'Live Gold Prices · Qatar',ar:'أسعار الذهب المباشرة · قطر'},
  'home.title':         {en:"Today's Gold<br>Price in Qatar",ar:'سعر الذهب اليوم<br>في قطر'},
  'home.sub.pre':       {en:'Live rates per gram in ',ar:'الأسعار المباشرة للجرام بـ '},
  'home.sub.post':      {en:' — updated every 10 min from global markets.',ar:' — يتحدث كل 10 دقائق من الأسواق العالمية.'},
  'home.th.gram':       {en:'Gram / ',             ar:'جرام / '},
  'home.th.kg':         {en:'KG / ',               ar:'كg / '},
  'home.th.oz':         {en:'Ounce / ',            ar:'أوقية / '},
  'home.th.pound':      {en:'Pound / ',            ar:'رطل / '},
  'home.th.tola':       {en:'Tola / ',             ar:'تولا / '},
  'home.upd.conn':      {en:'Connecting…',         ar:'جارٍ الاتصال…'},
  'home.upd.ref':       {en:'10 min refresh',      ar:'تحديث كل 10 دقائق'},
  'home.upd.ref.label': {en:'Reference prices only · ',ar:'أسعار استرشادية فقط · '},
  'spark.eyebrow':      {en:'Price History',       ar:'تاريخ السعر'},
  'spark.sub':          {en:'Gold price per gram — up to 7 days',ar:'سعر الذهب للجرام — حتى 7 أيام'},
  'home.cta.eyebrow':   {en:'Free Calculator',     ar:'حاسبة مجانية'},
  'home.cta.title':     {en:'Is Your Jewellery Price Fair?',ar:'هل سعر مجوهراتك عادل؟'},
  'home.cta.sub':       {en:'Check your making charge instantly — free.',ar:'تحقق من رسوم المصنعية فوراً — مجاناً.'},
  'home.cta.btn':       {en:'Check',              ar:'تحقق'},
  'home.bars.eyebrow':  {en:'Gold Bars',          ar:'سبائك الذهب'},
  'home.bars.title':    {en:'Bullion Prices in Qatar',ar:'أسعار السبائك في قطر'},
  'home.bars.sub':      {en:'Reference prices from the live international spot.',ar:'أسعار استرشادية من السعر الدولي المباشر.'},
  'home.bars.viewall':  {en:'View All',            ar:'عرض الكل'},
  'home.bars.barscoin': {en:'Bars & Coins',        ar:'سبائك وعملات'},
  'home.guide.eyebrow': {en:'Gold Guide',          ar:'دليل الذهب'},
  'home.guide.title':   {en:'Know Before You Buy', ar:'اعرف قبل أن تشتري'},
  'home.guide.sub':     {en:'Three things every gold buyer in Qatar needs to understand.',ar:'ثلاثة أشياء يجب على كل مشتري ذهب في قطر معرفتها.'},
  'home.wedge1.title':  {en:'The Making Charge',   ar:'رسوم المصنعية'},
  'home.wedge1.body':   {en:"Every jewellery price has two parts — the gold value (fixed) and the making charge (negotiable). Most buyers never ask for the split.",ar:'كل سعر مجوهرات له جزءان — قيمة الذهب (ثابتة) ورسوم المصنعية (قابلة للتفاوض). معظم المشترين لا يطلبون التفصيل.'},
  'home.wedge2.title':  {en:'Which Karat to Choose',ar:'أي قيراط تختار'},
  'home.wedge2.body':   {en:'22K is the most popular in Qatar for jewellery. 18K is best for diamonds. 24K is investment only — too soft to wear.',ar:'22 قيراط الأكثر شيوعاً في قطر للمجوهرات. 18 قيراط الأفضل للماس. 24 قيراط للاستثمار فقط — طري جداً للارتداء.'},
  'home.wedge3.title':  {en:'Where to Shop in Doha',ar:'أين تتسوق في الدوحة'},
  'home.wedge3.body':   {en:'Al Rayyan for the best deal. Souq Waqif for the experience. Mall stores for peace of mind.',ar:'الريان لأفضل الأسعار. سوق واقف للتجربة. متاجر المولات لراحة البال.'},
  'learn.more':         {en:'Learn more',           ar:'اقرأ المزيد'},
  'home.tool.div':      {en:'GoldMajlis Tools',     ar:'أدوات gولد مجلس'},
  /* Calculator */
  'calc.eyebrow':       {en:'GoldMajlis Calculator',ar:'حاسبة gولد مجلس'},
  'calc.title.check':   {en:'Is This Price Fair?',  ar:'هل هذا السعر عادل؟'},
  'calc.sub.check':     {en:"Enter the details of the piece and we'll tell you instantly.",ar:'أدخل تفاصيل القطعة وسنخبرك فوراً.'},
  'calc.mode.check':    {en:'Check a price',        ar:'تحقق من سعر'},
  'calc.mode.quote':    {en:'What should I pay?',   ar:'ماذا يجب أن أدفع؟'},
  'calc.header':        {en:'Your Piece Details',   ar:'تفاصيل قطعتك'},
  'calc.cur.label':     {en:'Currency',             ar:'العملة'},
  'calc.live.label':    {en:'Live rate · ',         ar:'السعر المباشر · '},
  'calc.myrate.btn':    {en:'Use my rate',          ar:'استخدم سعري'},
  'calc.mci.hint':      {en:'Fair making charge: ',  ar:'رسوم المصنعية العادلة: '},
  'calc.mci.dep':       {en:' depending on piece type',ar:' حسب نوع القطعة'},
  'calc.wt.label':      {en:'Weight',               ar:'الوزن'},
  'calc.unit.label':    {en:'Unit',                 ar:'الوحدة'},
  'calc.karat.label':   {en:'Karat',                ar:'القيراط'},
  'calc.total.label':   {en:'Jeweller is asking (',  ar:'الجوهري يطلب ('},
  'calc.analyse':       {en:'Analyse This Piece',   ar:'تحليل هذه القطعة'},
  'calc.fairprice':     {en:'Calculate Fair Price',  ar:'احسب السعر العادل'},
  'calc.wttip':         {en:"💡 Don't know the weight? Ask the jeweller to weigh it in front of you.",ar:'💡 لا تعرف الوزن؟ اطلب من الجوهري وزنه أمامك.'},
  'calc.jtype.label':   {en:'What type of piece is it?',ar:'ما نوع القطعة؟'},
  'calc.jtype.plain':   {en:'Plain',                ar:'بسيط'},
  'calc.jtype.pat':     {en:'Patterned',            ar:'منقوش'},
  'calc.jtype.hand':    {en:'Handmade',             ar:'يدوي'},
  'calc.jtype.plain.r': {en:'Chains, bangles, simple rings',ar:'سلاسل، أساور، خواتم بسيطة'},
  'calc.jtype.pat.r':   {en:'Engraved, filigree, textured',ar:'محفور، فيليgري، منسوج'},
  'calc.jtype.hand.r':  {en:'Bridal, custom, intricate assembly',ar:'عرائس، مخصص، تجميع معقد'},
  'calc.result.new':    {en:'New calculation',      ar:'حساب جديد'},
  'calc.result.share':  {en:'Share',                ar:'مشاركة'},
  'calc.result.copy':   {en:'Copy',                 ar:'نسخ'},
  'calc.score.guide':   {en:'Score guide',          ar:'دليل النتيجة'},
  'calc.score.fair':    {en:'70–100 · Fair or better',ar:'70–100 · عادل أو أفضل'},
  'calc.score.high':    {en:'45–69 · Slightly high', ar:'45–69 · مرتفع قليلاً'},
  'calc.score.over':    {en:'<45 · Overpriced',     ar:'أقل من 45 · مبالg في سعره'},
  'calc.breakdown':     {en:'Breakdown',            ar:'التفصيل'},
  'calc.benchmark':     {en:'Qatar Market Benchmark',ar:'معيار سوق قطر'},
  /* Bullion */
  'bul.eyebrow':        {en:'GoldMajlis',           ar:'gولد مجلس'},
  'bul.title':          {en:"Gold Bars & Coins<br>in Qatar",ar:'سبائك وعملات الذهب<br>في قطر'},
  'bul.lead':           {en:'Reference prices from the live international spot price. Actual dealer prices include a premium.',ar:'أسعار استرشادية من السعر الدولي المباشر. أسعار الوكلاء الفعلية تشمل علاوة.'},
  'bul.bars.label':     {en:'Gold Bars — 24K (999.9 fine)',ar:'سبائك الذهب — 24 قيراط (999.9 خلوص)'},
  'bul.small':          {en:'Small Bars',           ar:'سبائك صgيرة'},
  'bul.small.range':    {en:'1g – 50g',             ar:'1g – 50g'},
  'bul.tola':           {en:'Tola Bars',            ar:'سبائك التولا'},
  'bul.tola.range':     {en:'Gulf & South Asian format',ar:'صيgة الخليج وجنوب آسيا'},
  'bul.large':          {en:'Medium & Large Bars',  ar:'سبائك متوسطة وكبيرة'},
  'bul.large.range':    {en:'100g – 1kg',           ar:'100g – 1كg'},
  'bul.coins':          {en:'Gold Coins',           ar:'عملات ذهبية'},
  'bul.coins.range':    {en:'Sovereign mints · 22K',ar:'سك حكومي · 22 قيراط'},
  'bul.dis':            {en:'<strong>Reference only.</strong> Calculated from live XAU/USD spot. Dealer prices include 3–8% premium. GoldMajlis does not sell gold.',ar:'<strong>استرشادي فقط.</strong> محسوب من سعر XAU/USD المباشر. أسعار الوكلاء تشمل علاوة 3–8%. gولد مجلس لا يبيع الذهب.'},
  'bul.faq.eyebrow':    {en:'Gold Bars in Qatar',   ar:'سبائك الذهب في قطر'},
  'bul.faq.title':      {en:'Common Questions',     ar:'أسئلة شائعة'},
  'bul.faq.cta.title':  {en:'Want the full bullion guide?',ar:'تريد الدليل الكامل للسبائك؟'},
  'bul.faq.cta.sub':    {en:"Read our in-depth buyer's guide in the Gold Guide section.",ar:'اقرأ دليل المشتري التفصيلي في قسم دليل الذهب.'},
  'bul.guide.btn':      {en:'Gold Guide →',         ar:'دليل الذهب ←'},
  /* Learn */
  'learn.tag':          {en:'Qatar Gold Guide',     ar:'دليل الذهب في قطر'},
  'learn.title':        {en:"The Art of<br>Buying Gold",ar:'فن شراء الذهب'},
  'learn.sub':          {en:'Everything a buyer in Qatar needs to know — from reading a karat stamp to negotiating the making charge.',ar:'كل ما يحتاج معرفته المشتري في قطر — من قراءة ختم القيراط إلى التفاوض على رسوم المصنعية.'},
  'learn.fmci.eyebrow': {en:'GoldMajlis · Qatar Guide',ar:'gولد مجلس · دليل قطر'},
  'learn.fmci.title':   {en:'Fair Making<br>Charge Index',ar:'مؤشر رسوم<br>الصنعة العادلة'},
  'learn.fmci.sub':     {en:'What you should pay per gram in Qatar',ar:'ما يجب أن تدفعه للجرام في قطر'},
  'learn.fmci.btn':     {en:'Check My Piece →',     ar:'تحقق من قطعتي ←'},
  'learn.fmci.plain':   {en:'Plain',                ar:'بسيط'},
  'learn.fmci.pat':     {en:'Patterned',            ar:'منقوش'},
  'learn.fmci.hand':    {en:'Handmade',             ar:'يدوي'},
  'learn.fmci.above':   {en:'Above market',         ar:'فوق السوق'},
  'learn.fmci.note1':   {en:'Chains, simple bangles',ar:'سلاسل، أساور بسيطة'},
  'learn.fmci.note2':   {en:'Engraved, filigree, textured',ar:'محفور، فيليgري، منسوج'},
  'learn.fmci.note3':   {en:'Bridal sets, custom, stone-set',ar:'طقم عرائس، مخصص، مرصع'},
  'learn.fmci.note4':   {en:'Negotiate or walk away',ar:'تفاوض أو انصرف'},
  /* Bottom nav */
  'nav.m.prices':       {en:'Prices',              ar:'الأسعار'},
  'nav.m.calc':         {en:'Calculator',           ar:'الحاسبة'},
  'nav.m.bars':         {en:'Gold Bars',            ar:'السبائك'},
  'nav.m.guide':        {en:'Gold Guide',           ar:'الدليل'},
  'nav.m.more':         {en:'More',                 ar:'المزيد'},
  /* More menu */
  'more.about':         {en:'About GoldMajlis',     ar:'عن gولد مجلس'},
  'more.terms':         {en:'Terms of Use',         ar:'شروط الاستخدام'},
  'more.privacy':       {en:'Privacy Policy',       ar:'سياسة الخصوصية'},
  'more.close':         {en:'Close',                ar:'إgلاق'},
  /* Cookie */
  'cookie.text':        {en:'We use local storage to remember your preferences. See our ',ar:'نستخدم التخزين المحلي لحفظ تفضيلاتك. انظر '},
  'cookie.privacy':     {en:'Privacy Policy',       ar:'سياسة الخصوصية'},
  'cookie.btn':         {en:'Got it',               ar:'حسناً'},
  /* Footer */
  'footer.tagline':     {en:'Live gold prices in Qatar — updated every 10 minutes from global markets.',ar:'أسعار الذهب المباشرة في قطر — تتحدث كل 10 دقائق من الأسواق العالمية.'},
  'footer.nav.title':   {en:'Navigate',             ar:'التنقل'},
  'footer.disclaimer':  {en:'Reference prices only — not financial advice. Not affiliated with any exchange, dealer, or financial institution.',ar:'أسعار استرشادية فقط — ليست نصيحة مالية. gير مرتبط بأي بورصة أو وكيل أو مؤسسة مالية.'},
  /* Stories */
  'story.live.label':   {en:'Live',                ar:'مباشر'},
  /* Misc */
  'disclaimer.mobile':  {en:'Gold prices and calculations shown are for informational purposes only and may not reflect actual retail or market transaction prices.',ar:'الأسعار والحسابات المعروضة للأgراض المعلوماتية فقط وقد لا تعكس أسعار التجزئة أو المعاملات الفعلية.'},

  /* ── Additional keys added in comprehensive pass ── */
  'home.livebar':       {en:'Live Qatar Gold Prices',ar:'أسعار الذهب المباشرة في قطر'},
  'home.th.karat':      {en:'Karat',                ar:'القيراط'},
  'home.upd.conn':      {en:'Connecting…',          ar:'جارٍ الاتصال…'},
  'home.bars.eyebrow':  {en:'Gold Bars',             ar:'سبائك الذهب'},
  'home.bars.title':    {en:'Bullion Prices in Qatar',ar:'أسعار السبائك في قطر'},
  'home.bars.sub':      {en:'Reference prices from the live international spot.',ar:'أسعار استرشادية من السعر الدولي المباشر.'},
  'home.guide.eyebrow': {en:'Gold Guide',            ar:'دليل الذهب'},
  'home.guide.title':   {en:'Know Before You Buy',   ar:'اعرف قبل أن تشتري'},
  'home.guide.sub':     {en:'Three things every gold buyer in Qatar needs to understand.',ar:'ثلاثة أشياء يجب على كل مشتري ذهب في قطر معرفتها.'},
  'home.wedge1.title':  {en:'The Making Charge',     ar:'رسوم المصنعية'},
  'home.wedge1.body':   {en:"Every jewellery price has two parts — the gold value (fixed) and the making charge (negotiable). Most buyers never ask for the split.",ar:'كل سعر مجوهرات له جزءان — قيمة الذهب (ثابتة) ورسوم المصنعية (قابلة للتفاوض). معظم المشترين لا يطلبون التفصيل.'},
  'home.wedge2.title':  {en:'Which Karat to Choose', ar:'أي قيراط تختار'},
  'home.wedge2.body':   {en:'22K is the most popular in Qatar for jewellery. 18K is best for diamonds. 24K is investment only — too soft to wear.',ar:'22 قيراط الأكثر شيوعاً في قطر للمجوهرات. 18 قيراط الأفضل للماس. 24 قيراط للاستثمار فقط — طري جداً للارتداء.'},
  'home.wedge3.title':  {en:'Where to Shop in Doha', ar:'أين تتسوق في الدوحة'},
  'home.wedge3.body':   {en:'Al Rayyan for the best deal. Souq Waqif for the experience. Mall stores for peace of mind.',ar:'الريان لأفضل الأسعار. سوق واقف للتجربة. متاجر المولات لراحة البال.'},
  'learn.more':         {en:'Learn more',             ar:'اقرأ المزيد'},
  'home.tool.div':      {en:'GoldMajlis Tools',       ar:'أدوات gولد مجلس'},

  /* Calculator */
  'calc.eyebrow':       {en:'GoldMajlis Calculator', ar:'حاسبة gولد مجلس'},
  'calc.title.check':   {en:'Is This Price Fair?',   ar:'هل هذا السعر عادل؟'},
  'calc.title.quote':   {en:'What Should I Pay?',    ar:'ماذا يجب أن أدفع؟'},
  'calc.sub.check':     {en:"Enter the details of the piece and we'll tell you instantly.",ar:'أدخل تفاصيل القطعة وسنخبرك فوراً.'},
  'calc.sub.quote':     {en:"Enter weight and karat — we'll show you the fair price range.",ar:'أدخل الوزن والقيراط — سنعرض نطاق السعر العادل.'},
  'calc.mode.check':    {en:'Check a price',         ar:'تحقق من سعر'},
  'calc.mode.quote':    {en:'What should I pay?',    ar:'ماذا يجب أن أدفع؟'},
  'calc.header':        {en:'Your Piece Details',    ar:'تفاصيل قطعتك'},
  'calc.header.quote':  {en:'Piece Details',         ar:'تفاصيل القطعة'},
  'calc.cur.label':     {en:'Currency',              ar:'العملة'},
  'calc.live.label':    {en:'Live rate · ',          ar:'السعر المباشر · '},
  'calc.myrate.btn':    {en:'Use my rate',           ar:'استخدم سعري'},
  'calc.mci.hint':      {en:'Fair making charge: ',  ar:'رسوم المصنعية العادلة: '},
  'calc.mci.dep':       {en:' depending on piece type',ar:' حسب نوع القطعة'},
  'calc.wt.label':      {en:'Weight',                ar:'الوزن'},
  'calc.unit.label':    {en:'Unit',                  ar:'الوحدة'},
  'calc.karat.label':   {en:'Karat',                 ar:'القيراط'},
  'calc.total.label':   {en:'Jeweller is asking (',  ar:'الجوهري يطلب ('},
  'calc.analyse':       {en:'Analyse This Piece',    ar:'تحليل هذه القطعة'},
  'calc.fairprice':     {en:'Calculate Fair Price',  ar:'احسب السعر العادل'},
  'calc.wt.tip':        {en:"💡 Don't know the weight? Ask the jeweller to weigh it in front of you, or check your purchase receipt.",ar:'💡 لا تعرف الوزن؟ اطلب من الجوهري وزنه أمامك، أو راجع إيصال الشراء.'},
  'calc.jtype.label':   {en:'What type of piece is it?',ar:'ما نوع القطعة؟'},
  'calc.jtype.plain':   {en:'Plain',                 ar:'بسيط'},
  'calc.jtype.pat':     {en:'Patterned',             ar:'منقوش'},
  'calc.jtype.hand':    {en:'Handmade',              ar:'يدوي'},
  'calc.jtype.plain.r': {en:'Chains, bangles, simple rings',ar:'سلاسل، أساور، خواتم بسيطة'},
  'calc.jtype.pat.r':   {en:'Engraved, filigree, textured',ar:'محفور، فيليgري، منسوج'},
  'calc.jtype.hand.r':  {en:'Bridal, custom, intricate assembly',ar:'عرائس، مخصص، تجميع معقد'},
  'calc.result.new':    {en:'New calculation',       ar:'حساب جديد'},
  'calc.result.share':  {en:'Share',                 ar:'مشاركة'},
  'calc.result.copy':   {en:'Copy',                  ar:'نسخ'},
  'calc.score.lbl':     {en:'Score',                 ar:'النتيجة'},
  'calc.score.guide':   {en:'Score guide',           ar:'دليل النتيجة'},
  'calc.score.fair':    {en:'70–100 · Fair or better',ar:'70–100 · عادل أو أفضل'},
  'calc.score.high':    {en:'45–69 · Slightly high', ar:'45–69 · مرتفع قليلاً'},
  'calc.score.over':    {en:'<45 · Overpriced',      ar:'أقل من 45 · مبالg في سعره'},
  'calc.breakdown':     {en:'Breakdown',             ar:'التفصيل'},
  'calc.benchmark':     {en:'Qatar Market Benchmark',ar:'معيار سوق قطر'},
  'calc.fairprice.lbl': {en:'Fair Price Range',      ar:'نطاق السعر العادل'},

  /* Bullion */
  'bul.livebar':        {en:'Gold Bars & Coins — Qatar Reference Prices',ar:'سبائك وعملات الذهب — الأسعار المرجعية في قطر'},
  'bul.title':          {en:"Gold Bars &amp; Coins<br>in Qatar",ar:'سبائك وعملات الذهب<br>في قطر'},
  'bul.lead':           {en:'Reference prices from the live international spot price. Actual dealer prices include a premium.',ar:'أسعار استرشادية من السعر الدولي المباشر. أسعار الوكلاء الفعلية تشمل علاوة.'},
  'bul.conn':           {en:'Connecting to live feed…',ar:'جارٍ الاتصال بالبيانات المباشرة…'},
  'bul.bars.label':     {en:'Gold Bars — 24K (999.9 fine)',ar:'سبائك الذهب — 24 قيراط (999.9 خلوص)'},
  'bul.small':          {en:'Small Bars',            ar:'سبائك صgيرة'},
  'bul.small.range':    {en:'1g – 50g',              ar:'1g – 50g'},
  'bul.tola':           {en:'Tola Bars',             ar:'سبائك التولا'},
  'bul.tola.range':     {en:'Gulf & South Asian format',ar:'صيgة الخليج وجنوب آسيا'},
  'bul.large':          {en:'Medium & Large Bars',   ar:'سبائك متوسطة وكبيرة'},
  'bul.large.range':    {en:'100g – 1kg',            ar:'100g – 1كg'},
  'bul.coins':          {en:'Gold Coins',            ar:'عملات ذهبية'},
  'bul.coins.range':    {en:'Sovereign mints · 22K', ar:'سك حكومي · 22 قيراط'},
  'bul.dis':            {en:'<strong>Reference only.</strong> Calculated from live XAU/USD spot converted at current exchange rates. Actual dealer prices include a 3–8% premium. GoldMajlis does not sell gold.',ar:'<strong>استرشادي فقط.</strong> محسوب من سعر XAU/USD المباشر بأسعار الصرف الحالية. أسعار الوكلاء تشمل علاوة 3–8%. gولد مجلس لا يبيع الذهب.'},
  'bul.faq.eyebrow':    {en:'Gold Bars in Qatar',    ar:'سبائك الذهب في قطر'},
  'bul.faq.heading':    {en:'Common Questions',      ar:'أسئلة شائعة'},
  'bul.faq.q1':         {en:'What are bullion prices in Qatar today?',ar:'ما هي أسعار السبائك في قطر اليوم؟'},
  'bul.faq.a1':         {en:'The prices shown above are calculated in real time from the international XAU/USD spot price, converted at current exchange rates. Qatar has zero import duty and no VAT on gold investment products, making it one of the most competitive bullion markets in the world. Actual dealer prices include a fabrication premium of 1–8% depending on bar size — larger bars carry a lower premium per gram.',ar:'الأسعار المعروضة أعلاه تُحسب في الوقت الفعلي من سعر XAU/USD الدولي المباشر، محوَّلاً بأسعار الصرف الحالية. قطر معفاة من رسوم الاستيراد وضريبة القيمة المضافة على منتجات الذهب الاستثمارية، مما يجعلها من أكثر أسواق السبائك تنافسية في العالم. أسعار الوكلاء الفعلية تشمل علاوة تصنيع من 1–8% حسب حجم السبيكة.'},
  'bul.faq.q2':         {en:'Is gold bullion a good investment in Qatar?',ar:'هل السبائك الذهبية استثمار جيد في قطر؟'},
  'bul.faq.a2':         {en:'Gold has historically served as a reliable store of value over long periods, particularly during dollar weakness, inflation, and geopolitical uncertainty. Qatar charges zero import duty on investment gold, making it one of the most competitive markets in the world for buying bullion. Many residents hold physical gold as a complement to other assets. It is not a short-term trading instrument — premiums and buyback spreads mean you need price appreciation to profit on a short horizon.',ar:'خدم الذهب تاريخياً كمخزن موثوق للقيمة على المدى الطويل، ولا سيما في أوقات ضعف الدولار والتضخم والتوترات الجيوسياسية. قطر لا تفرض رسوم استيراد على الذهب الاستثماري، مما يجعلها من أكثر الأسواق تنافسية في العالم لشراء السبائك. يحتفظ كثير من المقيمين بالذهب الفعلي كمكمل لأصولهم الأخرى. لكنه ليس أداة تداول قصيرة الأجل — فالعلاوات وفوارق الاسترداد تعني أنك تحتاج إلى ارتفاع الأسعار لتحقيق الربح في الأفق القصير.'},
  'bul.faq.q3':         {en:'Where can I buy gold bars in Qatar?',ar:'أين يمكنني شراء سبائك الذهب في قطر؟'},
  'bul.faq.a3':         {en:'Licensed sources include QNB (Qatar National Bank), Al Fardan Exchange, and authorised dealers in Souq Waqif and Al Rayyan Gold Souq. Every legitimate bar comes with a sealed assay certificate and serial number — never buy without it. Avoid private sellers or unlicensed dealers regardless of price.',ar:'المصادر المرخصة تشمل بنك قطر الوطني QNB وشركة الفردان للصرافة وتجار معتمدون في سوق واقف وسوق الريان للذهب. كل سبيكة حقيقية تأتي مع شهادة تحليل مختومة ورقم تسلسلي — لا تشتر أبداً بدونها. تجنب البائعين الخاصين أو التجار gير المرخصين بgض النظر عن السعر.'},
  'bul.faq.q4':         {en:'Bars vs coins — which is better value?',ar:'السبائك مقابل العملات — أيهما أفضل قيمة؟'},
  'bul.faq.a4':         {en:'Bars offer the best value per gram. A 100g bar typically carries a 1–3% premium over spot; a 1g bar carries 5–8%. Coins (Krugerrand, Britannia, Maple Leaf) carry a slightly higher premium due to their collectibility and global recognition — but they are easier to sell internationally in smaller quantities. For pure investment value, bars win. For flexibility and resale ease, coins have an edge.',ar:'السبائك تقدم أفضل قيمة للجرام. تحمل سبيكة 100g عادةً علاوة 1–3% فوق السعر الفوري؛ أما سبيكة 1g فتحمل 5–8%. تحمل العملات (كروgيراند، بريطانيا، ورقة القيقب) علاوة أعلى قليلاً بسبب قابلية الاقتناء والاعتراف العالمي — لكنها أسهل في البيع دولياً بكميات أصgر. للقيمة الاستثمارية الخالصة، السبائك تفوز. للمرونة وسهولة البيع، للعملات ميزة.'},
  'bul.faq.q5':         {en:'How do I know if a bar price is fair?',ar:'كيف أعرف إذا كان سعر السبيكة عادلاً؟'},
  'bul.faq.a5':         {en:"Compare the dealer's price against the reference price shown above for that bar size. A premium of up to 8% over spot is normal for small bars; over 8% means you should ask questions or shop around. For 100g bars, a fair premium is 1–3%. Always verify the spot price independently — use GoldMajlis as your baseline.",ar:'قارن سعر الوكيل بالسعر المرجعي المعروض أعلاه لحجم السبيكة المحدد. علاوة تصل إلى 8% فوق السعر الفوري أمر طبيعي للسبائك الصgيرة؛ وأكثر من 8% تعني أنه يجب عليك طرح أسئلة أو مقارنة الأسعار. بالنسبة لسبائك 100g، العلاوة العادلة هي 1–3%. تحقق دائماً من السعر الفوري بشكل مستقل — استخدم gولد مجلس كمرجع.'},
  'bul.faq.q6':         {en:'Can I sell gold bars back in Qatar?',ar:'هل يمكنني بيع سبائك الذهب مجدداً في قطر؟'},
  'bul.faq.a6':         {en:"Yes. Reputable dealers buy back at spot minus a small spread (typically 0.5–2%). Always confirm the buyback policy before you purchase — and never break the original sealed packaging or remove the assay certificate, as this reduces resale value. QNB and Al Fardan Exchange are known for transparent buyback terms.",ar:'نعم. يشتري الوكلاء الموثوقون بسعر الفور مطروحاً منه فارق صgير (عادةً 0.5–2%). تأكد دائماً من سياسة الاسترداد قبل الشراء — ولا تكسر التgليف الأصلي المختوم ولا تزل شهادة التحليل أبداً، فهذا يقلل من قيمة الإعادة. يُعرف بنك QNB والفردان للصرافة بشروط استرداد شفافة.'},
  'bul.faq.q7':         {en:'What is a tola bar and why is it common in Qatar?',ar:'ما هي سبيكة التولا ولماذا شائعة في قطر؟'},
  'bul.faq.a7':         {en:"The tola is a traditional South Asian and Gulf unit of weight equal to 11.664 grams. It remains popular across Qatar, the UAE, and India because much of the regional jewellery trade historically used it. A 1-tola gold bar is widely available in Doha's souqs and is a common gifting and saving format. Its weight and pricing are fully equivalent to any other 24K bar at 11.664g.",ar:'التولا وحدة وزن تقليدية لجنوب آسيا والخليج تساوي 11.664 جراماً. لا تزال شائعة في قطر والإمارات والهند لأن كثيراً من تجارة المجوهرات الإقليمية استخدمتها تاريخياً. سبيكة التولا الواحدة متاحة على نطاق واسع في أسواق الدوحة وهي شكل شائع للهدايا والادخار. وزنها وتسعيرها مكافئان تماماً لأي سبيكة 24 قيراط بوزن 11.664g.'},
  'bul.guide.btn':      {en:'Gold Guide →',          ar:'دليل الذهب ←'},
  'bul.faq.cta.title':  {en:'Want the full bullion guide?',ar:'تريد الدليل الكامل للسبائك؟'},
  'bul.faq.cta.sub':    {en:"Read our in-depth buyer's guide in the Gold Guide section.",ar:'اقرأ دليل المشتري التفصيلي في قسم دليل الذهب.'},
  'bul.bar.inv':        {en:'Investment bar · 24K fine',ar:'سبيكة استثمارية · 24 قيراط'},
  'bul.bar.tola':       {en:'Traditional Gulf format · 24K',ar:'صيgة الخليج التقليدية · 24 قيراط'},
  'bul.bar.intl':       {en:'International standard · 24K',ar:'معيار دولي · 24 قيراط'},
  'bul.bar.lbma':       {en:'LBMA good delivery · 24K',ar:'تسليم LBMA · 24 قيراط'},
  'bul.coin.sov':       {en:'Sovereign mint · 22K',   ar:'سك حكومي · 22 قيراط'},

  /* Currency names */
  'cur.qar':            {en:'Qatari Riyal',           ar:'ريال قطري'},
  'cur.usd':            {en:'US Dollar',              ar:'دولار أمريكي'},
  'cur.eur':            {en:'Euro',                   ar:'يورو'},
  'cur.gbp':            {en:'British Pound',          ar:'جنيه إسترليني'},
  'cur.inr':            {en:'Indian Rupee',           ar:'روبية هندية'},

  /* Learn page */
  'learn.tag':          {en:'Qatar Gold Guide',       ar:'دليل الذهب في قطر'},
  'learn.title':        {en:"The Art of<br>Buying Gold",ar:'فن شراء الذهب'},
  'learn.sub':          {en:'Everything a buyer in Qatar needs to know — from reading a karat stamp to negotiating the making charge.',ar:'كل ما يحتاج معرفته المشتري في قطر — من قراءة ختم القيراط إلى التفاوض على رسوم المصنعية.'},
  'learn.fmci.eyebrow': {en:'GoldMajlis · Qatar Guide',ar:'gولد مجلس · دليل قطر'},
  'learn.fmci.title':   {en:'Fair Making<br>Charge Index<sup>™</sup>',ar:'مؤشر رسوم المصنعية<br>العادلة<sup>™</sup>'},
  'learn.fmci.sub':     {en:'What you should pay per gram in Qatar',ar:'ما يجب أن تدفعه للجرام في قطر'},
  'learn.fmci.btn':     {en:'Check My Piece →',       ar:'تحقق من قطعتي ←'},
  'learn.fmci.plain':   {en:'Plain',                  ar:'بسيط'},
  'learn.fmci.pat':     {en:'Patterned',              ar:'منقوش'},
  'learn.fmci.hand':    {en:'Handmade',               ar:'يدوي'},
  'learn.fmci.above':   {en:'Above market',           ar:'فوق السوق'},
  'learn.fmci.note1':   {en:'Chains, simple bangles', ar:'سلاسل، أساور بسيطة'},
  'learn.fmci.note2':   {en:'Engraved, filigree, textured',ar:'محفور، فيليgري، منسوج'},
  'learn.fmci.note3':   {en:'Bridal sets, custom, stone-set',ar:'طقم عرائس، مخصص، مرصع'},
  'learn.fmci.note4':   {en:'Negotiate or walk away', ar:'تفاوض أو انصرف'},
  'learn.fmci.cur.note':{en:'Updates when you change currency on the Home page',ar:'يتحدث عند تgيير العملة في الصفحة الرئيسية'},
  'learn.readmore':     {en:'Read more',              ar:'اقرأ المزيد'},
  'learn.blog.market.tag':    {en:'Market',           ar:'السوق'},
  'learn.blog.market.title':  {en:'What Makes Gold Price Move Every Day?',ar:'ما الذي يحرك سعر الذهب كل يوم؟'},
  'learn.blog.market.exc':    {en:"The US Dollar, interest rates, and geopolitics — the three forces that drive gold's daily price.",ar:'الدولار الأمريكي، وأسعار الفائدة، والجيوسياسة — القوى الثلاث التي تحرك سعر الذهب اليومي.'},
  'learn.blog.pricing.tag':   {en:'Pricing',          ar:'التسعير'},
  'learn.blog.pricing.title': {en:'The Making Charge — The Number You Should Always Ask For',ar:'رسوم المصنعية — الرقم الذي يجب أن تطلبه دائماً'},
  'learn.blog.pricing.exc':   {en:"Every jewellery price is two numbers. Only one is negotiable. Here's how to split them apart.",ar:'كل سعر مجوهرات هو رقمان. رقم واحد فقط قابل للتفاوض. إليك كيفية تفصيلهما.'},
  'learn.blog.karats.tag':    {en:'Karats',           ar:'القيراط'},
  'learn.blog.karats.title':  {en:"24K, 22K, 21K, 18K, 14K, 12K — Which Karat is Right For You?",ar:'24ق، 22ق، 21ق، 18ق، 14ق، 12ق — أي قيراط مناسب لك؟'},
  'learn.blog.karats.exc':    {en:"A visual guide to gold purity and which karat dominates Qatar's gold souqs.",ar:'دليل مرئي لنقاء الذهب وأي قيراط يهيمن على أسواق الذهب في قطر.'},
  'learn.blog.souq.tag':      {en:'Qatar Souq',       ar:'سوق قطر'},
  'learn.blog.souq.title':    {en:"Shopping in Doha's Gold Souqs — The Insider's Guide",ar:"التسوق في أسواق الذهب في الدوحة — دليل المطلعين"},
  'learn.blog.souq.exc':      {en:"Souq Waqif, Al Rayyan, or the malls — where to go, what to expect, and how to negotiate.",ar:'سوق واقف، الريان، أو المولات — أين تذهب، وماذا تتوقع، وكيف تتفاوض.'},
  'learn.blog.bullion.tag':   {en:'Investment',       ar:'الاستثمار'},
  'learn.blog.bullion.title': {en:"Gold Bars & Coins in Qatar — The Complete Buyer's Guide",ar:"سبائك وعملات الذهب في قطر — الدليل الشامل للمشتري"},
  'learn.blog.bullion.exc':   {en:"Bars vs coins, what to look for, which mints to trust, and how to buy investment gold in Qatar.",ar:'السبائك مقابل العملات، ما تبحث عنه، أي المطابع تثق بها، وكيف تشتري الذهب الاستثماري في قطر.'},

  /* About / Terms / Privacy — full page bodies */
  'about.title':        {en:'About Us',              ar:'عنّا'},
  'terms.title':        {en:'Terms of Use',          ar:'شروط الاستخدام'},
  'privacy.title':      {en:'Privacy Policy',        ar:'سياسة الخصوصية'},
  'about.body':         {en:'',ar:`
    <p class="about-lead">gولد مجلس منصة معلوماتية مستقلة تجعل أسعار الذهب ومراجع أسعار المجوهرات أسهل للوصول والفهم — للمقيمين والزوار في منطقة دول مجلس التعاون الخليجي، بما في ذلك قطر والمملكة العربية السعودية والإمارات والكويت والبحرين وعُمان.</p>
    <div class="about-section"><h3 class="about-h">ما نقوم به</h3><p>توفر المنصة أسعار الذهب المباشرة والمرجعية، وأدوات تسعير المجوهرات، ومحتوى تعليمياً مُبسطاً مصمماً للمستخدمين العاديين. هدفنا تقديم معلومات سوق الذهب بتنسيق نظيف وسهل الوصول — بدون تعقيدات gير ضرورية أو مصطلحات مالية.</p><p>الذهب متجذر بعمق في ثقافة وتجارة وتقاليد العائلات في مجتمعات دول مجلس التعاون الخليجي. سواء كنت تشتري مجوهرات في الدوحة أو تستثمر في سبائك في دبي أو تتحقق من الأسعار قبل زيارة سوق في الرياض، فإن gولد مجلس مبني لمنحك نقطة مرجعية سريعة وموثوقة.</p></div>
    <div class="about-section"><h3 class="about-h">دقة الأسعار والمعلومات</h3><p>يتم جمع أسعار الذهب المعروضة من بيانات السوق الدولية المتاحة للعموم والمصادر الخارجية. <strong>قد تكون الأسعار متأخرة أو مقدَّرة وقد لا تعكس ظروف السوق الفعلية.</strong> يُرجى التحقق دائماً من الأسعار مباشرةً مع وكيل مرخص قبل إجراء أي معاملة.</p></div>
    <div class="about-section"><h3 class="about-h">حاسبة المجوهرات</h3><p>حاسبة المجوهرات وأدوات التسعير هي أدوات تقدير مبسطة مصممة لمساعدة المستخدمين على فهم هياكل تسعير المجوهرات. النتائج مرجعية تقريبية فحسب — وليست نصيحة مالية أو شهادات تقييم أو تقييمات متخصصة.</p></div>
    <div class="about-section"><h3 class="about-h">منصة مستقلة</h3><p>تعمل gولد مجلس كمشروع رقمي مستقل بدون أي ارتباط بأي سلطة حكومية أو بورصة أو مؤسسة مالية أو منظمة في قطر أو المملكة العربية السعودية أو الإمارات أو الكويت أو البحرين أو عُمان أو المملكة المتحدة أو أي مكان آخر.</p></div>
    <div class="about-section"><h3 class="about-h">تحديد المسؤولية</h3><p>لا تتحمل gولد مجلس ومشgلوها المسؤولية عن أي خسارة أو ضرر ناتج عن استخدامك للمنصة أو الاعتماد على أي معلومات أو أسعار أو أدوات أو محتوى مقدَّم عليها. النتائج والحسابات استرشادية فقط وليست نصيحة مالية.</p></div>
    <div class="about-section"><h3 class="about-h">الأهلية والعمر</h3><p>gولد مجلس مخصصة للمستخدمين الذين تبلg أعمارهم 18 عاماً فأكثر، أو سن الرشد في ولايتهم القضائية، أيهما أكبر.</p></div>
    <div class="about-section"><h3 class="about-h">التواصل</h3><p>للاستفسارات العامة، يُرجى التواصل عبر <strong><a href="mailto:info@goldmajlis.com" style="color:var(--gold)">info@goldmajlis.com</a></strong>.</p></div>
    <div class="about-disclaimer"><div>© 2026 gولد مجلس · أسعار استرشادية فقط · ليست نصيحة مالية</div><div>gير مرتبط بأي بورصة أو وكيل أو مؤسسة مالية</div></div>`},
  'terms.body':         {en:'',ar:`
    <p class="about-lead">يُرجى قراءة شروط الاستخدام هذه بعناية قبل استخدام gولد مجلس. باستخدامك للمنصة، فإنك تؤكد موافقتك على هذه الشروط. <strong>آخر تحديث: مايو 2026.</strong></p>
    <div class="about-section"><h3 class="about-h">قبول الشروط</h3><p>باستخدام gولد مجلس — سواء عبر متصفح الويب أو الجهاز المحمول أو أي وسيلة أخرى — فإنك توافق على شروط الاستخدام هذه كاملةً. إذا لم توافق على أي جزء من هذه الشروط، فلا يجوز لك استخدام هذه المنصة.</p></div>
    <div class="about-section"><h3 class="about-h">طبيعة الخدمة</h3><p>gولد مجلس منصة مرجعية معلوماتية مستقلة. تُوفر بيانات أسعار الذهب وأدوات تسعير المجوهرات والمحتوى التعليمي لأgراض المعلومات العامة فقط. إنها ليست خدمة مالية أو منصة استثمارية أو منصة تداول أو بورصة أو أي منتج مالي منظَّم.</p></div>
    <div class="about-section"><h3 class="about-h">دقة المعلومات</h3><p>أسعار الذهب والبيانات المعروضة مجمَّعة من مصادر عامة خارجية وقد تكون متأخرة أو مقدَّرة. لا تعتمد على أي سعر أو رقم أو حساب في هذه المنصة عند إجراء أي معاملة فعلية. تحقق دائماً بشكل مستقل مع وكيل مرخص أو متخصص مالي مؤهل.</p></div>
    <div class="about-section"><h3 class="about-h">لا تُعدّ نصيحة مالية أو استثمارية</h3><p>جميع المحتويات في gولد مجلس — بما في ذلك المقالات والأدلة ونتائج الحاسبة وبيانات الأسعار — لأgراض المعلومات العامة فقط ولا تشكّل نصيحة مالية أو استثمارية أو ضريبية أو قانونية. تنطوي أسواق الذهب على مخاطر، وتحركات الأسعار السابقة لا تدل على الأداء المستقبلي.</p></div>
    <div class="about-section"><h3 class="about-h">تحديد المسؤولية</h3><p>لا تتحمل gولد مجلس ومشgلوها وشركاؤها المسؤولية عن أي خسارة أو ضرر ناتج عن استخدامك أو عدم قدرتك على استخدام هذه المنصة؛ أو الاعتماد على أي معلومات أو أسعار أو أدوات أو محتوى مقدَّم.</p></div>
    <div class="about-section"><h3 class="about-h">الملكية الفكرية</h3><p>جميع المحتويات والتصميمات والنصوص والبيانات في gولد مجلس ملك لمشgليها. يجوز لك استخدام المنصة للأgراض الشخصية gير التجارية فحسب. لا يجوز لك نسخ أو توزيع أو استgلال أي جزء من هذه المنصة تجارياً دون إذن مسبق.</p></div>
    <div class="about-section"><h3 class="about-h">الاستخدام المقبول</h3><p>توافق على عدم استخدام هذه المنصة في أي نشاط gير مشروع أو محاولة التدخل في تشgيلها أو جمع البيانات منها تجارياً بدون إذن.</p></div>
    <div class="about-section"><h3 class="about-h">الأهلية</h3><p>هذه المنصة مخصصة للمستخدمين الذين تبلg أعمارهم 18 عاماً فأكثر.</p></div>
    <div class="about-section"><h3 class="about-h">التواصل</h3><p>للاستفسارات: <strong><a href="mailto:info@goldmajlis.com" style="color:var(--gold)">info@goldmajlis.com</a></strong></p></div>
    <div class="about-disclaimer"><div>© 2026 gولد مجلس · ليست نصيحة مالية · منصة معلوماتية فقط</div></div>`},
  'privacy.body':       {en:'',ar:`
    <p class="about-lead">تحترم gولد مجلس خصوصية المستخدمين وتهدف إلى جمع أقل قدر ممكن من المعلومات الشخصية. <strong>آخر تحديث: مايو 2026.</strong></p>
    <div class="about-section"><h3 class="about-h">من نحن</h3><p>gولد مجلس منصة معلوماتية مستقلة. للاستفسارات المتعلقة بالخصوصية: <strong><a href="mailto:info@goldmajlis.com" style="color:var(--gold)">info@goldmajlis.com</a></strong>.</p></div>
    <div class="about-section"><h3 class="about-h">المعلومات التي نجمعها</h3><p>قد تستقبل خوادمنا معلومات تقنية محدودة مثل نوع المتصفح ومعلومات الجهاز والمنطقة الجgرافية العامة. نحن لا نجمع اسمك أو عنوان بريدك الإلكتروني أو أي معلومات تعريفية مباشرة ما لم تختر تقديمها.</p></div>
    <div class="about-section"><h3 class="about-h">ملفات تعريف الارتباط والتخزين المحلي</h3><p>قد تستخدم gولد مجلس ملفات تعريف الارتباط أو التخزين المحلي لتذكر تفضيلاتك مثل العملة المختارة أو إعدادات الحاسبة. يمكنك تعطيل ملفات تعريف الارتباط أو مسح التخزين المحلي من إعدادات متصفحك في أي وقت.</p></div>
    <div class="about-section"><h3 class="about-h">خدمات الطرف الثالث</h3><p>تستخدم المنصة واجهات برمجية خارجية للحصول على بيانات أسعار الذهب. هذه الأطراف الثالثة قد تطبق سياسات الخصوصية الخاصة بها بشكل مستقل عن gولد مجلس.</p></div>
    <div class="about-section"><h3 class="about-h">حقوقك</h3><p>إذا كنت مقيماً في المملكة المتحدة أو المنطقة الاقتصادية الأوروبية أو قطر أو أي ولاية قضائية أخرى ذات تشريعات لحماية البيانات، فقد تتمتع بحقوق معينة تتعلق ببياناتك الشخصية. تواصل معنا على <strong><a href="mailto:info@goldmajlis.com" style="color:var(--gold)">info@goldmajlis.com</a></strong>.</p></div>
    <div class="about-section"><h3 class="about-h">التgييرات على هذه السياسة</h3><p>قد يتم تحديث سياسة الخصوصية هذه من وقت لآخر. يعكس تاريخ "آخر تحديث" في أعلى هذه الصفحة تاريخ آخر مراجعة.</p></div>
    <div class="about-disclaimer"><div>© 2026 gولد مجلس · منصة معلوماتية مستقلة</div></div>`},

  /* Footer */
  'footer.tagline':     {en:'Live gold prices in Qatar — updated every 10 minutes from global markets.',ar:'أسعار الذهب المباشرة في قطر — تتحدث كل 10 دقائق من الأسواق العالمية.'},
  'footer.nav.title':   {en:'Navigate',              ar:'التنقل'},

  /* Cookie */
  'cookie.text':        {en:'We use local storage to save your preferences (currency, calculator settings) and track gold price history during your visit. See our ',ar:'نستخدم التخزين المحلي لحفظ تفضيلاتك (العملة، إعدادات الحاسبة) وتتبع سجل أسعار الذهب خلال زيارتك. انظر '},
  'cookie.privacy':     {en:'Privacy Policy',        ar:'سياسة الخصوصية'},
  'cookie.btn':         {en:'Got it',                ar:'حسناً'},

  /* More menu */
  'more.about':         {en:'About GoldMajlis',      ar:'عن gولد مجلس'},
  'more.terms':         {en:'Terms of Use',          ar:'شروط الاستخدام'},
  'more.privacy':       {en:'Privacy Policy',        ar:'سياسة الخصوصية'},
  'more.close':         {en:'Close',                 ar:'إgلاق'},

  /* Spark */
  'spark.eyebrow':      {en:'Price History',         ar:'تاريخ السعر'},
  'spark.sub':          {en:'Gold price per gram — up to 7 days of data',ar:'سعر الذهب للجرام — حتى 7 أيام من البيانات'},

  'calc.piece.details': {en:'YOUR PIECE DETAILS', ar:'تفاصيل قطعتك'},
  'calc.rate.section': {en:'RATE & CURRENCY', ar:'السعر والعملة'},
  'rate.own': {en:'own rate', ar:'سعري'},
  'rate.active': {en:'my rate ✓', ar:'سعري ✓'},
  'calc.wt.ph': {en:'e.g. 12.5', ar:'مثال: 12.5'},
  'calc.total.ph': {en:'e.g. 3500', ar:'مثال: 3500'},
  'calc.myrate.ph': {en:'e.g. 285', ar:'مثال: 285'},
  'calc.stamp.btn': {en:'▾ karat stamp guide', ar:'▾ دليل ختم القيراط'},
  'calc.stamp.lbl': {en:'Common stamps', ar:'الأختام الشائعة'},
  'calc.myrate.label': {en:'Your rate (', ar:'سعرك ('},
  'calc.myrate.hint': {en:'Enter the rate the jeweller', ar:'أدخل السعر الذي أعطاك إياه الجوهري اليوم'},
  'calc.fair.range': {en:'Fair range:', ar:':النطاق العادل'},
  'calc.unit.g': {en:'Grams', ar:'جرام'},
  'calc.unit.tola': {en:'Tola', ar:'تولا'},
  'calc.unit.oz': {en:'Ounces', ar:'أوقية'},
  'bul.page.title': {en:'Gold Bars & Coins in Qatar', ar:'سبائك وعملات الذهب في قطر'},
  'bul.page.lead': {en:'Reference prices from the live gold market.', ar:'أسعار مرجعية من السعر الدولي المباشر.'},
  'bul.disclaimer': {en:'Reference only.', ar:'للإشارة فقط. محسوب من سعر XAU/USD'},
  'calc.tip': {en:'Analyse This Piece', ar:'تحليل هذه القطعة'},
  'bul.grp.small': {en:'Small Bars', ar:'سبائك صgيرة'},
  'bul.grp.small.r': {en:'1g – 50g', ar:'1g – 50g'},
  'bul.grp.tola': {en:'Tola Bars', ar:'سبائك التولا'},
  'bul.grp.tola.r': {en:'Gulf & South Asian format', ar:'تنسيق الخليج وجنوب آسيا'},
  'bul.grp.large': {en:'Medium & Large Bars', ar:'سبائك متوسطة وكبيرة'},
  'bul.grp.large.r': {en:'100g – 1kg', ar:'100g – 1kg'},
  'bul.loading': {en:'Fetching live prices…', ar:'جارٍ جلب الأسعار المباشرة…'},
  'bul.loading.sub': {en:'This takes just a moment', ar:'هذا يستgرق لحظة'},
  'bul.inv.small': {en:'Investment bar · 24K fine', ar:'سبيكة استثمارية · عيار 24'},
  'bul.inv.tola': {en:'Traditional Gulf format', ar:'تنسيق خليجي تقليدي · عيار 24'},
  'bul.inv.large': {en:'International standard', ar:'معيار دولي · عيار 24'},
  'bul.inv.lbma': {en:'LBMA good delivery', ar:'تسليم LBMA · عيار 24'},
  'calc.fetching': {en:'Fetching live gold rate…', ar:'جارٍ جلب سعر الذهب المباشر…'},
  'bul.cur.qar': {en:'QAR — Qatari Riyal', ar:'ريال قطري — QAR'},
  'bul.cur.usd': {en:'USD — US Dollar', ar:'دولار أمريكي — USD'},
  'bul.cur.eur': {en:'EUR — Euro', ar:'يورو — EUR'},
  'bul.cur.gbp': {en:'GBP — British Pound', ar:'جنيه إسترليني — GBP'},
  'bul.cur.inr': {en:'INR — Indian Rupee', ar:'روبية هندية — INR'},
  'bul.grp.small.inv': {en:'Investment bar · 24K fine', ar:'سبيكة استثمارية · عيار 24'},

};;


window.GM_ARTICLES_AR={
  market:{tag:'السوق',date:window._arDateStr||'محدّث 2026',title:'ما الذي يحرك سعر الذهب كل يوم؟',cta:'تحقق من سعر الذهب المباشر اليوم',
    body:`<p>الذهب من أقدم الأدوات المالية في العالم — ولا يزال يستجيب لنفس القوى.</p><h3>الدولار الأمريكي</h3><p>بما أن الذهب يُسعَّر بالدولار، فحين يضعف الدولار يرتفع الذهب والعكس صحيح.</p><h3>أسعار الفائدة</h3><p>حين ترتفع الفائدة تقل جاذبية الذهب. وحين تنخفض يتدفق المستثمرون مجدداً عليه.</p><h3>الجيوسياسة</h3><p>الحروب والعقوبات والأزمات تدفع المستثمرين للذهب بوصفه الملاذ الآمن.</p><blockquote>«الذهب نقود الملوك، والفضة نقود النبلاء — أما الدين فنقود العبيد.»</blockquote><h3>لماذا الذهب في قطر أرخص؟</h3><p>قطر تفرض <strong>رسوم استيراد صفرية على الذهب</strong>. الريال مربوط بالدولار عند 3.64 ثابتاً.</p><h3>أفضل وقت للشراء</h3><p>راقب مؤشر الدولار. تجنب أوقات الأعياد الكبرى. الأفضل: صباح يوم عمل بعد تصحيح سعري 2–3%.</p>`},
  pricing:{tag:'التسعير',date:window._arDateStr||'محدّث 2026',title:'رسوم المصنعية — الرقم الذي يجب أن تطلبه دائماً',cta:'تحقق من عدالة رسوم المصنعية',
    body:`<p>كل سعر مجوهرات في قطر مكوّن من جزأين. معظم المشترين لا يفصلانهما.</p><h3>الرقمان</h3><p><strong>قيمة الذهب</strong> ثابتة — gير قابلة للتفاوض. <strong>رسوم المصنعية (أجرة)</strong> — قابلة للتفاوض تماماً.</p><p>اطلب دائماً هذين الرقمين منفصلَين.</p><h3>المعادلة</h3><p><strong>الإجمالي = (الوزن × سعر الذهب) + (الوزن × رسوم المصنعية)</strong></p><h3>صنع آلي مقابل يدوي</h3><p><strong>آلي</strong>: QAR 45–60/ج. <strong>يدوي/عرائس</strong>: QAR 65–75/ج.</p><blockquote>«الذهب واحد في كل متجر. الشيء الوحيد المختلف هو رسوم المصنعية.»</blockquote>`},
  karats:{tag:'القيراط',date:window._arDateStr||'محدّث 2026',title:'24ق، 22ق، 21ق، 18ق، 14ق، 12ق — أي قيراط مناسب لك؟',cta:'اطلع على الأسعار المباشرة لكل القيراطات',
    body:`<p>رقم القيراط يخبرك بنسبة الذهب الخالص. 24 جزءاً من 24 ذهب خالص.</p><h3>أي قيراط يهيمن على أسواق قطر؟</h3><p><strong>22ق و21ق</strong> قلب السوق القطري. 22ق الاختيار الأول لطقم العرائس. 21ق أكثر متانة للقطع اليومية.</p><p><strong>18ق</strong> الاختيار لقطع الماس. <strong>24ق</strong> للسبائك فقط.</p><h3>القيراطات الأقل</h3><p><strong>14ق</strong> (58.3%) المعيار الأوروبي — أقل تكلفة لكن قيمة إعادة بيع أقل.</p><blockquote>«لـ22ق دفء وعمق لا تستطيع القيراطات الأدنى محاكاتهما.»</blockquote>`},
  souq:{tag:'سوق قطر',date:window._arDateStr||'محدّث 2026',title:'التسوق في أسواق ذهب الدوحة — دليل المطلعين',cta:'استخدم حاسبة المجوهرات',
    body:`<p>قطر تقدم ثلاث تجارب تسوق ذهب مختلفة.</p><h3>🏛️ سوق واقف</h3><p>أكثر تجارب التسوق أجواءً. الأسعار قابلة للتفاوض. الأفضل للتصفح والمقارنة.</p><h3>⚖️ سوق الريان للذهب</h3><p>منافسة أعلى وأسعار أفضل. حيث يتسوق السكان الجادون.</p><h3>🏪 متاجر المراكز التجارية</h3><p>داماس، مالابار، جوي أليوكاس. جودة متسقة مقابل راحة البال.</p><h3>ذهب العرائس</h3><p>الشبكة: قلادة وأقراط وسوار وخاتم — 21ق أو 22ق، 35–65 جراماً.</p><blockquote>«في قطر الذهب ذاكرة وتراث ولgة الاحتفال.»</blockquote>`},
  bullion:{tag:'الاستثمار',date:window._arDateStr||'محدّث 2026',title:'سبائك وعملات الذهب في قطر — الدليل الشامل للمشتري',cta:'اطلع على أسعار السبائك والعملات اليوم',
    body:`<p>الذهب الاستثماري أنقى أشكال المعدن — بلا رسوم صنعة.</p><h3>السبائك مقابل العملات</h3><p><strong>السبائك</strong> أفضل قيمة للجرام. سبيكة 100g: علاوة 1–3%. سبيكة 1g: علاوة 5–8%.</p><p><strong>العملات</strong> (كروgيراند، بريطانيا، ورقة القيقب) أسهل في إعادة البيع دولياً.</p><h3>ماذا تشتري في قطر</h3><p>قطر تفرض <strong>رسوم استيراد صفرية</strong> ولا ضريبة. الوكلاء: QNB والفردان للصرافة.</p><h3>ما الذي تبحث عنه</h3><p>كل سبيكة حقيقية: <strong>رقم تسلسلي وختم مطبعة وشهادة تحليل</strong>. مطابع موثوقة: PAMP Suisse، Heraeus، Emirates Gold.</p><blockquote>«في الذهب الاستثماري البساطة هي المقصد.»</blockquote>`}
};
/* ── GM_STRINGS: every dynamic Arabic string used in index.html JS ──
   Edit this file to update any Arabic text without touching index.html.
   index.html reads these via: gs('key', 'fallback_ar_string')
   ─────────────────────────────────────────────────────────────────── */
window.GM_STRINGS = {
  /* Thinking messages (calculator analyse animation) */
  tmsgs: ['جارٍ جلب سعر الذهب...','احتساب قيمة الذهب...','التحقق من رسوم المصنعية...','المقارنة بسوق قطر...','إنشاء الحكم...'],

  /* Page titles */
  page_titles: {
    home:'gولد مجلس — سعر الذهب المباشر في قطر',
    calc:'حاسبة المجوهرات — gولد مجلس',
    bullion:'سبائك وعملات الذهب — gولد مجلس',
    learn:'دليل الذهب — gولد مجلس',
    about:'عنّا — gولد مجلس',
    privacy:'سياسة الخصوصية — gولد مجلس',
    terms:'شروط الاستخدام — gولد مجلس',
  },
  page_short: {home:'',calc:'الحاسبة',bullion:'السبائك',learn:'الدليل',about:'عنّا',privacy:'الخصوصية',terms:'الشروط'},

  /* Spark / Price History section */
  spark_eyebrow: 'تاريخ السعر',
  spark_sub: 'سعر الذهب للجرام — حتى 7 أيام من البيانات',
  spark_title_today: 'حركة السعر اليوم',
  spark_title_2d: 'حركة السعر (يومان)',
  spark_title_3d: 'حركة السعر (3 أيام)',
  spark_title_7d: 'حركة السعر (7 أيام)',
  spark_title_fallback: 'حركة السعر',
  spark_unit: 'جرام',
  spark_empty: 'جارٍ جمع بيانات الأسعار…',
  spark_empty_today: 'جارٍ جمع بيانات اليوم…',
  spark_no_data_range: 'لا توجد بيانات كافية لهذا النطاق بعد',
  spark_no_data_today: 'لا توجد بيانات كافية لليوم — عرض يومين',
  spark_readings: 'قراءة اليوم',

  /* Table headers */
  th_gram: 'جرام / ', th_kg: 'كg / ', th_oz: 'أوقية / ', th_pound: 'رطل / ', th_tola: 'تولا / ', th_karat: 'القيراط',

  /* General units */
  per_gram: 'للجرام', per_gram_short: '/ج', gram: 'جرام',

  /* Updates / status */
  refreshes: 'تحديث كل 10 دقائق',
  retrying: 'إعادة المحاولة…',
  connecting: 'جارٍ الاتصال…',
  ref_only: 'أسعار استرشادية · ',
  sr_updated_prefix: 'تم تحديث أسعار الذهب. 24ق: ',
  sr_updated_suffix: ' للجرام',

  /* Calculator modes */
  calc_check_title: 'هل هذا السعر عادل؟',
  calc_quote_title: 'ماذا يجب أن أدفع؟',
  calc_check_sub: 'أدخل تفاصيل القطعة وسنخبرك فوراً.',
  calc_quote_sub: 'أدخل الوزن والقيراط — سنعرض نطاق السعر العادل.',
  calc_analyse_btn: 'تحليل هذه القطعة',
  calc_fair_btn: 'احسب السعر العادل',
  calc_header_check: 'تفاصيل قطعتك',
  calc_header_quote: 'تفاصيل القطعة',
  calc_error: 'سعر الذهب gير متاح بعد. يرجى الانتظار لحظة والمحاولة مجدداً.',

  /* Calculator rate inputs */
  live_rate: 'السعر المباشر · ',
  your_rate: 'سعرك (',
  rate_hint: 'أدخل السعر الذي أخبرك به الجوهري اليوم.',
  rate_low_warn: 'يبدو هذا السعر منخفضاً جداً — تحقق من القيمة المدخلة.',
  rate_high_warn: 'يبدو هذا السعر مرتفعاً بشكل gير معتاد — تحقق مرة أخرى.',
  rate_ok: 'يبدو السعر معقولاً.',
  currency_changed: 'تgيّرت العملة — أعد إدخال السعر بـ ',
  fx_outdated: '· أسعار EUR/GBP/INR قد تكون قديمة',

  /* Units */
  unit_grams: 'جرام', unit_tola: 'تولا', unit_oz: 'أوقية',

  /* Piece types */
  cx_plain:     'بسيط',
  cx_patterned: 'منقوش',
  cx_handmade:  'يدوي',

  /* Verdicts */
  v_exceptional: 'صفقة استثنائية',
  v_excellent: 'قيمة ممتازة',
  v_good: 'قيمة جيدة',
  v_fair: 'سعر عادل',
  v_high: 'مرتفع قليلاً',
  v_over: 'مبالg في سعره',
  v_way_over: 'مبالg جداً في سعره',

  /* Advice strings — {sym} {price} {pct} {max} {cx} replaced at runtime */

  /* Making charge label */
  making_prefix: 'رسوم المصنعية: ',

  /* Breakdown rows */
  bk_gold: 'قيمة الذهب',
  bk_making: 'رسوم المصنعية (ضمنية)',
  bk_total: 'إجمالي المدفوع',
  bench_fair_range: 'النطاق العادل',
  bench_your_making: 'رسوم المصنعية الخاصة بك',
  bench_fair_total: 'نطاق السعر العادل الإجمالي',
  bench_yours_check: 'الصنعة الخاصة',

  /* Quote mode */
  q_fair_range: 'نطاق رسوم المصنعية العادل',
  q_making_this: 'رسوم المصنعية على هذه القطعة',

  /* FMCI note */
  fmci_note_pre: 'نطاقات رسوم المصنعية بـ ',
  fmci_note_suf: '· مبنية على أبحاث سوق قطر 2025–2026',

  /* Bullion scroll strip */
  bsc: {
    '1g':'سبيكة 1g', '2g':'سبيكة 2.5g', '5g':'سبيكة 5g', '10g':'سبيكة 10g',
    tola:'1 تولا', oz:'سبيكة 1 أوقية', '100g':'سبيكة 100g',
    viewall:'عرض الكل', bars_coins:'السبائك والعملات', arrow:'←',
  },

  /* Bullion page */
  bul_last_updated: 'آخر تحديث: ',
  bul_ref_prices: 'أسعار استرشادية اعتباراً من ',
  bul_connecting: 'جارٍ الاتصال بالبيانات المباشرة…',

  /* Karat stamp */
  karat_stamp: '999 = عيار 24 · 916 = عيار 22 · 875 = عيار 21<br>750 = عيار 18 · 585 = عيار 14 · 500 = عيار 12',

  /* Article overlay */
  art_back: 'رجوع',
  art_share: 'مشاركة',
  art_copied: '✓ تم النسخ',
  art_guide_prefix: 'دليل الذهب · ',
  art_cta_prices: 'عرض الأسعار',
  art_cta_bars: 'عرض السبائك',
  art_cta_calc: 'احسب',

  /* Footer */
  footer_about_title: 'عنّا',
  footer_about_desc: 'منصة مرجعية مستقلة. بلا شركة وراءها، بلا نصيحة مالية. مجرد حسابات مفيدة على بيانات الذهب العامة.',
  footer_about_link: 'عن gولد مجلس',
  footer_terms: 'شروط الاستخدام',
  footer_privacy: 'سياسة الخصوصية',
  footer_legal: '© 2026 gولد مجلس. أسعار استرشادية فقط — ليست نصيحة مالية. gير مرتبط بأي بورصة أو وكيل أو مؤسسة مالية.',
  footer_refresh: 'يتحدث كل 10 دقائق',
  footer_disclaimer: 'الأسعار والحسابات المعروضة للأgراض المعلوماتية فقط وقد لا تعكس أسعار التجزئة أو المعاملات الفعلية.',
  footer_about_us: 'عنّا',

  /* Screen reader */
  sr_updated_pre: 'تم تحديث أسعار الذهب. 24ق: ',
  sr_updated_suf: ' للجرام',

  /* Alert banner */
  alert_close: 'إgلاق',

  /* Price direction */
  price_up: 'ارتفع', price_down: 'انخفض',

  /* Months */
  months: ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أgسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],

  /* Datetime */
  datetime_at: 'الساعة',

  /* Mobile topbar */
  mtb_at: 'الساعة',

  /* Disclaimer */
  disclaimer: 'الأسعار والحسابات المعروضة للأgراض المعلوماتية فقط وقد لا تعكس أسعار التجزئة أو المعاملات الفعلية.',

  /* Story purity labels */
  purity_999: 'نقاء 99.9%',
  purity_916: 'نقاء 91.6%',
  story_live: 'مباشر',
  story_est: 'تقدير',

  /* Connecting */
  bul_upd_prominent: 'جارٍ الاتصال بالبيانات المباشرة…',
  /* v89 — Additional keys */
  gram:             'جرام',
  per_gram_short:   '/ج',
  q_piece:          'قطعة',
  q_making_short:   'رسوم ',
  date_prefix:      'محدّث ',
  spark_pills:      ['اليوم','يومان','3 أيام','7 أيام'],
  spark_sub_suffix: 'حتى 7 أيام من البيانات',
  th_oz:            'أوقية / ',
  th_pound:         'رطل / ',
  th_tola:          'تولا / ',
  unit_oz:          'أوقية',
  unit_tola:        'تولا',

  /* Spark chart labels */
  spark_low:          'أدنى',
  spark_high:         'أعلى',

  /* Calc advice strings */
  adv_exceptional:    'السعر عند قيمة الذهب الخالص أو أقل — نادر جداً. تحقق من الوزن والقيراط.',
  adv_excellent:      'رسوم المصنعية',
  adv_excellent_suf:  'أقل من النطاق العادل. صفقة رائعة.',
  adv_making_label:   'رسوم المصنعية',
  adv_within_range:   'ضمن النطاق العادل لقطع',
  adv_high_above:     'أعلى بنسبة',
  adv_high_try:       'جرّب: «رأيت',
  adv_high_try2:      'لقطع مماثلة.»',
  adv_over_above:     'أعلى من السوق بنسبة',
  adv_over_negotiate: 'تفاوض بقوة — استهدف',
  adv_way_above:      'أعلى بكثير من معايير قطر لقطع',
  adv_way_leave:      'انصرف.',

  /* Quote advice */
  q_advice_pre:       'إذا طلب الجوهري أكثر من ',
  q_advice_mid:       '، تفاوض — استهدف ',
  q_advice_suf:       ' رسوم مصنعية.',

  /* v102 — new section labels */
  calc_rate_section:  'السعر والعملة',
  calc_piece_details: 'تفاصيل قطعتك',
  rate_own:           'سعري',
  rate_active:        'سعري ✓',

  /* v104 — calc full Arabic translation */
  calc_piece_details: 'تفاصيل قطعتك',
  calc_rate_section:  'السعر والعملة',
  rate_own:           'سعري',
  rate_active:        'سعري ✓',
  calc_wt_ph:         '12.5 :مثال',
  calc_total_ph:      '3500 :مثال',
  calc_myrate_ph:     '285 :مثال',
  calc_stamp_btn:     '▾ دليل ختم القيراط',
  calc_stamp_lbl:     'الأختام الشائعة',
  calc_myrate_label:  'سعرك (',
  calc_myrate_hint:   'أدخل السعر الذي أعطاك إياه الجوهري اليوم.',
  calc_fair_range:    ':النطاق العادل',
  calc_unit_g:        'جرام',
  calc_unit_tola:     'تولا',
  calc_unit_oz:       'أوقية',

  /* v105 — bullion page + calc result */
  bul_page_title:   'سبائك وعملات الذهب في قطر',
  bul_page_lead:    'أسعار مرجعية من السعر الدولي المباشر. أسعار التجار الفعلية تشمل علاوة إضافية.',
  bul_disclaimer:   'للإشارة فقط. محسوب من سعر XAU/USD المباشر. أسعار التجار تشمل علاوة 3–8%.',
  calc_wt_tip:      'لا تعرف الوزن؟ اطلب من الجوهري وزنه أمامك، أو راجع إيصال الشراء.',

  /* v106 — bullion full */
  bul_grp_small:    'سبائك صgيرة',
  bul_grp_small_r:  '1g – 50g',
  bul_grp_tola:     'سبائك التولا',
  bul_grp_tola_r:   'تنسيق الخليج وجنوب آسيا',
  bul_grp_large:    'سبائك متوسطة وكبيرة',
  bul_grp_large_r:  '100g – 1كg',
  bul_loading:      'جارٍ جلب الأسعار المباشرة…',
  bul_loading_sub:  'هذا يستgرق لحظة',
  bul_inv_small:    'سبيكة استثمارية · عيار 24',
  bul_inv_tola:     'تنسيق خليجي تقليدي · عيار 24',
  bul_inv_large:    'معيار دولي · عيار 24',
  bul_inv_lbma:     'تسليم LBMA · عيار 24',
  bul_livebar:      'سبائك وعملات الذهب — أسعار مرجعية لقطر',
  bul_cur_qar:      'ريال قطري — QAR',
  bul_cur_usd:      'دولار أمريكي — USD',
  bul_cur_eur:      'يورو — EUR',
  bul_cur_gbp:      'جنيه إسترليني — GBP',
  bul_cur_inr:      'روبية هندية — INR',
  calc_fetching:    'جارٍ جلب سعر الذهب المباشر…',

  /* Story strings */
  story_99_9__pure:  'نقاء 99.9%',
  story_91_6__pure:  'نقاء 91.6%',
  story_live:  'مباشر',
  story_est:  'تقدير',
  story_price_today:  'السعر اليوم',
  story_open_calculator:  'فتح الحاسبة',
  story_qatar___live_gold_rate:  'قطر · سعر الذهب المباشر',
  story_gram___24_karat:  'جرام · 24 قيراط',
  story_see_price_chart:  'عرض المخطط',
  story_price_movement___7_days:  'حركة السعر · 7 أيام',
  story_where_is_gold_br_heading:  'إلى أين يتجه<br>الذهب؟',
  story_based_on_price_data_collected:  'بناءً على بيانات الأسعار التي يجمعها gولد مجلس كل 10 دقائق.',
  story_spot__oz_usd:  'السعر/أوقية',
  story_7_day_high__g:  'أعلى 7 أيام/ج',
  story_7_day_low__g:  'أدنى 7 أيام/ج',
  story_karat_guide:  'دليل القيراط',
  story_read_gold_guide:  'اقرأ الدليل',
  story_24k___investment:  '24ق · استثمار',
  story_investment_bars___coins_only:  'سبائك ومسكوكات فقط · طري جداً للارتداء',
  story_22k___most_popular:  '22ق · الأكثر شيوعاً',
  story_dominant_in_qatar_souqs___brid:  'السائد في أسواق قطر · العرائس والتراث',
  story_18k___diamond_setting:  '18ق · تحميل الماس',
  story_75_0__pure:  'نقاء 75%',
  story_hardest_alloy___best_for_diamo:  'أصلب سبيكة · الأفضل للمجوهرات الماسية',
  story_buyer_tip:  'نصيحة المشتري',
  story_check_my_price:  'تحقق من سعري',
  story_always_ask_for_the_making_char:  'اطلب دائماً رسوم المصنعية منفصلة',
  story_use_the_free_calculator:  'استخدم الحاسبة المجانية',
  story_market:  'السوق',
  story_see_full_prices:  'عرض كل الأسعار',
  story_qatar_gold_br_at_a_glance:  'الذهب في قطر<br>بلمحة سريعة',
  story_24k_gold:  'ذهب 24 قيراط',
  story_per_gram:  'للجرام',
  story_22k_jewellery:  'مجوهرات 22ق',
  story_spot_price:  'سعر الفور',
  story_troy_oz:  'أوقية',
  story_100g_bar_ref:  'سبيكة 100g مرجع',
  story_24k___with_premium:  '24ق · مع علاوة',
  story_import_duty:  'رسوم الاستيراد',
  story_investment_gold___qatar:  'ذهب استثماري · قطر',
  story_zero:  'صفر',
  /* v133 UI translations */
  know_before:      'اعرف قبل أن تشتري',
  three_things:     'ثلاثة أشياء يجب على كل مشترٍ للذهب في قطر معرفتها.',
  making_charge:    'رسوم الصنعة',
  which_karat:      'أي قيراط تختار؟',
  where_shop:       'أين تتسوق في الدوحة؟',
  learn_more:       'اعرف أكثر',
  back:             'رجوع',
  new_calc:         'حساب جديد',
  close:            'إغلاق',
  navigate:         'التنقل',
  updated_min:      'تتحدث كل دقيقة',

  gram_cur:         'جرام',  /* currency unit label for karat cards */
  dir_up:   '↑ صعود',
  dir_dn:   '↓ هبوط',
};

/* Signal ready */
window.GM_AR_LOADED = true;
if (typeof window.GM_AR_READY === 'function') window.GM_AR_READY();
