import Image from "next/image";

const nav = [
  { label: "Why GCC", href: "#why" },
  { label: "DBIT", href: "#dbit" },
  { label: "Advantage", href: "#advantage" },
  { label: "Contact", href: "#contact" },
];

const propositions = [
  {
    title: "Total control",
    body: "You own the culture, the processes and the data — aligned to your brand’s global standards.",
  },
  {
    title: "Talent longevity",
    body: "GCC teams in South Africa retain around 40% longer than vendor-outsourced environments.",
  },
  {
    title: "IP protection",
    body: "Sensitive data and proprietary workflows stay inside your legal and physical perimeter.",
  },
];

const phases = [
  {
    index: "01",
    title: "Design",
    body: "Legal, technical and operational blueprint — business case, risk matrix, people plan and facilities.",
  },
  {
    index: "02",
    title: "Build",
    body: "Property, infrastructure and top-tier local talent, with local know-how and change management.",
  },
  {
    index: "03",
    title: "Innovate",
    body: "AI and automation embedded from day one so the centre is future-ready before transfer.",
  },
  {
    index: "04",
    title: "Transfer",
    body: "A mature, high-performing entity handed over with zero launch risk and full knowledge transfer.",
  },
];

const benefits = [
  {
    stat: "20–30%",
    title: "Cheaper than outsourcing",
    body: "Additional savings vs traditional BPO by removing vendor margins and overhead.",
  },
  {
    stat: "15–20%",
    title: "Further via deflection",
    body: "Automation and AI without the constraints of a vendor commercial model.",
  },
  {
    stat: "100%",
    title: "Strategic ownership",
    body: "Complete control of operations, technology, data security and roadmap.",
  },
];

const proof = [
  { value: "36", label: "Blue-chip centres launched" },
  { value: "4–6 mo", label: "Faster than solo market entry" },
  { value: "1,000", label: "Seats stood up in 24 months" },
  { value: "40%", label: "Higher talent retention" },
];

const trilogyOwns = [
  "Operating model & governance design",
  "Local compliance, labour law and regulatory setup",
  "Hiring, training and leadership ramp-up",
  "Technology, security and CX tooling",
  "Performance management and optimisation",
];

