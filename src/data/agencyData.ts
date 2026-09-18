import { Service, CaseStudy, GlobalHub, Testimonial, Award } from '../types';

export const AGENCY_STATS = [
  { label: 'Global Markets', labelUrdu: 'عالمی مارکیٹس', value: '140+', subtext: 'Active ad placements across 6 continents' },
  { label: 'Media Spend Managed', labelUrdu: 'سالانہ میڈیا بجٹ', value: '$480M+', subtext: 'Annual programmatic & digital ad budget' },
  { label: 'Global Impressions', labelUrdu: 'کل امپریشنز', value: '1.4B+', subtext: 'Delivered in past 12 months' },
  { label: 'Client Retention', labelUrdu: 'کلائنٹ اطمینان', value: '98.6%', subtext: 'Long-term enterprise partnerships' },
];

export const AGENCY_SERVICES: Service[] = [
  {
    id: 'media-buying',
    title: 'Global Media Buying & Programmatic',
    titleUrdu: 'عالمی میڈیا بائینگ اور پروگرامنگ اشتہارات',
    tagline: 'High-efficiency placement on the world’s most coveted ad exchanges.',
    taglineUrdu: 'دنیا کی سب سے بڑی اشتہاری ایکسچینجز پر مؤثر تشہیر۔',
    shortDesc: 'End-to-end programmatic media purchasing across Google Display & Video 360, The Trade Desk, Meta, Amazon Ads, and premium publisher private marketplaces.',
    shortDescUrdu: 'گوگل، میٹا، ایمازون اور پریمیم پبلشرز کے ذریعے خودکار عالمی میڈیا کی خریداری۔',
    fullDesc: 'We leverage enterprise-grade DSP algorithms, proprietary bidding automation, and direct publisher relationships to secure tier-1 inventory at up to 35% lower CPMs while strictly guaranteeing brand safety and zero bot traffic.',
    iconName: 'Tv',
    deliverables: [
      'Multi-DSP Programmatic Execution',
      'Real-Time Bidding (RTB) Optimization',
      'Connected TV (CTV) & Streaming Video Placements',
      'Private Marketplace (PMP) Direct Deals',
      'Fraud Prevention & Verification Protocols'
    ],
    deliverablesUrdu: [
      'ملٹی ڈی ایس پی خودکار مہمات',
      'ریئل ٹائم بولی کا جدید نظام',
      'سٹریمنگ ٹی وی اور ویڈیو اشتہارات',
      'پریمیم پبلشر ڈائریکٹ ڈیلز',
      'فراڈ پروف سیکیورٹی مانیٹرنگ'
    ],
    metricTag: 'Average 32% CPM reduction with 99.4% viewability',
    channels: ['Google DV360', 'The Trade Desk', 'Amazon DSP', 'Meta Ads', 'YouTube Mastheads'],
    featuredClient: 'Aura International & CloudSprint'
  },
  {
    id: 'creative-production',
    title: 'Creative Direction & Omnichannel Storytelling',
    titleUrdu: 'تخلیقی ہدایت کاری اور بصری کہانی کاری',
    tagline: 'Campaigns that stop the scroll, ignite culture, and drive demand.',
    taglineUrdu: 'وہ اشتہارات جو اسکرول روک دیں اور خریداروں کی توجہ حاصل کریں۔',
    shortDesc: 'Cinematic commercials, 3D hyper-realistic motion graphics, high-converting social short-form video, and cohesive visual identity systems for global rollouts.',
    shortDescUrdu: 'سنیماٹک ویڈیوز، تھری ڈی اینیمیشن اور سوشل میڈیا کے پرکشش وائرل اشتہارات۔',
    fullDesc: 'Our international creative directors, 3D animators, and copywriters build unforgettable campaign narratives customized for individual cultural nuances across North America, Europe, MENA, and Asia.',
    iconName: 'Sparkles',
    deliverables: [
      'High-End Commercial Film Production (4K/8K)',
      '3D CGI & Motion Graphics Commercials',
      'High-Velocity Social Reels & TikTok Concepts',
      'Interactive Web Experiences & Immersive AR Filters',
      'Global Brand Localization & Multilingual Transcreation'
    ],
    deliverablesUrdu: [
      'اعلیٰ معیار کی کمرشل ویڈیو پروڈکشن',
      'تھری ڈی موشن گرافکس اور اینیمیشن',
      'ٹک ٹاک اور ریلز کے وائرل تصورات',
      'انٹرایکٹو ڈیجیٹل اور اے آر تجربات',
      'مختلف زبانوں اور ممالک کے لیے لوکلائزیشن'
    ],
    metricTag: 'Over 120M+ organic views generated globally',
    channels: ['Cinema & Broadcast TV', 'TikTok / Reels / Shorts', 'Digital Out-of-Home 3D Screens', 'Meta Canvas'],
    featuredClient: 'Vortex Hypercars & Crest Beverages'
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing & Precision ROAS',
    titleUrdu: 'پرفارمنس مارکیٹنگ اور زیادہ سے زیادہ منافع',
    tagline: 'Ruthlessly engineered ad funnels engineered for profitable customer acquisition.',
    taglineUrdu: 'ہر لگائے گئے روپے اور ڈالر پر بہترین ریٹرن آف انویسٹمنٹ۔',
    shortDesc: 'Algorithmic paid search, predictive audience retargeting, dynamic catalog ads, and landing page conversion rate optimization (CRO) scaling direct revenue.',
    shortDescUrdu: 'پیڈ سرچ، فیس بک، انسٹاگرام اور ای کامرس کی سیلز بڑھانے کے لیے خصوصی مہمات۔',
    fullDesc: 'We treat performance advertising as quantitative engineering. Every dollar deployed is tied to real revenue, lifetime value (LTV), and multi-touch attribution models.',
    iconName: 'TrendingUp',
    deliverables: [
      'Google Search, Performance Max & Shopping Scaling',
      'Meta & TikTok High-Volume Paid Acquisition',
      'Full-Funnel Retargeting & Churn Prevention',
      'A/B Split Testing for High-Converting Landing Pages',
      'Server-Side Tracking (CAPI) & First-Party Data Setup'
    ],
    deliverablesUrdu: [
      'گوگل پرفارمنس میکس اور شاپنگ مہمات',
      'میٹا اور ٹک ٹاک کے ذریعے تیز رفتار سیلز',
      'دوبارہ ٹارگٹ کرنے کی جدید حکمتِ عملی',
      'سیلز پیجز اور لینڈنگ پیج آپٹیمائزیشن',
      'سرور سائیڈ ٹریکنگ اور کسٹمر ڈیٹا تجزیہ'
    ],
    metricTag: 'Average client ROAS increase of +240%',
    channels: ['Google Ads', 'Meta Conversions API', 'TikTok Shop Ads', 'Pinterest', 'LinkedIn B2B'],
    featuredClient: 'FinScale Pay & Novacare Health'
  },
  {
    id: 'global-ooh',
    title: 'Global Out-of-Home (DOOH) & Iconic Billboards',
    titleUrdu: 'عالمی ڈیجیٹل بل بورڈز اور آئیکونک سکرینز',
    tagline: 'Dominating iconic cityscapes from Times Square to Burj Khalifa.',
    taglineUrdu: 'نیویارک ٹائمز اسکوائر سے دبئی برج خلیفہ تک دنیا کی سب سے بڑی سکرینز۔',
    shortDesc: 'Premium digital billboard takeovers in the world’s most prestigious cultural centers: New York Times Square, London Piccadilly Circus, Tokyo Shibuya, and Dubai Mall.',
    shortDescUrdu: 'لندن، نیویارک، ٹوکیو اور دبئی کے مصروف ترین مقامات پر ڈیجیٹل اور 3D بل بورڈز۔',
    fullDesc: 'We pair high-visibility physical dominance with programmatic digital out-of-home (pDOOH) tech that syncs live pedestrian mobile devices with giant 3D anamorphic displays.',
    iconName: 'Layers',
    deliverables: [
      '3D Anamorphic Illusion Billboard Activations',
      'Times Square & Piccadilly Circus Full Takeovers',
      'Airport Terminal & Luxury Transit Domination',
      'Mobile Geo-Retargeting for Billboard Viewers',
      'Independent Foot-Traffic Footfall Lift Audits'
    ],
    deliverablesUrdu: [
      'تھری ڈی اینامورفک اسکرین اینیمیشن',
      'ٹائمز اسکوائر اور پیکاڈلی سرکس ڈسپلے',
      'انٹرنیشنل ایئرپورٹ اور ٹرانزٹ اشتہارات',
      'موبائل جیو لوکیشن ری ٹارگٹنگ',
      'حقیقی ٹریفک اور ویورشپ کی جانچ'
    ],
    metricTag: 'Over 450M+ physical verified pedestrian impressions',
    channels: ['Clear Channel', 'JCDecaux', 'Outfront Media', 'Piccadilly Lights', 'Dubai Out-of-Home'],
    featuredClient: 'Vortex Hypercars & Zenith Watches'
  },
  {
    id: 'influencer-pr',
    title: 'Influencer & Creator Media Network',
    titleUrdu: 'انفلوئنسر مارکیٹنگ اور گلوبل پی آر نیٹ ورک',
    tagline: 'Activating 25,000+ verified creators across 40+ countries.',
    taglineUrdu: 'دنیا بھر کے 25 ہزار سے زائد تصدیق شدہ کریئیٹرز اور پی آر۔',
    shortDesc: 'Strategic influencer activations combining mega-celebrity brand ambassadors with hyper-engaged regional micro-influencers and global press relations.',
    shortDescUrdu: 'مشہور شخصیات اور سوشل میڈیا اسٹارز کے ذریعے برانڈ کی ساکھ اور کسٹمر ٹرسٹ میں اضافہ۔',
    fullDesc: 'We handle influencer marketing like media buying: contractual performance benchmarks, usage rights for paid ad whitelisting, authentic brand integration, and worldwide press distribution.',
    iconName: 'Users',
    deliverables: [
      'Global Influencer Roster Curation & Vetting',
      'Influencer Whitelisting & Dark Post Boosting',
      'Brand Ambassador Negotiation & Contract Governance',
      'Global Press Releases & Tier-1 Media Placement',
      'Crisis PR Monitoring & Community Sentiment Tracking'
    ],
    deliverablesUrdu: [
      'بہترین کریئیٹرز کا چناؤ اور معاہدے',
      'کریئیٹر مواد کو پیڈ اشتہارات میں تبدیل کرنا',
      'بین الاقوامی برانڈ ایمبیسیڈر مینجمنٹ',
      'پریس ریلیز اور نمایاں میڈیا پبلیکیشنز',
      'برانڈ وقار اور پبلک ریلیشنز مانیٹرنگ'
    ],
    metricTag: '94% campaign engagement rate above industry average',
    channels: ['Instagram Creators', 'TikTok Verified Partners', 'YouTube Tech/Lifestyle', 'Bloomberg/Forbes PR'],
    featuredClient: 'Aura Maison & Elite Escapes'
  },
  {
    id: 'ai-analytics',
    title: 'AI Marketing Intelligence & Consumer Analytics',
    titleUrdu: 'اے آئی مارکیٹنگ اور کنزیومر اینالیٹکس',
    tagline: 'Predictive modeling that eliminates guesswork from media planning.',
    taglineUrdu: 'جدید مصنوعی ذہانت سے اشتہاری بجٹ کی پیشگی منصوبہ بندی اور درست نتائج۔',
    shortDesc: 'Next-generation machine learning that models customer lifetime value, optimizes ad creative variations in real-time, and provides multi-touch attribution.',
    shortDescUrdu: 'کسٹمر کے مزاج اور خریداری کے رویے کا درست اے آئی تجزیہ۔',
    fullDesc: 'Our proprietary data engines synthesize data across paid channels, web analytics, and point-of-sale systems to guide budget allocation to the highest-yielding channels automatically.',
    iconName: 'Cpu',
    deliverables: [
      'Multi-Touch Attribution (MTA) & Marketing Mix Modeling',
      'Real-Time Creative Fatigue Detection & Dynamic Swap',
      'Predictive Churn & High-Value Customer Scoring',
      'Custom Executive KPI & Campaign Telemetry Dashboards',
      'Competitor Ad Spend Tracking & Share-of-Voice Analysis'
    ],
    deliverablesUrdu: [
      'ملٹی ٹچ اٹربیوشن اور بجٹ ماڈلنگ',
      'اشتہار کی کارکردگی کے مطابق فوری تبدیلی',
      'کسٹمر خریداری کے رجحان کی پیشگوئی',
      'لائیو اینالیٹکس ڈیش بورڈ برائے کلائنٹس',
      'مارکیٹ میں حریفوں کے اشتہارات کا تجزیہ'
    ],
    metricTag: 'Eliminates up to 28% of wasted ad spend',
    channels: ['Snowflake / BigQuery', 'Google Analytics 4 360', 'Mixpanel', 'Custom WWN AI Engine'],
    featuredClient: 'FinScale Pay & Global Logistics Alliance'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'vortex-launch',
    title: 'Launching the Future: 3D DOOH Hypercar Takeover',
    titleUrdu: 'فیوچر الیکٹرک کار کا عالمی آغاز: 3D ڈیجیٹل مہم',
    client: 'Vortex Motors Inc.',
    sector: 'Automotive & EV Luxury',
    year: '2025',
    tags: ['Global DOOH', 'CGI Commercial', '3D Anamorphic', 'Performance PR'],
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
    summary: 'A synchronized launch across 14 mega-screens in New York, London, Tokyo, and Dubai simultaneously with anamorphic 3D hypercars leaping out toward crowds.',
    summaryUrdu: 'نیویارک، لندن، دبئی اور ٹوکیو کی بڑی اسکرینوں پر بیک وقت 3D اینیمیشن اور ورچوئل لانچ جس نے عالمی توجہ حاصل کی۔',
    challenge: 'Vortex needed to capture worldwide headlines for their next-generation luxury EV against established trillion-dollar legacy automakers with zero pre-existing brand affinity.',
    solution: 'WWN orchestrated an exact-second synchronized takeover of Times Square, Piccadilly Circus, and Shibuya 3D screens, backed by geo-targeted mobile programmatic ads serving test-drive reservations within seconds.',
    keyMetrics: [
      { label: 'Global Reach', labelUrdu: 'عالمی رسائی', value: '78.4M' },
      { label: 'Pre-Orders Generated', labelUrdu: 'پری آرڈرز', value: '14,200+' },
      { label: 'Earned Media Value', labelUrdu: 'میڈیا ویلیو', value: '$34.8M' },
      { label: 'Cannes Lions Nominee', labelUrdu: 'ایوارڈ', value: 'Titanium' },
    ],
    awards: ['Cannes Lions Bronze Outdoor 2025', 'D&AD Wood Pencil Spatial Design'],
    featured: true
  },
  {
    id: 'aura-fragrance',
    title: 'Aura Maison: Viral Sensory TikTok & Luxury Rebrand',
    titleUrdu: 'عورا میسن: لگژری پرفیوم کی ٹک ٹاک وائرل مہم',
    client: 'Aura Parfums International',
    sector: 'Luxury Beauty & Fragrance',
    year: '2025',
    tags: ['Influencer Network', 'TikTok Ads', 'Omnichannel ROAS', 'Creative Direction'],
    heroImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
    summary: 'Connecting high-fashion editorial storytelling with creator-driven sensory ASMR videos that drove sell-outs across 320 retail boutiques worldwide.',
    summaryUrdu: 'اعلیٰ درجے کی تخلیقی ویڈیوز اور معروف ٹک ٹاک انفلوئنسرز کی مدد سے اسٹاک چند دنوں میں ختم۔',
    challenge: 'High-end fragrances struggle to sell online where customers cannot smell the product before checkout.',
    solution: 'WWN deployed 85 tier-1 luxury aesthetic creators paired with high-frequency Meta Reels and TikTok Spark ads highlighting mood, visual synesthesia, and unboxing rituals with sample kit funnels.',
    keyMetrics: [
      { label: 'Return on Ad Spend', labelUrdu: 'اشتہاری منافع (ROAS)', value: '412%' },
      { label: 'Direct Online Sales', labelUrdu: 'براہِ راست فروخت', value: '$18.2M' },
      { label: 'Retail Out-of-Stock Rate', labelUrdu: 'اسٹاک بک گیا', value: '94%' },
      { label: 'New Customer Acquisition', labelUrdu: 'نئے کسٹمرز', value: '380K' },
    ],
    awards: ['Effie Awards Gold - Personal Care & Luxury'],
    featured: true
  },
  {
    id: 'finscale-growth',
    title: 'FinScale: 3.8M App Downloads Across Emerging Markets',
    titleUrdu: 'فِن سکیل: مشرقِ وسطیٰ اور جنوبی ایشیا میں تیز رفتار بینکاری مہم',
    client: 'FinScale Technologies',
    sector: 'Fintech & Neobanking',
    year: '2024-2025',
    tags: ['Programmatic Ads', 'App User Acquisition', 'Hyper-Localization', 'Google App Campaigns'],
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    summary: 'Multi-lingual performance marketing campaign in UAE, Saudi Arabia, Pakistan, and Egypt driving verified bank deposits with ultra-low cost-per-acquisition.',
    summaryUrdu: 'عرب امارات، سعودی عرب اور پاکستان کے لاکھوں صارفین تک بینکاری ایپ کی کامیابی سے رسائی۔',
    challenge: 'Building financial trust among unbanked and digital-first youth while navigating strict regulatory advertising rules in MENA and South Asia.',
    solution: 'WWN crafted authentic local language creative variations (Urdu, Arabic, English), utilizing YouTube non-skippable micro-stories, programmatic sports stream ads, and hyper-targeted Google UAC.',
    keyMetrics: [
      { label: 'Verified App Installs', labelUrdu: 'ایپ ڈاؤن لوڈز', value: '3.82M' },
      { label: 'Cost Per Funded Account', labelUrdu: 'لاگت فی کسٹمر', value: '$3.40 (-48%)' },
      { label: 'First-Day Deposit Rate', labelUrdu: 'ڈپازٹ ریٹ', value: '68%' },
      { label: 'Total Volume Moved', labelUrdu: 'ٹرانزیکشن والیم', value: '$120M+' },
    ],
    awards: ['MENA Digital Awards - Best Fintech Campaign'],
    featured: true
  },
  {
    id: 'crest-summer',
    title: 'Crest Sparkling: The Global Beat Summer Music Festival',
    titleUrdu: 'کرسٹ بیوریج: گلوبل سمر فیسٹیول اور انٹرایکٹو مہم',
    client: 'Crest Beverage Holdings',
    sector: 'FMCG & Soft Drinks',
    year: '2025',
    tags: ['Experiential', 'AR Filters', 'Global PR', 'Stadium Takeovers'],
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    summary: 'An interactive AR festival tour across 22 global music events coupled with interactive cans unlocking exclusive Spotify playlists and VIP festival passes.',
    summaryUrdu: 'دنیا کے 22 بڑے میوزک فیسٹیولز میں اے آر اور نوجوانوں کی لائیو شرکت کے ساتھ برانڈ ترویج۔',
    challenge: 'Transforming a traditional sparkling water beverage into an iconic youth culture staple during prime competitive summer months.',
    solution: 'Full 360-degree integration: interactive Instagram & Snapchat AR experiences, festival mainstage lighting syncs, and viral DJ influencer collaborations.',
    keyMetrics: [
      { label: 'Social Impressions', labelUrdu: 'سوشل امپریشنز', value: '184M' },
      { label: 'AR Filter Interactions', labelUrdu: 'اے آر فلٹر استعمال', value: '4.6M' },
      { label: 'Retail Sales Lift', labelUrdu: 'سیلز میں اضافہ', value: '+34.2%' },
      { label: 'Brand Sentiment', labelUrdu: 'مثبت تاثرات', value: '96.2%' },
    ],
    awards: ['Clio Music Bronze Winner'],
    featured: false
  },
  {
    id: 'cloudsprint-b2b',
    title: 'CloudSprint: Pipeline Generation for Global Enterprise SaaS',
    titleUrdu: 'کلاؤڈ اسپرنٹ: گلوبل انٹرپرائز سوفٹ ویئر کے لیے بی ٹو بی کلائنٹس',
    client: 'CloudSprint Inc.',
    sector: 'B2B Enterprise Software',
    year: '2024-2025',
    tags: ['Account-Based Marketing', 'Airport DOOH', 'LinkedIn Sponsored', 'Lead Gen'],
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    summary: 'Precision account-based marketing (ABM) targeting Fortune 500 CIOs via JFK, Heathrow, and Dubai international airport executive lounges coupled with hyper-personalized LinkedIn ads.',
    summaryUrdu: 'دنیا کے بڑے بین الاقوامی ہوائی اڈوں اور لنکڈ ان کے ذریعے فارچون 500 کمپنیوں کے سربراہان کو ٹارگٹ کرنا۔',
    challenge: 'High-ticket $250k+ annual contract value software where traditional mass advertising is wasted on non-decision makers.',
    solution: 'WWN mapped IP addresses and flight schedules of top 5,000 enterprise accounts, serving coordinated billboard messaging at airport gates followed by tailored case studies directly on executive social feeds.',
    keyMetrics: [
      { label: 'Enterprise Pipeline', labelUrdu: 'بزنس پائپ لائن', value: '$64.5M' },
      { label: 'Closed ARR', labelUrdu: 'کامیاب ڈیلز', value: '$19.2M' },
      { label: 'Target Account Engaged', labelUrdu: 'ٹارگٹ کمپنیاں', value: '82%' },
      { label: 'Meeting Acceptance', labelUrdu: 'میٹنگ ریٹ', value: '+310%' },
    ],
    awards: ['B2B Marketing Elevation Award 2025'],
    featured: false
  },
  {
    id: 'novacare-global',
    title: 'Novacare: Human Longevity Global Awareness Docuseries',
    titleUrdu: 'نوواکیئر: انسانی صحت اور لمبی عمر کی عالمی دستاویزی مہم',
    client: 'Novacare Health Sciences',
    sector: 'Biotech & Preventive Health',
    year: '2025',
    tags: ['Docuseries', 'YouTube Mastheads', 'Digital PR', 'Cannes Winner'],
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    summary: 'A 6-episode cinematic documentary series exploring groundbreaking cellular science, distributed across streaming networks and YouTube with integrated medical review trust funnels.',
    summaryUrdu: 'جدید میڈیکل سائنس پر دستاویزی ویڈیوز اور معلوماتی مہم جس نے دنیا بھر میں لاکھوں لوگوں کا اعتماد حاصل کیا۔',
    challenge: 'Translating complex molecular longevity biology into accessible, trustworthy consumer health products without triggering medical skepticism.',
    solution: 'Partnered with renowned science journalists, filmed across research institutions in Switzerland, Boston, and Tokyo, and backed with a global programmatic video distribution strategy.',
    keyMetrics: [
      { label: 'Docuseries Watch Hours', labelUrdu: 'دیکھنے کا دورانیہ', value: '3.1M Hrs' },
      { label: 'Brand Trust Score', labelUrdu: 'اعتماد کا اسکور', value: '92/100' },
      { label: 'Subscription Signups', labelUrdu: 'ماہانہ سبسکرپشنز', value: '142K' },
      { label: 'Global PR Mentions', labelUrdu: 'پریس کوریج', value: '450+' },
    ],
    awards: ['Cannes Lions Gold Health & Wellness', 'Webby Best Video Campaign'],
    featured: false
  }
];

