/** Content sourced from https://proposal.trilogybpo.com/GCC/ (DBIT proposal). */

export const BRIEF_PDF = "/trilogy-dbot-solution-brief.pdf";

export const nav = [
  { label: "Overview", href: "#overview" },
  { label: "Team", href: "#team" },
  { label: "Journey", href: "#journey" },
  { label: "Why SA", href: "#why-sa" },
  { label: "DBIT", href: "#dbit" },
  { label: "Cases", href: "#cases" },
  { label: "Commercial", href: "#commercial" },
  { label: "Contact", href: "#contact" },
] as const;

export const overviewIntro =
  "Trilogy GCC allows you to move beyond outsourcing. Design, Build, Innovate, Transfer — your risk-mitigated roadmap to a fully-owned Center of Excellence in South Africa.";

export const overviewBody =
  "Establish a Global Capability Center in South Africa that functions as a seamless extension of your headquarters — transitioning from third-party dependency to a fully-owned global asset.";

export const overviewStats = [
  { value: "30+", label: "Contact centres built worldwide" },
  { value: "10,000+", label: "Agent seats scaled globally" },
  { value: "12", label: "Years experience in building AI/ML platforms" },
  { value: "25+ yrs", label: "Combined leadership experience" },
] as const;

export const overviewBullets = [
  "Build your own capability center in South Africa.",
  "DBIT assists international BPO or enterprise companies to establish global capability centers in South Africa.",
  "Global capability centers or captives provide between 20%–30% cost savings versus offshore outsourcing.",
  "Trilogy also offers a unique digital and autonomous platform to reduce headcount.",
] as const;

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
};

