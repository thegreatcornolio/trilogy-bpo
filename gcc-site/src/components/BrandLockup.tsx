import Image from "next/image";

type BrandLockupProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
};

const sizes = {
  nav: {
    width: 220,
    height: 48,
    logoHeight: 36,
    subSize: 9.5,
    gap: 3,
  },
  hero: {
    width: 420,
    height: 92,
    logoHeight: "clamp(52px, 9vw, 88px)" as const,
    subSize: "clamp(12px, 1.8vw, 15px)" as const,
    gap: 10,
  },
  footer: {
    width: 180,
    height: 40,
    logoHeight: 28,
    subSize: 9,
    gap: 3,
  },
} as const;

export default function BrandLockup({ size = "nav", className = "" }: BrandLockupProps) {
  const s = sizes[size];
  const logoHeight = s.logoHeight;

  return (
    <div
      className={`brand-lockup brand-lockup--${size}${className ? ` ${className}` : ""}`}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: s.gap,
        lineHeight: 1,
      }}
    >
      <Image
        src="/logo/trilogy-logo-light.png"
        alt="trilogy"
        width={s.width}
        height={s.height}
        priority={size !== "footer"}
        className={size === "hero" ? "hero-logo" : undefined}
        style={{
          display: "block",
          height: logoHeight,
          width: "auto",
          maxWidth: size === "nav" ? "min(48vw, 200px)" : size === "hero" ? "min(88vw, 420px)" : "160px",
          objectFit: "contain",
          objectPosition: "left center",
        }}
      />
      <span
        className="brand-lockup__sub mono"
        style={{
          margin: 0,
          fontSize: s.subSize,
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--mint)",
          whiteSpace: "nowrap",
        }}
      >
        Global Capability Centres
      </span>
    </div>
  );
}
