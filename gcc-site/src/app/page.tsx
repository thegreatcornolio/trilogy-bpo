import Image from "next/image";
import SaMap from "@/components/SaMap";
import TeamSection from "@/components/TeamSection";
import {
  awards,
  benefits,
  brandLogos,
  caseStudies,
  commercialModels,
  costPath,
  dbitLayers,
  dbitPhases,
  featuredBadges,
  incentivePillars,
  locationWins,
  nav,
  overviewBody,
  overviewBullets,
  overviewIntro,
  overviewStats,
  provenResults,
  teamGroups,
  trackRecord,
  turnkeyIt,
  turnkeySite,
  turnkeyStaff,
  whoBenefits,
  whySa,
} from "@/lib/content";

function SectionLabel({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className="mono rise" style={{ margin: 0, fontSize: 12, color: onDark ? "var(--mint)" : "var(--forest)" }}>
      {children}
    </p>
  );
}

function SectionTitle({ children, max = "18ch" }: { children: React.ReactNode; max?: string }) {
  return (
    <h2
      className="rise"
      style={{
        margin: "14px 0 0",
        maxWidth: max,
        fontSize: "clamp(30px, 4.4vw, 48px)",
        fontWeight: 200,
        letterSpacing: "-0.02em",
        lineHeight: 1.05,
      }}
    >
      {children}
    </h2>
  );
}

