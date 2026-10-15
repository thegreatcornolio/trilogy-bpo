import Image from "next/image";

const BRIEF_PDF = "/trilogy-dbot-solution-brief.pdf";

const nav = [
  { label: "Why GCC", href: "#why" },
  { label: "DBOT", href: "#dbot" },
  { label: "Commercial", href: "#commercial" },
  { label: "Brief", href: BRIEF_PDF },
  { label: "Contact", href: "#contact" },
];

const saDrivers = [
  "Cost reduction",
  "English competency",
  "Accent acceptability",
  "Cultural compatibility",
  "Data protection compliance",
  "Quality of service",
];

const routes = [
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
    body: "Phased Design, Build, Operate and Transfer with a local partner — the focus of this brief.",
    highlight: true,
  },
];

const phases = [
  {
    index: "01",
    letter: "D",
    title: "Design",
    body: "Due diligence, gap analysis, solution design, implementation, change and project plans.",
  },
  {
    index: "02",
    letter: "B",
    title: "Build",
    body: "Total solution implemented at the location of choice, governed by a dedicated project team.",
  },
  {
    index: "03",
    letter: "O",
    title: "Operate",
    body: "Full operational strategy run for a defined period to stabilise service levels and quality.",
  },
  {
    index: "04",
    letter: "T",
    title: "Transfer",
    body: "Operations, technology, facilities, people, knowledge and IP transferred to you.",
  },
];

const riskBenefits = [
  {
    title: "Risk-averse localisation",
    body: "Mitigate labour law, culture, facilities and vendor pitfalls before you take ownership.",
  },
  {
    title: "Limited — or no — CAPEX",
    body: "Optional OPEX rent-to-own model so green-field build cost need not sit on your balance sheet.",
  },
  {
    title: "Speed to savings",
    body: "Rapid mobilisation and a fixed timeline to go-live, ROI and anticipated cost savings.",
  },
  {
    title: "Local best practice, instantly",
    body: "Immediate access to South African hiring, training, MIS, legal and admin infrastructure.",
  },
];

const commercialPoints = [
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
];