export const GLOBAL_HUBS: GlobalHub[] = [
  {
    id: 'hub-nyc',
    city: 'New York',
    cityUrdu: 'نیویارک',
    country: 'United States',
    region: 'North America HQ',
    timezone: 'America/New_York',
    utcOffset: -5,
    address: 'One World Trade Center, 64th Floor, Manhattan, NY 10007',
    teamLead: 'Marcus Vance, Chief Strategy Officer',
    activeAccounts: 84,
    phone: '+1 (212) 890-4400',
    email: 'nyc@worldwidenetwork.agency',
    coordinates: { x: 28, y: 35 },
    capabilities: ['Global Media Planning', 'Times Square DOOH', 'Financial PR', 'Fortune 500 Growth']
  },
  {
    id: 'hub-london',
    city: 'London',
    cityUrdu: 'لندن',
    country: 'United Kingdom',
    region: 'EMEA Creative Hub',
    timezone: 'Europe/London',
    utcOffset: 0,
    address: '22 Bishopsgate, Level 38, City of London, EC2N 4BQ',
    teamLead: 'Eleanor Sterling, Executive Creative Director',
    activeAccounts: 62,
    phone: '+44 (20) 7946-0812',
    email: 'london@worldwidenetwork.agency',
    coordinates: { x: 48, y: 28 },
    capabilities: ['Cannes-Caliber Film', 'Luxury Brand Strategy', 'Piccadilly Dominations', 'Pan-European Media']
  },
  {
    id: 'hub-dubai',
    city: 'Dubai',
    cityUrdu: 'دبئی',
    country: 'United Arab Emirates',
    region: 'MENA Gateway',
    timezone: 'Asia/Dubai',
    utcOffset: 4,
    address: 'DIFC Gate Precinct 4, Level 7, Dubai',
    teamLead: 'Tariq Al-Mansoor, Regional Managing Director',
    activeAccounts: 51,
    phone: '+971 (4) 362-7700',
    email: 'dubai@worldwidenetwork.agency',
    coordinates: { x: 62, y: 44 },
    capabilities: ['GCC Ultra-Luxury Ads', 'Burj Khalifa Takeovers', 'Regional Arabic Transcreation', 'Fintech & Real Estate']
  },
  {
    id: 'hub-karachi',
    city: 'Karachi & Lahore',
    cityUrdu: 'کراچی اور لاہور',
    country: 'Pakistan',
    region: 'South Asia Production Hub',
    timezone: 'Asia/Karachi',
    utcOffset: 5,
    address: 'Dolmen City Executive Towers, Clifton Block 4, Karachi',
    teamLead: 'Shahbaz Ahmed, Head of Digital & Performance',
    activeAccounts: 47,
    phone: '+92 (21) 3529-8800',
    email: 'southasia@worldwidenetwork.agency',
    coordinates: { x: 66, y: 46 },
    capabilities: ['High-Velocity Digital Production', 'Regional Influencer Roster', 'Cost-Optimized Scale', 'App Performance Growth']
  },
  {
    id: 'hub-singapore',
    city: 'Singapore',
    cityUrdu: 'سنگاپور',
    country: 'Singapore',
    region: 'APAC Headquarters',
    timezone: 'Asia/Singapore',
    utcOffset: 8,
    address: 'Marina Bay Financial Centre Tower 2, Level 29, Singapore 018983',
    teamLead: 'Mei-Ling Chen, VP Programmatic APAC',
    activeAccounts: 58,
    phone: '+65 6812-9900',
    email: 'singapore@worldwidenetwork.agency',
    coordinates: { x: 78, y: 58 },
    capabilities: ['Cross-Border E-Commerce', 'TikTok Global Scaling', 'APAC DSP Management', 'Gaming & Web3 Media']
  },
  {
    id: 'hub-tokyo',
    city: 'Tokyo',
    cityUrdu: 'ٹوکیو',
    country: 'Japan',
    region: 'East Asia Innovation Lab',
    timezone: 'Asia/Tokyo',
    utcOffset: 9,
    address: 'Roppongi Hills Mori Tower, 41F, Minato-ku, Tokyo 106-6108',
    teamLead: 'Kenji Takahashi, Head of Immersive Experiences',
    activeAccounts: 39,
    phone: '+81 (3) 5410-8200',
    email: 'tokyo@worldwidenetwork.agency',
    coordinates: { x: 86, y: 40 },
    capabilities: ['3D Anamorphic OOH (Shibuya)', 'Interactive AR/XR', 'Manga/Anime Brand Collaborations', 'Consumer Electronics Ads']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'World Wide Network transformed our fragmented international marketing into a unified, high-performing global powerhouse. We scaled into 18 new countries in under 9 months.',
    quoteUrdu: 'ورلڈ وائڈ نیٹ ورک نے ہماری بین الاقوامی مارکیٹنگ کو ایک منظم اور بے حد منافع بخش نیٹ ورک میں بدل دیا ہے۔ ہم نے 9 ماہ میں 18 نئے ممالک میں وسعت حاصل کی۔',
    author: 'Julian Thorne',
    role: 'Global Chief Marketing Officer',
    company: 'Vortex Motors Global',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop',
    impactMetric: '+340% Year-over-Year Revenue Growth'
  },
  {
    id: 't2',
    quote: 'Their programmatic media buying algorithms secured Times Square and Piccadilly screens at pricing our previous agency told us was impossible. Their creative hits on every level.',
    quoteUrdu: 'ان کے اشتہاری نظام نے ہمیں ٹائمز اسکوائر اور لندن میں ایسی سکرینز فراہم کیں جو دوسری ایجنسیوں کے بس میں نہیں تھیں۔ ان کا تخلیقی معیار لاجواب ہے۔',
    author: 'Clara Delacroix',
    role: 'Vice President of Brand Communications',
    company: 'Aura Parfums Paris',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop',
    impactMetric: '4.1x Verified Direct ROAS'
  },
  {
    id: 't3',
    quote: 'From Dubai to Karachi and London, WWN understands how to localize messaging without diluting the core premium prestige of the brand. Simply the finest agency partner we have worked with.',
    quoteUrdu: 'دبئی سے لے کر کراچی اور لندن تک، ورلڈ وائڈ نیٹ ورک مقامی ثقافت اور جدید عالمی معیار دونوں کو سمجھتا ہے۔ یہ ہمارے بہترین پارٹنر ثابت ہوئے ہیں۔',
    author: 'Farhan Zaidi',
    role: 'Head of Regional Growth',
    company: 'FinScale Technologies',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
    impactMetric: '3.8M+ Verified Customer Conversions'
  }
];

