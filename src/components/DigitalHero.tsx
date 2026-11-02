"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import SectionKicker from "@/components/SectionKicker";

/**
 * Trilogy Digital hero — Africa connectivity map with scroll-linked
 * parallax/zoom so the network feels alive as you leave the first viewport.
 */
export default function DigitalHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const view = window.innerHeight || 1;
      // 0 at top of hero in view → 1 as hero exits upward
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, view)));
      const scale = 1.08 + progress * 0.18;
      const y = progress * 18;
      media.style.transform = `translate3d(0, ${y}%, 0) scale(${scale})`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="digital-hero"
      data-anchor-theme="dark"
      aria-label="Trilogy Digital"
    >
      <div className="digital-hero__media" ref={mediaRef} aria-hidden>
        <Image
          className="digital-hero__img"
          src="/img/digital-hero-africa.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="digital-hero__veil" />
      </div>

      <div className="container digital-hero__copy">
        <div
          className="rise"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 18,
          }}
        >
          <span
            className="mono"
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: 4,
              background: "#2FE85C",
              color: "#0E1B2A",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".12em",
            }}
          >
            A Trilogy Group Company
          </span>
          <SectionKicker onDark style={{ marginBottom: 0 }}>
            Human Led · Ai-enabled
          </SectionKicker>
        </div>
        <h1
          className="rise"
          style={{
            margin: 0,
            fontSize: "clamp(40px, 6vw, 64px)",
            fontWeight: 400,
            letterSpacing: "-.03em",
          }}
        >
          Trilogy Digital.
        </h1>
        <p
          className="rise"
          style={{
            margin: "18px 0 0",
            maxWidth: "54ch",
            fontSize: 17,
            lineHeight: 1.65,
            fontWeight: 300,
            color: "rgba(247,245,240,.78)",
          }}
        >
          Purpose-built CX joint venture for UK outsourcing from South Africa — high-performance contact centre
          operations, digital channels and human-in-the-loop AI. Decades of expertise, ready to scale.
        </p>
      </div>
    </section>
  );
}
