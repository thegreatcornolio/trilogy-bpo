"use client";

import { useEffect, useRef, useState } from "react";
import { gccCostPath } from "@/lib/content";

/**
 * Cumulative savings midpoints (labour → GCC → AI), left → right.
 * Starts at 0% saved and compounds upward.
 */
const STEPS = [
  {
    ...gccCostPath[0],
    saved: 0,
    remaining: 100,
    saveLabel: null as string | null,
  },
  {
    ...gccCostPath[1],
    saved: 45,
    remaining: 55,
    saveLabel: "40–50%",
  },
  {
    ...gccCostPath[2],
    saved: 59,
    remaining: 41,
    saveLabel: "Further 20–30%",
  },
  {
    ...gccCostPath[3],
    saved: 66,
    remaining: 34,
    saveLabel: "Further 15–20%",
  },
] as const;

const TOTAL_SAVE = STEPS[STEPS.length - 1].saved;
const CHART_H = 220;

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
}

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

export default function GccCostChart() {
  const { ref, active } = useInViewOnce<HTMLDivElement>();
  const saved = useCountUp(TOTAL_SAVE, active);

  return (
    <div ref={ref} className="gcc-cost-chart rise">
      <div
        className="gcc-cost-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(180px, 240px) 1fr",
          gap: 36,
          alignItems: "start",
          marginTop: 40,
        }}
      >
        {/* Callout — left */}
        <div style={{ paddingTop: 8 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", color: "rgba(14,27,42,.4)" }}>
            Typical cost remaining
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: "clamp(52px, 8vw, 72px)",
              fontWeight: 400,
              letterSpacing: "-.04em",
              lineHeight: 1,
              color: "#0E1B2A",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {100 - saved}
            <span style={{ fontSize: "0.45em", color: "rgba(14,27,42,.45)" }}>%</span>
          </div>
          <div
            className="mono"
            style={{
              marginTop: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 12px",
              background: "#0E1B2A",
              color: "#2FE85C",
              fontSize: 12,
              letterSpacing: ".1em",
              borderRadius: 6,
            }}
          >
            −{saved}% cumulative
          </div>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 14,
              lineHeight: 1.55,
              color: "rgba(14,27,42,.55)",
              fontWeight: 300,
              maxWidth: "28ch",
            }}
          >
            Midpoint model of labour arbitrage, GCC ownership and AI deflection stacking on the same cost base.
          </p>
        </div>

        {/* Chart + steps — shared columns so labels sit under each bar */}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "32px 1fr",
              gap: 8,
              alignItems: "stretch",
            }}
          >
            {/* Y-axis: savings % */}
            <div
              style={{
                position: "relative",
                height: CHART_H,
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 9,
                color: "rgba(14,27,42,.35)",
              }}
              aria-hidden
            >
              {[100, 75, 50, 25, 0].map((pct) => (
                <span
                  key={pct}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: `${((100 - pct) / 100) * (CHART_H - 16) + 4}px`,
                    transform: "translateY(-50%)",
                  }}
                >
                  {pct}
                </span>
              ))}
            </div>

            <div>
              <div
                style={{
                  position: "relative",
                  height: CHART_H,
                  display: "grid",
                  gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))`,
                  gap: 14,
                  alignItems: "end",
                  borderBottom: "1px solid rgba(14,27,42,.1)",
                }}
              >
                {/* horizontal guides */}
                {[25, 50, 75, 100].map((pct) => (
                  <div
                    key={pct}
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: `${(pct / 100) * (CHART_H - 16) + 8}px`,
                      borderTop: "1px solid rgba(14,27,42,.08)",
                      pointerEvents: "none",
                    }}
                  />
                ))}

                {STEPS.map((step, i) => {
                  const barH = Math.max(step.saved === 0 ? 6 : (step.saved / 100) * (CHART_H - 28), 6);
                  const delay = `${0.15 + i * 0.18}s`;
                  return (
                    <div
                      key={step.stage}
                      style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        height: "100%",
                        paddingBottom: 8,
                      }}
                    >
                      <div
                        className="mono"
                        style={{
                          marginBottom: 8,
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#0E1B2A",
                          opacity: active ? 1 : 0,
                          transition: `opacity .4s ease ${0.55 + i * 0.15}s`,
                        }}
                      >
                        {step.saved}%
                      </div>
                      <div
                        style={{
                          width: "min(56px, 70%)",
                          height: active ? barH : 0,
                          borderRadius: 6,
                          background:
                            step.saved === 0
                              ? "rgba(14,27,42,.18)"
                              : "linear-gradient(180deg, #2FE85C 0%, #0E7C46 100%)",
                          transition: `height .95s cubic-bezier(.16,.84,.44,1) ${delay}`,
                          boxShadow: step.saved > 0 ? "0 8px 20px rgba(14,124,70,.18)" : undefined,
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Step copy — same column grid as bars */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))`,
                  gap: 14,
                  marginTop: 18,
                }}
              >
                {STEPS.map((step, i) => (
                  <div
                    key={step.stage}
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "translateY(0)" : "translateY(10px)",
                      transition: `opacity .5s ease ${0.35 + i * 0.12}s, transform .5s ease ${0.35 + i * 0.12}s`,
                    }}
                  >
                    <div className="mono" style={{ fontSize: 10, letterSpacing: ".12em", color: "rgba(14,27,42,.4)" }}>
                      Step 0{i + 1}
                    </div>
                    <div style={{ marginTop: 4, fontSize: 14, fontWeight: 500, lineHeight: 1.25 }}>{step.stage}</div>
                    <div
                      style={{
                        marginTop: 4,
                        fontSize: 12.5,
                        lineHeight: 1.45,
                        color: "rgba(14,27,42,.55)",
                        fontWeight: 300,
                      }}
                    >
                      {step.label}
                    </div>
                    {step.saveLabel ? (
                      <div
                        className="mono"
                        style={{
                          marginTop: 10,
                          display: "inline-block",
                          padding: "5px 9px",
                          background: "#0E1B2A",
                          color: "#2FE85C",
                          fontSize: 11,
                          letterSpacing: ".08em",
                          borderRadius: 5,
                        }}
                      >
                        {step.saveLabel}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="mono"
            style={{
              marginTop: 14,
              marginLeft: 40,
              fontSize: 10,
              letterSpacing: ".12em",
              color: "rgba(14,27,42,.4)",
            }}
          >
            Cumulative savings →
          </div>
        </div>
      </div>
    </div>
  );
}