export const teamGroups: { title: string; members: TeamMember[] }[] = [
  {
    title: "Leadership Team",
    members: [
      {
        name: "Kobus van der Westhuizen",
        role: "CEO & Founder",
        img: "/proposal/team/kobus-van-der-westhuizen.png",
        linkedin: "https://www.linkedin.com/in/kobus-van-der-westhuizen-trilogy-bpo/",
      },
      {
        name: "Tanya Phillips",
        role: "Chief Operating Officer",
        img: "/proposal/team/tanya-phillips.png",
        linkedin: "https://www.linkedin.com/in/tanya-phillips-sa/",
      },
      {
        name: "Rudi Jansen",
        role: "Director of People",
        img: "/proposal/team/rudi-jansen.png",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Craig Shalekoff",
        role: "CTO & Founder",
        img: "/proposal/team/craig-shalekoff.png",
        linkedin: "https://www.linkedin.com/in/craig-shalekoff-digital-tribe-bpo/",
      },
      {
        name: "Vancyon van Zyl",
        role: "Director of Transitions",
        img: "/proposal/team/vancyon-van-zyl.png",
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
        img: "/proposal/team/keanu-vieira.png",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Jason Luboyera",
        role: "Head of Digital",
        img: "/proposal/team/jason-luboyera.png",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Tish Carruthers",
        role: "Marketing & Intelligence Lead",
        img: "/proposal/team/tish-carruthers.png",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Brandon Grant",
        role: "Head of Digital Contact",
        img: "/proposal/team/brandon-grant.png",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
      {
        name: "Lizelle McLaughlin",
        role: "Head of Projects",
        img: "/proposal/team/lizelle-mclaughlin.png",
      },
    ],
  },
  {
    title: "Board Members",
    members: [
      {
        name: "Kobus van der Westhuizen",
        role: "CEO & Founder",
        img: "/proposal/team/kobus-van-der-westhuizen.png",
        linkedin: "https://www.linkedin.com/in/kobus-van-der-westhuizen-trilogy-bpo/",
      },
      {
        name: "Craig Shalekoff",
        role: "CTO & Founder",
        img: "/proposal/team/craig-shalekoff.png",
        linkedin: "https://www.linkedin.com/in/craig-shalekoff-digital-tribe-bpo/",
      },
      {
        name: "Frank Kilbourn",
        role: "Non-Executive Director",
        img: "/proposal/team/frank-kilbourn.png",
        linkedin: "https://www.linkedin.com/in/frank-kilbourn-31ba97b9/",
      },
      {
        name: "Jonathan Broll",
        role: "Non-Executive Director",
        img: "/proposal/team/jonathan-broll.png",
        linkedin: "https://www.linkedin.com/in/jonathan-broll-ab5a61b5/",
      },
      {
        name: "Heather Wallace",
        role: "Non-Executive Director",
        img: "/proposal/team/heather-wallace.png",
        linkedin: "https://www.linkedin.com/company/trilogybpo",
      },
    ],
  },
];

export const awards = [
  {
    year: "2016",
    text: "CCMG Best Outsourced Partnership Winner · BPESA Best Outsourced Winner & Best Use of Social Media",
  },
  {
    year: "2017",
    text: "BPESA / CCMG Best Outsourced Contact Centre · Best Use of Social Media & Technology Innovation",
  },
  {
    year: "2018 – 2019",
    text: "Best Outsourced Contact Centre Finalist · Best Outsourced Partnership (Engage UK) Finalist · BPESA Best Impact Sourcing & Service Provider Winner",
  },
  {
    year: "2021",
    text: "Contact Centre World, Best Partnership",
    pill: "Ranked #1 EMEA · #2 Globally",
  },
  {
    year: "2022 – 2023",
    text: "BPESA Best Partnership & Shared Services Finalist · Cape BPO Top Technical Innovation Finalist",
    pill: "BPESA & Cape BPO National Top Service Provider, Winner",
  },
  {
    year: "2025",
    text: "CapeBPO & BPESA Top Support Service Provider Finalist · BPESA Top BPO Operator Finalist & Runner-Up",
  },
] as const;

/** Featured badges shown large under the awards timeline (screenshot 3). */
export const featuredBadges = [
  { name: "CapeBPO", src: "/proposal/badges/capebpo.svg" },
  { name: "BPESA Proud Member 2026 | 2027", src: "/proposal/badges/bpesa.svg" },
  { name: "Cyber Essentials Plus", src: "/proposal/badges/cyber-essentials-plus.svg" },
  { name: "PCI DSS Compliant", src: "/proposal/badges/pci-dss.svg" },
] as const;

export const brandLogos = [
  { file: "ventrica", alt: "Ventrica" },
  { file: "british-gas", alt: "British Gas" },
  { file: "kliq", alt: "Kliq" },
  { file: "cellc", alt: "Cell C" },
  { file: "dfs", alt: "DFS" },
  { file: "sun-international", alt: "Sun International" },
  { file: "herotel", alt: "Herotel" },
  { file: "mtn", alt: "MTN" },
  { file: "vodacom", alt: "Vodacom" },
  { file: "john-lewis", alt: "John Lewis" },
  { file: "aldi", alt: "Aldi" },
  { file: "virgin", alt: "Virgin" },
  { file: "kfc", alt: "KFC" },
  { file: "nandos", alt: "Nando's" },
  { file: "mercedes-benz", alt: "Mercedes-Benz" },
  { file: "burger-king", alt: "Burger King" },
  { file: "iceland", alt: "Iceland" },
  { file: "jd", alt: "JD" },
  { file: "telkom", alt: "Telkom" },
  { file: "afrihost", alt: "Afrihost" },
  { file: "fibertime", alt: "Fibertime" },
  { file: "peloton", alt: "Peloton" },
  { file: "b-and-q", alt: "B&Q" },
  { file: "ascensos", alt: "Ascensos" },
  { file: "startek", alt: "Startek" },
  { file: "pick-n-pay", alt: "Pick n Pay" },
  { file: "rain", alt: "Rain" },
  { file: "webafrica", alt: "Webafrica" },
] as const;

export const whySa = [
  {
    stat: "60%",
    title: "Cost efficiency meets quality",
    body: "Up to 60% lower operational costs than UK and USA markets — substantial wage arbitrage without compromising quality.",
  },
  {
    stat: "#1",
    title: "Cape Town: the premium hub",
    body: "The leading BPO destination, with rapid growth, exceptional infrastructure and the largest skilled talent pool in the region.",
  },
  {
    stat: "GMT+2",
    title: "Time-zone synergy",
    body: "A 1 to 2 hour difference with the UK and extended USA coverage.",
  },
  {
    stat: "95%+",
    title: "Language & cultural excellence",
    body: "Workforce proficiency in English with neutral accents that resonate with Western consumers.",
  },
] as const;

export const locationWins = [
  "BPO ecosystem leadership — Cape Town has led South Africa’s BPO export performance for nine consecutive years, drawing on a 67,000-strong regional workforce.",
  "Operational readiness — sites are live today; no site setup phase, landlord negotiation or infrastructure lead time.",
  "ESG alignment — flagship site holds a 5-Star Green Energy rating from the GBCSA.",
  "Premium infrastructure — multi-redundant fibre, N+1 generator and UPS, biometric access control.",
  "Multi-site resilience — Cape Town and Johannesburg, eliminating single geographic points of failure.",
  "Time-zone synergy — GMT+2 for UK proximity and extended USA coverage.",
] as const;

export const incentivePillars = [
  {
    title: "You employ the staff",
    body: "Your employees work for your entity, following your culture, processes and standards — complete operational control without vendor intermediation.",
  },
  {
    title: "100% open-book costs",
    body: "Full transparency into every operating expense. No hidden markups, no black-box pricing.",
  },
  {
    title: "Fixed management fee",
    body: "Our compensation is decoupled from headcount — so we are incentivised to help you optimise.",
  },
  {
    title: "Savings accrue to you",
    body: "Every efficiency improvement, automation win and headcount reduction flows to your bottom line, not a vendor’s margin.",
  },
] as const;

export const dbitPhases = [
  {
    index: "01",
    letter: "D",
    title: "Design",
    body: "We architect your operating model, technology stack and organisational structure around your service-delivery requirements and growth trajectory.",
    detail:
      "Exhaustive migration plan before anything is stood up: business case, due diligence, requirements, risk matrix, Section 197 people plan, process mapping, technology, facilities, MI and disaster recovery.",
  },
  {
    index: "02",
    letter: "B",
    title: "Build",
    body: "We stand up the full operation — recruitment, training, facilities, technology, compliance and governance.",
    detail:
      "Migrates a BPO operation to a captive — people, process, technology and facilities together — with local know-how, project management and change management through go-live.",
  },
  {
    index: "03",
    letter: "I",
    title: "Innovate",
    body: "We actively reduce required headcount through digital deflection, intelligent routing, automation and AI — because we are not paid on heads.",
    detail:
      "Once SLAs, KPIs and quality are stable, innovation covers process, technology, people and customer opportunities — Design, Configure, Deploy, Test and Improve.",
  },
  {
    index: "04",
    letter: "T",
    title: "Transfer",
    body: "We transition full operational ownership to your team when you are ready, with ongoing support as needed.",
    detail:
      "Operations, technology, facilities, people, management and knowledge move to you — with project and change management for a clean handover.",
  },
] as const;

export const dbitLayers = [
  { title: "Strategic & operational objectives", body: "Business case, migration strategy, project plan, deliverables and a risk matrix with mitigation from day one." },
  { title: "People, culture & brand", body: "HR and people plan (including Section 197 where required), recruitment, training, and your culture transferred into the South African centre." },
  { title: "Management practices", body: "Management processes, practices and systems, plus MI/BI so the captive is measurable from go-live." },
  { title: "Process optimisation & innovation", body: "Process mapping, design and optimisation — then digital and autonomous innovation once the operation is stable." },
  { title: "Platform & facilities", body: "Site build-out, connectivity and a fully kitted floor, delivered to your design specification and branding." },
  { title: "Technology & innovation", body: "Systems integration, data security, disaster recovery, and global plus local best-practice baked into the stack." },
] as const;

export const benefits = [
  { stat: "50–60%", title: "Cheaper than onshoring", body: "Cost savings vs high-cost markets while accessing the same quality talent and capabilities." },
  { stat: "20–30%", title: "Cheaper than outsourcing", body: "Additional savings vs traditional BPO by eliminating vendor margins and overhead." },
  { stat: "15–20%", title: "Further via deflection", body: "Automation, digital deflection and AI without vendor constraints." },
  { stat: "100%", title: "More control", body: "Complete ownership of operations, technology, data security and strategic direction." },
] as const;

export const costPath = [
  { stage: "In-house / on-shore", label: "100% of cost — no savings yet", save: null },
  { stage: "Trilogy BPO", label: "~65% of cost · labour arbitrage", save: "≈35%" },
  { stage: "Trilogy DBIT", label: "~47% of cost · own your centre", save: "Further ≈18%" },
  { stage: "Innovation", label: "~39% of cost · tech deflection", save: "Further ≈8%" },
] as const;

export const provenResults = [
  { value: "20–30%", label: "Margin removal", body: "Immediate reduction versus offshore BPO by eliminating vendor markup." },
  { value: "15–20%", label: "Digital & AI deflection", body: "Efficiency gains from automation, self-service and AI resolution." },
  { value: "30–50%", label: "Total over 36 months", body: "Combined impact as automation matures and scales." },
] as const;

export const turnkeySite = [
  "Construction, electrical, fire & HVAC",
  "Floors, furniture & fittings, joinery",
  "Signage, windows and acoustics",
  "Facilities contingency and professional services",
] as const;

export const turnkeyIt = [
  "Access control, AV and CCTV security",
  "Networking, LAN, switches and connectivity",
  "Computers, laptops, equipment and telephony",
  "IT professional services and contingency",
] as const;

export const turnkeyStaff = [
  { title: "Exec staffing", body: "Country Executive, Managing Director, Transition Manager, HR Director and IT Director." },
  { title: "Operations staffing", body: "Senior Ops Manager, Ops Manager, Team Leaders, Quality Auditors, HR Admins, IT Support, MIS and agents." },
  { title: "Business & facilities", body: "Business registration & legal, finance, project management, facilities, security, cleaning, connectivity, rental and utilities." },
] as const;

export const trackRecord = [
  {
    name: "CCN",
    body: "100 → 850 seats in 3 years. 15% EBITDA. Brands included Virgin Media, British Gas, Mercedes-Benz, BMW, GM and Southern Sun.",
  },
  {
    name: "Aegis South Africa",
    body: "4 people → 2,000 seats in 5 years. 15% EBITDA. Brands included AIG, the National Lottery, Department of Home Affairs and Telkom Mobile.",
  },
  {
    name: "Digital Tribe / Codified",
    body: "3 people → 1,000 seats in 3 years. Brands included Ascensos, ALDI and JD Sports. BOT pioneer in SA; AWS Global partner.",
  },
] as const;

export const caseStudies = [
  {
    name: "Aegis South Africa",
    img: "/proposal/cases/dbit-case-aegis.png",
    lead: "Design, build and operate in two South African locations, then a lasting in-country operation.",
    points: [
      "Grew to 2,500 seats within 5 years, with EBITDA of over 15%.",
      "Differentiation: SMART people and SMART technology.",
      "Brands included British Gas, Virgin Mobile, AIG, the National Lottery, Department of Home Affairs and Telkom Mobile.",
      "Continues in Africa as Startek, still retaining key staff Trilogy brought in.",
    ],
  },
  {
    name: "Ascensos",
    img: "/proposal/cases/dbit-case-ascensos.png",
    lead: "Cape Town capability centre — first 100 FTEs live in six weeks, then a four-site scale-up.",
    points: [
      "Built 1,500 seats over 3 years across 4 locations.",
      "Delivered over $6 million in refunds from structuring and administering government incentives.",
      "Built a leadership team that remains in place and runs Ascensos South Africa.",
      "Won multiple contact-centre performance awards and nationwide recognition as a top place to work.",
    ],
  },
] as const;

export const commercialModels = [
  {
    title: "Open-book build + management fee",
    body: "Detailed open-book cost and budget with full transparency, plus a management fee. You see the build and the run-rate.",
  },
  {
    title: "Cost per productive hour",
    body: "All costs rolled into a per-productive-hour rate. If you are a BPO taking the centre to market, you add your own margin.",
  },
  {
    title: "Facility managed services (OPEX)",
    body: "Full facility managed services as an OPEX model. Trilogy provides the CAPEX for the build so you are not funding the fit-out up front.",
  },
] as const;

export const whoBenefits = [
  "In-house operations that want to maximise cost without paying outsourced rates.",
  "Already-outsourced operations at maturity that are ready to own the centre.",
  "Organisations that want the extra savings of digital and autonomous customer service.",
] as const;
