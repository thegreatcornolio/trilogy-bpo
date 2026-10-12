import type { FaqItem } from "@/lib/seo";

type Props = {
  title?: string;
  faqs: FaqItem[];
  onDark?: boolean;
};

/**
 * Visible FAQ block for AEO / FAQ rich results. Keep copy in sync with
 * any FAQPage JSON-LD emitted for the same page.
 */
export default function FaqSection({
  title = "Common questions",
  faqs,
  onDark = false,
}: Props) {
  const text = onDark ? "rgba(247,245,240,.72)" : "rgba(14,27,42,.68)";
  const heading = onDark ? "#F7F5F0" : "#0E1B2A";
  const cardBg = onDark ? "rgba(255,255,255,.04)" : "#fff";
  const cardBorder = onDark ? "rgba(255,255,255,.1)" : "rgba(14,27,42,.08)";

  return (
    <div className="rise" style={{ marginTop: 48 }}>
      <h3
        style={{
          margin: 0,
          fontSize: "clamp(22px, 2.4vw, 28px)",
          fontWeight: 400,
          letterSpacing: "-.02em",
          color: heading,
        }}
      >
        {title}
      </h3>
      <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
        {faqs.map((item) => (
          <details
            key={item.question}
            style={{
              borderRadius: 14,
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              padding: "16px 18px",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                fontSize: 16,
                fontWeight: 500,
                color: heading,
                listStyle: "none",
              }}
            >
              {item.question}
            </summary>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 15,
                lineHeight: 1.65,
                color: text,
                fontWeight: 300,
              }}
            >
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
