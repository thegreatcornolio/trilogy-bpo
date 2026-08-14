import { insightsPapers, insightsPosts } from "@/lib/content";
import Link from "next/link";

export default function InsightsIndexPage() {
  return (
    <main style={{ padding: "88px 0 96px", background: "#F7F5F0" }}>
      <div className="container">
        <div className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "rgba(14,27,42,.45)", textTransform: "uppercase" }}>
          Industry insights
        </div>
        <h1 style={{ margin: "14px 0 0", fontSize: "clamp(34px, 4.5vw, 48px)", fontWeight: 400, letterSpacing: "-.02em" }}>
          White papers and perspectives
        </h1>
        <div
          className="insights-papers"
          style={{
            marginTop: 36,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 18,
          }}
        >
          {insightsPapers.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                background: "#fff",
                border: "1px solid rgba(14,27,42,.08)",
                borderRadius: 14,
                padding: 24,
                minHeight: 220,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div className="mono" style={{ fontSize: 11.5, color: "rgba(14,27,42,.45)", textTransform: "uppercase" }}>
                {item.type} · {item.pages}
              </div>
              <h2 style={{ margin: "14px 0 0", fontSize: 18, fontWeight: 500, lineHeight: 1.3 }}>{item.title}</h2>
              <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(14,27,42,.62)", fontWeight: 300 }}>
                {item.body}
              </p>
            </a>
          ))}
        </div>
        {insightsPosts.length > 0 ? (
          <div style={{ marginTop: 28, display: "grid", gap: 12 }}>
            {insightsPosts.map((item) => (
              <Link
                key={item.title}
                href={`/corporate/insights/${item.slug}`}
                style={{
                  display: "block",
                  padding: 22,
                  borderRadius: 14,
                  border: "1px solid rgba(14,27,42,.1)",
                  background: "#fff",
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 500 }}>{item.title}</div>
                <p style={{ margin: "10px 0 0", color: "rgba(14,27,42,.62)", fontWeight: 300, lineHeight: 1.6 }}>
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </main>
  );
}
