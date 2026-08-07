import type { Metadata } from "next";
import Link from "next/link";
import SectionKicker from "@/components/SectionKicker";
import AiMetrics from "@/components/AiMetrics";
import ServiceHero from "@/components/ServiceHero";
import {
  aiApplicationAreas,
  aiBottomLine,
  aiFailVsSucceed,
  aiHero,
  aiHumanLoop,
  aiProducts,
  aiProposition,
  company,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Trilogy Ai — Autonomous CX",
  description:
    "Agentic AI and digital solutions built inside real BPO constraints. Human-in-the-loop autonomous customer engagement for sales, service, marketing, collections and retention.",
};

export default function TrilogyAiPage() {
  return (
    <main>
      <ServiceHero
        kicker={aiHero.kicker}
        title={aiHero.title}
        lead={aiHero.lead}
        video="/video/offer-ai.mp4"
        poster="/img/offer-ai.png"
        meta="ACE · Autonomous Customer Engagement"
        objectPosition="center"
      />

      {/* Proposition */}
      <section style={{ padding: "88px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>The AI proposition</SectionKicker>
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
            From chatbots to agents that reason and act.
          </h2>
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
            {aiProposition.map((item, i) => (
              <div key={item.title}>
                <div className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "#0E7C46" }}>
                  0{i + 1}
                </div>
                <h3 style={{ margin: "10px 0 0", fontSize: 20, fontWeight: 500 }}>{item.title}</h3>
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
              maxWidth: "70ch",
              fontSize: 14,
              lineHeight: 1.65,
              color: "rgba(14,27,42,.5)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            By 2026, 100% of customer interactions are projected to involve AI in some form. Trust rises when AI makes
            experiences faster — but only if it can resolve the issue.
          </p>
        </div>
      </section>

      {/* Where AI applies */}
      <section style={{ padding: "88px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>Where Trilogy applies AI</SectionKicker>
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
            Make your best people 10× more effective.
          </h2>
          <p
            className="rise"
            style={{
              margin: "16px 0 0",
              maxWidth: "54ch",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            The biggest near-term value of AI in contact centres comes from augmenting agents, not replacing them.
          </p>
          <div
            className="rise t-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
              marginTop: 40,
            }}
          >
            {aiApplicationAreas.map((area) => (
              <div
                key={area.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                  padding: "26px 24px",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 500 }}>{area.title}</h3>
                <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
                  {area.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: 10,
                        fontSize: 14.5,
                        lineHeight: 1.5,
                        color: "rgba(14,27,42,.68)",
                        fontWeight: 300,
                      }}
                    >
                      <span style={{ color: "#0E7C46", fontWeight: 700, flex: "none" }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human in the loop */}
      <section style={{ padding: "88px 0", background: "#0c1926", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>Human-in-the-loop</SectionKicker>
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
            The hybrid advantage.
          </h2>
          <p
            className="rise"
            style={{
              margin: "18px 0 0",
              maxWidth: "56ch",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(247,245,240,.66)",
              fontWeight: 300,
            }}
          >
            Automate 70–80% of repetitive queries so human experts focus on high-value interactions where empathy and
            complex problem-solving are non-negotiable.
          </p>
          <div style={{ marginTop: 48, display: "grid", gap: 0 }}>
            {aiHumanLoop.map((item, i) => (
              <div
                key={item.index}
                className="rise gcc-phase-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: 24,
                  padding: "26px 0",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,.1)" : undefined,
                  borderBottom: "1px solid rgba(255,255,255,.1)",
                }}
              >
                <div className="mono" style={{ fontSize: 13, letterSpacing: ".14em", color: "#2FE85C", paddingTop: 2 }}>
                  {item.index}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>{item.title}</h3>
                  <p style={{ margin: "10px 0 0", fontSize: 15.5, lineHeight: 1.65, color: "rgba(247,245,240,.66)", fontWeight: 300 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fail vs succeed */}
      <section style={{ padding: "88px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>Operationalised AI</SectionKicker>
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
            Why most AI CX projects fail — and why Trilogy&apos;s don&apos;t.
          </h2>
          <p
            className="rise"
            style={{
              margin: "16px 0 0",
              maxWidth: "54ch",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            AI works only when it&apos;s operationalised. BPO is the fastest way to do that safely.
          </p>
          <div
            className="rise t-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
              marginTop: 40,
            }}
          >
            <div style={{ paddingTop: 8, borderTop: "3px solid rgba(14,27,42,.2)" }}>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 500 }}>Why AI initiatives fail</h3>
              <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {aiFailVsSucceed.fail.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "rgba(14,27,42,.62)",
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: "rgba(14,27,42,.35)", flex: "none" }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ paddingTop: 8, borderTop: "3px solid #0E7C46" }}>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 500 }}>Why Trilogy succeeds</h3>
              <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {aiFailVsSucceed.succeed.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "rgba(14,27,42,.72)",
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: "#0E7C46", fontWeight: 700, flex: "none" }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ padding: "88px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>The bottom line</SectionKicker>
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
            From cost centre to value driver.
          </h2>
          <AiMetrics />
          <div
            className="rise t-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 24,
              marginTop: 36,
            }}
          >
            {aiBottomLine.map((item) => (
              <div key={item.title} style={{ borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 18 }}>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500, color: "#2FE85C" }}>{item.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(247,245,240,.62)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACE suite */}
      <section style={{ padding: "88px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>ACE · Autonomous Customer Engagement</SectionKicker>
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
            Our AI-enabled point solutions.
          </h2>
          <p
            className="rise"
            style={{
              margin: "16px 0 0",
              maxWidth: "58ch",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            The first fully autonomous customer engagement platform for sales, service, marketing, collections and
            retention — operating with or without human agents.
          </p>
          <div
            className="rise t-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 16,
              marginTop: 40,
            }}
          >
            {aiProducts.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ color: "#0E7C46", fontWeight: 500, fontSize: 18 }}>{item.name}</div>
                <div className="mono" style={{ marginTop: 8, fontSize: 11, letterSpacing: ".1em", color: "rgba(14,27,42,.45)" }}>
                  {item.kicker}
                </div>
                <p style={{ margin: "14px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(14,27,42,.64)", fontWeight: 300, flex: 1 }}>
                  {item.body}
                </p>
                {"points" in item && item.points ? (
                  <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 6 }}>
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="mono"
                        style={{
                          fontSize: 11,
                          letterSpacing: ".06em",
                          color: "rgba(14,27,42,.55)",
                          textTransform: "none",
                          fontFamily: "var(--font-sans)",
                          display: "flex",
                          gap: 8,
                        }}
                      >
                        <span style={{ color: "#0E7C46" }}>+</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "88px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionKicker onDark>Built inside real BPO constraints</SectionKicker>
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
            Ready to upgrade your contact centre — not replace it?
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
            See ACE live with real agents, real customers and human override where it matters. Book a session with the
            operators who built it.
          </p>
          <div className="rise" style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <Link
              href={company.booking}
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
              Book an Ai session
            </Link>
            <Link
              href="/trilogy-gcc"
              className="mono"
              style={{
                fontSize: 12,
                letterSpacing: ".12em",
                color: "rgba(247,245,240,.55)",
                textTransform: "uppercase",
              }}
            >
              Explore Trilogy GCC →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
