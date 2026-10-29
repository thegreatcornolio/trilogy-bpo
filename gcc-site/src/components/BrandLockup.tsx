import Image from "next/image";

type BrandLockupProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
};

/**
 * Nav and footer keep the light trilogy wordmark (same mark as the landing menu).
 * The hero does not use that logo — only the coloured Global Capability Centres stack.
 */
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

/** Colours sampled from the approved Global / Capability / Centres wordmark. */
const WORDMARK = [
  { text: "Global", color: "#F8F8F8" },
  { text: "Capability", color: "#90E078" },
  { text: "Centres", color: "#D0E880" },
] as const;

export default function BrandLockup({ size = "nav", className = "" }: BrandLockupProps) {
  if (size === "hero") {
    return (
      <span
        className={`hero-gcc-wordmark hero-logo hero-brand${className ? ` ${className}` : ""}`}
        aria-label="Global Capability Centres"
      >
        {WORDMARK.map((line) => (
          <span key={line.text} style={{ color: line.color }}>
            {line.text}
          </span>
        ))}
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
