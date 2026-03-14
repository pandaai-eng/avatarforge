export type Preset = {
  slug: string;
  title: string;
  niche: string;
  promise: string;
  audience: string;
  visualStyle: string;
  voice: string;
  deliverables: string[];
  hooks: string[];
};

export const presets: Preset[] = [
  {
    slug: 'creator',
    title: 'Creator Clone OS',
    niche: 'Creator Education',
    promise: 'Build a premium AI creator identity that publishes consistently and sells digital products.',
    audience: 'Creators, coaches, and info-product operators',
    visualStyle: 'Luxury cinematic with premium creator-studio framing',
    voice: 'Warm confident educator with crisp CTA transitions',
    deliverables: ['Avatar identity bible', '30 hooks', '15 video prompts', 'Launch page copy', '30-day calendar'],
    hooks: ['You do not need more content. You need a repeatable creator identity.', 'The fastest way to look premium online is to stop improvising your brand.']
  },
  {
    slug: 'crypto',
    title: 'Crypto Analyst Avatar',
    niche: 'Crypto / Finance',
    promise: 'Turn market insight into addictive authority content and monetizable research products.',
    audience: 'Traders, newsletter operators, alpha groups, education brands',
    visualStyle: 'Dark authority desk setup with modern chart overlays',
    voice: 'Calm but sharp market operator',
    deliverables: ['Market explainer avatar prompts', 'Daily brief workflow', 'CTA bank', 'Lead magnet copy', 'Short-form script pack'],
    hooks: ['Most market content is noise. Authority comes from clean signal compression.', 'If your trading content does not create trust, it does not convert.']
  },
  {
    slug: 'ecommerce',
    title: 'Ecom UGC Avatar Lab',
    niche: 'Ecommerce',
    promise: 'Create conversion-first UGC avatar systems for products, ads, and landing pages.',
    audience: 'Shopify brands, media buyers, UGC agencies',
    visualStyle: 'Clean product-forward UGC with social-native framing',
    voice: 'Confident, clear, demo-driven sales energy',
    deliverables: ['UGC prompt vault', 'Ad angles', 'Product demo scripts', 'Offer page copy', 'Creative testing matrix'],
    hooks: ['The ad is not failing because of CPM. It is failing because the creative says nothing.', 'Most UGC looks homemade. Premium UGC looks inevitable.']
  },
  {
    slug: 'coach',
    title: 'Authority Coach Avatar',
    niche: 'Fitness / Coaching',
    promise: 'Scale trust, expertise, and transformations without filming every single day.',
    audience: 'Coaches, consultants, transformation brands',
    visualStyle: 'Editorial coaching brand with premium lifestyle cues',
    voice: 'Empathetic authority with strong action bias',
    deliverables: ['Transformation story prompts', 'Objection handling scripts', 'Lead-gen funnel copy', 'Content calendar', 'Offer stack'],
    hooks: ['People do not buy coaching because you post often. They buy because you feel inevitable.', 'Authority is not volume. It is consistency with proof.']
  },
  {
    slug: 'agency',
    title: 'Agency Spokesperson Engine',
    niche: 'Agency / B2B',
    promise: 'Build reusable spokesperson systems for client acquisition, proposals, and thought leadership.',
    audience: 'Agencies, consultants, B2B service firms',
    visualStyle: 'Minimal business authority with clean modern office scenes',
    voice: 'Strategic founder energy with precise language',
    deliverables: ['Agency prompt pack', 'Service page copy', 'Outbound hooks', 'Lead nurture scripts', 'Client offer ladder'],
    hooks: ['Your agency does not need more content. It needs a front-end that pre-sells trust.', 'B2B content wins when it sounds expensive before it sounds loud.']
  }
];
