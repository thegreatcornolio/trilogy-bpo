/** GCC microsite content — merged from trilogybpo.com/trilogy-gcc + DBOT solution brief */

export const BRIEF_PDF = "/trilogy-dbot-solution-brief.pdf";

export const nav = [
  { label: "Proposition", href: "#proposition" },
  { label: "DBOT", href: "#dbot" },
  { label: "Benefits", href: "#benefits" },
  { label: "Delivery", href: "#delivery" },
  { label: "Brief", href: BRIEF_PDF },
  { label: "Contact", href: "#contact" },
];

export const proposition = [
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

export const saDrivers = [
  "Cost reduction",
  "English competency",
  "Accent acceptability",
  "Cultural compatibility",
  "Data protection compliance",
  "Quality of service",
] as const;

export const routes: {
  index: string;
  title: string;
  body: string;
  highlight?: boolean;
}[] = [
  {
    index: "01",
    title: "Outsourcing",
    body: "Partner with a competent South African outsourcing provider under a managed contract.",
  },
  {
    index: "02",
    title: "Captive, own resources",
    body: "Establish a captive centre in South Africa using only your own team and capital.",
  },
  {
    index: "03",
    title: "Captive with DBOT",
    body: "Phased Design, Build, Operate and Transfer with a local partner — the focus of this site.",
    highlight: true,
  },
];

/** DBOT phases — Operate from the brief; design/build/transfer detail from the live GCC page */
export const phases = [
  {
    key: "Design",
    index: "01",
    letter: "D",
    title: "Design",
    body: "We architect your centre's legal, technical and operational blueprint — tailored to your enterprise needs.",
    detail:
      "Exhaustive migration planning: business case, due diligence, requirements, risk matrix, Section 197 people plan, process mapping, technology, facilities, MI and disaster recovery.",
  },
  {
    key: "Build",
    index: "02",
    letter: "B",
    title: "Build",
    body: "We handle the heavy lifting — property, infrastructure and recruiting top-tier local talent.",
    detail:
      "Migration from BPO to captive: people, process, technology and facilities. Trilogy supports with local know-how, change management and ramp-up.",
  },
  {
    key: "Operate",
    index: "03",
    letter: "O",
    title: "Operate",
    body: "Full operational strategy run for a defined period to stabilise service levels, quality and culture.",
    detail:
      "Governed through an MSA: hiring, training, QA, productivity, KPIs and continuous improvement until the centre is transfer-ready — with AI and automation embedded, not bolted on later.",
  },
  {
    key: "Transfer",
    index: "04",
    letter: "T",
    title: "Transfer",
    body: "Once stabilised, we hand over the keys — a mature, high-performing entity with zero launch risk.",
    detail:
      "Operations, technology, facilities, people, management and knowledge transfer with full project and change management support.",
  },
] as const;

export const benefits = [
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

export const owns = {
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

export const comparisons = [
  {
    title: "GCC vs traditional BPO",
    body: "Client-owned capability, compounding value and strategic leverage — versus vendor-owned delivery, limited IP control and linear cost scaling.",
  },
  {
    title: "GCC vs DIY offshore build",
    body: "Faster launch, lower risk and proven delivery playbooks — versus a slow, capital-heavy build with a steep learning curve.",
  },
] as const;

export const costPath = [
  { stage: "In-house / on-shore", label: "Current total cost to operate", save: null },
  { stage: "Offshore BPO", label: "Labour arbitrage — with innovation constraints", save: "40–50%" },
  { stage: "GCC via DBOT", label: "Own the centre — digital & RPA without constraints", save: "Further 20–30%" },
  { stage: "Innovate on top", label: "Automation & AI deflection", save: "Further 15–20%" },
] as const;

export const innovate = {
  title: "Innovation during Operate",
  lead: "We don't just build your GCC — we run it with an embedded AI research and development hub before Transfer.",
  points: [
    {
      title: "Embedded innovation",
      body: "During Operate, the AI Test Kitchen becomes the R&D centre for your global operations — at South African rates.",
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

export const migrationScope = [
  "Strategic and operational objectives",
  "People, culture and brand",
  "Management practices",
  "Process optimisation & innovation",
  "Platform and facilities",
  "Technology & innovation",
] as const;

export const advantages = [
  {
    title: "Design & build for purpose",
    body: "Trilogy builds the operation to your design specification and branding.",
  },
  {
    title: "OPEX vs CAPEX",
    body: "No CAPEX for build-out. A fully kitted operation to spec on a monthly OPEX commercial model — or CAPEX if you prefer.",
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

export const turnkey = [
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

export const whoBenefits = [
  "Companies with an in-house operation who want offshore cost advantage without paying outsourced rates.",
  "Companies already outsourced to a BPO who have reached maturity and want to own the next stage.",
  "Companies who want to unlock the extra savings of digital and autonomous customer service.",
] as const;

export const proof = [
  {
    value: "36",
    label: "Blue-chip centres launched",
    body: "DBOT applied across South Africa over 20 years — a proven de-risking engine.",
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

export const transferSupport = [
  "Continuous improvement",
  "Active benchmarking",
  "Business continuity & DR",
  "Capacity overflow",
] as const;

export const commercialPoints = [
  {
    title: "Transparent costing",
    body: "Costs presented openly by DBOT phase — Design, Build, Operate, Transfer — with transfer typically at 24 or 36 months.",
  },
  {
    title: "Fixed management fee",
    body: "Trilogy’s management fee is fixed, so the commercial model stays clear as the centre scales.",
  },
  {
    title: "OPEX rent-to-own",
    body: "Full bill of materials on a 36-month payment plan — site, equipment and facilities owned by you at month 36.",
  },
] as const;
