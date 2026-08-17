export const company = {
  name: "Trilogy BPO",
  legalName: "Trilogy CX (Pty) Ltd",
  address: "Block B, Brightway Park, Salt River, Cape Town 7795",
  email: "info@trilogybpo.com",
  phoneUk: "+44 7458 158591",
  phoneSa: "+27 73 668 6096",
  whatsapp: "https://wa.me/27719691163?text=hi",
  booking: "mailto:info@trilogybpo.com?subject=Book%20a%20session",
} as const;

export type NavItem =
  | { label: string; href: string; children?: undefined }
  | {
      label: string;
      href?: undefined;
      children: { label: string; href: string }[];
    };

export const navLinks: NavItem[] = [
  { label: "Trilogy Digital", href: "/trilogy-digital" },
  { label: "Trilogy GCC", href: "/trilogy-gcc" },
  { label: "Team", href: "/#team" },
  { label: "Partners", href: "/#partners" },
];

export const heroStats = [
  { value: "30+", label: "Contact centres built worldwide" },
  { value: "10,000+", label: "Agent seats scaled globally" },
  {
    value: "12",
    label: "Years experience in building AI/ML platforms",
  },
  { value: "25+ yrs", label: "Combined leadership experience" },
] as const;

export type Offering = {
  index: string;
  key: string;
  name: string;
  kicker: string;
  headline: string;
  body: string;
  points: string[];
  image: string;
  video: string;
  imageAlt: string;
  href?: string;
};

export const offerings: Offering[] = [
  {
    index: "01",
    key: "bpo",
    name: "Trilogy BPO",
    kicker: "Outsourced contact centre",
    headline: "From voice, to digital, to autonomous CX.",
    body: "A turnkey contact centre on a fully integrated platform: voice, email, chat and back-office. Outsource marketing, customer service, sales, collections or retentions, with predictive AI/ML, RPA, analytics and live reporting built in.",
    points: [
      "Turnkey digital + autonomous",
      "Predictive AI / ML + RPA",
      "Voice · email · chat · back-office",
    ],
    image: "/img/offer-bpo.png",
    video: "/video/offer-bpo.mp4",
    imageAlt:
      "A contact-centre floor at night, rows of human agents in headsets lit by the green glow of their monitors, with an android among them.",
  },
  {
    index: "02",
    key: "gcc",
    name: "Trilogy GCC",
    kicker: "Global Capability Centres",
    headline: "Build your own centre in South Africa.",
    body: "We help international BPOs and enterprises stand up high-performance Global Capability Centres using our proven DBIT method: Design, Build, Innovate & Transfer. Deep local expertise in labour law, compliance, facilities and vendor ecosystems makes delivery fast, compliant and low-risk.",
    points: [
      "DBIT: Design · Build · Innovate · Transfer",
      "100 seats live in six weeks",
      "Compliance, facilities & people",
    ],
    image: "/img/offer-gcc.png",
    video: "/video/offer-gcc.mp4",
    imageAlt:
      "A team reviewing a glowing green holographic building floorplate in a dark fit-out space.",
    href: "/trilogy-gcc",
  },
  {
    index: "03",
    key: "ai",
    name: "Trilogy Ai",
    kicker: "Autonomous CX platform",
    headline: "Proven, customer-ready AI.",
    body: "One of the first proven autonomous customer-engagement platforms for sales, service, marketing, collections and retention. An agent-in-the-loop model lets people step in seamlessly when judgement, escalation or compliance is required. Already live with multiple clients.",
    points: [
      "Agent-in-the-loop model",
      "Live with multiple clients",
      "Higher conversion, lower cost",
    ],
    image: "/img/offer-ai.png",
    video: "/video/offer-ai.mp4",
    imageAlt:
      "A human hand and a robotic hand reaching toward a single glowing green point of light.",
  },
];

export type DemoTurn = {
  role: "customer" | "ai";
  text: string;
  approval?: string;
};

