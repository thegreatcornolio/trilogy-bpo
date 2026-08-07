import type { Metadata } from "next";
import Link from "next/link";
import SectionKicker from "@/components/SectionKicker";
import {
  awards,
  digitalAiSuite,
  digitalDo,
  digitalOfferings,
  digitalSites,
  digitalStats,
  digitalWhy,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Trilogy Digital — A Trilogy Group Company",
  description:
    "Trilogy Digital is a Trilogy Group company — a purpose-built CX joint venture delivering AI-enabled BPO from South Africa to the UK market.",
};

export default function TrilogyDigitalPage() {
  return (
    <main>
      {/* Hero — Trilogy Group identity */}
      <section style={{ padding: "88px 0 64px", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container">
          <div
            className="rise"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 18,
            }}
          >
            <span
              className="mono"
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: 4,
                background: "#2FE85C",
                color: "#0E1B2A",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: ".12em",
              }}
            >
              A Trilogy Group Company
            </span>
            <SectionKicker onDark style={{ marginBottom: 0 }}>
              Human Led · Ai-enabled
            </SectionKicker>
          </div>
          <h1
            className="rise"
            style={{
              margin: 0,
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 400,
              letterSpacing: "-.03em",
            }}
          >
            Trilogy Digital.
          </h1>
          <p
            className="rise"
            style={{
              margin: "18px 0 0",
              maxWidth: "54ch",
              fontSize: 17,
              lineHeight: 1.65,
              fontWeight: 300,
              color: "rgba(247,245,240,.72)",
            }}
          >
            Part of the Trilogy Group of Companies — a purpose-built CX joint venture between Trilogy BPO and CXG,
            delivering UK outsourcing from South Africa at scale.
          </p>
        </div>
      </section>

      {/* Group callout */}
      <section style={{ padding: "28px 0", background: "#F7F5F0", borderBottom: "1px solid rgba(14,27,42,.08)" }}>
        <div className="container">
          <p
            className="rise"
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.6,
              fontWeight: 300,
              color: "rgba(14,27,42,.68)",
              maxWidth: "72ch",
            }}
          >
            <strong style={{ fontWeight: 600, color: "#0E1B2A" }}>Trilogy Group</strong> brings together Trilogy BPO,
            Trilogy GCC, Trilogy Ai and Trilogy Digital — complementary businesses under one operator-led family.
            Trilogy Digital is the delivery JV built for UK programmes from South Africa.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionKicker>Company overview</SectionKicker>
          <h2 className="rise" style={{ margin: "4px 0 0", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400 }}>
            Built for the UK market. Delivered from South Africa.
          </h2>
          <div
            className="rise"
            style={{ marginTop: 22, display: "grid", gap: 16, fontSize: 16.5, lineHeight: 1.7, color: "rgba(14,27,42,.68)", fontWeight: 300 }}
          >
            <p style={{ margin: 0 }}>
              Trilogy Digital (Pty) Ltd is a purpose-built customer experience (CX) joint venture between Trilogy BPO
              and CXG. Operating as a single integrated entity, the partnership marries CXG&apos;s 27-year operational
              tenure and scale within the South African market to Trilogy&apos;s deep expertise in managing UK campaigns
              and delivering advanced digital and AI capabilities.
            </p>
            <p style={{ margin: 0 }}>
              The combined leadership team brings over 25 years of industry expertise, having previously established and
              successfully exited two major BPOs. Over their careers, they have managed more than 36 contact centre
              operations, scaled over 10,000 seats globally, and delivered CX programmes for iconic brands like John
              Lewis &amp; Partners, British Gas, Vodafone UK, Aldi UK, and Virgin. Today, Trilogy Digital deploys over
              1,000 CX specialists across five operational sites in South Africa, anchored by its flagship campus at
              Mutual Park in Cape Town.
            </p>
            <p style={{ margin: 0 }}>
              Despite this impressive scale and proven track record, Trilogy Digital prides itself on remaining an
              owner-led, high-touch business. Clients collaborate directly with the seasoned executives who built the
              company, guaranteeing a highly personalised approach.
            </p>
          </div>

          <div
            className="rise t-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
              marginTop: 40,
              paddingTop: 32,
              borderTop: "1px solid rgba(14,27,42,.1)",
            }}
          >
            {digitalStats.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.02em", color: "#0E1B2A" }}>
                  {stat.value}
                </div>
                <div className="mono" style={{ marginTop: 8, fontSize: 11, letterSpacing: ".1em", color: "rgba(14,27,42,.5)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section style={{ padding: "72px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>Why Trilogy Digital</SectionKicker>
          <h2 className="rise" style={{ margin: "4px 0 0", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400 }}>
            Human Empathy, with Ai Efficiency.
          </h2>
          <div
            className="rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
              marginTop: 28,
            }}
          >
            {digitalWhy.map((item) => (
              <div
                key={item.text}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                  padding: 22,
                  fontSize: 15.5,
                  lineHeight: 1.55,
                  fontWeight: 300,
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do + footprint */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>What we do</SectionKicker>
          <h2 className="rise" style={{ margin: "4px 0 0", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400 }}>
            Full-spectrum CX
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
            We operate across the entire CX spectrum — inbound service, complaints, back-office, sales and retention.
            Every programme moves contacts from voice to digital to AI-autonomous.
          </p>
          <div
            className="rise"
            style={{
              display: "grid",
              gap: 12,
              marginTop: 28,
            }}
          >
            {digitalDo.map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "14px 0",
                  borderTop: "1px solid rgba(14,27,42,.08)",
                  fontSize: 15.5,
                  color: "rgba(14,27,42,.72)",
                  fontWeight: 300,
                }}
              >
                <span style={{ color: "#0E7C46", fontWeight: 700, flex: "none" }}>+</span>
                {item.text}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56 }}>
            <SectionKicker>Our footprint</SectionKicker>
            <h2 className="rise" style={{ margin: "4px 0 0", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400 }}>
              Five sites, two cities
            </h2>
            <div
              className="rise"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 16,
                marginTop: 28,
              }}
            >
              {digitalSites.map((site, i) => (
                <div
                  key={site.name}
                  style={{
                    borderTop: "3px solid #0E7C46",
                    paddingTop: 14,
                  }}
                >
                  <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "#0E7C46" }}>
                    0{i + 1}
                  </div>
                  <div style={{ marginTop: 8, fontSize: 16, fontWeight: 500 }}>{site.name}</div>
                  <div style={{ marginTop: 6, fontSize: 13.5, color: "rgba(14,27,42,.55)", fontWeight: 300 }}>
                    {site.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group offerings available through Digital */}
      <section style={{ padding: "72px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>Trilogy Group offerings</SectionKicker>
          <h2 className="rise" style={{ margin: "4px 0 0", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400 }}>
            Three paths, one group.
          </h2>
          <p
            className="rise"
            style={{
              margin: "14px 0 0",
              maxWidth: "54ch",
              fontSize: 15.5,
              lineHeight: 1.65,
              color: "rgba(14,27,42,.62)",
              fontWeight: 300,
            }}
          >
            Through Trilogy Digital and the wider Trilogy Group, clients can choose BPO outsourcing, a GCC build, or Ai
            platform access.
          </p>
          <div
            className="rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 16,
              marginTop: 28,
            }}
          >
            {digitalOfferings.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  display: "block",
                  border: "1px solid rgba(14,27,42,.1)",
                  borderRadius: 14,
                  padding: 24,
                  background: "#fff",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "#0E7C46" }}>
                  {item.index} · {item.tag}
                </div>
                <h3 style={{ margin: "10px 0 0", fontSize: 18, fontWeight: 500 }}>{item.name}</h3>
                <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                  {item.body}
                </p>
                <span className="mono" style={{ display: "inline-block", marginTop: 14, fontSize: 11, letterSpacing: ".1em", color: "#0E7C46" }}>
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI suite */}
      <section style={{ padding: "72px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>Proprietary AI suite</SectionKicker>
          <h2 className="rise" style={{ margin: "4px 0 0", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400 }}>
            Built in-house. Not white-labelled.
          </h2>
          <p className="rise" style={{ margin: "14px 0 0", color: "rgba(247,245,240,.66)", fontWeight: 300 }}>
            Six AI platforms developed and owned by Trilogy.
          </p>
          <div
            className="rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 14,
              marginTop: 28,
            }}
          >
            {digitalAiSuite.map((item) => (
              <div
                key={item.name}
                style={{
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 14,
                  padding: 22,
                  background: "rgba(255,255,255,.03)",
                }}
              >
                <div style={{ color: "#2FE85C", fontWeight: 500, fontSize: 17 }}>{item.name}</div>
                <div className="mono" style={{ marginTop: 8, fontSize: 11.5, color: "rgba(247,245,240,.55)" }}>
                  {item.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & awards */}
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>Technology, AI &amp; security</SectionKicker>
          <h2 className="rise" style={{ margin: "4px 0 0", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400 }}>
            Enterprise-ready. Cloud-hosted. Compliant.
          </h2>
          <p
            className="rise"
            style={{
              margin: "16px 0 0",
              maxWidth: "62ch",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            Technology-agnostic delivery as a virtual operational extension of your existing stack. Systems are 100%
            cloud hosted on Microsoft Azure (UK South/West).
          </p>
          <ul
            className="rise"
            style={{
              margin: "24px 0 0",
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: 10,
              maxWidth: 640,
            }}
          >
            {[
              "ISO 27001 and PCI DSS certified",
              "Cyber Essentials+ aligned with Huntress EPP for endpoints",
              "Fully compliant with UK GDPR and POPIA",
              "Strategic partnerships with InfoBip, AWS, Azure, Zendesk",
              "System integration and development partnership with BBD and Codified",
            ].map((item) => (
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

          <div style={{ marginTop: 56 }}>
            <SectionKicker>Awards</SectionKicker>
            <div className="rise" style={{ marginTop: 16, display: "grid", gap: 0 }}>
              {awards.map((award) => (
                <div
                  key={award.year}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: 16,
                    padding: "14px 0",
                    borderTop: "1px solid rgba(14,27,42,.08)",
                  }}
                >
                  <div className="mono" style={{ fontSize: 13, color: "#0E7C46" }}>
                    {award.year}
                  </div>
                  <div style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(14,27,42,.75)", fontWeight: 300 }}>
                    {award.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
