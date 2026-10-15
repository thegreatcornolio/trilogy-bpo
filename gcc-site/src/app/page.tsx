import Image from "next/image";
import {
  BRIEF_PDF,
  advantages,
  benefits,
  commercialPoints,
  comparisons,
  costPath,
  innovate,
  migrationScope,
  nav,
  owns,
  phases,
  proof,
  proposition,
  routes,
  saDrivers,
  transferSupport,
  turnkey,
  whoBenefits,
} from "@/lib/content";

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
          <nav className="desktop-nav" style={{ display: "flex", gap: 22, alignItems: "center" }}>
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
        {/* Hero */}
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

        {/* Proposition — from live GCC page */}
        <section id="proposition" style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              The GCC proposition
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "16ch",
                fontSize: "clamp(30px, 4.4vw, 52px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              From vendor to owner.
            </h2>
            <p
              className="rise"
              style={{
                margin: "20px 0 0",
                maxWidth: "58ch",
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
              }}
            >
              Establish a Global Capability Centre in South Africa that functions as a seamless
              extension of your headquarters — transitioning from third-party dependency to a
              fully-owned global asset.
            </p>

            <div
              className="dbit-grid rise"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 28,
                marginTop: 48,
                paddingTop: 40,
                borderTop: "1px solid rgba(14,27,42,0.1)",
              }}
            >
              {proposition.map((item, i) => (
                <div key={item.title}>
                  <div className="mono" style={{ fontSize: 12, color: "var(--forest)" }}>
                    0{i + 1}
                  </div>
                  <h3 style={{ margin: "10px 0 0", fontSize: 22, fontWeight: 500 }}>{item.title}</h3>
                  <p
                    style={{
                      margin: "12px 0 0",
                      fontSize: 15.5,
                      lineHeight: 1.65,
                      color: "var(--ink-muted)",
                      fontWeight: 300,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="rise"
              style={{
                margin: "40px 0 0",
                maxWidth: "68ch",
                fontSize: 14,
                lineHeight: 1.65,
                color: "rgba(14,27,42,0.5)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              By 2026, 50% of global enterprises are projected to transition from traditional BPO to
              Build-Operate-Transfer models to foster internal innovation rather than just task
              execution.
            </p>
          </div>
        </section>

        {/* Why SA + three routes — from brief */}
        <section id="why" style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              Why South Africa
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "18ch",
                fontSize: "clamp(30px, 4.4vw, 48px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Three routes offshore. One clear path to ownership.
            </h2>

            <div
              className="rise"
              style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", marginTop: 28 }}
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
                marginTop: 48,
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
                  <h3 style={{ margin: "12px 0 0", fontSize: 22, fontWeight: 500 }}>{route.title}</h3>
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
              The DBOT framework
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "16ch",
                fontSize: "clamp(30px, 4.4vw, 52px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Your roadmap to ownership.
            </h2>
            <p
              className="rise"
              style={{
                margin: "18px 0 0",
                maxWidth: "54ch",
                fontSize: 16.5,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "var(--on-dark-muted)",
              }}
            >
              Design → Build → Operate → Transfer. A proven pathway that mitigates risk at every stage
              while building toward full ownership — applied across South Africa for more than 20 years.
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
                  key={phase.key}
                  className="phase rise"
                  style={{
                    padding: "28px 0 0",
                    borderTop: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  <div className="phase-index mono" style={{ fontSize: 12, color: "var(--mint)" }}>
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
              className="own-grid rise"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 28,
                marginTop: 44,
              }}
            >
              <div>
                <p className="mono" style={{ margin: 0, fontSize: 12, color: "var(--mint)" }}>
                  Risk mitigation
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    color: "var(--on-dark-muted)",
                    fontWeight: 300,
                  }}
                >
                  DBOT is a de-risking engine — local compliance, labour law, facilities and vendor
                  ecosystems handled by operators who have done this before.
                </p>
              </div>
              <div>
                <p className="mono" style={{ margin: 0, fontSize: 12, color: "var(--mint)" }}>
                  Speed to value
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    color: "var(--on-dark-muted)",
                    fontWeight: 300,
                  }}
                >
                  Ready-state infrastructure and local licences reduce typical GCC setup time by 4–6
                  months compared to solo market entry.
                </p>
              </div>
            </div>

            <div
              className="rise"
              style={{
                marginTop: 40,
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

        {/* Phase detail + migration scope */}
        <section style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              Migration — a phased approach
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "18ch",
                fontSize: "clamp(30px, 4.4vw, 48px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Holistic planning. Precise delivery.
            </h2>
            <p
              className="rise"
              style={{
                margin: "18px 0 0",
                maxWidth: "54ch",
                fontSize: 16.5,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
              }}
            >
              Success depends on planning every dimension of the programme — not just seats and systems.
            </p>

            <div
              className="rise"
              style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}
            >
              {migrationScope.map((item) => (
                <span
                  key={item}
                  className="mono"
                  style={{
                    fontSize: 11,
                    padding: "8px 12px",
                    border: "1px solid rgba(14,27,42,0.12)",
                    color: "rgba(14,27,42,0.7)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 48 }}>
              {phases.map((phase, i) => (
                <div
                  key={phase.key}
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
                    <div className="mono" style={{ fontSize: 12, color: "var(--forest)" }}>
                      {phase.index}
                    </div>
                    <div style={{ marginTop: 6, fontSize: 18, fontWeight: 500 }}>{phase.title}</div>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 15.5,
                      lineHeight: 1.7,
                      color: "var(--ink-muted)",
                      fontWeight: 300,
                    }}
                  >
                    {phase.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              Benefits of DBOT
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
              Control, savings, freedom to innovate.
            </h2>

            <div
              className="benefit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 28,
                marginTop: 48,
              }}
            >
              {benefits.map((item) => (
                <div key={item.title} className="rise">
                  <div
                    style={{
                      fontSize: "clamp(40px, 5vw, 56px)",
                      fontWeight: 300,
                      letterSpacing: "-0.03em",
                      color: "var(--forest)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {item.stat}
                  </div>
                  <h3 style={{ margin: "12px 0 0", fontSize: 20, fontWeight: 500 }}>{item.title}</h3>
                  <p
                    style={{
                      margin: "10px 0 0",
                      maxWidth: "32ch",
                      fontSize: 15,
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
              className="proof-grid rise"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 1,
                marginTop: 64,
                background: "var(--mist)",
                border: "1px solid var(--mist)",
              }}
            >
              {proof.map((item) => (
                <div key={item.label} style={{ background: "var(--white)", padding: "28px 22px" }}>
                  <div style={{ fontSize: 32, fontWeight: 400, letterSpacing: "-0.02em" }}>
                    {item.value}
                  </div>
                  <p className="mono" style={{ margin: "10px 0 0", fontSize: 11, color: "var(--ink-muted)" }}>
                    {item.label}
                  </p>
                  <p
                    style={{
                      margin: "10px 0 0",
                      fontSize: 13.5,
                      fontWeight: 300,
                      lineHeight: 1.5,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ownership + comparisons */}
        <section style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              The Trilogy GCC lifecycle
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "16ch",
                fontSize: "clamp(30px, 4.4vw, 48px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Shared risk. Clear ownership.
            </h2>

            <div
              className="own-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                marginTop: 48,
              }}
            >
              <div className="rise" style={{ paddingTop: 8, borderTop: "3px solid var(--forest)" }}>
                <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 500 }}>
                  What Trilogy owns early
                </h3>
                <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none" }}>
                  {owns.trilogy.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: 10,
                        padding: "10px 0",
                        fontSize: 15,
                        fontWeight: 300,
                        lineHeight: 1.5,
                        color: "rgba(14,27,42,0.72)",
                        borderBottom: "1px solid rgba(14,27,42,0.08)",
                      }}
                    >
                      <span style={{ color: "var(--forest)", fontWeight: 700 }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rise" style={{ paddingTop: 8, borderTop: "3px solid var(--ink)" }}>
                <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 500 }}>
                  What you own from day one
                </h3>
                <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none" }}>
                  {owns.client.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: 10,
                        padding: "10px 0",
                        fontSize: 15,
                        fontWeight: 300,
                        lineHeight: 1.5,
                        color: "rgba(14,27,42,0.72)",
                        borderBottom: "1px solid rgba(14,27,42,0.08)",
                      }}
                    >
                      <span style={{ color: "var(--ink)", fontWeight: 700 }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="own-grid rise"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 28,
                marginTop: 56,
              }}
            >
              {comparisons.map((item) => (
                <div
                  key={item.title}
                  style={{ paddingBottom: 8, borderBottom: "1px solid rgba(14,27,42,0.1)" }}
                >
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 500 }}>{item.title}</h3>
                  <p
                    style={{
                      margin: "12px 0 20px",
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "var(--ink-muted)",
                      fontWeight: 300,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost path */}
        <section style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              DBOT evolution
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
              Compounding savings on the path to a GCC.
            </h2>
            <p
              className="rise"
              style={{
                margin: "18px 0 0",
                maxWidth: "52ch",
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "var(--ink-muted)",
              }}
            >
              Midpoint model of labour arbitrage, GCC ownership and AI deflection stacking on the same
              cost base.
            </p>

            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 16,
                marginTop: 44,
              }}
            >
              {costPath.map((item, i) => (
                <div
                  key={item.stage}
                  className="rise"
                  style={{
                    padding: "22px 18px",
                    background: "var(--white)",
                    borderTop: i === 0 ? "3px solid var(--mist)" : "3px solid var(--lime)",
                  }}
                >
                  <p className="mono" style={{ margin: 0, fontSize: 11, color: "var(--ink-muted)" }}>
                    {item.stage}
                  </p>
                  <p
                    style={{
                      margin: "12px 0 0",
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.5,
                      color: "var(--ink)",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.save ? (
                    <p
                      style={{
                        margin: "14px 0 0",
                        fontSize: 22,
                        fontWeight: 400,
                        color: "var(--forest)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.save}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovate during Operate */}
        <section style={{ padding: "96px 0", background: "var(--ink)", color: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--mint)" }}>
              Innovation by design
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "16ch",
                fontSize: "clamp(30px, 4.4vw, 48px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              {innovate.title}
            </h2>
            <p
              className="rise"
              style={{
                margin: "18px 0 0",
                maxWidth: "52ch",
                fontSize: 16.5,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "var(--on-dark-muted)",
              }}
            >
              {innovate.lead}
            </p>
            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 28,
                marginTop: 44,
              }}
            >
              {innovate.points.map((item) => (
                <div
                  key={item.title}
                  className="rise"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 20 }}
                >
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500, color: "var(--lime)" }}>
                    {item.title}
                  </h3>
                  <p
                    style={{
                      margin: "12px 0 0",
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "var(--on-dark-muted)",
                      fontWeight: 300,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery: advantages + turnkey */}
        <section id="delivery" style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              How we deliver
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "18ch",
                fontSize: "clamp(30px, 4.4vw, 48px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Built for purpose. Funded as OPEX.
            </h2>

            <div
              className="own-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 28,
                marginTop: 44,
              }}
            >
              {advantages.map((item) => (
                <div
                  key={item.title}
                  className="rise"
                  style={{ borderTop: "1px solid rgba(14,27,42,0.12)", paddingTop: 18 }}
                >
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>{item.title}</h3>
                  <p
                    style={{
                      margin: "10px 0 0",
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

            <p
              className="mono rise"
              style={{ margin: "64px 0 0", fontSize: 12, color: "var(--forest)" }}
            >
              Turnkey build
            </p>
            <h3
              className="rise"
              style={{
                margin: "12px 0 0",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              Site. Systems. People.
            </h3>

            <div
              className="dbit-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 28,
                marginTop: 36,
              }}
            >
              {turnkey.map((block) => (
                <div key={block.title} className="rise">
                  <h4 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>{block.title}</h4>
                  <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none" }}>
                    {block.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          padding: "10px 0",
                          borderBottom: "1px solid rgba(14,27,42,0.08)",
                          fontSize: 14.5,
                          fontWeight: 300,
                          lineHeight: 1.45,
                          color: "var(--ink-muted)",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who benefits */}
        <section style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              Who this is for
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "16ch",
                fontSize: "clamp(30px, 4.4vw, 48px)",
                fontWeight: 200,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Ready to own the next stage.
            </h2>
            <div style={{ display: "grid", gap: 18, marginTop: 40, maxWidth: "64ch" }}>
              {whoBenefits.map((item, i) => (
                <p
                  key={item}
                  className="rise"
                  style={{
                    margin: 0,
                    fontSize: 17,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "var(--ink)",
                    paddingLeft: 18,
                    borderLeft: "3px solid var(--lime)",
                  }}
                >
                  <span className="mono" style={{ fontSize: 11, color: "var(--forest)", marginRight: 10 }}>
                    0{i + 1}
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial + brief */}
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
                  style={{ paddingTop: 20, borderTop: "1px solid rgba(14,27,42,0.12)" }}
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
              A safe pair of hands
            </p>
            <h2
              className="rise"
              style={{
                margin: "14px 0 0",
                maxWidth: "18ch",
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
                maxWidth: "48ch",
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "var(--on-dark-muted)",
              }}
            >
              Tenured BPO executives who have built more than 30 contact centres over 25 years —
              including successful companies later acquired by international groups. Tell us where you
              are on the journey and we’ll map a DBOT path that fits.
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
