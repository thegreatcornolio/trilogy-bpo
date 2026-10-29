import { site } from "@/lib/content";

/** Shared close used on the homepage and every service page. */
export default function ContactCallout() {
  return (
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
  );
}