const transferSupport = [
  "Continuous improvement",
  "Active benchmarking",
  "Business continuity & DR",
  "Capacity overflow",
];

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
          <nav className="desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link mono"
                style={{ fontSize: 11, color: "rgba(255,255,255,0.78)" }}
                {...(item.href.endsWith(".pdf")
                  ? { download: "Trilogy-DBOT-Solution-Brief.pdf", target: "_blank", rel: "noreferrer" }
                  : {})}
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
                maxWidth: "40ch",
                fontSize: "clamp(16px, 2vw, 19px)",
                fontWeight: 300,
                lineHeight: 1.55,
                color: "var(--on-dark-muted)",
              }}
            >
              Design, Build, Operate, Transfer — mitigating the risks of building a captive centre
              offshore, for any type of operation.
            </p>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}
            >
              <a href="#contact" className="cta">
                Start a conversation
              </a>
              <a
                href={BRIEF_PDF}
                className="cta cta-ghost"
                download="Trilogy-DBOT-Solution-Brief.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download DBOT brief
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

        {/* Why SA + three routes */}
        <section id="why" style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              Why South Africa
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "18ch",
                fontSize: "clamp(30px, 4.4vw, 52px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Three routes offshore. One clear path to ownership.
            </h2>
            <p
              className="rise"
              style={{
                margin: "20px 0 0",
                maxWidth: "54ch",
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
              }}
            >
              Offshoring to South Africa is driven by cost, English competency, accent acceptability,
              cultural fit, data protection and service quality. How you get there depends on
              strategy.
            </p>

            <div
              className="rise"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 18px",
                marginTop: 28,
              }}
            >
              {saDrivers.map((item) => (
                <span
                  key={item}
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--forest)",
                    borderBottom: "1px solid rgba(14,124,70,0.35)",
                    paddingBottom: 4,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 24,
                marginTop: 56,
              }}
            >
              {routes.map((route) => (
                <div
                  key={route.index}
                  className="rise"
                  style={{
                    paddingTop: 22,
                    borderTop: route.highlight
                      ? "2px solid var(--lime)"
                      : "1px solid rgba(14,27,42,0.12)",
                  }}
                >
                  <p className="mono" style={{ margin: 0, fontSize: 11, color: "var(--ink-muted)" }}>
                    Route {route.index}
                    {route.highlight ? " · Focus of this brief" : ""}
                  </p>
                  <h3 style={{ margin: "12px 0 0", fontSize: 24, fontWeight: 500 }}>{route.title}</h3>
                  <p
                    style={{
                      margin: "12px 0 0",
                      fontSize: 15.5,
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: "var(--ink-muted)",
                      maxWidth: "34ch",
                    }}
                  >
                    {route.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DBOT roadmap */}
        <section id="dbot" style={{ padding: "96px 0", background: "var(--ink)", color: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--mint)" }}>
              The DBOT roadmap
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "18ch",
                fontSize: "clamp(30px, 4.4vw, 52px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Design. Build. Operate. Transfer.
            </h2>
            <p
              className="rise"
              style={{
                margin: "18px 0 0",
                maxWidth: "50ch",
                fontSize: 16.5,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "var(--on-dark-muted)",
              }}
            >
              A hybrid between outsourcing and a DIY captive — turnkey implementation with Trilogy
              and local experts, then ownership transfers to you.
            </p>

            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 20,
                marginTop: 52,
              }}
            >
              {phases.map((phase) => (
                <div
                  key={phase.index}
                  className="phase rise"
                  style={{
                    padding: "28px 0 0",
                    borderTop: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  <div
                    className="phase-index mono"
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.45)",
                      transition: "color 0.25s",
                    }}
                  >
                    {phase.index} · {phase.letter}
                  </div>
                  <h3 style={{ margin: "14px 0 0", fontSize: 26, fontWeight: 400 }}>{phase.title}</h3>
                  <p
                    style={{
                      margin: "12px 0 0",
                      fontSize: 14.5,
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: "var(--on-dark-muted)",
                    }}
                  >
                    {phase.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rise"
              style={{
                marginTop: 56,
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                alignItems: "center",
              }}
            >
              <span className="mono" style={{ fontSize: 11, color: "var(--mint)", marginRight: 8 }}>
                Optional after transfer
              </span>
              {transferSupport.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.78)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    padding: "8px 12px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits / risk mitigation */}
        <section id="advantage" style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              How DBOT mitigates risk
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "18ch",
                fontSize: "clamp(30px, 4.4vw, 52px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Captive upside without the solo-build risk.
            </h2>

            <div
              className="benefit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "36px 40px",
                marginTop: 48,
              }}
            >
              {riskBenefits.map((item) => (
                <div key={item.title} className="rise">
                  <h3 style={{ margin: 0, fontSize: 22, fontWeight: 500 }}>{item.title}</h3>
                  <p
                    style={{
                      margin: "10px 0 0",
                      maxWidth: "42ch",
                      fontSize: 15.5,
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="split-2 rise"
              style={{
                display: "grid",
                gridTemplateColumns: "1.05fr 0.95fr",
                gap: 40,
                marginTop: 64,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "5 / 4",
                  overflow: "hidden",
                  background: "var(--ink)",
                }}
              >
                <Image
                  src="/offer-gcc.png"
                  alt="Trilogy Global Capability Centre operations"
                  fill
                  sizes="(max-width: 860px) 100vw, 480px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="mono" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
                  Solution brief
                </p>
                <h3
                  style={{
                    margin: "12px 0 0",
                    fontSize: "clamp(26px, 3vw, 34px)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  Full DBOT detail — roadmap, commercial model and pricing notes.
                </h3>
                <p
                  style={{
                    margin: "14px 0 0",
                    fontSize: 15.5,
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: "var(--ink-muted)",
                    maxWidth: "40ch",
                  }}
                >
                  The March 2026 Trilogy DBOT Solution Brief covers the five risk areas, phase-by-phase
                  implementation, OPEX vs CAPEX, and commercial assumptions.
                </p>
                <a
                  href={BRIEF_PDF}
                  className="cta"
                  style={{ marginTop: 28 }}
                  download="Trilogy-DBOT-Solution-Brief.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download the PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial */}
        <section id="commercial" style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              Commercial model
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "20ch",
                fontSize: "clamp(30px, 4.4vw, 48px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Transparent costing. Fixed management fee.
            </h2>

            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 28,
                marginTop: 48,
              }}
            >
              {commercialPoints.map((item) => (
                <div
                  key={item.title}
                  className="rise"
                  style={{
                    paddingTop: 20,
                    borderTop: "1px solid rgba(14,27,42,0.12)",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 500 }}>{item.title}</h3>
                  <p
                    style={{
                      margin: "12px 0 0",
                      fontSize: 15.5,
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: "var(--ink-muted)",
                      maxWidth: "34ch",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="own-grid rise"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
                marginTop: 56,
                padding: "32px 0 0",
                borderTop: "1px solid rgba(14,27,42,0.1)",
              }}
            >
              <div>
                <p className="mono" style={{ margin: 0, fontSize: 11, color: "var(--ink-muted)" }}>
                  CAPEX path
                </p>
                <h3 style={{ margin: "10px 0 0", fontSize: 22, fontWeight: 500 }}>Green-field build</h3>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontSize: 15.5,
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: "var(--ink-muted)",
                    maxWidth: "36ch",
                  }}
                >
                  You meet the CAPEX for site, equipment and facilities — full ownership from day one
                  of the build.
                </p>
              </div>
              <div>
                <p className="mono" style={{ margin: 0, fontSize: 11, color: "var(--forest)" }}>
                  OPEX path · Chosen by many GCC clients
                </p>
                <h3 style={{ margin: "10px 0 0", fontSize: 22, fontWeight: 500 }}>
                  Trilogy rent-to-own
                </h3>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontSize: 15.5,
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: "var(--ink-muted)",
                    maxWidth: "36ch",
                  }}
                >
                  Full bill of materials on a 36-month plan. At month 36, the site, equipment and
                  facilities are yours.
                </p>
              </div>
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
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--mint)" }}>
              Next step
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "16ch",
                fontSize: "clamp(34px, 5vw, 58px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Ready to own your South African centre?
            </h2>
            <p
              className="rise"
              style={{
                margin: "20px 0 0",
                maxWidth: "44ch",
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "var(--on-dark-muted)",
              }}
            >
              Tell us where you are — outsourcing, captive DIY, or starting fresh — and we’ll map a
              DBOT path with transparent costing.
            </p>
            <div className="rise" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 }}>
              <a href="mailto:kobusvdw@trilogybpo.com" className="cta">
                Email Kobus · CEO
              </a>
              <a
                href={BRIEF_PDF}
                className="cta cta-ghost"
                download="Trilogy-DBOT-Solution-Brief.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download DBOT brief
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
            © {new Date().getFullYear()} Trilogy · DBOT · Global Capability Centres · Cape Town
          </p>
        </div>
      </footer>
    </>
  );
}
