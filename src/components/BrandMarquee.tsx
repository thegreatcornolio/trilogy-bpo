"use client";

import Image from "next/image";
import { brandLogos } from "@/lib/content";

/** Logos that read small — zoom inside the same-sized frame as everyone else. */
const LARGE_LOGOS = new Set([
  "British Gas",
  "Herotel",
  "Vuma",
  "hc",
  "Pick n Pay",
  "Iceland",
  "John Lewis",
  "Aldi",
  "PPL PRS",
  "MTN",
  "Vodacom",
  "JD",
  "Mercedes-Benz",
  "Peloton",
  "KFC",
  "Pizza Hut",
  "B&Q",
  "Burger King",
  "Virgin",
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
              <div key={`${logo.src}-${i}`} className="brand-marquee-item">
                <Image
                  src={logo.src}
                  alt={i < brandLogos.length ? logo.name : ""}
                  width={140}
                  height={48}
                  style={{
                    width: "auto",
                    maxWidth: large ? "100%" : 120,
                    height: large ? 64 : 40,
                    objectFit: "contain",
                    transform: large ? "scale(1.35)" : undefined,
                    transformOrigin: "center center",
                  }}
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
          overflow: hidden;
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
