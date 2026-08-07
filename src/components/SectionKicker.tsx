import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Use on dark section backgrounds */
  onDark?: boolean;
  style?: CSSProperties;
  className?: string;
};

/**
 * Section eyebrow that pops: dark-blue chip, bold white type.
 * Always prefixes with the three-line mark (三); no middle-dot separator.
 */
export default function SectionKicker({ children, onDark = false, style, className }: Props) {
  return (
    <div
      className={className ? `mono rise ${className}` : "mono rise"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 14,
        padding: "8px 14px",
        borderRadius: 4,
        background: onDark ? "rgba(255,255,255,.12)" : "#0E1B2A",
        color: "#fff",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      <span aria-hidden="true" style={{ letterSpacing: 0, lineHeight: 1 }}>
        三
      </span>
      <span>{children}</span>
    </div>
  );
}