function Lead({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p
      className="rise"
      style={{
        margin: "18px 0 0",
        maxWidth: "56ch",
        fontSize: 16.5,
        fontWeight: 300,
        lineHeight: 1.7,
        color: onDark ? "var(--on-dark-muted)" : "var(--ink-muted)",
      }}
    >
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <header
        style={{
          position: "fixed",
          inset: "0 0 auto",
          zIndex: 40,
          backdropFilter: "blur(14px)",
          background: "rgba(8, 16, 24, 0.55)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="shell"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
            gap: 24,
          }}
        >
          <a href="#top" aria-label="Trilogy Global Capability Centre">
            <Image
              src="/logo-gcc.png"
              alt="trilogy Global Capability Centre"
              width={220}
              height={60}
              priority
              style={{ height: 36, width: "auto" }}
            />
          </a>
          <nav className="desktop-nav" style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link mono"
                style={{ fontSize: 11, color: "rgba(255,255,255,0.78)" }}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="cta" style={{ padding: "10px 16px", fontSize: 13 }}>
              Talk to us
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ===== HERO — preserved as requested ===== */}
        <section
          style={{
            position: "relative",
            minHeight: "100svh",
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
            background: "var(--ink-deep)",
            color: "var(--white)",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              className="hero-media"
              src="/cape-town.jpg"
              alt="Cape Town — home of Trilogy’s Global Capability Centres"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(8,16,24,0.55) 0%, rgba(8,16,24,0.35) 38%, rgba(8,16,24,0.88) 100%), radial-gradient(ellipse at 20% 80%, rgba(46,232,92,0.18), transparent 45%)",
              }}
            />
          </div>

          <div
            className="shell hero-copy"
            style={{ position: "relative", zIndex: 1, padding: "120px 0 72px" }}
          >
            <Image
              src="/logo-gcc.png"
              alt="trilogy Global Capability Centre"
              width={420}
              height={114}
              priority
              style={{
                height: "clamp(52px, 8vw, 78px)",
                width: "auto",
                marginBottom: 28,
              }}
            />
            <h1
              style={{
                margin: 0,
                maxWidth: "14ch",
                fontSize: "clamp(40px, 7vw, 72px)",
                fontWeight: 200,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              From outsourcing to ownership.
            </h1>
            <p
              style={{
                margin: "22px 0 0",
                maxWidth: "42ch",
                fontSize: "clamp(16px, 2vw, 19px)",
                fontWeight: 300,
                lineHeight: 1.55,
                color: "var(--on-dark-muted)",
              }}
            >
              Design, Build, Operate, Transfer — your risk-mitigated roadmap to a fully owned Global
              Capability Centre in South Africa.
            </p>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}
            >
              <a href="#contact" className="cta">
                Start a conversation
              </a>
              <a href="#dbit" className="cta cta-ghost">
                See the method
              </a>
            </div>
            <div
              className="accent-line"
              style={{
                marginTop: 48,
                height: 2,
                width: 120,
                background: "linear-gradient(90deg, var(--lime), transparent)",
              }}
            />
          </div>
        </section>

        {/* Overview */}
        <section id="overview" style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <SectionTitle max="18ch">From outsourcing to ownership.</SectionTitle>
            <Lead>{overviewIntro}</Lead>
            <p
              className="rise"
              style={{
                margin: "18px 0 0",
                maxWidth: "58ch",
                fontSize: 16.5,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
              }}
            >
              {overviewBody}
            </p>

            <ul
              className="rise"
              style={{ margin: "28px 0 0", padding: 0, listStyle: "none", maxWidth: "64ch" }}
            >
              {overviewBullets.map((item) => (
                <li
                  key={item}
                  style={{
                    padding: "10px 0 10px 18px",
                    position: "relative",
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 1.55,
                    color: "var(--ink)",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "1.05em",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--lime)",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="overview-stats rise">
              {overviewStats.map((item) => (
                <div key={item.label} style={{ textAlign: "center", padding: "4px 8px" }}>
                  <div className="overview-stats__value">{item.value}</div>
                  <p className="mono overview-stats__label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <SectionLabel>Meet the team</SectionLabel>
            <SectionTitle>Leadership that has built this before.</SectionTitle>
            <Lead>
              Tenured BPO executives who have built more than 30 contact centres over 25 years —
              including three successful companies later acquired by international groups.
            </Lead>

            <TeamSection groups={[...teamGroups]} />
          </div>
        </section>

        {/* Awards */}
        <section style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <SectionLabel>Awards, certifications & memberships</SectionLabel>
            <SectionTitle max="22ch">Recognised by the industry.</SectionTitle>
            <Lead>
              Over nearly a decade, our award record reflects consistent industry leadership across
              outsourcing, technology and social impact.
            </Lead>

            <div className="awards-panel rise">
              <ol className="awards-timeline" data-animate="timeline">
                {awards.map((item) => (
                  <li key={item.year} className="reveal-item">
                    <div className="awards-timeline__year">{item.year}</div>
                    <div className="awards-timeline__body">
                      {item.text}
                      {"pill" in item && item.pill ? (
                        <span className="award-pill">{item.pill}</span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="badge-row rise">
              {featuredBadges.map((badge) => (
                <div key={badge.name} className="badge-card">
                  <Image src={badge.src} alt={badge.name} width={280} height={120} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footprint map */}
        <section id="footprint" style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <SectionLabel>South African footprint</SectionLabel>
            <SectionTitle max="22ch">Cape Town and Johannesburg, live today.</SectionTitle>
            <Lead>
              More than 1,000 FTEs across Cape Town and Johannesburg. Every site is Trilogy owned or
              leased and operated directly — never via franchise or affiliate.
            </Lead>
            <SaMap />
          </div>
        </section>

        {/* Management Journey */}
        <section id="journey" style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <SectionLabel>Management Journey & UK Client Experience</SectionLabel>
            <SectionTitle max="16ch">One team, 20 years.</SectionTitle>
            <Lead>
              The same founders and EXCO team have worked together across every company in this
              journey — from CCN through to Trilogy Digital.
            </Lead>
            <figure className="journey-figure rise">
              <Image
                src="/proposal/one-team-20-years.png"
                alt="Management Journey and UK Client Experience — One Team, 20 Years timeline"
                width={1400}
                height={720}
                sizes="(max-width: 1120px) 100vw, 1120px"
                style={{ width: "100%", height: "auto" }}
              />
            </figure>
          </div>
        </section>

        {/* Brands marquee */}
        <section id="brands" style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <SectionTitle max="20ch">Brands Our Leadership Has Delivered For</SectionTitle>
            <p
              className="rise"
              style={{
                margin: "18px 0 0",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              25 years behind the world&apos;s brands.
            </p>
            <Lead>
              Over the past 25 years, Trilogy&apos;s leadership has managed over 30 contact centres
              for some of the world&apos;s most recognised brands. That gives us insight into the
              challenges and opportunities of offshore customer-service delivery, with deep vertical
              expertise across telecommunications, utilities, retail, fast food, insurance and
              technology.
            </Lead>
          </div>

          <div className="brand-marquee rise" aria-label="Brand logos">
            <div className="brand-marquee__viewport">
              <div className="brand-marquee__track">
                {[...brandLogos, ...brandLogos].map((brand, i) => (
                  <div key={`${brand.file}-${i}`} className="brand-marquee__item">
                    <Image
                      src={`/proposal/clients/${brand.file}.png`}
                      alt={brand.alt}
                      width={140}
                      height={40}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why SA */}
        <section id="why-sa" style={{ padding: "96px 0", background: "var(--ink)", color: "var(--white)" }}>
          <div className="shell">
            <SectionLabel onDark>Why South Africa / Why Cape Town</SectionLabel>
            <SectionTitle max="18ch">The location that wins.</SectionTitle>
            <Lead onDark>
              South Africa has consistently been ranked the second most attractive BPO location
              globally. Cape Town is the premium hub — deep English-language and UK cultural
              alignment, a mature ecosystem, and compelling cost advantages.
            </Lead>

            <div
              className="benefit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 28,
                marginTop: 48,
              }}
            >
              {whySa.map((item) => (
                <div key={item.title} className="rise" style={{ borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 18 }}>
                  <div style={{ fontSize: 36, fontWeight: 300, color: "var(--lime)", letterSpacing: "-0.02em" }}>
                    {item.stat}
                  </div>
                  <h3 style={{ margin: "10px 0 0", fontSize: 20, fontWeight: 500 }}>{item.title}</h3>
                  <p style={{ margin: "10px 0 0", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "var(--on-dark-muted)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 56 }}>
              <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--mint)" }}>
                Why the location wins
              </p>
              <ul className="rise" style={{ margin: "20px 0 0", padding: 0, listStyle: "none" }}>
                {locationWins.map((item) => (
                  <li
                    key={item}
                    style={{
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Challenge + solution */}
        <section style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <SectionLabel>The challenge</SectionLabel>
            <SectionTitle max="22ch">Traditional BPO savings stop at labour arbitrage.</SectionTitle>
            <Lead>
              Providers earn margin on headcount. When automation reduces staff, it reduces their
              income — a powerful disincentive to innovate. Bottom line: if a supplier makes less
              money when you automate, they will never automate fast enough.
            </Lead>

            <p className="mono rise" style={{ margin: "56px 0 0", fontSize: 12, color: "var(--forest)" }}>
              Our solution
            </p>
            <h3
              className="rise"
              style={{
                margin: "12px 0 0",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                maxWidth: "20ch",
              }}
            >
              Flipping the incentive structure.
            </h3>
            <p className="rise" style={{ margin: "14px 0 0", maxWidth: "52ch", fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: "var(--ink-muted)" }}>
              This is offshoring without the BPO tax — you capture 100% of the value creation.
            </p>

            <div
              className="benefit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 28,
                marginTop: 40,
              }}
            >
              {incentivePillars.map((item) => (
                <div key={item.title} className="rise" style={{ borderTop: "2px solid var(--lime)", paddingTop: 18 }}>
                  <h4 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>{item.title}</h4>
                  <p style={{ margin: "10px 0 0", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "var(--ink-muted)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DBIT */}
        <section id="dbit" style={{ padding: "96px 0", background: "var(--ink)", color: "var(--white)" }}>
          <div className="shell">
            <SectionLabel onDark>The DBIT methodology</SectionLabel>
            <SectionTitle max="18ch">Design. Build. Innovate. Transfer.</SectionTitle>
            <Lead onDark>
              A phased, holistic build — not a facilities fit-out on its own. DBIT covers every layer
              of the operation so localisation risk is designed out, not discovered at go-live.
            </Lead>

            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 20,
                marginTop: 52,
              }}
            >
              {dbitPhases.map((phase) => (
                <div
                  key={phase.index}
                  className="phase rise"
                  style={{ padding: "28px 0 0", borderTop: "1px solid rgba(255,255,255,0.16)" }}
                >
                  <div className="phase-index mono" style={{ fontSize: 12, color: "var(--mint)" }}>
                    {phase.index} · {phase.letter}
                  </div>
                  <h3 style={{ margin: "14px 0 0", fontSize: 26, fontWeight: 400 }}>{phase.title}</h3>
                  <p style={{ margin: "12px 0 0", fontSize: 14.5, fontWeight: 300, lineHeight: 1.6, color: "var(--on-dark-muted)" }}>
                    {phase.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mono rise" style={{ margin: "56px 0 0", fontSize: 12, color: "var(--mint)" }}>
              How DBIT works — every layer
            </p>
            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 24,
                marginTop: 24,
              }}
            >
              {dbitLayers.map((item) => (
                <div key={item.title} className="rise" style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16 }}>
                  <h4 style={{ margin: 0, fontSize: 16, fontWeight: 500, color: "var(--lime)" }}>{item.title}</h4>
                  <p style={{ margin: "10px 0 0", fontSize: 14.5, fontWeight: 300, lineHeight: 1.55, color: "var(--on-dark-muted)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase detail */}
        <section style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <SectionLabel>A phased, holistic build</SectionLabel>
            <SectionTitle>Holistic planning. Precise delivery.</SectionTitle>
            <div style={{ marginTop: 40 }}>
              {dbitPhases.map((phase, i) => (
                <div
                  key={phase.index}
                  className="rise gcc-phase-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: 24,
                    padding: "28px 0",
                    borderTop: i === 0 ? "1px solid rgba(14,27,42,0.1)" : undefined,
                    borderBottom: "1px solid rgba(14,27,42,0.1)",
                  }}
                >
                  <div>
                    <div className="mono" style={{ fontSize: 12, color: "var(--forest)" }}>{phase.index}</div>
                    <div style={{ marginTop: 6, fontSize: 18, fontWeight: 500 }}>{phase.title}</div>
                  </div>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: "var(--ink-muted)", fontWeight: 300 }}>
                    {phase.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + savings */}
        <section style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <SectionLabel>Benefits of DBIT</SectionLabel>
            <SectionTitle max="20ch">Control, savings, freedom to innovate.</SectionTitle>

            <div
              className="benefit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 28,
                marginTop: 48,
              }}
            >
              {benefits.map((item) => (
                <div key={item.title} className="rise">
                  <div style={{ fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 300, color: "var(--forest)", letterSpacing: "-0.03em" }}>
                    {item.stat}
                  </div>
                  <h3 style={{ margin: "10px 0 0", fontSize: 20, fontWeight: 500 }}>{item.title}</h3>
                  <p style={{ margin: "10px 0 0", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "var(--ink-muted)", maxWidth: "36ch" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mono rise" style={{ margin: "64px 0 0", fontSize: 12, color: "var(--forest)" }}>
              Compounding savings
            </p>
            <h3 className="rise" style={{ margin: "12px 0 0", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 300, letterSpacing: "-0.02em" }}>
              From no savings to ~61% off an in-house cost base.
            </h3>
            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 14,
                marginTop: 32,
              }}
            >
              {costPath.map((item, i) => (
                <div
                  key={item.stage}
                  className="rise"
                  style={{
                    padding: "20px 16px",
                    background: "var(--white)",
                    borderTop: i === 0 ? "3px solid var(--mist)" : "3px solid var(--lime)",
                  }}
                >
                  <p className="mono" style={{ margin: 0, fontSize: 10, color: "var(--ink-muted)" }}>{item.stage}</p>
                  <p style={{ margin: "10px 0 0", fontSize: 14.5, fontWeight: 300, lineHeight: 1.45 }}>{item.label}</p>
                  {item.save ? (
                    <p style={{ margin: "12px 0 0", fontSize: 20, color: "var(--forest)", fontWeight: 400 }}>{item.save}</p>
                  ) : null}
                </div>
              ))}
            </div>

            <div
              className="dbit-grid rise"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 20,
                marginTop: 40,
              }}
            >
              {provenResults.map((item) => (
                <div key={item.label} style={{ padding: "22px", background: "var(--white)" }}>
                  <div style={{ fontSize: 28, fontWeight: 400, color: "var(--forest)" }}>{item.value}</div>
                  <p className="mono" style={{ margin: "8px 0 0", fontSize: 11, color: "var(--ink-muted)" }}>{item.label}</p>
                  <p style={{ margin: "10px 0 0", fontSize: 14, fontWeight: 300, lineHeight: 1.5, color: "var(--ink-muted)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Turnkey */}
        <section style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <SectionLabel>Turnkey build & staffing</SectionLabel>
            <SectionTitle>Site. Systems. People.</SectionTitle>
            <Lead>
              Trilogy stands up the site and the technology stack as a single programme — construction
              through to telephony — so the captive is ready to operate, not merely occupied.
            </Lead>

            <div
              className="own-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                marginTop: 44,
              }}
            >
              <div className="rise">
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>Site build-out</h3>
                <ul style={{ margin: "14px 0 0", padding: 0, listStyle: "none" }}>
                  {turnkeySite.map((item) => (
                    <li key={item} style={{ padding: "10px 0", borderBottom: "1px solid rgba(14,27,42,0.08)", fontSize: 14.5, fontWeight: 300, color: "var(--ink-muted)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rise">
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>IT build-out</h3>
                <ul style={{ margin: "14px 0 0", padding: 0, listStyle: "none" }}>
                  {turnkeyIt.map((item) => (
                    <li key={item} style={{ padding: "10px 0", borderBottom: "1px solid rgba(14,27,42,0.08)", fontSize: 14.5, fontWeight: 300, color: "var(--ink-muted)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 24,
                marginTop: 48,
              }}
            >
              {turnkeyStaff.map((item) => (
                <div key={item.title} className="rise" style={{ borderTop: "1px solid rgba(14,27,42,0.12)", paddingTop: 16 }}>
                  <h4 style={{ margin: 0, fontSize: 17, fontWeight: 500 }}>{item.title}</h4>
                  <p style={{ margin: "10px 0 0", fontSize: 14.5, fontWeight: 300, lineHeight: 1.55, color: "var(--ink-muted)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Track record + cases */}
        <section id="cases" style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <SectionLabel>Team + experience</SectionLabel>
            <SectionTitle max="20ch">We know where the pitfalls and golden nuggets are.</SectionTitle>
            <Lead>
              The same management team built three BPO companies sold to international groups. Most
              recent engagement: 1,000 seats over 24 months, first 100 seats live in six weeks.
            </Lead>

            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 24,
                marginTop: 40,
              }}
            >
              {trackRecord.map((item) => (
                <div key={item.name} className="rise" style={{ background: "var(--white)", padding: "24px 22px" }}>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 500 }}>{item.name}</h3>
                  <p style={{ margin: "12px 0 0", fontSize: 14.5, fontWeight: 300, lineHeight: 1.6, color: "var(--ink-muted)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mono rise" style={{ margin: "64px 0 0", fontSize: 12, color: "var(--forest)" }}>
              Case studies
            </p>
            <h3 className="rise" style={{ margin: "12px 0 0", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 300, letterSpacing: "-0.02em" }}>
              DBIT at scale — Aegis and Ascensos.
            </h3>

            <div style={{ display: "grid", gap: 48, marginTop: 36 }}>
              {caseStudies.map((cs) => (
                <div
                  key={cs.name}
                  className="split-2 rise"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.1fr",
                    gap: 32,
                    alignItems: "center",
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", background: "var(--ink)" }}>
                    <Image src={cs.img} alt={cs.name} fill sizes="480px" style={{ objectFit: "cover" }} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 24, fontWeight: 500 }}>{cs.name}</h4>
                    <p style={{ margin: "12px 0 0", fontSize: 15.5, fontWeight: 300, lineHeight: 1.6, color: "var(--ink-muted)" }}>
                      {cs.lead}
                    </p>
                    <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none" }}>
                      {cs.points.map((p) => (
                        <li
                          key={p}
                          style={{
                            padding: "8px 0",
                            borderBottom: "1px solid rgba(14,27,42,0.08)",
                            fontSize: 14.5,
                            fontWeight: 300,
                            lineHeight: 1.5,
                            color: "var(--ink)",
                          }}
                        >
                          <span style={{ color: "var(--lime)", marginRight: 10 }}>▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial */}
        <section id="commercial" style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <SectionLabel>Commercial models</SectionLabel>
            <SectionTitle max="20ch">A path to ownership — not a locked-in BPO tax.</SectionTitle>
            <Lead>
              Trilogy will also assist you to apply and administer DTIC job-creation grants — circa
              $7,500 per job created — from application through to payment.
            </Lead>

            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 24,
                marginTop: 44,
              }}
            >
              {commercialModels.map((item) => (
                <div key={item.title} className="rise" style={{ borderTop: "2px solid var(--lime)", paddingTop: 18 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>{item.title}</h3>
                  <p style={{ margin: "12px 0 0", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "var(--ink-muted)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mono rise" style={{ margin: "56px 0 0", fontSize: 12, color: "var(--forest)" }}>
              Who DBIT is for
            </p>
            <div style={{ display: "grid", gap: 14, marginTop: 20, maxWidth: "60ch" }}>
              {whoBenefits.map((item, i) => (
                <p
                  key={item}
                  className="rise"
                  style={{
                    margin: 0,
                    fontSize: 16.5,
                    fontWeight: 300,
                    lineHeight: 1.55,
                    paddingLeft: 16,
                    borderLeft: "3px solid var(--lime)",
                  }}
                >
                  <span className="mono" style={{ fontSize: 11, color: "var(--forest)", marginRight: 8 }}>
                    0{i + 1}
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          style={{
            position: "relative",
            padding: "110px 0",
            background: "var(--ink-deep)",
            color: "var(--white)",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 80% 20%, rgba(46,232,92,0.16), transparent 42%), radial-gradient(ellipse at 10% 90%, rgba(140,224,129,0.1), transparent 40%)",
            }}
          />
          <div className="shell" style={{ position: "relative" }}>
            <SectionLabel onDark>Next step</SectionLabel>
            <SectionTitle max="16ch">Ready to own your South African centre?</SectionTitle>
            <Lead onDark>
              Tell us where you are — in-house, outsourced, or starting fresh — and we’ll map a DBIT
              path with open-book costing and a fixed management fee.
            </Lead>
            <div className="rise" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 }}>
              <a href="mailto:sales@trilogybpo.com" className="cta">
                Email sales@trilogybpo.com
              </a>
              <a href="mailto:kobusvdw@trilogybpo.com" className="cta cta-ghost">
                Email Kobus · CEO
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          background: "var(--ink-deep)",
          color: "rgba(255,255,255,0.55)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "28px 0 36px",
        }}
      >
        <div
          className="shell"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            src="/logo-gcc.png"
            alt="trilogy Global Capability Centre"
            width={180}
            height={48}
            style={{ height: 28, width: "auto", opacity: 0.9 }}
          />
          <p className="mono" style={{ margin: 0, fontSize: 10.5 }}>
            © {new Date().getFullYear()} Trilogy · DBIT · Global Capability Centres · Cape Town
          </p>
        </div>
      </footer>
    </>
  );
}
