import type { Metadata } from "next";
import Link from "next/link";
import SectionKicker from "@/components/SectionKicker";
import ServiceHero from "@/components/ServiceHero";
import {
  bpoAchievements,
  bpoHero,
  bpoKitchenDiff,
  bpoKitchenPhases,
  bpoOperate,
  bpoPillars,
  bpoWhyAi,
  company,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Trilogy BPO — Accelerated CX",
  description:
    "High-performance AI-enabled contact centre operations in South Africa. Decades of expertise, ready to scale — just add humans.",
};

export default function TrilogyBpoPage() {
  return (
    <main>
      <ServiceHero
        kicker={bpoHero.kicker}
        title={bpoHero.title}
        lead={bpoHero.lead}
        video="/video/offer-bpo.mp4"
        poster="/img/offer-bpo.png"
        meta="AI-enabled BPO · UK · US · EMEA"
        objectPosition="center"
      />

      {/* How we operate */}
      <section style={{ padding: "88px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>How and where we operate</SectionKicker>
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
            Built for UK and USA brands landing in South Africa.
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
            With over 25 years of combined experience, our leadership has deep expertise supporting SA, UK and USA
            markets — helping prominent global brands successfully establish operations in South Africa.
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
            {bpoOperate.map((item, i) => (
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
        </div>
      </section>

      {/* Digital contact centres */}
      <section style={{ padding: "88px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>Digital contact centres</SectionKicker>
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
            State-of-the-art platforms. Ready. Just add humans.
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
            Outsource service, sales, retention and collections on a fully automated AI/ML predictive engagement
            platform — with a human agent in the loop to fulfil the process.
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
            {bpoPillars.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                  padding: "24px 22px",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 500 }}>{item.title}</h3>
                <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI-enabled BPO */}
      <section style={{ padding: "88px 0", background: "#0c1926", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>Why AI-enabled BPO wins</SectionKicker>
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
            AI works only when it&apos;s operationalised.
          </h2>
          <p
            className="rise"
            style={{
              margin: "16px 0 0",
              maxWidth: "54ch",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(247,245,240,.66)",
              fontWeight: 300,
            }}
          >
            BPO is the fastest way to do that safely. AI and automation can reduce contact-centre operating costs by
            20–30% when embedded into workflows.
          </p>
          <div
            className="rise t-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
              marginTop: 44,
            }}
          >
            <div style={{ paddingTop: 8, borderTop: "3px solid rgba(255,255,255,.2)" }}>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 500 }}>The old-school problem</h3>
              <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {bpoWhyAi.problem.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "rgba(247,245,240,.62)",
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: "rgba(247,245,240,.35)", flex: "none" }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ paddingTop: 8, borderTop: "3px solid #2FE85C" }}>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 500 }}>Trilogy&apos;s operating model</h3>
              <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {bpoWhyAi.model.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "rgba(247,245,240,.78)",
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: "#2FE85C", fontWeight: 700, flex: "none" }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ padding: "88px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>Our achievements</SectionKicker>
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
            Results at scale. Quality without compromise.
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
            First company in South Africa that a UK brand chose to partner with for outsourcing. Pioneering experience
            across 40+ centres for some of the world&apos;s best-known brands.
          </p>
          <div
            className="rise t-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
              marginTop: 40,
            }}
          >
            {bpoAchievements.map((item) => (
              <div
                key={item.label}
                style={{
                  borderTop: "3px solid #0E7C46",
                  paddingTop: 18,
                }}
              >
                <div style={{ fontSize: 36, fontWeight: 400, letterSpacing: "-.03em", color: "#0E1B2A" }}>
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

      {/* Test Kitchen */}
      <section style={{ padding: "88px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>AI Test Kitchen for BPO</SectionKicker>
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
            Prove value. Reduce risk. Then scale.
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
            Not a lab. Not a POC. Not a vendor demo. A controlled, real-data environment where AI, automation and
            digital deflection are proven before deployment — answering one question: what will materially reduce cost
            or improve CX without breaking live operations?
          </p>
          <div
            className="rise t-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 24,
              marginTop: 44,
            }}
          >
            {bpoKitchenDiff.map((item) => (
              <div key={item.title} style={{ borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 18 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 500, color: "#2FE85C" }}>{item.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(247,245,240,.66)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p
            className="rise"
            style={{
              margin: "36px 0 0",
              fontSize: 14,
              lineHeight: 1.65,
              color: "rgba(247,245,240,.5)",
              fontStyle: "italic",
              maxWidth: "62ch",
            }}
          >
            Only 30% of AI projects make it past the pilot stage and deliver real business value (Gartner). The Test
            Kitchen exists to fix that failure point.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section style={{ padding: "88px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>Discover → Design → Test → Improve → Deploy</SectionKicker>
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
            The Test Kitchen method.
          </h2>
          <div style={{ marginTop: 48, display: "grid", gap: 0 }}>
            {bpoKitchenPhases.map((phase, i) => (
              <div
                key={phase.title}
                className="rise gcc-phase-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: 24,
                  padding: "26px 0",
                  borderTop: i === 0 ? "1px solid rgba(14,27,42,.1)" : undefined,
                  borderBottom: "1px solid rgba(14,27,42,.1)",
                }}
              >
                <div>
                  <div className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "#0E7C46" }}>
                    {phase.index}
                  </div>
                  <div style={{ marginTop: 6, fontSize: 17, fontWeight: 500 }}>{phase.title}</div>
                </div>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: "rgba(14,27,42,.68)", fontWeight: 300 }}>
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI / CTA */}
      <section style={{ padding: "88px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionKicker onDark>Data-led automation · Guaranteed ROI mindset</SectionKicker>
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
            Identify. Test. Improve. Deploy — with 100% confidence.
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
            Turn Test Kitchen insights into BPO operational excellence. Fail fast, learn quickly, and scale only what
            is proven — then migrate seamlessly into your live environment.
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
              Book a BPO session
            </Link>
            <Link
              href="/trilogy-ai"
              className="mono"
              style={{
                fontSize: 12,
                letterSpacing: ".12em",
                color: "rgba(247,245,240,.55)",
                textTransform: "uppercase",
              }}
            >
              Explore Trilogy Ai →
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