export const AGENCY_AWARDS: Award[] = [
  { year: '2025', title: 'Titanium & Gold Lions', festival: 'Cannes Lions International', category: 'Outdoor & Integrated Media', campaign: 'Vortex Hypercar Anamorphic 3D' },
  { year: '2025', title: 'Global Grand Effie', festival: 'Global Effie Awards', category: 'Most Effective Agency Network', campaign: 'Multi-Market Omnichannel Scale' },
  { year: '2024', title: 'Yellow Pencil', festival: 'D&AD Awards London', category: 'Digital Design & Spatial Innovation', campaign: 'Times Square Live Synchrony' },
  { year: '2024', title: 'Gold Clio', festival: 'Clio Awards New York', category: 'Direct Marketing & Performance Media', campaign: 'Aura Sensory Fragrance Viral' },
  { year: '2023', title: 'Agency Network of the Year', festival: 'MediaPost Digital Awards', category: 'Global Programmatic Excellence', campaign: 'Proprietary DSP Efficiency Engine' },
];

export const GLOBAL_CLIENTS = [
  { name: 'Vortex Motors', category: 'Automotive' },
  { name: 'Aura Maison', category: 'Luxury' },
  { name: 'FinScale Pay', category: 'Fintech' },
  { name: 'Novacare Health', category: 'Biotech' },
  { name: 'CloudSprint', category: 'Enterprise SaaS' },
  { name: 'Crest Beverages', category: 'FMCG' },
  { name: 'Zenith Horlogerie', category: 'Watches' },
  { name: 'Apex Airlines', category: 'Aviation' },
];
