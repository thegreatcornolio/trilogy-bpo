import type { Metadata } from "next";
import Link from "next/link";
import SectionKicker from "@/components/SectionKicker";
import GccCostChart from "@/components/GccCostChart";
import ServiceHero from "@/components/ServiceHero";
import {
  company,
  gccAdvantages,
  gccBenefits,
  gccComparisons,
  gccDbitPhases,
  gccHero,
  gccInnovate,
  gccMigrationScope,
  gccOwns,
  gccProof,
  gccProposition,
  gccTurnkey,
  gccWhoBenefits,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Trilogy GCC — Design, Build, Innovate, Transfer",
  description:
    "Establish a Global Capability Centre in South Africa with Trilogy's DBIT methodology. From outsourcing to ownership — risk-mitigated, AI-ready, fully transferable.",
};

export default function TrilogyGccPage() {
  return (
    <main>
      <ServiceHero
        kicker={gccHero.kicker}
        title={gccHero.title}
        lead={gccHero.lead}
        video="/video/offer-gcc.mp4"
        poster="/img/offer-gcc.png"
        meta="DBIT · Design · Build · Innovate · Transfer"
        objectPosition="center"
      />

      {/* Proposition */}
      <section style={{ padding: "88px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>The GCC proposition</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "22ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
              lineHeight: 1.12,
            }}
          >
            From vendor to owner.
          </h2>
          <p
            className="rise"
            style={{
              margin: "18px 0 0",
              maxWidth: "62ch",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            Establish a Global Capability Center in South Africa that functions as a seamless extension of your
            headquarters — transitioning from third-party dependency to a fully-owned global asset.
          </p>
          <div
            className="rise t-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 28,
              marginTop: 48,
              paddingTop: 40,
              borderTop: "1px solid rgba(14,27,42,.1)",
            }}
          >
            {gccProposition.map((item, i) => (
              <div key={item.title}>
                <div className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "#0E7C46" }}>
                  0{i + 1}
                </div>
                <h3 style={{ margin: "10px 0 0", fontSize: 20, fontWeight: 500, letterSpacing: "-.01em" }}>
                  {item.title}
                </h3>
                <p style={{ margin: "12px 0 0", fontSize: 15.5, lineHeight: 1.65, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p
            className="rise"
            style={{
              margin: "40px 0 0",
              maxWidth: "72ch",
              fontSize: 14,
              lineHeight: 1.65,
              color: "rgba(14,27,42,.5)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            By 2026, 50% of global enterprises are projected to transition from traditional BPO to Build-Operate-Transfer
            models to foster internal innovation rather than just task execution.
          </p>
        </div>
      </section>

      {/* DBIT Framework */}
      <section style={{ padding: "88px 0", background: "#0c1926", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>The DBIT framework</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "24ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
              lineHeight: 1.12,
            }}
          >
            Your roadmap to ownership.
          </h2>
          <p
            className="rise"
            style={{
              margin: "18px 0 0",
              maxWidth: "58ch",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(247,245,240,.66)",
              fontWeight: 300,
            }}
          >
            Design → Build → Innovate → Transfer. A proven pathway that mitigates risk at every stage while building
            toward full ownership. Applied to launch 36 blue-chip contact centres in South Africa over 20 years.
          </p>
          <div
            className="rise t-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 1,
              marginTop: 48,
              background: "rgba(255,255,255,.08)",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {gccDbitPhases.map((phase) => (
              <div key={phase.key} style={{ background: "#0c1926", padding: "28px 24px" }}>
                <div className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "#2FE85C" }}>
                  {phase.index}
                </div>
                <h3 style={{ margin: "12px 0 0", fontSize: 22, fontWeight: 500 }}>{phase.title}</h3>
                <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(247,245,240,.62)", fontWeight: 300 }}>
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
          <div
            className="rise t-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 36,
            }}
          >
            <div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: ".12em", color: "#2FE85C" }}>
                Risk mitigation
              </div>
              <p style={{ margin: "10px 0 0", fontSize: 15.5, lineHeight: 1.65, color: "rgba(247,245,240,.7)", fontWeight: 300 }}>
                DBIT is a de-risking engine — local compliance, labour law, facilities and vendor ecosystems handled by
                operators who have done this before.
              </p>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: ".12em", color: "#2FE85C" }}>
                Speed to value
              </div>
              <p style={{ margin: "10px 0 0", fontSize: 15.5, lineHeight: 1.65, color: "rgba(247,245,240,.7)", fontWeight: 300 }}>
                Ready-state infrastructure and local licences reduce typical GCC setup time by 4–6 months compared to
                solo market entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "88px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>Benefits of DBIT</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "20ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Control, savings, freedom to innovate.
          </h2>
          <div
            className="rise t-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
              marginTop: 40,
            }}
          >
            {gccBenefits.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "28px 26px",
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(32px, 4vw, 44px)",
                    fontWeight: 400,
                    letterSpacing: "-.03em",
                    color: "#0E7C46",
                    lineHeight: 1,
                  }}
                >
                  {item.stat}
                </div>
                <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 500 }}>{item.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership split + comparisons */}
      <section style={{ padding: "88px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>The Trilogy GCC lifecycle</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "22ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Shared risk. Clear ownership.
          </h2>
          <div
            className="rise t-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              marginTop: 40,
            }}
          >
            <div style={{ paddingTop: 8, borderTop: "3px solid #0E7C46" }}>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 500 }}>What Trilogy owns early</h3>
              <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {gccOwns.trilogy.map((item) => (
                  <li
                    key={item}
                    className="mono"
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      fontSize: 12.5,
                      letterSpacing: ".06em",
                      lineHeight: 1.5,
                      color: "rgba(14,27,42,.72)",
                      textTransform: "none",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    <span style={{ color: "#0E7C46", fontWeight: 700, flex: "none" }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ paddingTop: 8, borderTop: "3px solid #0E1B2A" }}>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 500 }}>What you own from day one</h3>
              <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {gccOwns.client.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "rgba(14,27,42,.72)",
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: "#0E1B2A", fontWeight: 700, flex: "none" }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="rise t-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 56,
            }}
          >
            {gccComparisons.map((item) => (
              <div key={item.title} style={{ paddingBottom: 8, borderBottom: "1px solid rgba(14,27,42,.1)" }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 500 }}>{item.title}</h3>
                <p style={{ margin: "12px 0 20px", fontSize: 15, lineHeight: 1.65, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost path */}
      <section style={{ padding: "88px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>DBIT evolution</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "24ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Compounding savings on the path to a GCC.
          </h2>
          <GccCostChart />
        </div>
      </section>

      {/* Innovate engine */}
      <section style={{ padding: "88px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>Innovation by design</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "18ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            {gccInnovate.title}
          </h2>
          <p
            className="rise"
            style={{
              margin: "18px 0 0",
              maxWidth: "54ch",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(247,245,240,.66)",
              fontWeight: 300,
            }}
          >
            {gccInnovate.lead}
          </p>
          <div
            className="rise t-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 28,
              marginTop: 44,
            }}
          >
            {gccInnovate.points.map((item) => (
              <div key={item.title} style={{ borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 20 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500, color: "#2FE85C" }}>{item.title}</h3>
                <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.65, color: "rgba(247,245,240,.68)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase detail */}
      <section style={{ padding: "88px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>Migration — a phased approach</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "22ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Holistic planning. Precise delivery.
          </h2>
          <p
            className="rise"
            style={{
              margin: "18px 0 0",
              maxWidth: "58ch",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            Success depends on planning every dimension of the programme — not just seats and systems.
          </p>
          <div
            className="rise"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 28,
            }}
          >
            {gccMigrationScope.map((item) => (
              <span
                key={item}
                className="mono"
                style={{
                  fontSize: 11.5,
                  letterSpacing: ".08em",
                  padding: "8px 14px",
                  border: "1px solid rgba(14,27,42,.12)",
                  borderRadius: 999,
                  color: "rgba(14,27,42,.7)",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 56, display: "grid", gap: 0 }}>
            {gccDbitPhases.map((phase, i) => (
              <div
                key={phase.key}
                className="rise gcc-phase-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 24,
                  padding: "28px 0",
                  borderTop: i === 0 ? "1px solid rgba(14,27,42,.1)" : undefined,
                  borderBottom: "1px solid rgba(14,27,42,.1)",
                }}
              >
                <div>
                  <div className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "#0E7C46" }}>
                    {phase.index}
                  </div>
                  <div style={{ marginTop: 6, fontSize: 18, fontWeight: 500 }}>{phase.title}</div>
                </div>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: "rgba(14,27,42,.68)", fontWeight: 300 }}>
                  {phase.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section style={{ padding: "88px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>How we deliver</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "20ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Built for purpose. Funded as OPEX.
          </h2>
          <div
            className="rise t-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: 40,
            }}
          >
            {gccAdvantages.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "24px 0",
                  borderTop: "1px solid rgba(14,27,42,.12)",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>{item.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 15.5, lineHeight: 1.65, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey */}
      <section style={{ padding: "88px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>Turnkey build</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "20ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Site. Systems. People.
          </h2>
          <div
            className="rise t-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 28,
              marginTop: 40,
            }}
          >
            {gccTurnkey.map((col) => (
              <div key={col.title}>
                <h3
                  style={{
                    margin: 0,
                    paddingBottom: 14,
                    borderBottom: "2px solid #0E7C46",
                    fontSize: 17,
                    fontWeight: 500,
                  }}
                >
                  {col.title}
                </h3>
                <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.5,
                        color: "rgba(14,27,42,.68)",
                        fontWeight: 300,
                        paddingLeft: 14,
                        borderLeft: "2px solid rgba(14,27,42,.12)",
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

      {/* Who benefits + proof */}
      <section style={{ padding: "88px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>Who this is for</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "22ch",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Ready to own the next stage.
          </h2>
          <div className="rise" style={{ marginTop: 32, display: "grid", gap: 14, maxWidth: 720 }}>
            {gccWhoBenefits.map((item, i) => (
              <div
                key={item}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: 16,
                  alignItems: "start",
                }}
              >
                <span className="mono" style={{ fontSize: 13, color: "#0E7C46", paddingTop: 2 }}>
                  0{i + 1}
                </span>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "rgba(14,27,42,.72)", fontWeight: 300 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rise t-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
              marginTop: 56,
            }}
          >
            {gccProof.map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                  padding: "24px 22px",
                }}
              >
                <div style={{ fontSize: 32, fontWeight: 400, letterSpacing: "-.03em", color: "#0E1B2A" }}>
                  {item.value}
                </div>
                <div className="mono" style={{ marginTop: 8, fontSize: 11, letterSpacing: ".1em", color: "#0E7C46" }}>
                  {item.label}
                </div>
                <p style={{ margin: "12px 0 0", fontSize: 13.5, lineHeight: 1.55, color: "rgba(14,27,42,.58)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section style={{ padding: "88px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionKicker onDark>We mitigate your localisation risks</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
              lineHeight: 1.15,
            }}
          >
            A safe pair of hands for your South African footprint.
          </h2>
          <p
            className="rise"
            style={{
              margin: "20px 0 0",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(247,245,240,.68)",
              fontWeight: 300,
            }}
          >
            Tenured BPO executives who have built more than 30 contact centres over 25 years — including three
            successful companies later acquired by international BPOs. We know the local laws, vendor ecosystem, cost
            parameters, and where the pitfalls and golden nuggets are.
          </p>
          <div className="rise" style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <Link
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "14px 24px",
                borderRadius: 999,
                background: "#2FE85C",
                color: "#0E1B2A",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Get in Touch
            </Link>
            <Link
              href="/trilogy-digital"
              className="mono"
              style={{
                fontSize: 12,
                letterSpacing: ".12em",
                color: "rgba(247,245,240,.55)",
                textTransform: "uppercase",
              }}
            >
              Explore Trilogy Digital →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
