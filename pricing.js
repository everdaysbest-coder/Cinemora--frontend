// Pricing tiers configuration
export const PRICING_TIERS = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Try before you commit',
    monthlyPrice: 0,
    yearlyPrice: 0,
    monthlyPackageId: null,
    yearlyPackageId: null,
    highlight: false,
    ctaLabel: 'Start free',
    features: [
      { text: '10 images per month', included: true },
      { text: '3 videos up to 4 seconds', included: true },
      { text: 'Cinemora watermark', included: true },
      { text: 'Community gallery access', included: true },
      { text: 'Standard queue priority', included: true },
      { text: 'No commercial usage', included: false },
      { text: 'API access', included: false },
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For hobbyists and creators',
    monthlyPrice: 4.99,
    yearlyPrice: 35.9,
    monthlyPackageId: 'starter_monthly',
    yearlyPackageId: 'starter_yearly',
    highlight: false,
    ctaLabel: 'Get Starter',
    features: [
      { text: '50 images per month', included: true },
      { text: '15 videos up to 8 seconds', included: true },
      { text: 'No watermark', included: true },
      { text: 'Commercial usage', included: true },
      { text: 'Claude prompt enhancer', included: true },
      { text: 'Standard queue priority', included: true },
      { text: 'API access', included: false },
    ],
  },
  {
    id: 'creator',
    name: 'Creator',
    tagline: 'For serious content creators',
    monthlyPrice: 12.99,
    yearlyPrice: 93.5,
    monthlyPackageId: 'creator_monthly',
    yearlyPackageId: 'creator_yearly',
    highlight: true,
    badge: 'Most Popular',
    ctaLabel: 'Get Creator',
    features: [
      { text: '200 images per month', included: true },
      { text: '50 videos up to 15 seconds', included: true },
      { text: 'Nova Reel up to 30 seconds', included: true },
      { text: 'No watermark + commercial use', included: true },
      { text: 'Claude prompt enhancer', included: true },
      { text: 'Priority queue', included: true },
      { text: 'Basic API access', included: true },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For studios and power users',
    monthlyPrice: 29,
    yearlyPrice: 208.8,
    monthlyPackageId: 'pro_monthly',
    yearlyPackageId: 'pro_yearly',
    highlight: false,
    ctaLabel: 'Get Pro',
    features: [
      { text: 'Unlimited images', included: true },
      { text: '200 videos up to 60 seconds', included: true },
      { text: 'Sora 2 access (paid credits)', included: true },
      { text: 'No watermark + commercial use', included: true },
      { text: 'Claude prompt enhancer + agents', included: true },
      { text: 'Highest priority + fast lane', included: true },
      { text: 'Full API + team seats (3)', included: true },
    ],
  },
];

export const YEARLY_DISCOUNT_PERCENT = 40;

export const COMPARISON_ROWS = [
  {
    section: 'Generation',
    items: [
      { label: 'Images per month', values: ['10', '50', '200', 'Unlimited'] },
      { label: 'Videos per month', values: ['3', '15', '50', '200'] },
      { label: 'Max video length', values: ['4 seconds', '8 seconds', '15 seconds', '60 seconds (Nova Reel)'] },
      { label: 'Sora 2 access', values: [false, false, false, true] },
      { label: 'Nova Reel long-form', values: [false, false, true, true] },
    ],
  },
  {
    section: 'Creative tools',
    items: [
      { label: 'Claude prompt enhancer', values: [false, true, true, true] },
      { label: 'Viral presets library', values: ['Limited', 'Full', 'Full', 'Full'] },
      { label: 'Cinema Studio', values: [false, 'Basic', 'Advanced', 'Full'] },
      { label: 'Multi-scene stitching', values: [false, false, true, true] },
    ],
  },
  {
    section: 'Output & rights',
    items: [
      { label: 'Watermark', values: ['Yes', 'No', 'No', 'No'] },
      { label: 'Commercial usage', values: [false, true, true, true] },
      { label: '4K upscale', values: [false, false, 'Add-on', true] },
      { label: 'Download originals', values: [true, true, true, true] },
    ],
  },
  {
    section: 'Support & platform',
    items: [
      { label: 'Queue priority', values: ['Standard', 'Standard', 'Priority', 'Fast lane'] },
      { label: 'API access', values: [false, false, 'Basic', 'Full'] },
      { label: 'Team seats', values: [false, false, false, '3 seats'] },
      { label: 'Support', values: ['Community', 'Email', 'Priority email', 'Dedicated'] },
    ],
  },
];

export const PRICING_FAQ = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel any time from your account settings. Your plan stays active until the end of the current billing period.',
  },
  {
    q: 'What happens if I exceed my monthly limits?',
    a: 'You can either wait for your allowance to reset next month, top-up with a one-time credit pack, or upgrade to a higher plan instantly.',
  },
  {
    q: 'Are the videos truly commercial-use ready?',
    a: 'Yes, on Starter and above. You get a full commercial license for anything you generate. The Free plan is for personal use only.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'The Creator plan includes a 7-day free trial with no credit card required. You get full access to test everything.',
  },
  {
    q: 'How much cheaper is the yearly plan?',
    a: 'Yearly plans save you 40% compared to paying monthly. That is roughly 5 months free per year.',
  },
  {
    q: 'Is there a discount for students, teachers, or non-profits?',
    a: 'Yes. Contact us with proof of status and we will apply a 50% educational discount to your account.',
  },
  {
    q: 'What AI models power Cinemora?',
    a: 'We combine Google Nano Banana for images, Sora 2 and Wan/Seedance/Nova Reel for video, and Anthropic Claude for prompt enhancement.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes. If you are unhappy within 14 days of your first payment, email us and we will refund you in full, no questions asked.',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Alex Rivera',
    role: 'Content creator · 240k followers',
    quote: 'I shipped a whole short film in one afternoon. Cinema Studio + Claude prompts is a cheat code for cinematic B-roll.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
  },
  {
    id: 't2',
    name: 'Priya Nair',
    role: 'Founder · Ads agency',
    quote: 'We replaced two junior editors with Cinemora Creator. Turnaround for social ads went from 3 days to 20 minutes.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
  },
  {
    id: 't3',
    name: 'Kenji Watanabe',
    role: 'Indie filmmaker',
    quote: 'The Pro plan pays for itself in one client project. Nova Reel finally gives me 60s takes without stitching hacks.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80',
  },
];
