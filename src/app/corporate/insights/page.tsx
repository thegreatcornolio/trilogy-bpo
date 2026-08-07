import Link from "next/link";
import { insightsPapers, insightsPosts } from "@/lib/content";

export default function InsightsIndexPage() {
  return (
    <main style={{ padding: "88px 0 96px", background: "#fff" }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <div className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "rgba(14,27,42,.45)" }}>
          Industry insights
        </div>
        <h1 style={{ margin: "14px 0 0", fontSize: "clamp(34px, 4.5vw, 48px)", fontWeight: 400, letterSpacing: "-.02em" }}>
          White papers and perspectives
        </h1>
        <div style={{ marginTop: 36, display: "grid", gap: 14 }}>
          {insightsPapers.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              style={{
                display: "block",
                padding: 22,
                borderRadius: 14,
                border: "1px solid rgba(14,27,42,.1)",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 500 }}>{item.title}</div>
              <p style={{ margin: "10px 0 0", color: "rgba(14,27,42,.62)", fontWeight: 300, lineHeight: 1.6 }}>
                {item.body}
              </p>
            </Link>
          ))}
          {insightsPosts.map((item) => (
            <Link
              key={item.title}
              href={`/corporate/insights/${item.slug}`}
              style={{
                display: "block",
                padding: 22,
                borderRadius: 14,
                border: "1px solid rgba(14,27,42,.1)",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 500 }}>{item.title}</div>
              <p style={{ margin: "10px 0 0", color: "rgba(14,27,42,.62)", fontWeight: 300, lineHeight: 1.6 }}>
                {item.body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
