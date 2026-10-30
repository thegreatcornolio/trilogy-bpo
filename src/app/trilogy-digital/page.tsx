import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageJsonLd from "@/components/PageJsonLd";
import SectionKicker from "@/components/SectionKicker";
import {
  awards,
  bpoAchievements,
  bpoHero,
  bpoKitchenDiff,
  bpoKitchenPhases,
  bpoOperate,
  bpoPillars,
  bpoWhyAi,
  company,
  digitalAiSuite,
  digitalComplianceCredentials,
  digitalComplianceIntro,
  digitalDo,
  digitalOfferings,
  digitalSites,
  digitalStats,
  digitalWhy,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const digitalTitle = "Trilogy Digital · AI-enabled CX & BPO";
const digitalDescription =
  "Trilogy Digital delivers AI-enabled BPO and outsourced contact centre operations from South Africa — ISO 27001 certified, PCI DSS compliant, UK GDPR compliant and POPIA compliant CX.";

export const metadata: Metadata = pageMetadata({
  title: digitalTitle,
  description: digitalDescription,
  path: "/trilogy-digital/",
  keywords: [
    "Trilogy Digital",
    "UK BPO South Africa",
    "AI-enabled CX joint venture",
    "ISO 27001 PCI DSS GDPR POPIA",
  ],
});

export default function TrilogyDigitalPage() {
  return (
    <main>
      <PageJsonLd
        path="/trilogy-digital/"
        name={digitalTitle}
        description={digitalDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Trilogy Digital", path: "/trilogy-digital/" },
        ]}
      />
      {/* Hero — full viewport, copy bottom-aligned like GCC */}
      <section
        data-anchor-theme="dark"
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "flex-end",
          background: "#0E1B2A",
          color: "#F7F5F0",
          overflow: "hidden",
        }}
      >
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, width: "100%", paddingTop: 120, paddingBottom: 72 }}
        >
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
            <strong style={{ fontWeight: 600, color: "#0E1B2A" }}>Trilogy Group</strong> brings together Trilogy GCC,
            Trilogy Digital and Trilogy Ai — complementary businesses under one operator-led family. Trilogy Digital
            is the delivery JV built for UK programmes from South Africa.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" style={{ padding: "72px 0", background: "#fff" }}>
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
      <section id="why" style={{ padding: "72px 0", background: "#F7F5F0" }}>
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
      <section id="what-we-do" style={{ padding: "72px 0", background: "#fff" }}>
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

          <div id="footprint" style={{ marginTop: 56 }}>
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
            Through Trilogy Digital and the wider Trilogy Group, clients can choose outsourced CX delivery, a GCC
            build, or Ai platform access.
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
            {digitalOfferings.map((item) => {
              const body = (
                <>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "#0E7C46" }}>
                    {item.index} · {item.tag}
                  </div>
                  <h3 style={{ margin: "10px 0 0", fontSize: 18, fontWeight: 500 }}>{item.name}</h3>
                  <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                    {item.body}
                  </p>
                  {"href" in item && item.href ? (
                    <span className="mono" style={{ display: "inline-block", marginTop: 14, fontSize: 11, letterSpacing: ".1em", color: "#0E7C46" }}>
                      Explore →
                    </span>
                  ) : null}
                </>
              );

              if ("href" in item && item.href) {
                return (
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
                    {body}
                  </Link>
                );
              }

              return (
                <div
                  key={item.name}
                  style={{
                    display: "block",
                    border: "1px solid rgba(14,27,42,.1)",
                    borderRadius: 14,
                    padding: 24,
                    background: "#fff",
                  }}
                >
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI suite */}
      <section id="ai-suite" data-anchor-theme="dark" className="td-ai-suite" style={{ padding: "72px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>Proprietary AI suite</SectionKicker>
          <h2 className="rise" style={{ margin: "4px 0 0", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400 }}>
            Built in-house. Not white-labelled.
          </h2>
          <p className="rise" style={{ margin: "14px 0 0", color: "rgba(247,245,240,.66)", fontWeight: 300 }}>
            Six AI platforms developed and owned by Trilogy.
          </p>
          <div className="rise td-ai" style={{ marginTop: 28 }}>
            {digitalAiSuite.map((item) => (
              <div
                key={item.name}
                className="td-card"
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
            cloud hosted on Microsoft Azure (UK South/West). {digitalComplianceIntro}{" "}
            <Link href="/privacy/" style={{ color: "#0E7C46", fontWeight: 500 }}>
              Read our Privacy Policy
            </Link>
            .
          </p>
          <div
            className="rise"
            style={{
              marginTop: 28,
              display: "grid",
              gap: 16,
              maxWidth: 720,
            }}
          >
            {digitalComplianceCredentials.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr",
                  gap: 16,
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 12,
                    border: "1px solid rgba(14,27,42,.08)",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <Image
                    src={item.logo}
                    alt={item.term}
                    width={56}
                    height={48}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11.5,
                      letterSpacing: ".12em",
                      color: "#0E7C46",
                      fontWeight: 700,
                    }}
                  >
                    {item.term}
                  </div>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "rgba(14,27,42,.72)",
                      fontWeight: 300,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ul
            className="rise"
            style={{
              margin: "28px 0 0",
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: 10,
              maxWidth: 640,
            }}
          >
            {[
              "Cyber Essentials+ aligned with Huntress EPP for endpoints",
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

      {/* —— Former Trilogy BPO content (outsourced CX) —— */}
      <section
        id="outsourced-cx"
        style={{ padding: "88px 0 64px", background: "#0E1B2A", color: "#F7F5F0" }}
      >
        <div className="container">
          <SectionKicker onDark>{bpoHero.kicker}</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-.03em",
            }}
          >
            {bpoHero.title}
          </h2>
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
            {bpoHero.lead}
          </p>
          <p
            className="mono rise"
            style={{ margin: "22px 0 0", fontSize: 11, letterSpacing: ".12em", color: "rgba(247,245,240,.45)" }}
          >
            AI-enabled BPO · UK · US · EMEA
          </p>
        </div>
      </section>

      <section id="operate" style={{ padding: "88px 0", background: "#fff" }}>
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
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    color: "rgba(14,27,42,.64)",
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

      <section id="digital" style={{ padding: "88px 0", background: "#F7F5F0" }}>
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
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "rgba(14,27,42,.64)",
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

      <section id="why-ai" data-anchor-theme="dark" style={{ padding: "88px 0", background: "#0c1926", color: "#F7F5F0" }}>
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

      <section id="achievements" style={{ padding: "88px 0", background: "#fff" }}>
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
              <div key={item.label} style={{ borderTop: "3px solid #0E7C46", paddingTop: 18 }}>
                <div style={{ fontSize: 36, fontWeight: 400, letterSpacing: "-.03em", color: "#0E1B2A" }}>
                  {item.value}
                </div>
                <div className="mono" style={{ marginTop: 8, fontSize: 11, letterSpacing: ".1em", color: "#0E7C46" }}>
                  {item.label}
                </div>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    color: "rgba(14,27,42,.58)",
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

      <section id="test-kitchen" data-anchor-theme="dark" style={{ padding: "88px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
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
                <p
                  style={{
                    margin: "10px 0 0",
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "rgba(247,245,240,.66)",
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
              Book a Digital session
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
