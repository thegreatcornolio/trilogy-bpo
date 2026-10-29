import Image from "next/image";

type BrandLockupProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
};

/**
 * Same trilogy mark + wordmark as the main landing header everywhere.
 * Light wordmark for dark GCC chrome (nav / hero / footer).
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
  hero: {
    height: "clamp(56px, 10vw, 88px)" as const,
    maxWidth: "min(92vw, 420px)",
  },
  footer: {
    height: 34,
    maxWidth: "160px",
  },
} as const;

export default function BrandLockup({ size = "nav", className = "" }: BrandLockupProps) {
  const s = sizes[size];

  return (
    <Image
      src={LOGO.src}
      alt="trilogy"
      width={LOGO.width}
      height={LOGO.height}
      priority={size !== "footer"}
      className={`brand-lockup brand-lockup--${size}${size === "hero" ? " hero-logo hero-brand" : ""}${className ? ` ${className}` : ""}`}
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
