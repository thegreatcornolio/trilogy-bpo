import type { CSSProperties } from "react";

export const ink = "#0E1B2A";
export const inkMuted = "rgba(14,27,42,.64)";
export const forest = "#0E7C46";
export const lime = "#2FE85C";
/** Cool charcoal — sits between navy and muted UI chrome */
export const slate = "#3E4856";
export const panel = "#F4F7F9";
export const line = "rgba(14,27,42,.1)";

export const maxWidth = 1180;

/** Uppercase mono label styling used throughout the site. */
export const mono = (extra: CSSProperties = {}): CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

export const shell: CSSProperties = {
  maxWidth,
  margin: "0 auto",
  padding: "92px 28px",
};

export const eyebrow = (color: string): CSSProperties =>
  mono({ fontSize: 13, letterSpacing: ".18em", color });

export const sectionHeading: CSSProperties = {
  margin: "16px 0 0",
  maxWidth: "20ch",
  fontSize: "clamp(30px,4.4vw,56px)",
  fontWeight: 200,
  lineHeight: 1.04,
  letterSpacing: "-.02em",
  color: ink,
  textWrap: "balance",
};

export const sectionLead: CSSProperties = {
  margin: "22px 0 0",
  maxWidth: "62ch",
  fontSize: 16.5,
  fontWeight: 300,
  lineHeight: 1.7,
  color: inkMuted,
  textWrap: "pretty",
};
