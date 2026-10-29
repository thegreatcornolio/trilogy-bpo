import Image from "next/image";

type BrandLockupProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
};

/** Trilogy mark + wordmark for dark chrome (nav / footer). */
const LOGO = {
  src: "/logo/trilogy-logo-light.png",
  width: 1200,
  height: 262,
} as const;

const sizes = {
  nav: {
    height: 44,
    maxWidth: "min(56vw, 200px)",
  },
  footer: {
    height: 34,
    maxWidth: "160px",
  },
} as const;

/** Colours from the approved GCC wordmark screenshot. */
const STACK = {
  global: "#FFFFFF",
  capability: "#84CF75",
  centres: "#D0E980",
} as const;

function GccWordmark({ large = false }: { large?: boolean }) {
  return (
    <span
      aria-label="Global Capability Centres"
      className={large ? "hero-brand" : undefined}
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: large ? "clamp(28px, 5.5vw, 52px)" : 10,
        letterSpacing: large ? "-0.03em" : "-0.01em",
        lineHeight: large ? 1.05 : 1.12,
      }}
    >
      <span style={{ color: STACK.global }}>Global</span>
      <span style={{ color: STACK.capability }}>Capability</span>
      <span style={{ color: STACK.centres }}>Centres</span>
    </span>
  );
}

/**
 * nav/footer — standard trilogy logo (light on dark).
 * hero — coloured Global / Capability / Centres wordmark only (no trilogy logo).
 */
export default function BrandLockup({ size = "nav", className = "" }: BrandLockupProps) {
  if (size === "hero") {
    return (
      <span className={`brand-lockup brand-lockup--hero${className ? ` ${className}` : ""}`}>
        <GccWordmark large />
      </span>
    );
  }

  const s = sizes[size];

  return (
    <Image
      src={LOGO.src}
      alt="trilogy"
      width={LOGO.width}
      height={LOGO.height}
      priority={size === "nav"}
      className={`brand-lockup brand-lockup--${size}${className ? ` ${className}` : ""}`}
      style={{
        display: "block",
        height: s.height,
        width: "auto",
        maxWidth: s.maxWidth,
        objectFit: "contain",
        objectPosition: "left center",
      }}
    />
  );
}
