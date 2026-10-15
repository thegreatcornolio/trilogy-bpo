/** Content sourced from https://proposal.trilogybpo.com/GCC/ (DBIT proposal). */

export const BRIEF_PDF = "/trilogy-dbot-solution-brief.pdf";

export const nav = [
  { label: "Overview", href: "#overview" },
  { label: "Team", href: "#team" },
  { label: "Why SA", href: "#why-sa" },
  { label: "DBIT", href: "#dbit" },
  { label: "Cases", href: "#cases" },
  { label: "Commercial", href: "#commercial" },
  { label: "Contact", href: "#contact" },
];

export const overviewStats = [
  { value: "30+", label: "Contact centres built worldwide" },
  { value: "10,000+", label: "Agent seats scaled globally" },
  { value: "12 yrs", label: "Building AI/ML platforms" },
  { value: "25+ yrs", label: "Combined leadership experience" },
] as const;

export const overviewBullets = [
  "Build your own capability centre in South Africa.",
  "DBIT assists international BPO or enterprise companies to establish GCCs in South Africa.",
  "Captives provide 20%–30% cost savings versus offshore outsourcing.",
  "Trilogy also offers a unique digital and autonomous platform to reduce headcount.",
] as const;

export const leadership = [
  { name: "Kobus van der Westhuizen", role: "CEO & Founder", img: "/proposal/team/kobus-van-der-westhuizen.png" },
  { name: "Tanya Phillips", role: "Chief Operating Officer", img: "/proposal/team/tanya-phillips.png" },
  { name: "Rudi Jansen", role: "Director of People", img: "/proposal/team/rudi-jansen.png" },
  { name: "Craig Shalekoff", role: "CTO & Founder", img: "/proposal/team/craig-shalekoff.png" },
  { name: "Vancyon van Zyl", role: "Director of Transitions", img: "/proposal/team/vancyon-van-zyl.png" },
  { name: "Keanu Vieira", role: "Head of CX Solutions", img: "/proposal/team/keanu-vieira.png" },
  { name: "Jason Luboyera", role: "Head of Digital", img: "/proposal/team/jason-luboyera.png" },
  { name: "Tish Carruthers", role: "Marketing & Intelligence Lead", img: "/proposal/team/tish-carruthers.png" },
  { name: "Brandon Grant", role: "Head of Digital Contact", img: "/proposal/team/brandon-grant.png" },
  { name: "Lizelle McLaughlin", role: "Head of Projects", img: "/proposal/team/lizelle-mclaughlin.png" },
] as const;

export const board = [
  { name: "Kobus van der Westhuizen", role: "CEO & Founder", img: "/proposal/team/kobus-van-der-westhuizen.png" },
  { name: "Craig Shalekoff", role: "CTO & Founder", img: "/proposal/team/craig-shalekoff.png" },
  { name: "Frank Kilbourn", role: "Non-Executive Director", img: "/proposal/team/frank-kilbourn.png" },
  { name: "Jonathan Broll", role: "Non-Executive Director", img: "/proposal/team/jonathan-broll.png" },
  { name: "Heather Wallace", role: "Non-Executive Director", img: "/proposal/team/heather-wallace.png" },
] as const;

export const jvPartners = [
  { name: "Yaron Assabi", role: "Founder, Digital Solutions Group", img: "/proposal/team/yaron-assabi.png" },
  { name: "Brandon Mezaros", role: "CEO, Customer Experience Group", img: "/proposal/team/brandon-mezaros.png" },
] as const;

export const awards = [
  { year: "2016", text: "CCMG Best Outsourced Partnership Winner · BPESA Best Outsourced Winner & Best Use of Social Media" },
  { year: "2017", text: "BPESA / CCMG Best Outsourced Contact Centre · Best Use of Social Media & Technology Innovation" },
  { year: "2018–2019", text: "Best Outsourced Contact Centre Finalist · Best Outsourced Partnership (Engage UK) Finalist · BPESA Best Impact Sourcing & Service Provider Winner" },
  { year: "2021", text: "Contact Centre World, Best Partnership — Ranked #1 EMEA · #2 Globally" },
  { year: "2022–2023", text: "BPESA Best Partnership & Shared Services Finalist · Cape BPO Top Technical Innovation Finalist · BPESA & Cape BPO National Top Service Provider Winner" },
  { year: "2025", text: "Cape BPO & BPESA Top Support Service Provider Finalist · BPESA Top BPO Operator Finalist & Runner-Up" },
] as const;

export const membershipLogos = [
  { name: "Cape BPO", src: "/proposal/badges/capebpo.svg" },
  { name: "BPESA", src: "/proposal/badges/bpesa.svg" },
  { name: "CCMG", src: "/proposal/badges/ccmg.svg" },
  { name: "GBPO", src: "/proposal/badges/gbpo.svg" },
] as const;

export const certLogos = [
  { name: "Cyber Essentials+", src: "/proposal/badges/cyber-essentials-plus.svg" },
  { name: "PCI DSS", src: "/proposal/badges/pci-dss.svg" },
  { name: "ISO 9001", src: "/proposal/badges/iso-9001.svg" },
  { name: "ISO 27001", src: "/proposal/badges/iso-27001.svg" },
] as const;

export const footprintSites = [
  {
    name: "Mutual Park, Cape Town",
    detail: "Old Mutual Park, Pinelands. Active, primary UK-client site. 5-star green-energy campus; scalable to 1,000+ seats.",
  },
  {
    name: "Century City, Cape Town",
    detail: "Active. 150+ FTE; scalable to 300 within 24 months.",
  },
  {
    name: "Rosebank Quarters, Johannesburg",
    detail: "158 Jan Smuts Avenue, Rosebank. Active. 200+ FTE; scalable to 400 within 24 months.",
  },
  {
    name: "Maharishi Institute, Johannesburg",
    detail: "Johannesburg CBD. Active. 100+ FTE; 750+ pre-assessed graduate pipeline per year.",
  },
  {
    name: "National WFH continuity layer",
    detail: "Nationwide (distributed). Active. 40–60% cloud-first from home for flex and BCP.",
  },
] as const;

export const brandLogos = [
  "british-gas",
  "john-lewis",
  "aldi",
  "virgin",
  "vodacom",
  "mtn",
  "mercedes-benz",
  "kfc",
  "nandos",
  "b-and-q",
  "fibertime",
  "peloton",
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
