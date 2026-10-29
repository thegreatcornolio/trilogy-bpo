import Image from "next/image";

type BrandLockupProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
};

/** Hero keeps the existing Trilogy + Global Capability Centres lockup image. */
const HERO_LOCKUP = {
  src: "/logo/trilogy-gcc-lockup-dark.png",
  width: 839,
  height: 254,
} as const;

const MARK = {
  src: "/logo/trilogy-mark-transparent.png",
  width: 183,
  height: 183,
} as const;

/**
 * Nav/footer: same trilogy mark as the main site favicon, plus "GCC" and the
 * stacked Global / Capability / Centres wordmark (approved screenshot style).
 * Hero is left on the full trilogy lockup.
 */
export default function BrandLockup({ size = "nav", className = "" }: BrandLockupProps) {
  if (size === "hero") {
    return (
      <Image
        src={HERO_LOCKUP.src}
        alt="trilogy Global Capability Centres"
        width={HERO_LOCKUP.width}
        height={HERO_LOCKUP.height}
        priority
        className={`brand-lockup brand-lockup--hero hero-logo hero-brand${className ? ` ${className}` : ""}`}
        style={{
          display: "block",
          height: "clamp(64px, 12vw, 112px)",
          width: "auto",
          maxWidth: "min(92vw, 520px)",
          objectFit: "contain",
          objectPosition: "left center",
        }}
      />
    );
  }

  const compact = size === "footer";

  return (
    <span
      className={`brand-lockup brand-lockup--${size}${className ? ` ${className}` : ""}`}
      aria-label="GCC — Global Capability Centres"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: compact ? 10 : 12,
        lineHeight: 1,
      }}
    >
      <Image
        src={MARK.src}
        alt=""
        width={MARK.width}
        height={MARK.height}
        priority={size === "nav"}
        aria-hidden
        style={{
          display: "block",
          height: compact ? 24 : 32,
          width: "auto",
          flex: "none",
        }}
      />
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: compact ? 1 : 2,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: compact ? 14 : 17,
            letterSpacing: "-0.03em",
            color: "#fff",
            lineHeight: 1.05,
          }}
        >
          GCC
        </span>
        <span
          aria-hidden
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: compact ? 8 : 9.5,
            letterSpacing: "-0.01em",
            lineHeight: 1.12,
          }}
        >
          <span style={{ color: "#fff" }}>Global</span>
          <span style={{ color: "#84CF75" }}>Capability</span>
          <span style={{ color: "#D0E980" }}>Centres</span>
        </span>
      </span>
    </span>
  );
}