const clientOwns = [
  "Intellectual property and data",
  "Dedicated teams aligned to their brand",
  "Strategic control over roadmap, skills and scale",
  "Option to fully absorb the operation when ready",
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
        {/* Hero — one composition: brand, headline, line, CTAs, full-bleed place */}
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
                maxWidth: "38ch",
                fontSize: "clamp(16px, 2vw, 19px)",
                fontWeight: 300,
                lineHeight: 1.55,
                color: "var(--on-dark-muted)",
              }}
            >
              Design, Build, Innovate, Transfer — your risk-mitigated roadmap to a fully owned
              Global Capability Centre in South Africa.
            </p>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}
            >
              <a href="#contact" className="cta">
                Start a conversation
              </a>
              <a href="#dbit" className="cta cta-ghost">
                See the DBIT method
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

        {/* Why GCC */}
        <section id="why" style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              Why a Trilogy GCC
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
              Own the capability. Keep the edge.
            </h2>
            <p
              className="rise"
              style={{
                margin: "20px 0 0",
                maxWidth: "52ch",
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
              }}
            >
              Move beyond vendor outsourcing. Stand up a captive centre with Trilogy’s proven DBIT
              method — deep local expertise in labour law, compliance, facilities and vendor
              ecosystems.
            </p>

            <div
              className="split-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: 40,
                marginTop: 56,
                alignItems: "center",
              }}
            >
              <div className="rise" style={{ display: "grid", gap: 28 }}>
                {propositions.map((item) => (
                  <div key={item.title}>
                    <h3 style={{ margin: 0, fontSize: 22, fontWeight: 500 }}>{item.title}</h3>
                    <p
                      style={{
                        margin: "8px 0 0",
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
                className="rise"
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                  background: "var(--ink)",
                }}
              >
                <Image
                  src="/offer-gcc.png"
                  alt="Trilogy Global Capability Centre operations"
                  fill
                  sizes="(max-width: 860px) 100vw, 420px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "auto 0 0",
                    padding: 22,
                    background: "linear-gradient(transparent, rgba(8,16,24,0.92))",
                    color: "var(--white)",
                  }}
                >
                  <p className="mono" style={{ margin: 0, fontSize: 11, color: "var(--mint)" }}>
                    South Africa
                  </p>
                  <p style={{ margin: "8px 0 0", fontSize: 18, fontWeight: 300, maxWidth: "22ch" }}>
                    English-speaking talent, UK-aligned time zones, world-class infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DBIT */}
        <section id="dbit" style={{ padding: "96px 0", background: "var(--ink)", color: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--mint)" }}>
              The DBIT method
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
              Design. Build. Innovate. Transfer.
            </h2>
            <p
              className="rise"
              style={{
                margin: "18px 0 0",
                maxWidth: "48ch",
                fontSize: 16.5,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "var(--on-dark-muted)",
              }}
            >
              A sequenced path from blueprint to owned Centre of Excellence — with innovation
              baked in before the keys change hands.
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
                    {phase.index}
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
          </div>
        </section>

        {/* Advantage */}
        <section id="advantage" style={{ padding: "96px 0", background: "var(--fog)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              The advantage
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
              Compounding value, not vendor rent.
            </h2>

            <div
              className="benefit-grid rise"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 28,
                marginTop: 48,
              }}
            >
              {benefits.map((item) => (
                <div key={item.title} className="rise" style={{ paddingTop: 8 }}>
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
                  <h3 style={{ margin: "10px 0 0", fontSize: 20, fontWeight: 500 }}>{item.title}</h3>
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
                <div
                  key={item.label}
                  style={{
                    background: "var(--white)",
                    padding: "28px 22px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      color: "var(--ink)",
                    }}
                  >
                    {item.value}
                  </div>
                  <p
                    className="mono"
                    style={{ margin: "10px 0 0", fontSize: 11, color: "var(--ink-muted)", lineHeight: 1.45 }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ownership split — not cards for decoration; clear lists */}
        <section style={{ padding: "96px 0", background: "var(--white)" }}>
          <div className="shell">
            <p className="mono rise" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
              Clear ownership
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
              We build it. You own what matters.
            </h2>

            <div
              className="own-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                marginTop: 48,
              }}
            >
              <div className="rise">
                <h3 className="mono" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
                  Trilogy delivers
                </h3>
                <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none" }}>
                  {trilogyOwns.map((item) => (
                    <li
                      key={item}
                      style={{
                        padding: "14px 0",
                        borderBottom: "1px solid rgba(14,27,42,0.1)",
                        fontSize: 16,
                        fontWeight: 300,
                        lineHeight: 1.45,
                      }}
                    >
                      <span style={{ color: "var(--lime)", marginRight: 12 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rise">
                <h3 className="mono" style={{ margin: 0, fontSize: 12, color: "var(--forest)" }}>
                  You retain
                </h3>
                <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none" }}>
                  {clientOwns.map((item) => (
                    <li
                      key={item}
                      style={{
                        padding: "14px 0",
                        borderBottom: "1px solid rgba(14,27,42,0.1)",
                        fontSize: 16,
                        fontWeight: 300,
                        lineHeight: 1.45,
                      }}
                    >
                      <span style={{ color: "var(--forest)", marginRight: 12 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
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
                maxWidth: "42ch",
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "var(--on-dark-muted)",
              }}
            >
              Tell us where you are on the journey — in-house, outsourced, or starting fresh — and
              we’ll map a DBIT path that fits.
            </p>
            <div className="rise" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 }}>
              <a href="mailto:hello@trilogybpo.com" className="cta">
                Email hello@trilogybpo.com
              </a>
              <a href="https://www.trilogybpo.com/trilogy-gcc/" className="cta cta-ghost">
                View main site GCC page
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
            © {new Date().getFullYear()} Trilogy · Global Capability Centres · Cape Town
          </p>
        </div>
      </footer>
    </>
  );
}
