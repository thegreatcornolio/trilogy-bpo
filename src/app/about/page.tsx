import SectionKicker from "@/components/SectionKicker";

export default function AboutPage() {
  const results = [
    {
      value: "45,000+",
      label: "Jobs created",
      body: "Significant positive impact on South Africa's economy and communities over 20 years.",
    },
    {
      value: "25+",
      label: "Years delivering",
      body: "Two decades of proven, exceptional value across multiple industries and geographies.",
    },
    {
      value: "AI-first",
      label: "Technology edge",
      body: "Developing AI, machine-learning platforms, analytics and digital automation tools.",
    },
    {
      value: "30+",
      label: "Centres launched",
      body: "Contact centres built and launched for blue-chip companies across South Africa.",
    },
  ];

  return (
    <main>
      <section style={{ padding: "88px 0 64px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionKicker>About Trilogy</SectionKicker>
          <h1
            className="rise"
            style={{
              margin: "16px 0 0",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-.03em",
              lineHeight: 1.08,
            }}
          >
            Operators who have built this before.
          </h1>
          <p
            className="rise"
            style={{
              margin: "22px 0 0",
              fontSize: 17.5,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            Our leadership team comprises seasoned BPO executives and operational managers with over 20 years of
            collective expertise in establishing and scaling operations across South Africa. Between them they have
            built and managed dozens of contact centres, launched 1,000-seat operations, and stood up fully
            operational sites in under six weeks.
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "#F7F5F0" }}>
        <div className="container">
          <h2
            className="rise"
            style={{
              margin: 0,
              fontSize: "clamp(28px, 3.4vw, 40px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Results at scale.
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
            Trilogy&apos;s 20-year track record speaks to our ability to deliver results at scale, creating jobs,
            building infrastructure and pioneering technology across the BPO industry.
          </p>
          <div
            className="rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
              marginTop: 36,
            }}
          >
            {results.map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 28, fontWeight: 300, color: "#0E7C46", letterSpacing: "-.02em" }}>
                  {item.value}
                </div>
                <div className="mono" style={{ marginTop: 8, fontSize: 11.5, color: "rgba(14,27,42,.45)" }}>
                  {item.label}
                </div>
                <p style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.55, color: "rgba(14,27,42,.62)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0 96px", background: "#fff" }}>
        <div className="container">
          <h2
            className="rise"
            style={{
              margin: 0,
              fontSize: "clamp(28px, 3.4vw, 40px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Deep expertise, focused delivery.
          </h2>
          <div
            className="rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
              marginTop: 36,
            }}
          >
            <div style={{ border: "1px solid rgba(14,27,42,.1)", borderRadius: 14, padding: 28 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>Geographies covered</h3>
              <p style={{ margin: "14px 0 0", fontSize: 15, lineHeight: 1.65, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                Over 25 years supporting predominantly the UK and USA markets, helping prominent brands land
                successfully in South Africa. Seamless service delivery across time zones with native English-speaking
                talent.
              </p>
            </div>
            <div style={{ border: "1px solid rgba(14,27,42,.1)", borderRadius: 14, padding: 28 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>Verticals covered</h3>
              <p style={{ margin: "14px 0 0", fontSize: 15, lineHeight: 1.65, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                Previously worked with Thames Water, British Gas, Vodafone, John Lewis, Aldi, KFC and Virgin, among
                others.
              </p>
              <ul style={{ margin: "16px 0 0", paddingLeft: 18, color: "rgba(14,27,42,.72)", fontSize: 14.5, lineHeight: 1.7 }}>
                <li>Technology & e-commerce</li>
                <li>Healthcare & insurance</li>
                <li>Retail & telecommunications</li>
                <li>Utilities & financial services</li>
                <li>Travel, tourism & hospitality</li>
                <li>Automotive</li>
              </ul>
            </div>
            <div style={{ border: "1px solid rgba(14,27,42,.1)", borderRadius: 14, padding: 28 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>Functions covered</h3>
              <p style={{ margin: "14px 0 0", fontSize: 15, lineHeight: 1.65, color: "rgba(14,27,42,.64)", fontWeight: 300 }}>
                A focused, niche offering to ensure excellence in every engagement.
              </p>
              <ul style={{ margin: "16px 0 0", paddingLeft: 18, color: "rgba(14,27,42,.72)", fontSize: 14.5, lineHeight: 1.7 }}>
                <li>Customer service & IT support</li>
                <li>Chat commerce & digital engagement</li>
                <li>Back-office administration</li>
                <li>Digital & AI enablement</li>
                <li>Automation & RPA implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
