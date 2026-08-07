"use client";

import { useEffect, useRef, useState } from "react";
import { awards } from "@/lib/content";

const GREEN = "#0E7C46";
const LINE = "rgba(14,124,70,.28)";

/**
 * Vertical awards timeline — hollow dots on a growing line, scroll-revealed.
 */
export default function AwardsTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(() => awards.map(() => false));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      setVisible(awards.map(() => true));
      return;
    }

    const rows = Array.from(root.querySelectorAll<HTMLElement>("[data-award-row]"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = Number(entry.target.getAttribute("data-award-row"));
          if (Number.isNaN(idx)) continue;
          setVisible((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
    );

    rows.forEach((row) => io.observe(row));

    const onScroll = () => {
      const rect = root.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Line fills as the block moves through the mid viewport
      const start = viewH * 0.75;
      const end = viewH * 0.2;
      const raw = (start - rect.top) / (start - end + rect.height * 0.55);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={rootRef} style={{ marginTop: 28, position: "relative", paddingLeft: 28 }}>
      {/* Track */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 7,
          top: 4,
          bottom: 4,
          width: 2,
          borderRadius: 1,
          background: LINE,
        }}
      />
      {/* Growing fill */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 7,
          top: 4,
          width: 2,
          height: `calc((100% - 8px) * ${progress})`,
          borderRadius: 1,
          background: GREEN,
          transformOrigin: "top",
          transition: "height 0.15s linear",
        }}
      />

      <div style={{ display: "grid", gap: 0 }}>
        {awards.map((award, i) => {
          const on = visible[i];
          return (
            <div
              key={award.year}
              data-award-row={i}
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "minmax(100px, 120px) 1fr",
                gap: 18,
                padding: "20px 0",
                borderTop: i === 0 ? "none" : "1px solid rgba(14,27,42,.08)",
                opacity: on ? 1 : 0,
                transform: on ? "none" : "translateX(16px)",
                transition: `opacity 0.55s cubic-bezier(0.16, 0.84, 0.44, 1) ${i * 0.04}s, transform 0.55s cubic-bezier(0.16, 0.84, 0.44, 1) ${i * 0.04}s`,
              }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  left: -28,
                  top: "50%",
                  width: 14,
                  height: 14,
                  marginTop: -7,
                  borderRadius: "50%",
                  boxSizing: "border-box",
                  border: `2.5px solid ${GREEN}`,
                  background: "#F4F7F9",
                  boxShadow: on ? `0 0 0 3px rgba(14,124,70,.12)` : "none",
                  transform: on ? "scale(1)" : "scale(0.6)",
                  transition: "transform 0.4s cubic-bezier(0.16, 0.84, 0.44, 1), box-shadow 0.4s ease",
                }}
              />
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: GREEN,
                  letterSpacing: ".02em",
                  lineHeight: 1.4,
                  paddingTop: 1,
                }}
              >
                {award.year}
              </div>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "rgba(14,27,42,.78)",
                  fontWeight: 300,
                }}
              >
                {award.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
