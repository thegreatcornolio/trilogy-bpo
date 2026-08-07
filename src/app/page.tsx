import Image from "next/image";
import Link from "next/link";
import { AgentDemo } from "@/components/AgentDemo";
import AwardsTimeline from "@/components/AwardsTimeline";
import { AutoVideo } from "@/components/AutoVideo";
import { BrandTabs } from "@/components/BrandTabs";
import OfferingsTabs from "@/components/OfferingsTabs";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import SectionKicker from "@/components/SectionKicker";
import { TechStackTrack } from "@/components/TechStackTrack";
import {
  accreditations,
  aiJourney,
  aiProducts,
  evp,
  heroStats,
  insightsPapers,
  insightsPosts,
  site,
  teamGroups,
  whySa,
} from "@/lib/content";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="rise"
      style={{
        margin: 0,
        fontSize: "clamp(28px, 3.6vw, 44px)",
        fontWeight: 400,
        letterSpacing: "-.02em",
        lineHeight: 1.15,
        color: "#0E1B2A",
      }}
    >
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "92vh", color: "#fff", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "#0A121A" }}>
          <AutoVideo src="/video/hero.mp4" poster="/img/hero-fem.png" objectPosition="center right" />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(8,14,22,.88) 0%, rgba(8,14,22,.55) 48%, rgba(8,14,22,.18) 100%)",
            }}
          />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 88, paddingBottom: 64 }}>
          <div className="rise" style={{ maxWidth: 640 }}>
            <div className="mono" style={{ fontSize: 12, letterSpacing: ".16em", color: "rgba(247,245,240,.7)" }}>
              · AI-enabled BPO · UK · US · EMEA
            </div>
            <h1
              style={{
                margin: "18px 0 0",
                fontSize: "clamp(42px, 6.2vw, 72px)",
                fontWeight: 500,
                letterSpacing: "-.03em",
                lineHeight: 1.02,
              }}
            >
              Human empathy
              <br />
              <span style={{ color: "#2FE85C" }}>meets AI efficiency.</span>
            </h1>
            <p
              style={{
                margin: "22px 0 0",
                maxWidth: "46ch",
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "rgba(247,245,240,.78)",
              }}
            >
              Making customer engagement offshoring easy. Trilogy BPO is an offshore Business Process Outsourcing
              company in South Africa, helping UK and USA companies augment their customer experience while cutting
              the cost of customer service and sales.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
              <Link
                href="#offerings"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 22px",
                  borderRadius: 999,
                  background: "#fff",
                  color: "#0E1B2A",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                See the three offerings →
              </Link>
              <Link
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "14px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,.35)",
                  color: "#fff",
                  fontSize: 15,
                }}
              >
                Talk to us
              </Link>
            </div>
          </div>

          <div
            className="hero-stats rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 18,
              marginTop: 72,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,.14)",
            }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 300, letterSpacing: "-.02em" }}>
                  {stat.value}
                </div>
                <div
                  className="mono"
                  style={{ marginTop: 8, fontSize: 11.5, letterSpacing: ".1em", color: "rgba(247,245,240,.55)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" style={{ padding: "96px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>Three offerings</SectionKicker>
          <SectionTitle>Your journey, your choice.</SectionTitle>
          <div style={{ marginTop: 40 }}>
            <OfferingsTabs />
          </div>
        </div>
      </section>

      {/* Agent demo */}
      <section style={{ padding: "96px 0", background: "#F7F5F0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.05fr",
              gap: 48,
              alignItems: "center",
            }}
            className="demo-grid"
          >
            <div>
              <SectionKicker>Trilogy Ai · Live</SectionKicker>
              <SectionTitle>Agent-in-the-loop, in real time.</SectionTitle>
              <p
                className="rise"
                style={{
                  margin: "18px 0 0",
                  maxWidth: "42ch",
                  fontSize: 16.5,
                  lineHeight: 1.7,
                  color: "rgba(14,27,42,.64)",
                  fontWeight: 300,
                }}
              >
                Autonomous CX handles the conversation; a human approves the moment judgement, escalation or
                compliance is needed. Watch a refund resolve itself.
              </p>
            </div>
            <AgentDemo />
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{ padding: "96px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>The team</SectionKicker>
          <SectionTitle>Run by people who have done this before, many times over.</SectionTitle>
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
            Trilogy is led by seasoned BPO operators with 25+ years of combined leadership. Between them they have
            built and managed 30+ contact centres globally, launched 1,000-seat operations, and stood up fully
            operational sites in under six weeks. They know what it takes to get customer experience right, first
            time.
          </p>
          {teamGroups.map((group) => (
            <div key={group.title} style={{ marginTop: 48 }}>
              <div
                className="mono rise"
                style={{
                  fontSize: 12,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#0E7C46",
                  fontWeight: 700,
                  marginBottom: 22,
                }}
              >
                {group.title}
              </div>
              <div
                className="team-grid rise"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: 22,
                }}
              >
                {group.members.map((member) => {
                  const inner = (
                    <>
                      <div
                        style={{
                          position: "relative",
                          width: "60%",
                          aspectRatio: "4/5",
                          borderRadius: 14,
                          overflow: "hidden",
                          background: "#fff",
                        }}
                      >
                        <Image
                          src={member.img}
                          alt={member.name}
                          fill
                          sizes="144px"
                          style={
                            member.name === "Jason Luboyera"
                              ? {
                                  objectFit: "cover",
                                  objectPosition: "center 48%",
                                  transform: "scale(1.22) translateY(12%)",
                                  transformOrigin: "center center",
                                  background: "#fff",
                                }
                              : member.name === "Brandon Grant"
                                ? {
                                    objectFit: "cover",
                                    objectPosition: "center center",
                                    background: "#1c1c1c",
                                  }
                                : { objectFit: "cover", background: "#fff" }
                          }
                        />
                      </div>
                      <div style={{ marginTop: 12, fontSize: 15.5, fontWeight: 500 }}>{member.name}</div>
                      <div className="mono" style={{ marginTop: 4, fontSize: 11, color: "rgba(14,27,42,.5)" }}>
                        {member.role}
                      </div>
                      {member.bio ? (
                        <div
                          style={{
                            marginTop: 8,
                            fontSize: 13,
                            lineHeight: 1.45,
                            color: "rgba(14,27,42,.58)",
                            fontWeight: 300,
                            maxWidth: "28ch",
                          }}
                        >
                          {member.bio}
                        </div>
                      ) : null}
                    </>
                  );

                  if (member.linkedin) {
                    return (
                      <a
                        key={`${group.title}-${member.name}`}
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        style={{ display: "block" }}
                      >
                        {inner}
                      </a>
                    );
                  }

                  return (
                    <div key={`${group.title}-${member.name}`} style={{ display: "block" }}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why SA — full-bleed Cape Town video background */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
          borderTop: "1px solid rgba(14,27,42,.1)",
          color: "#F7F5F0",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/img/cape-town.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/img/cape-town.jpg"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 35%",
            }}
          >
            <source src="/7717357-hd_1280_720_25fps.mp4" type="video/mp4" />
          </video>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #0E1B2A 0%, rgba(14,27,42,.9) 34%, rgba(14,27,42,.7) 70%, rgba(14,27,42,.6) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(0deg, rgba(14,27,42,.9) 0%, rgba(14,27,42,.2) 30%, rgba(14,27,42,.35) 100%)",
            }}
          />
        </div>

        <div
          className="container"
          style={{ position: "relative", zIndex: 1, paddingTop: 110, paddingBottom: 110 }}
        >
          <div className="rise" style={{ maxWidth: "68ch" }}>
            <SectionKicker onDark style={{ marginBottom: 0 }}>
              Your strategic outsourcing advantage
            </SectionKicker>
            <h2
              style={{
                margin: "16px 0 0",
                maxWidth: "16ch",
                fontSize: "clamp(38px, 6vw, 72px)",
                fontWeight: 200,
                lineHeight: 1,
                letterSpacing: "-.03em",
                color: "#fff",
              }}
            >
              Why South Africa?
            </h2>
            <p
              style={{
                margin: "22px 0 0",
                maxWidth: "56ch",
                fontSize: 16.5,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.78)",
              }}
            >
              South Africa has consistently been ranked the second most attractive Business Process Outsourcing
              location globally, after consecutive years of high performance. Source: McKinsey.
            </p>
          </div>

          <div
            className="rise t-2"
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
            }}
          >
            {whySa.slice(0, 2).map((item, i) => (
              <div
                key={item.title}
                style={{
                  borderRadius: 16,
                  padding: "34px 32px",
                  background: i === 0 ? "#0E7C46" : "rgba(14,27,42,.5)",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,.16)",
                  backdropFilter: i === 0 ? undefined : "blur(6px)",
                  WebkitBackdropFilter: i === 0 ? undefined : "blur(6px)",
                  color: "#fff",
                }}
              >
                {item.stat ? (
                  <div
                    style={{
                      fontSize: 42,
                      fontWeight: 200,
                      letterSpacing: "-.03em",
                      color: i === 0 ? "#fff" : "#2FE85C",
                    }}
                  >
                    {item.stat}
                  </div>
                ) : null}
                <h3 style={{ margin: item.stat ? "12px 0 0" : 0, fontSize: 20, fontWeight: 500 }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,.82)",
                    fontWeight: 300,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rise why-secondary"
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 18,
            }}
          >
            {whySa.slice(2).map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: 14,
                  padding: 24,
                  background: "rgba(14,27,42,.45)",
                  border: "1px solid rgba(255,255,255,.12)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  color: "#fff",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>{item.title}</h3>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,.72)",
                    fontWeight: 300,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mono rise"
            style={{
              marginTop: 28,
              fontSize: 11.5,
              letterSpacing: ".12em",
              color: "rgba(255,255,255,.45)",
            }}
          >
            Cape Town · video background
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ padding: "96px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>The economics</SectionKicker>
          <SectionTitle>Stack the savings, layer by layer.</SectionTitle>
          <div style={{ marginTop: 40 }}>
            <SavingsCalculator />
          </div>
        </div>
      </section>

      {/* EVP */}
      <section style={{ padding: "96px 0", background: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker>Our People · Our Promise</SectionKicker>
          <SectionTitle>When people thrive, business follows.</SectionTitle>
          <p
            className="rise"
            style={{
              margin: "18px 0 0",
              maxWidth: "58ch",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            At Trilogy BPO our employee value proposition is built on one unshakeable belief. We invest in the people
            who serve your customers, because engaged, supported teams deliver the experiences that build loyalty and
            growth.
          </p>
          <div
            className="evp-grid rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
              marginTop: 40,
            }}
          >
            {evp.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {item.shapes.map((shape, i) =>
                    "c" in shape && shape.c ? (
                      <circle
                        key={i}
                        cx={shape.c.cx}
                        cy={shape.c.cy}
                        r={shape.c.r}
                        stroke="#0E7C46"
                        strokeWidth="1.5"
                      />
                    ) : "d" in shape && shape.d ? (
                      <path
                        key={i}
                        d={shape.d}
                        stroke="#0E7C46"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ) : null,
                  )}
                </svg>
                <h3 style={{ margin: "16px 0 0", fontSize: 17, fontWeight: 500 }}>{item.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(14,27,42,.62)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: "96px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>World-class brands</SectionKicker>
          <SectionTitle>25 years behind the world&apos;s brands.</SectionTitle>
          <p
            className="rise"
            style={{
              margin: "18px 0 36px",
              maxWidth: "62ch",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            Over the past 25 years, Trilogy&apos;s leadership has managed over 30 contact centres for some of the
            world&apos;s most recognised brands. That gives us insight into the challenges and opportunities of
            offshore customer-service delivery, with deep vertical expertise across telecommunications, utilities,
            retail, fast food, insurance and technology.
          </p>
          <BrandTabs />
        </div>
      </section>

      {/* Awards */}
      <section style={{ padding: "96px 0", background: "#F4F7F9" }}>
        <div className="container">
          <SectionKicker>Recognised by the industry</SectionKicker>
          <SectionTitle>Accredited, awarded, trusted.</SectionTitle>
          <p
            className="rise"
            style={{
              margin: "18px 0 0",
              maxWidth: "58ch",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(14,27,42,.64)",
              fontWeight: 300,
            }}
          >
            We are proud members of South Africa&apos;s most respected industry bodies and hold internationally
            recognised certifications: a testament to our commitment to excellence, security and service quality.
          </p>
          <div
            className="rise"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              alignItems: "center",
              marginTop: 32,
            }}
          >
            {accreditations.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid rgba(14,27,42,.08)",
                  padding: "14px 18px",
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={120}
                  height={40}
                  style={{ height: 40, width: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
          <p className="mono rise" style={{ marginTop: 18, fontSize: 11.5, color: "rgba(14,27,42,.45)" }}>
            Member: CCMG · BPESA · Cape BPO
          </p>
          <p
            className="rise"
            style={{ margin: "28px 0 0", fontSize: 15, lineHeight: 1.65, color: "rgba(14,27,42,.62)", maxWidth: "58ch" }}
          >
            Over nearly a decade, our award record reflects consistent industry leadership across outsourcing,
            technology and social impact.
          </p>
          <AwardsTimeline />
        </div>
      </section>

      {/* AI journey */}
      <section style={{ padding: "96px 0", background: "#fff" }}>
        <div className="container">
          <SectionKicker>Trilogy Ai</SectionKicker>
          <SectionTitle>Opportunities for AI across the customer journey.</SectionTitle>
          <div
            className="ai-grid rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
              marginTop: 40,
            }}
          >
            {aiJourney.map((item) => (
              <div
                key={item.title}
                style={{
                  border: "1px solid rgba(14,27,42,.1)",
                  borderRadius: 14,
                  padding: 24,
                  background: "#fff",
                }}
              >
                <div className="mono" style={{ fontSize: 11.5, color: "#0E7C46", letterSpacing: ".1em" }}>
                  {item.kicker}
                </div>
                <h3 style={{ margin: "12px 0 0", fontSize: 17, fontWeight: 500 }}>{item.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(14,27,42,.62)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI products */}
      <section style={{ padding: "96px 0", background: "#0E1B2A", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>Our AI-enabled point solutions</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(28px, 3.6vw, 44px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            A platform of proven .ai products.
          </h2>
          <div
            className="ai-grid rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
              marginTop: 40,
            }}
          >
            {aiProducts.map((item) => (
              <div
                key={item.name}
                style={{
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 14,
                  padding: 24,
                  background: "rgba(255,255,255,.03)",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 500, color: "#2FE85C" }}>{item.name}</div>
                <div className="mono" style={{ marginTop: 8, fontSize: 11.5, color: "rgba(247,245,240,.5)" }}>
                  {item.kicker}
                </div>
                <p style={{ margin: "14px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "rgba(247,245,240,.66)", fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" style={{ padding: "96px 0", background: "#0c1926", color: "#F7F5F0" }}>
        <div className="container">
          <SectionKicker onDark>Ecosystem</SectionKicker>
          <h2
            className="rise"
            style={{
              margin: 0,
              fontSize: "clamp(28px, 3.6vw, 44px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
              lineHeight: 1.15,
              color: "#fff",
            }}
          >
            Our technology partners.
          </h2>
          <p
            className="rise"
            style={{
              margin: "18px 0 40px",
              maxWidth: "58ch",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "rgba(247,245,240,.66)",
              fontWeight: 300,
            }}
          >
            We deliver on a curated ecosystem of best-of-breed technology partners, end to end: channel, orchestration,
            automation, the ML engine and analytics.
          </p>
          <TechStackTrack />
        </div>
      </section>

      {/* Insights */}
      <section id="insights" style={{ padding: "96px 0", background: "#F7F5F0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, flexWrap: "wrap" }}>
            <div>
              <SectionKicker>Industry insights</SectionKicker>
              <SectionTitle>White papers and perspectives.</SectionTitle>
            </div>
            <Link href="/corporate/insights" className="mono rise" style={{ fontSize: 12, color: "#0E7C46" }}>
              View all →
            </Link>
          </div>
          <div
            className="rise"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
              marginTop: 36,
            }}
          >
            {insightsPapers.map((paper) => (
              <Link
                key={paper.title}
                href={paper.href}
                style={{
                  display: "block",
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                  padding: 24,
                  minHeight: 220,
                }}
              >
                <div className="mono" style={{ fontSize: 11.5, color: "rgba(14,27,42,.45)" }}>
                  {paper.type} · {paper.pages}
                </div>
                <h3 style={{ margin: "14px 0 0", fontSize: 18, fontWeight: 500, lineHeight: 1.3 }}>{paper.title}</h3>
                <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(14,27,42,.62)", fontWeight: 300 }}>
                  {paper.body}
                </p>
              </Link>
            ))}
          </div>
          <div className="rise" style={{ marginTop: 18, display: "grid", gap: 12 }}>
            {insightsPosts.map((post) => (
              <Link
                key={post.title}
                href={`/corporate/insights/${post.slug}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr auto",
                  gap: 18,
                  alignItems: "center",
                  background: "#fff",
                  border: "1px solid rgba(14,27,42,.08)",
                  borderRadius: 14,
                  padding: "18px 22px",
                }}
                className="insight-row"
              >
                <div className="mono" style={{ fontSize: 11.5, color: "rgba(14,27,42,.45)" }}>
                  {post.type} · {post.mins}
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500 }}>{post.title}</div>
                  <div style={{ marginTop: 6, fontSize: 14, color: "rgba(14,27,42,.58)", fontWeight: 300 }}>
                    {post.body}
                  </div>
                </div>
                <div className="mono" style={{ fontSize: 11.5, color: "#0E7C46", whiteSpace: "nowrap" }}>
                  {post.date} · Read →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "96px 0", background: "#0E1B2A", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            className="rise"
            style={{
              margin: 0,
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
            }}
          >
            Turn customer service into a competitive advantage.
          </h2>
          <div
            className="rise"
            style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginTop: 28 }}
          >
            <a
              href={`mailto:${site.email}`}
              style={{
                display: "inline-flex",
                padding: "14px 22px",
                borderRadius: 999,
                background: "#2FE85C",
                color: "#0A1F12",
                fontWeight: 600,
              }}
            >
              Get in Touch
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                padding: "14px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.3)",
                color: "#fff",
              }}
            >
              WhatsApp us
            </a>
          </div>
          <div
            className="mono rise"
            style={{
              marginTop: 28,
              fontSize: 12,
              letterSpacing: ".1em",
              color: "rgba(247,245,240,.55)",
              display: "flex",
              justifyContent: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <span>UK {site.phones.uk}</span>
            <span>SA {site.phones.sa}</span>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .demo-grid, .why-wrap { grid-template-columns: 1fr !important; }
          .insight-row { grid-template-columns: 1fr !important; }
          .why-secondary { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .why-secondary { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
