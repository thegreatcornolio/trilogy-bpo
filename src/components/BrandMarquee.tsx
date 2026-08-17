"use client";

import Image from "next/image";
import { brandLogos } from "@/lib/content";

/** Logos that read small at the default size — scale them up in the marquee. */
const LARGE_LOGOS = new Set([
  "British Gas",
  "Herotel",
  "Vuma",
  "hc",
  "Pick n Pay",
  "Iceland",
  "John Lewis",
]);

/**
 * Continuous auto-scrolling brand logo strip (no category tabs).
 */
export function BrandMarquee() {
  // Duplicate for seamless loop
  const logos = [...brandLogos, ...brandLogos];

  return (
    <div className="rise brand-marquee" style={{ marginTop: 40 }}>
      <div className="brand-marquee-viewport">
        <div className="brand-marquee-track" aria-hidden={false}>
          {logos.map((logo, i) => {
            const large = LARGE_LOGOS.has(logo.name);
            return (
              <div
                key={`${logo.src}-${i}`}
                className={large ? "brand-marquee-item brand-marquee-item--large" : "brand-marquee-item"}
              >
                <Image
                  src={logo.src}
                  alt={i < brandLogos.length ? logo.name : ""}
                  width={large ? 180 : 140}
                  height={large ? 64 : 48}
                  style={
                    large
                      ? { width: "auto", maxWidth: 148, height: 58, objectFit: "contain" }
                      : { width: "auto", maxWidth: 120, height: 40, objectFit: "contain" }
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .brand-marquee-viewport {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }
        .brand-marquee-track {
          display: flex;
          width: max-content;
          gap: 16px;
          animation: brand-marquee-scroll 55s linear infinite;
        }
        .brand-marquee:hover .brand-marquee-track {
          animation-play-state: paused;
        }
        .brand-marquee-item {
          flex: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 148px;
          height: 88px;
          padding: 16px 20px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid rgba(14,27,42,.08);
        }
        .brand-marquee-item--large {
          width: 176px;
          padding: 10px 14px;
        }
        @keyframes brand-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
          }
          .brand-marquee-viewport {
            mask-image: none;
            -webkit-mask-image: none;
          }
        }
      `}</style>
    </div>
  );
}
