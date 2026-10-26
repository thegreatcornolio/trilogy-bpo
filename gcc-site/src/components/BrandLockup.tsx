import Image from "next/image";

type BrandLockupProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
};

/** Official Trilogy + Global Capability Centres lockup (dark-bg / light wordmark). */
const LOCKUP = {
  src: "/logo/trilogy-gcc-lockup-dark.png",
  width: 839,
  height: 254,
} as const;

const sizes = {
  nav: {
    height: 44,
    maxWidth: "min(56vw, 210px)",
  },
  hero: {
    height: "clamp(64px, 12vw, 112px)" as const,
    maxWidth: "min(92vw, 520px)",
  },
  footer: {
    height: 34,
    maxWidth: "180px",
  },
} as const;

export default function BrandLockup({ size = "nav", className = "" }: BrandLockupProps) {
  const s = sizes[size];

  return (
    <Image
      src={LOCKUP.src}
      alt="trilogy Global Capability Centres"
      width={LOCKUP.width}
      height={LOCKUP.height}
      priority={size !== "footer"}
      className={`brand-lockup brand-lockup--${size}${size === "hero" ? " hero-logo hero-brand" : ""}${className ? ` ${className}` : ""}`}
      style={{
        display: "block",
        height: s.height,
        width: "auto",
        maxWidth: s.maxWidth,
        objectFit: "contain",
        objectPosition: size === "hero" ? "left center" : "left center",
      }}
    />
  );
}
