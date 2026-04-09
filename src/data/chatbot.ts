export interface QuickReply {
  label: string;
  action: 'reply' | 'navigate';
  value: string;
}

export interface BotMessage {
  text: string;
  quickReplies?: QuickReply[];
}

export const conversationTree: Record<string, BotMessage> = {
  // --- Root ---
  welcome: {
    text: "Hi there! I'm a demo assistant for Primrose Landscaping. How can I help you today?",
    quickReplies: [
      { label: 'Our Services', action: 'reply', value: 'services' },
      { label: 'Contact Us', action: 'reply', value: 'contact' },
      { label: 'Common Questions', action: 'reply', value: 'faq' },
    ],
  },

  // --- Services branch ---
  services: {
    text: "We offer professional lawn care and landscaping services in Forney, TX and surrounding areas. What would you like to know more about?",
    quickReplies: [
      { label: 'Lawn Maintenance', action: 'reply', value: 'services_lawn' },
      { label: 'Weed Control', action: 'reply', value: 'services_weed' },
      { label: 'Hardscaping', action: 'reply', value: 'services_hardscape' },
      { label: 'View All Services', action: 'navigate', value: '/services/' },
    ],
  },
  services_lawn: {
    text: "Our lawn maintenance service includes regular mowing, edging, trimming, and cleanup to keep your yard looking its best year-round. We tailor our schedule to your lawn's needs and the season.",
    quickReplies: [
      { label: 'Get a Quote', action: 'navigate', value: '/contact/' },
      { label: 'Other Services', action: 'reply', value: 'services' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },
  services_weed: {
    text: "We provide targeted weed control and prevention treatments to keep your lawn healthy and weed-free. Our approach combines pre-emergent and post-emergent treatments for the best results.",
    quickReplies: [
      { label: 'Get a Quote', action: 'navigate', value: '/contact/' },
      { label: 'Other Services', action: 'reply', value: 'services' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },
  services_hardscape: {
    text: "Our hardscaping services include patios, walkways, retaining walls, and other structural landscape features. We handle design and installation to transform your outdoor space.",
    quickReplies: [
      { label: 'Get a Quote', action: 'navigate', value: '/contact/' },
      { label: 'Other Services', action: 'reply', value: 'services' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },

  // --- Contact branch ---
  contact: {
    text: "We'd love to hear from you! How would you like to reach us?",
    quickReplies: [
      { label: 'Phone & Email', action: 'reply', value: 'contact_info' },
      { label: 'Request a Quote', action: 'reply', value: 'contact_quote' },
      { label: 'Visit Our Office', action: 'reply', value: 'contact_address' },
    ],
  },
  contact_info: {
    text: "You can reach us at:\n\n📞 (214) 802-7311\n✉️ info@primroselandscaping.com\n\nWe're happy to answer any questions!",
    quickReplies: [
      { label: 'Send a Message', action: 'navigate', value: '/contact/' },
      { label: 'Request a Quote', action: 'reply', value: 'contact_quote' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },
  contact_quote: {
    text: "To request a free quote, just fill out our contact form with a brief description of your project. We'll get back to you promptly with an estimate.",
    quickReplies: [
      { label: 'Open Contact Form', action: 'navigate', value: '/contact/' },
      { label: 'Call Us Instead', action: 'reply', value: 'contact_info' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },
  contact_address: {
    text: "Our office is located at:\n\nGateway Blvd N\nForney, TX 75126\n\nFeel free to reach out before stopping by!",
    quickReplies: [
      { label: 'Send a Message', action: 'navigate', value: '/contact/' },
      { label: 'Phone & Email', action: 'reply', value: 'contact_info' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },

  // --- FAQ branch ---
  faq: {
    text: "Here are some of the questions we get most often. What would you like to know?",
    quickReplies: [
      { label: 'Service Area', action: 'reply', value: 'faq_area' },
      { label: 'Licensed & Insured?', action: 'reply', value: 'faq_licensed' },
      { label: 'Pricing Info', action: 'reply', value: 'faq_pricing' },
      { label: 'Seasonal Services', action: 'reply', value: 'faq_seasonal' },
    ],
  },
  faq_area: {
    text: "We serve Forney, TX and the surrounding communities in the greater Dallas-Fort Worth area. If you're not sure whether we cover your area, just ask — we're happy to check!",
    quickReplies: [
      { label: 'Get a Quote', action: 'navigate', value: '/contact/' },
      { label: 'More Questions', action: 'reply', value: 'faq' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },
  faq_licensed: {
    text: "Yes! Primrose Landscaping LLC is a fully licensed and insured professional landscaping company. You can count on us to handle your property with care and accountability.",
    quickReplies: [
      { label: 'Our Services', action: 'reply', value: 'services' },
      { label: 'More Questions', action: 'reply', value: 'faq' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },
  faq_pricing: {
    text: "Pricing depends on the size of your property and the services you need. We offer free estimates — just reach out through our contact form or give us a call for a personalized quote.",
    quickReplies: [
      { label: 'Request a Quote', action: 'navigate', value: '/contact/' },
      { label: 'More Questions', action: 'reply', value: 'faq' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },
  faq_seasonal: {
    text: "We offer year-round service! In spring and summer we focus on mowing, trimming, and weed control. Fall and winter services include leaf cleanup, seasonal prep, and hardscape projects.",
    quickReplies: [
      { label: 'Our Services', action: 'reply', value: 'services' },
      { label: 'More Questions', action: 'reply', value: 'faq' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },
  faq_about: {
    text: "Primrose Landscaping LLC is a small, professional landscaping company based in Forney, TX. We're focused on delivering top-grade lawn maintenance with a customer-first approach.",
    quickReplies: [
      { label: 'Learn More', action: 'navigate', value: '/about/' },
      { label: 'More Questions', action: 'reply', value: 'faq' },
      { label: 'Back to Start', action: 'reply', value: 'welcome' },
    ],
  },

  // --- Fallback ---
  fallback: {
    text: "I'm not sure I understand that. I'm a simple demo bot — try using the buttons below, or contact us directly for help!",
    quickReplies: [
      { label: 'Our Services', action: 'reply', value: 'services' },
      { label: 'Contact Us', action: 'reply', value: 'contact' },
      { label: 'Common Questions', action: 'reply', value: 'faq' },
    ],
  },
};

export const keywordRules: Array<{ keywords: string[]; responseKey: string }> =
  [
    {
      keywords: ['lawn', 'mow', 'mowing', 'grass', 'yard', 'cut'],
      responseKey: 'services_lawn',
    },
    {
      keywords: ['weed', 'weeds', 'weed control'],
      responseKey: 'services_weed',
    },
    {
      keywords: [
        'hardscape',
        'hardscaping',
        'patio',
        'walkway',
        'retaining wall',
      ],
      responseKey: 'services_hardscape',
    },
    {
      keywords: ['service', 'services', 'offerings', 'what do you do'],
      responseKey: 'services',
    },
    {
      keywords: ['phone', 'call', 'email', 'number', 'reach'],
      responseKey: 'contact_info',
    },
    {
      keywords: ['quote', 'estimate', 'price', 'pricing', 'cost', 'how much'],
      responseKey: 'faq_pricing',
    },
    {
      keywords: ['address', 'office', 'location', 'where', 'visit'],
      responseKey: 'contact_address',
    },
    {
      keywords: ['contact', 'message', 'get in touch'],
      responseKey: 'contact',
    },
    {
      keywords: ['area', 'forney', 'dallas', 'serve', 'coverage'],
      responseKey: 'faq_area',
    },
    {
      keywords: ['licensed', 'insured', 'insurance', 'license'],
      responseKey: 'faq_licensed',
    },
    {
      keywords: ['season', 'seasonal', 'winter', 'summer', 'fall', 'spring'],
      responseKey: 'faq_seasonal',
    },
    {
      keywords: ['about', 'company', 'who', 'history', 'story'],
      responseKey: 'faq_about',
    },
    { keywords: ['hours', 'schedule', 'appointment'], responseKey: 'contact' },
    { keywords: ['help', 'hi', 'hello', 'hey'], responseKey: 'welcome' },
  ];

export const DEMO_BANNER =
  '🌿 This is a preview of what an AI assistant could do for your business website. Try it out!';