export const demoConversation: DemoTurn[] = [
  {
    role: "customer",
    text: "Hi, I've been charged twice for order #4821. Can you help?",
  },
  {
    role: "ai",
    text: "I can see two £49.00 charges on #4821. I've queued an instant refund for the duplicate; it'll clear in 3 to 5 working days.",
    approval: "Agent reviewed · approved",
  },
  {
    role: "customer",
    text: "Amazing, thank you. Will I get something in writing?",
  },
  {
    role: "ai",
    text: "Done — a confirmation email is on its way to the address on file, with the refund reference and the expected clearing date.",
  },
  {
    role: "customer",
    text: "Perfect. One more thing: can I change the delivery address for the reorder?",
  },
  {
    role: "ai",
    text: "Of course. I've updated the delivery address on #4821 and your future orders. Shall I resend the dispatch confirmation?",
    approval: "Agent reviewed · approved",
  },
  { role: "customer", text: "Yes please. You've been really helpful!" },
  {
    role: "ai",
    text: "Happy to help. Your reorder ships today and tracking will reach you within the hour. Anything else I can sort for you?",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
  bio?: string;
};

export const teamGroups: { title: string; members: TeamMember[] }[] = [
  {
    title: "Leadership Team",
    members: [
      {
        name: "Kobus van der Westhuizen",
        role: "CEO & Founder",
        img: "/team/kobus.jpg",
        linkedin:
          "https://www.linkedin.com/in/kobus-van-der-westhuizen-trilogy-bpo/",
      },
      {
        name: "Tanya Phillips",
        role: "Chief Operating Officer",
        img: "/team/tanya.jpg",
        linkedin: "https://www.linkedin.com/in/tanya-phillips-sa/",
      },
      {
        name: "Rudi Jansen",
        role: "Director of People",
        img: "/team/rudi.jpg",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Craig Shalekoff",
        role: "CTO & Founder",
        img: "/team/craig.jpg",
        linkedin: "https://www.linkedin.com/in/craig-shalekoff-digital-tribe-bpo/",
      },
      {
        name: "Vancyon van Zyl",
        role: "Director of Transitions",
        img: "/team/vancyon.jpg",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
    ],
  },
  {
    title: "Team",
    members: [
      {
        name: "Keanu Vieira",
        role: "Head of CX Solutions",
        img: "/team/keanu.jpg",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Jason Luboyera",
        role: "Head of Digital",
        img: "/team/jason.png",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Tish Carruthers",
        role: "Marketing & Intelligence Lead",
        img: "/team/tish.jpg",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Brandon Grant",
        role: "Head of Digital Contact",
        img: "/team/brandon.png",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Lizelle McLaughlin",
        role: "Head of Projects",
        img: "/team/lizelle.png",
      },
    ],
  },
  {
    title: "Board Members",
    members: [
      {
        name: "Kobus van der Westhuizen",
        role: "CEO & Founder",
        img: "/team/kobus.jpg",
        linkedin:
          "https://www.linkedin.com/in/kobus-van-der-westhuizen-trilogy-bpo/",
      },
      {
        name: "Craig Shalekoff",
        role: "CTO & Founder",
        img: "/team/craig.jpg",
        linkedin: "https://www.linkedin.com/in/craig-shalekoff-digital-tribe-bpo/",
      },
      {
        name: "Frank Kilbourn",
        role: "Non-Executive Director",
        img: "/team/frank.jpg",
        linkedin: "https://www.linkedin.com/in/frank-kilbourn-31ba97b9/",
      },
      {
        name: "Jonathan Broll",
        role: "Non-Executive Director",
        img: "/team/jonathan.jpg",
        linkedin: "https://www.linkedin.com/in/jonathan-broll-ab5a61b5/",
      },
      {
        name: "Heather Wallace",
        role: "Non-Executive Director",
        img: "/team/heather.jpg",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
    ],
  },
];

/** Flat list kept for any consumers that still map a single team array. */
export const team = teamGroups.flatMap((g) => g.members);

export const whySaFeature = [
  {
    stat: "60%",
    title: "Cost efficiency meets quality",
    body: "Up to 60% lower operational costs than UK and USA markets, substantial wage arbitrage without compromising quality.",
  },
  {
    stat: "#1",
    title: "Cape Town: the premium hub",
    body: "The leading BPO destination, with rapid growth, exceptional infrastructure and the largest skilled talent pool in the region.",
  },
] as const;

export const whySaSecondary = [
  {
    title: "Industry recognition",
    body: "Ranked a top-three global BPO destination for three consecutive years by leading industry analysts.",
  },
  {
    title: "Time-zone synergy",
    body: "GMT+2 alignment, a 1 to 2 hour difference with the UK and extended USA coverage.",
  },
  {
    title: "Quality talent pool",
    body: "A young, educated and highly professional workforce ready to deliver exceptional customer experiences.",
  },
  {
    title: "Language & cultural excellence",
    body: "Over 95% workforce proficiency in English with neutral accents that resonate with Western consumers.",
  },
] as const;

/** Employee value proposition. `icon` is an inline SVG path set drawn at 24x24. */
export const evp = [
  {
    title: "Wellbeing support",
    body: "On-site counsellors and a culture that genuinely supports mental and physical health.",
    shapes: [
      { c: { cx: 9, cy: 8, r: 3.2 } },
      { c: { cx: 16.5, cy: 9.5, r: 2.4 } },
      { d: "M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" },
      { d: "M15.5 14.6c2.2.2 3.9 1.7 4.5 4.4" },
    ],
  },
  {
    title: "Unapologetically inclusive",
    body: "DE&I isn't a policy, it's who we are. Every voice belongs here.",
    shapes: [
      { c: { cx: 12, cy: 5.5, r: 2.2 } },
      { c: { cx: 5.5, cy: 17, r: 2.2 } },
      { c: { cx: 18.5, cy: 17, r: 2.2 } },
      { d: "M10.7 7.4 6.6 15m6.7-7.6 4.1 7.6M7.7 17h8.6" },
    ],
  },
  {
    title: "Competitive salary",
    body: "Market-aligned compensation that recognises and rewards the value you bring.",
    shapes: [
      { c: { cx: 12, cy: 12, r: 8.5 } },
      {
        d: "M15 9.2c-.6-1-1.6-1.5-3-1.5-1.8 0-3 .9-3 2.2 0 3 6 1.6 6 4.5 0 1.3-1.2 2.2-3 2.2-1.4 0-2.4-.5-3-1.5M12 6v1.7M12 16.6v1.7",
      },
    ],
  },
  {
    title: "Meaningful benefits",
    body: "Relevant, real-world benefits designed around the lives of our people.",
    shapes: [
      {
        d: "M12 20s-7.5-4.6-7.5-10A4.4 4.4 0 0 1 9 5.5c1.3 0 2.4.6 3 1.6.6-1 1.7-1.6 3-1.6a4.4 4.4 0 0 1 4.5 4.5c0 5.4-7.5 10-7.5 10Z",
      },
    ],
  },
  {
    title: "Leadership development",
    body: "We invest in growing leaders at every level, from first-time managers to executives.",
    shapes: [{ d: "M4 19 10 13l3.5 3.5L20 10" }, { d: "M14.5 10H20v5.5" }],
  },
  {
    title: "Reward & recognition",
    body: "Celebrating contributions big and small, because people deserve to feel seen.",
    shapes: [
      { d: "m12 4 2.4 5 5.6.7-4.1 3.8 1 5.5-4.9-2.7-4.9 2.7 1-5.5L4 9.7 9.6 9 12 4Z" },
    ],
  },
] as const;

export type BrandGroup = {
  label: string;
  logos: { name: string; src: string }[];
};

export const brandGroups: BrandGroup[] = [
  {
    label: "Global brands",
    logos: [
      { name: "Aldi", src: "/pool/brands/aldi.png" },
      { name: "John Lewis", src: "/pool/brands/john-lewis.png" },
      { name: "JD", src: "/pool/brands/jd.png" },
      { name: "B&Q", src: "/pool/brands/b-and-q.png" },
      { name: "British Gas", src: "/pool/brands/british-gas.png" },
      { name: "Pizza Hut", src: "/pool/brands/pizza-hut.png" },
      { name: "Virgin", src: "/pool/brands/virgin.png" },
      { name: "Peloton", src: "/pool/brands/peloton.png" },
      { name: "Iceland", src: "/pool/brands/iceland.png" },
      { name: "DFS", src: "/pool/brands/dfs.png" },
      { name: "PPL PRS", src: "/pool/brands/ppl-prs.png" },
    ],
  },
  {
    label: "Local brands",
    logos: [
      { name: "Mercedes-Benz", src: "/pool/brands/mercedes-benz.png" },
      { name: "Nando's", src: "/pool/brands/nandos.png" },
      { name: "Vodacom", src: "/pool/brands/vodacom.png" },
      { name: "Burger King", src: "/pool/brands/burger-king.png" },
      { name: "hc", src: "/pool/brands/hc.png" },
      { name: "Sun International", src: "/pool/brands/sun-international.png" },
      { name: "KFC", src: "/pool/brands/kfc.png" },
      { name: "Pick n Pay", src: "/pool/brands/pick-n-pay.png" },
    ],
  },
  {
    label: "GCCs",
    logos: [
      { name: "Startek", src: "/pool/brands/startek.png" },
      { name: "Ascensos", src: "/pool/brands/ascensos.png" },
      { name: "Ventrica", src: "/pool/brands/ventrica.png" },
    ],
  },
  {
    label: "Telco brands",
    logos: [
      { name: "Cell C", src: "/pool/brands/telco/cellc.png" },
      { name: "Vuma", src: "/pool/brands/telco/vuma.png" },
      { name: "MTN", src: "/pool/brands/telco/mtn.png" },
      { name: "Telkom", src: "/pool/brands/telco/telkom.png" },
      { name: "Afrihost", src: "/pool/brands/telco/afrihost.png" },
      { name: "Webafrica", src: "/pool/brands/telco/webafrica.png" },
      { name: "Fibertime", src: "/pool/brands/telco/fibertime.png" },
      { name: "Vodacom", src: "/pool/brands/telco/vodacom.png" },
      { name: "Herotel", src: "/pool/brands/telco/herotel.png" },
      { name: "Cool Ideas", src: "/pool/brands/telco/coolideas.png" },
      { name: "SA Digital Villages", src: "/pool/brands/telco/sadv.png" },
      { name: "Telecom Namibia", src: "/pool/brands/telco/telecom-namibia.png" },
      { name: "DFA", src: "/pool/brands/telco/dfa.png" },
      { name: "DF", src: "/pool/brands/telco/df.png" },
      { name: "Rain", src: "/pool/brands/telco/rain.png" },
      { name: "Kliq", src: "/pool/brands/telco/kliq.png" },
      { name: "eSimplified", src: "/pool/brands/telco/esimplified.png" },
    ],
  },
];

export const accreditations = [
  { name: "BPESA", src: "/pool/accreditations/bpesa.png" },
  { name: "ISO 27001", src: "/pool/accreditations/iso-27001.png" },
  { name: "Broadbrand", src: "/pool/accreditations/broadbrand.png" },
  { name: "MVNE", src: "/pool/accreditations/mvne.png" },
  { name: "Cape BPO", src: "/pool/accreditations/capebpo.png" },
  { name: "CCMG", src: "/pool/accreditations/ccmg.png" },
] as const;

export const awards = [
  {
    year: "2016",
    text: "CCMG Best Outsourced Partnership Winner · BPESA Best Outsourced Winner & Best Use of Social Media",
  },
  {
    year: "2017",
    text: "BPESA / CCMG Best Outsourced Contact Centre, Best Use of Social Media & Technology Innovation",
  },
  {
    year: "2018–2019",
    text: "Best Outsourced Contact Centre Finalist · Best Outsourced Partnership (Engage UK) Finalist · BPESA Best Impact Sourcing & Service Provider Winner",
  },
  {
    year: "2021",
    text: "Contact Centre World, Best Partnership. Ranked #1 EMEA and #2 globally",
  },
  {
    year: "2022–2023",
    text: "BPESA Best Partnership & Shared Services Finalist · Cape BPO Top Technical Innovation Finalist · BPESA & Cape BPO National Top Service Provider Award Winner",
  },
  {
    year: "2025",
    text: "Cape BPO & BPESA Top Support Service Provider Finalist · BPESA Top BPO Operator Finalist & Runner-Up",
  },
] as const;

export const aiJourney = [
  {
    title: "AI agents (chat / voice)",
    kicker: "Handle Tier-1 inquiries 24/7",
    body: "Claim status, new claims and routine requests, resolved without a queue.",
    icon: "/pool/icons/icon-57.svg",
  },
  {
    title: "Agent assist",
    kicker: "Boost agent productivity & accuracy",
    body: "Real-time suggestions during calls and chats.",
    icon: "/pool/icons/icon-58.svg",
  },
  {
    title: "Knowledge base (AI-driven)",
    kicker: "Improve self-service & reduce contact volume",
    body: "Contextual answers drawn from the website and app.",
    icon: "/pool/icons/icon-59.svg",
  },
  {
    title: "Auto QA & sentiment analysis",
    kicker: "Full coverage, unhappy customers flagged live",
    body: "Reviews 100% of interactions for compliance and quality, and triggers supervisor intervention the moment sentiment drops.",
    icon: "/pool/icons/icon-60.svg",
  },
  {
    title: "Personalisation AI",
    kicker: "Drive loyalty through tailored engagement",
    body: "Product recommendations based on behaviour.",
    icon: "/pool/icons/icon-62.svg",
  },
  {
    title: "Predictive customer service",
    kicker: "Pre-empt issues before customers reach out",
    body: "Anticipate needs from signals across the journey.",
    icon: "/pool/icons/icon-63.svg",
  },
] as const;

export const aiProducts = [
  {
    name: "anychat.ai",
    kicker: "Real-time language translation",
    body: "Latest large language models for real-time translation, so any agent can serve any customer worldwide, regardless of language. Chats appear in the customer's language while reflecting in the agent's native language.",
    points: ["Real-time LLM translation", "Any agent, any language", "Seamless global service"],
  },
  {
    name: "guruvoice.ai",
    kicker: "Fully automated AI voice",
    body: "A fully automated AI voice platform with LLM capabilities for inbound customer service and proactive outbound for services, sales and collections — with natural conversation flows.",
    points: ["Inbound & outbound voice", "LLM conversation flows", "Service, sales & collections"],
  },
  {
    name: "acwa.ai",
    kicker: "After-call work assistant",
    body: "Uses chat or voice interactions to predict an agent's next steps, automating follow-up actions without human effort — cutting handle time while improving accuracy.",
    points: ["Predicts next steps", "Automates follow-ups", "Lower AHT, higher accuracy"],
  },
  {
    name: "click2cash.ai",
    kicker: "Meta marketing & sales",
    body: "An integrated Meta (Facebook and WhatsApp) marketing and sales platform that converts adverts and likes directly into sales — awareness through purchase in-channel.",
    points: ["Facebook & WhatsApp commerce", "Automated sales funnel", "Real-time conversion tracking"],
  },
  {
    name: "collect.ai",
    kicker: "Digital & autonomous collections",
    body: "Combines AI-driven customer segmentation, predictive analytics and automated multi-channel outreach to maximise recovery while protecting relationships.",
    points: ["Payment propensity scoring", "Multi-channel outreach", "Compliance-first"],
  },
  {
    name: "hr.ai",
    kicker: "Intelligent recruitment & onboarding",
    body: "A global portal to excite, inform and screen employees — automating screening, digital offers, virtual welcome and comprehensive onboarding.",
    points: ["Automated candidate screening", "Digital onboarding", "Virtual employee engagement"],
  },
] as const;

/** Trilogy Ai / Autonomous CX page — from AI presentation */
export const aiHero = {
  kicker: "Offering 03 · Autonomous CX",
  title: "Scaling intelligence. Humanizing automation.",
  lead: "Next-generation Agentic AI and digital solutions built inside real BPO constraints. AI doesn't replace contact centres — it upgrades them.",
} as const;

export const aiProposition = [
  {
    title: "Agentic AI",
    body: "Deploy AI agents capable of planning and executing multi-step workflows — moving beyond simple Q&A to actual problem resolution.",
  },
  {
    title: "24/7 intelligent service",
    body: "Instant, high-quality support across digital channels without the overhead of around-the-clock human staffing.",
  },
  {
    title: "Predictive engagement",
    body: "Anticipate customer needs and intent before they express them — transforming reactive support into proactive service.",
  },
] as const;

export const aiApplicationAreas = [
  {
    title: "Customer-facing automation",
    items: [
      "Conversational AI for containment, triage and self-service",
      "Smart routing and intent detection before human handoff",
      "24/7 availability without 24/7 staffing",
    ],
  },
  {
    title: "Agent augmentation",
    items: [
      "Real-time agent assist and response guidance",
      "Knowledge retrieval and summarisation",
      "Automated after-call work and case notes",
    ],
  },
  {
    title: "Back-office and operations",
    items: [
      "Ticket classification and prioritisation",
      "QA automation and sentiment analysis",
      "Forecasting, demand shaping and performance insight",
    ],
  },
] as const;

export const aiHumanLoop = [
  {
    index: "01",
    title: "Sentiment & empathy",
    body: "AI monitors 100% of conversations for emotional cues, flagging complex or high-tension cases for immediate human intervention.",
  },
  {
    index: "02",
    title: "Real-time agent assist",
    body: "AI listens to live calls and feeds agents the correct scripts, knowledge articles and compliance disclosures in real time.",
  },
  {
    index: "03",
    title: "Continuous learning loop",
    body: "Every human resolution for a complex query is logged and fed back into the AI — making the system smarter with every interaction.",
  },
  {
    index: "04",
    title: "The safety net",
    body: "Mandatory Human Override protocols — AI never makes final decisions on sensitive matters without human validation.",
  },
] as const;

export const aiFailVsSucceed = {
  fail: [
    "Built without operational ownership",
    "Disconnected from live CX workflows",
    "No governance, escalation or human override",
    "Over-promised ROI, under-delivered outcomes",
    "Data privacy and protection gaps",
    "Legacy systems integration challenges",
  ],
  succeed: [
    "AI deployed inside BPO and GCC operations",
    "Real agents, real customers, real constraints",
    "Continuous optimisation, not one-off installs",
    "Commercial models aligned to outcomes, not licenses",
    "Fully compliant SLMs for GDPR and POPIA",
    "Partnership with leading integrations partners in SA",
  ],
} as const;

export const aiMetrics = [
  {
    value: 27,
    suffix: "%",
    label: "AHT reduction",
    body: "Organisations using AI report up to 27% reduction in Average Handle Time.",
  },
  {
    value: 35,
    suffix: "%",
    label: "Quality & CSAT lift",
    body: "100% QA coverage on every conversation — with reported CSAT gains via sentiment analysis.",
  },
  {
    value: 20,
    suffix: "%",
    label: "Revenue optimisation",
    body: "AI outreach outperforms traditional methods by 20% in sales and collections.",
  },
  {
    value: 90,
    suffix: "%",
    label: "At-risk identification",
    body: "AI identifies at-risk customers with 90% accuracy for proactive intervention.",
  },
] as const;

export const aiBottomLine = [
  {
    title: "Cost-to-serve",
    body: "AI-enabled CX operations can reduce cost-to-serve by 20–30% when embedded correctly.",
  },
  {
    title: "Churn defence",
    body: "Sentiment-driven intervention can lift long-term customer lifetime value by 15–20%.",
  },
  {
    title: "Containment focus",
    body: "Automating 70–80% of repetitive queries frees experts for high-empathy, complex work.",
  },
] as const;

/** Trilogy BPO page — from Accelerated CX presentation */
export const bpoHero = {
  kicker: "Offering 01 · Outsourced contact centre",
  title: "Accelerated CX.",
  lead: "Decades of expertise, ready to scale. High-performance contact centre operations in South Africa — just add humans.",
} as const;

export const bpoOperate = [
  {
    title: "Geographies",
    body: "25+ years supporting UK and USA markets — helping prominent brands land in South Africa with native English-speaking talent and seamless time-zone coverage.",
  },
  {
    title: "Verticals",
    body: "Deep experience across telecommunications, utilities, insurance, retail, healthcare, technology and e-commerce — brands such as Thames Water, British Gas, Vodafone, John Lewis, Aldi, KFC and Virgin.",
  },
  {
    title: "Functions",
    body: "Customer service & IT support, chat commerce & digital engagement, back-office administration, digital & AI enablement, and automation & RPA implementation.",
  },
] as const;

export const bpoPillars = [
  {
    title: "Data & AI driven automation",
    body: "Machine learning and AI to predict needs, optimise routing and automate routine interactions — without sacrificing service quality.",
  },
  {
    title: "Human, digital & AI orchestration",
    body: "Blend human expertise with digital channels and AI so every interaction gets the right outcome.",
  },
  {
    title: "AI incubator & Test Kitchen",
    body: "An innovation lab that continuously develops and proves new CX technologies before they touch live operations.",
  },
  {
    title: "Award-winning excellence",
    body: "A globally recognised team delivering results through innovation and unwavering commitment to quality.",
  },
  {
    title: "Boutique service, high care",
    body: "Personalised attention with enterprise capability — experiences that exceed expectations.",
  },
  {
    title: "Industry expertise",
    body: "Telecommunications, retail, motor, utilities and more — we understand your challenges before day one.",
  },
] as const;

export const bpoWhyAi = {
  problem: [
    "Labour-only scaling increases cost linearly",
    "Channel shift and automation are often bolt-ons",
    "AI projects fail when CX teams are removed from operations",
  ],
  model: [
    "Human-in-the-loop AI — agents supervise, override and handle exceptions",
    "Digital-first CX — deflect demand before it hits expensive voice queues",
    "Automation inside operations, not beside them",
  ],
} as const;

export const bpoAchievements = [
  {
    value: "45K",
    label: "Jobs created",
    body: "Significant positive impact on South Africa's economy and communities over 20 years.",
  },
  {
    value: "20",
    label: "Years of experience",
    body: "Two decades delivering exceptional value across industries and geographies.",
  },
  {
    value: "8",
    label: "Years in AI / ML",
    body: "Building AI, machine-learning platforms, analytics and digital automation tools.",
  },
  {
    value: "36",
    label: "Blue-chip centres built",
    body: "Contact centres launched for blue-chip companies across South Africa.",
  },
] as const;

export const bpoKitchenPhases = [
  {
    index: "00",
    title: "Discover",
    body: "Data-first, not opinion-first. Trilogy Discover ingests live interaction data; Genii Analytics surfaces repeat contact drivers, failure demand, handle-time inflation and deflection gaps.",
  },
  {
    index: "01",
    title: "Design",
    body: "Blueprint digital deflection and automated workflows before a line of code — outcomes, metrics, risk boundaries, agent-in-the-loop control and compliance from day one.",
  },
  {
    index: "02",
    title: "Test",
    body: "Pilot in a risk-free sandbox with real scenarios and volumes. Measure accuracy, containment, conversion and CX in real time — fail fast in isolation, not in live ops.",
  },
  {
    index: "03",
    title: "Improve",
    body: "Iterate on models, workflows, prompts and rules from live pilot results. Address edge cases early; incorporate agent and customer feedback.",
  },
  {
    index: "04",
    title: "Deploy & scale",
    body: "Move validated solutions into production. Ramp volumes with monitoring, change management and continuous performance tracking.",
  },
] as const;

export const bpoKitchenDiff = [
  {
    title: "Trilogy Discover",
    body: "LLM-based learning bot analysing real customer interactions — not fake lab data.",
  },
  {
    title: "Genii Analytics",
    body: "Deep root-cause analytics across voice, chat, digital and back-office to find the 20% of processes driving 80% of cost.",
  },
  {
    title: "Human-in-the-loop",
    body: "Governance from day one — quantify deflection, deploy only what works.",
  },
] as const;

export type PartnerCategory = {
  name: string;
  letter?: string;
  /** Accent from a logo in the row — used for letter badge + heading. */
  color?: string;
  /** Text-only chips render when a logo is not supplied. */
  providers: { name: string; logo?: string; icon?: string }[];
};

export const partnerCategories: PartnerCategory[] = [
  {
    name: "Channels",
    letter: "C",
    color: "#0E7C46", // WhatsApp green
    providers: [
      { name: "Voice", icon: "/pool/partners/channels/voice.svg" },
      { name: "WhatsApp", icon: "/pool/partners/channels/whatsapp.svg" },
      { name: "Email", icon: "/pool/partners/channels/email.svg" },
      { name: "SMS", icon: "/pool/partners/channels/sms.svg" },
      { name: "Instagram", icon: "/pool/partners/channels/instagram.svg" },
      { name: "Messenger", icon: "/pool/partners/channels/messenger.svg" },
      { name: "RCS", icon: "/pool/partners/channels/rcs.svg" },
    ],
  },
  {
    name: "Agents",
    letter: "A",
    color: "#1A9B94", // Zendesk teal (lifted for dark backgrounds)
    providers: [
      { name: "QContact", logo: "/pool/partners/qcontact.png" },
      { name: "Zendesk", logo: "/pool/partners/Zendesk-Logo.png" },
      {
        name: "AWS Connect",
        logo: "/pool/partners/amazon-connect-logo-large-3652689061-1.webp",
      },
      {
        name: "InfoBip",
        logo: "/pool/partners/Infobip_logo_horizontal_orange.png",
      },
    ],
  },
  {
    name: "RPA / Bot",
    letter: "R",
    color: "#0081FB", // Meta blue
    providers: [
      { name: "QContact", logo: "/pool/partners/qcontact.png" },
      { name: "Zendesk", logo: "/pool/partners/Zendesk-Logo.png" },
      {
        name: "AWS Connect",
        logo: "/pool/partners/amazon-connect-logo-large-3652689061-1.webp",
      },
      { name: "Meta", logo: "/pool/partners/meta_PNG7.png" },
      {
        name: "InfoBip",
        logo: "/pool/partners/Infobip_logo_horizontal_orange.png",
      },
    ],
  },
  {
    name: "Orchestration",
    letter: "O",
    color: "#EA4B71", // n8n
    providers: [
      { name: "QContact", logo: "/pool/partners/qcontact.png" },
      { name: "Zendesk", logo: "/pool/partners/Zendesk-Logo.png" },
      { name: "n8n", logo: "/pool/partners/n8n-icon.webp" },
      {
        name: "Microsoft Power Automate",
        logo: "/pool/partners/power-automate.svg",
      },
      {
        name: "InfoBip",
        logo: "/pool/partners/Infobip_logo_horizontal_orange.png",
      },
    ],
  },
  {
    name: "ETL",
    letter: "E",
    color: "#FA4616", // UiPath
    providers: [
      { name: "QContact", logo: "/pool/partners/qcontact.png" },
      { name: "Zendesk", logo: "/pool/partners/Zendesk-Logo.png" },
      { name: "Azure AI", logo: "/pool/partners/azure-ai.svg" },
      { name: "UiPath", logo: "/pool/partners/UiPath-Logo.png" },
      { name: "AWS Glue", logo: "/pool/partners/aws-glue.svg" },
    ],
  },
  {
    name: "Reporting",
    letter: "P",
    color: "#E97627", // Tableau
    providers: [
      { name: "Amazon QuickSight", logo: "/pool/partners/quicksight.webp" },
      { name: "Power BI", logo: "/pool/partners/Power-BI-Logo.png" },
      { name: "Qlik", logo: "/pool/partners/Qlik_Logo.svg.webp" },
      { name: "Tableau", logo: "/pool/partners/Tableau-Symbol.png" },
    ],
  },
  {
    name: "Development Partners",
    letter: "D",
    color: "#3D5A80", // Codified navy (lifted)
    providers: [
      { name: "Codified", logo: "/pool/partners/codified.png" },
      { name: "BBD Software", logo: "/pool/partners/bbd-software.svg" },
    ],
  },
];

export const discoveryEngines = [
  { name: "genii", logo: "/pool/partners/genii.svg" },
] as const;
export const discoveryLabel = "Analytics and deep root cause engine";

export const insightsPapers = [
  {
    type: "White paper",
    pages: "6 pages",
    title: "Choosing the Right Offshore Model in South Africa",
    body: "EOR vs BPO vs GCC — an unbiased business case for leaders deciding how to build, buy, or borrow offshore capability.",
    href: "/insights/offshore/Trilogy_Offshore_Models_White_Paper.pdf",
  },
  {
    type: "Industry report",
    pages: "38 pages",
    title: "The UK Contact Centre Outsourcing Report 2025",
    body: "A CCMA research initiative on the UK contact centre outsourcing market — trends, buyer priorities and delivery models.",
    href: "/insights/market/CCMA-Contact-Centre-Outsourcing-Report-May-2025.pdf",
  },
  {
    type: "Industry report",
    pages: "94 pages",
    title: "South Africa's GBS Value Proposition",
    body: "BPESA's June 2025 refresh on South Africa as a Global Business Services destination — talent, cost, capability and competitive position.",
    href: "/insights/market/BPESA-South-Africa-GBS-Value-Proposition.pdf",
  },
] as const;

export type InsightPost = {
  type: string;
  mins: string;
  title: string;
  body: string;
  date: string;
  slug: string;
};

/** Perspective posts — empty while we rebuild insights from real assets. */
export const insightsPosts: readonly InsightPost[] = [];

/* ---------------------------------- About --------------------------------- */

export const aboutStats = [
  {
    value: "45K",
    label: "Jobs created",
    body: "Significant positive impact on South Africa's economy and communities over 20 years.",
  },
  {
    value: "20+",
    label: "Years of experience",
    body: "Two decades of proven, exceptional value across multiple industries and geographies.",
  },
  {
    value: "13",
    label: "Years experience in ML",
    body: "Developing AI, machine-learning platforms, analytics and digital automation tools.",
  },
  {
    value: "36",
    label: "Blue-chip centres built",
    body: "Contact centres built and launched for blue-chip companies across South Africa.",
  },
] as const;

export const aboutExpertise = [
  {
    title: "Geographies covered",
    body: "Over 25 years supporting predominantly the UK and USA markets, helping prominent brands land successfully in South Africa. Seamless service delivery across time zones with native English-speaking talent.",
    items: [] as string[],
  },
  {
    title: "Verticals covered",
    body: "Previously worked with Thames Water, British Gas, Vodafone, John Lewis, Aldi, KFC and Virgin, among others.",
    items: [
      "Technology & e-commerce",
      "Healthcare & insurance",
      "Retail & telecommunications",
      "Utilities & financial services",
      "Travel, tourism & hospitality",
      "Automotive",
    ],
  },
  {
    title: "Functions covered",
    body: "A focused, niche offering to ensure excellence in every engagement.",
    items: [
      "Customer service & IT support",
      "Chat commerce & digital engagement",
      "Back-office administration",
      "Digital & AI enablement",
      "Automation & RPA implementation",
    ],
  },
] as const;

/* ----------------------------- Trilogy Digital ---------------------------- */

export const digitalStats = [
  { value: "25+ Years", label: "UK-market heritage" },
  { value: "1,000+ / 1,400+", label: "Current / 24-mo scalable FTE" },
  { value: "40–60%", label: "Cost saving vs UK onshore" },
  { value: "6", label: "Proprietary AI platforms" },
] as const;

export const digitalWhy = [
  {
    text: "Premium (Boutique) Customer Service, Back Office and Tech Support BPO partner.",
    paths: ["M6 3h12l3 6-9 12L3 9z", "M3 9h18", "M9.5 3 8 9l4 12 4-12-1.5-6"],
  },
  {
    text: "Enterprise ready, Ai-enabled.",
    paths: ["M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z", "M9 12l2 2 4-4"],
  },
  {
    text: "High-quality, owner-led, high-touch delivery partner that competes on quality first and cost second.",
    circles: [
      { cx: 9, cy: 8, r: 3.2 },
      { cx: 16.5, cy: 9.5, r: 2.4 },
    ],
    paths: [
      "M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5",
      "M15.5 14.6c2.2.2 3.9 1.7 4.5 4.4",
    ],
  },
  {
    text: "Scale, technology, and client portfolio to prove it.",
    paths: ["M3 21h18", "M6 21V11", "M12 21V4", "M18 21v-7"],
  },
] as const;

export const digitalDo = [
  {
    text: "Omnichannel — voice, WhatsApp, chat, email, social",
    paths: [
      "M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z",
      "M8 10h.01M12 10h.01M16 10h.01",
    ],
  },
  {
    text: "Complaints Intelligence — 5-layer root cause model",
    circles: [{ cx: 11, cy: 11, r: 6 }],
    paths: ["M20 20l-3.6-3.6", "M8.5 9h5M8.5 11h5M8.5 13h3"],
  },
  {
    text: "RPA back-office — 40–60% labour reduction",
    circles: [{ cx: 12, cy: 12, r: 3 }],
    paths: [
      "M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1",
    ],
  },
  {
    text: "AI-assisted retention — automated save & churn prevention",
    paths: ["M12 20S4 15 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11z"],
  },
  {
    text: "ITIL 4 helpdesk — L1/L2/L3 tiered support",
    paths: [
      "M4 13v-2a8 8 0 0 1 16 0v2",
      "M6 11h1v5H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z",
      "M18 11h-1v5h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z",
      "M18 16v1a3 3 0 0 1-3 3h-3",
    ],
  },
] as const;

export const digitalSites = [
  { name: "Mutual Park, Cape Town", tag: "primary UK site, 5-star green campus" },
  { name: "Century City, Cape Town", tag: "150+ FTE, scalable to 300" },
  { name: "Rosebank Quarters, Johannesburg", tag: "200+ FTE, scalable to 400" },
  { name: "Maharishi Institute, Johannesburg", tag: "scalable to 200 FTE" },
  { name: "National work-from-home layer", tag: "flexible surge capacity" },
] as const;

export const digitalOfferings = [
  {
    index: "01",
    name: "Trilogy BPO",
    tag: "Your Contract, Your Choice",
    body: "Outsource your contact centre to Trilogy in South Africa. Modern technology platforms in a ready state — just add humans — spanning voice, digital channels and AI-powered automation at significantly reduced cost.",
  },
  {
    index: "02",
    name: "Trilogy GCC",
    tag: "Build Your Own",
    body: "Build your own capability centre in South Africa with our guidance. Our DBIT (Design, Build, Innovate, Transfer) model delivers 20–30% savings vs. traditional outsourcing while you retain complete control.",
    href: "/trilogy-gcc",
  },
  {
    index: "03",
    name: "Trilogy Ai",
    tag: "Platform Access",
    body: 'License our award-winning AI-enabled digital and autonomous platforms for service, sales, marketing and collections — always deployed "human in the loop."',
  },
] as const;

export const digitalAiSuite = [
  {
    name: "guruvoice.ai",
    body: "autonomous AI voice (inbound & outbound)",
    rects: [{ x: 9, y: 3, width: 6, height: 11, rx: 3 }],
    paths: ["M5 11a7 7 0 0 0 14 0", "M12 18v3"],
  },
  {
    name: "agentpilot.ai",
    body: "real-time agent assist & guidance",
    paths: ["M4 4l6 16 2.5-6.5L19 11z"],
  },
  {
    name: "acwa.ai",
    body: "after-call work automation",
    paths: [
      "M4 6l1.5 1.5L8 5",
      "M4 12l1.5 1.5L8 11",
      "M4 18l1.5 1.5L8 17",
      "M11 6h9M11 12h9M11 18h6",
    ],
  },
  {
    name: "retain.ai",
    body: "automated churn & retention offers",
    paths: ["M12 20S4 15 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11z"],
  },
  {
    name: "collect.ai",
    body: "digital autonomous collections",
    ellipses: [{ cx: 12, cy: 6, rx: 7, ry: 3 }],
    paths: [
      "M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6",
      "M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6",
    ],
  },
  {
    name: "hire.ai",
    body: "intelligent recruitment & onboarding",
    circles: [{ cx: 10, cy: 8, r: 3.2 }],
    paths: [
      "M4 19c.6-3.4 2.9-5.2 6-5.2 1 0 1.9.2 2.7.5",
      "M18 14v6M15 17h6",
    ],
  },
] as const;

export const digitalSecurity = [
  "We are ISO 27001 and PCI DSS certified",
  "Cyber Essentials+ aligned with Huntress EPP for all our end points",
  "Fully compliant with UK GDPR and POPIA",
  "Technology strategic partnerships with InfoBip, AWS, Azure, Zendesk",
  "System integration and dev partnership with BBD and Codified",
] as const;

export const digitalAwards = [
  {
    year: "2016",
    text: "CCMG Best Outsourced Partnership Winner · BPESA Best Outsourced Winner",
  },
  {
    year: "2017",
    text: "BPESA / CCMG Best Outsourced Contact Centre, Best Use of Social Media & Technology Innovation",
  },
  {
    year: "2018–2019",
    text: "Best Outsourced Contact Centre Finalist · Best Outsourced Partnership (Engage UK) Finalist · BPESA Best Impact Sourcing & Service Provider Winner",
  },
  {
    year: "2021",
    text: "Contact Centre World, Best Partnership. Ranked #1 EMEA and #2 globally",
  },
  {
    year: "2022–2023",
    text: "BPESA Best Partnership & Shared Services Finalist · Cape BPO Top Technical Innovation Finalist · BPESA & Cape BPO National Top Service Provider Award Winner",
  },
  {
    year: "2025",
    text: "Cape BPO & BPESA Top Support Service Provider Finalist · BPESA Top BPO Operator Finalist & Runner-Up",
  },
] as const;

/** Trilogy GCC / DBIT page content — from GCC presentation */
export const gccHero = {
  kicker: "Offering 02 · Global Capability Centres",
  title: "From outsourcing to ownership.",
  lead: "Move beyond outsourcing. Design, Build, Innovate, Transfer — your risk-mitigated roadmap to a fully-owned Center of Excellence in South Africa.",
} as const;

export const gccProposition = [
  {
    title: "Total control",
    body: "You own the culture, the processes and the data — ensuring 100% alignment with your brand's global standards.",
  },
  {
    title: "Talent longevity",
    body: "GCC employees in South Africa exhibit 40% higher retention rates than those in vendor-outsourced environments.",
  },
  {
    title: "IP protection",
    body: "Maintain absolute control over sensitive data and proprietary workflows within your own legal and physical perimeter.",
  },
] as const;

export const gccDbitPhases = [
  {
    key: "Design",
    index: "01",
    title: "Design",
    body: "We architect your centre's legal, technical and operational blueprint — tailored to your enterprise needs.",
    detail:
      "Exhaustive migration planning: business case, due diligence, requirements, risk matrix, Section 197 people plan, process mapping, technology, facilities, MI and disaster recovery.",
  },
  {
    key: "Build",
    index: "02",
    title: "Build",
    body: "We handle the heavy lifting — property, infrastructure and recruiting top-tier local talent.",
    detail:
      "Migration from BPO to captive: people, process, technology and facilities. Trilogy supports with local know-how, change management and ramp-up.",
  },
  {
    key: "Innovate",
    index: "03",
    title: "Innovate",
    body: "We embed AI and digital automation from day one so the centre is future-ready before transfer.",
    detail:
      "Once SLAs, KPIs and quality are stable, we run agile innovation across process, technology, people and customer — Design, Configure, Deploy, Test & Improve.",
  },
  {
    key: "Transfer",
    index: "04",
    title: "Transfer",
    body: "Once stabilised, we hand over the keys — a mature, high-performing entity with zero launch risk.",
    detail:
      "Operations, technology, facilities, people, management and knowledge transfer with full project and change management support.",
  },
] as const;

export const gccBenefits = [
  {
    title: "Cheaper than outsourcing",
    stat: "20–30%",
    body: "Additional savings vs traditional BPO by eliminating vendor margins and overhead.",
  },
  {
    title: "Further savings through deflection",
    stat: "15–20%",
    body: "Aggressive automation, digital deflection and AI — without the constraints of a vendor model.",
  },
  {
    title: "More control",
    stat: "100%",
    body: "Complete ownership of operations, technology, data security and strategic direction.",
  },
] as const;

export const gccOwns = {
  trilogy: [
    "Operating model & governance design",
    "Local compliance, labour law and regulatory setup",
    "Hiring, training and leadership ramp-up",
    "Technology, security and CX tooling",
    "Performance management and optimisation",
  ],
  client: [
    "Intellectual property and data",
    "Dedicated teams aligned to their brand",
    "Strategic control over roadmap, skills and scale",
    "Option to fully absorb the operation when ready",
  ],
} as const;

export const gccComparisons = [
  {
    title: "GCC vs traditional BPO",
    body: "Client-owned capability, compounding value and strategic leverage — versus vendor-owned delivery, limited IP control and linear cost scaling.",
  },
  {
    title: "GCC vs DIY offshore build",
    body: "Faster launch, lower risk and proven delivery playbooks — versus a slow, capital-heavy build with a steep learning curve.",
  },
] as const;

export const gccCostPath = [
  {
    stage: "In-house / on-shore",
    label: "Current total cost to operate",
    save: null,
  },
  {
    stage: "Offshore BPO",
    label: "Labour arbitrage — with innovation constraints",
    save: "40–50%",
  },
  {
    stage: "GCC via DBIT",
    label: "Own the centre — digital & RPA without constraints",
    save: "Further 20–30%",
  },
  {
    stage: "Innovate",
    label: "Automation & AI deflection on top",
    save: "Further 15–20%",
  },
] as const;

export const gccInnovate = {
  title: "The Innovate engine",
  lead: "We don't just build your GCC — we build it with an embedded AI research and development hub.",
  points: [
    {
      title: "Embedded innovation",
      body: "During Innovate, the AI Test Kitchen becomes the R&D centre for your global operations — at South African rates.",
    },
    {
      title: "Shift and transform",
      body: "While traditional GCCs focus on lift-and-shift, we ensure your centre is already automated and optimised before Transfer.",
    },
    {
      title: "Zero-disruption upgrades",
      body: "New brand standards and technologies are proven in the Kitchen first — so your transferred centre stays at the cutting edge of CX.",
    },
  ],
} as const;

export const gccAdvantages = [
  {
    title: "Design & build for purpose",
    body: "Trilogy builds the operation to your design specification and branding.",
  },
  {
    title: "OPEX vs CAPEX",
    body: "No CAPEX for build-out. A fully kitted operation to spec on a monthly OPEX commercial model.",
  },
  {
    title: "Vendor management",
    body: "A tried-and-tested vendor ecosystem — we manage quality, budgets and negotiations between cost and quality.",
  },
  {
    title: "Project management",
    body: "Experienced PMs who hit Go-live dates when many moving parts have to land together.",
  },
] as const;

export const gccTurnkey = [
  {
    title: "Site build-out",
    items: [
      "Construction, electrical, fire & HVAC",
      "Floors, furniture, fittings & joinery",
      "Signage, windows & acoustics",
      "Facilities contingency & professional services",
    ],
  },
  {
    title: "IT build-out",
    items: [
      "Access control, AV, CCTV & security",
      "Networking, LAN, switches & hardware",
      "Computers, laptops & telephony",
      "IT contingency & professional services",
    ],
  },
  {
    title: "Staffing & ops",
    items: [
      "Senior in-country leadership & transition",
      "Ops managers, team leaders & quality",
      "HR, IT support, MIS and agents",
      "Facilities, security, connectivity & utilities",
    ],
  },
] as const;

export const gccWhoBenefits = [
  "Companies with an in-house operation who want offshore cost advantage without paying outsourced rates.",
  "Companies already outsourced to a BPO who have reached maturity and want to own the next stage.",
  "Companies who want to unlock the extra savings of digital and autonomous customer service.",
] as const;

export const gccProof = [
  {
    value: "36",
    label: "Blue-chip centres launched",
    body: "DBIT applied across South Africa over 20 years — a proven de-risking engine.",
  },
  {
    value: "4–6 mo",
    label: "Faster than solo entry",
    body: "Ready-state infrastructure and local licences cut typical GCC setup time.",
  },
  {
    value: "1,000",
    label: "Seats in 24 months",
    body: "Most recent build for a global BPO — first 100 seats live within six weeks.",
  },
  {
    value: "40%",
    label: "Higher retention",
    body: "GCC talent longevity vs vendor-outsourced environments in South Africa.",
  },
] as const;

export const gccMigrationScope = [
  "Strategic and operational objectives",
  "People, culture and brand",
  "Management practices",
  "Process optimisation & innovation",
  "Platform and facilities",
  "Technology & innovation",
] as const;

/* Compatibility aliases for page/components */
export const site = {
  name: company.name,
  tagline: "Human empathy meets AI efficiency.",
  description:
    "Making customer engagement offshoring easy. Trilogy BPO builds, staffs and runs AI-enabled contact centres and Global Capability Centres for UK, US and EMEA brands from South Africa.",
  email: company.email,
  phones: { uk: company.phoneUk, sa: company.phoneSa },
  whatsapp: company.whatsapp,
};

export const nav = navLinks;

export const whySa = [
  ...whySaFeature.map((item) => ({ ...item, stat: item.stat })),
  ...whySaSecondary.map((item) => ({ ...item, stat: "" })),
];

export const brands = {
  global: brandGroups[0].logos.map((l) =>
    l.src.replace("/pool/brands/", "").replace(".png", ""),
  ),
  local: brandGroups[1].logos.map((l) =>
    l.src.replace("/pool/brands/", "").replace(".png", ""),
  ),
  gccs: brandGroups[2].logos.map((l) =>
    l.src.replace("/pool/brands/", "").replace(".png", ""),
  ),
  telco: brandGroups[3].logos.map((l) =>
    l.src.replace("/pool/brands/telco/", "").replace(".png", ""),
  ),
};

/** Flat logo list for the homepage marquee — mixed (not grouped by category). */
function shuffleBrands<T extends { name: string; src: string }>(items: T[]): T[] {
  // Deterministic shuffle so SSR and client match
  const arr = [...items];
  let seed = 20260817;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0xffffffff;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const brandLogos = shuffleBrands(
  brandGroups
    .flatMap((g) => g.logos)
    .filter((logo, i, arr) => arr.findIndex((l) => l.name === logo.name) === i),
);

export const techStack = {
  categories: partnerCategories.map((cat) => ({
    key: cat.letter ?? cat.name[0],
    name: cat.name,
    providers: cat.providers.map((p) => p.name),
  })),
  discovery: {
    label: discoveryLabel,
    engines: discoveryEngines.map((e) => e.name),
  },
};
