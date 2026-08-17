"use client";

import { useEffect, useRef, useState } from "react";
import { gccCostPath } from "@/lib/content";

/**
 * Cumulative savings midpoints (labour → GCC → AI), left → right.
 * Chart scale tops out at 75% so bars read larger.
 */
const STEPS = [
  {
    ...gccCostPath[0],
    saved: 0,
    remaining: 100,
    saveLines: null as [string, string] | null,
  },
  {
    ...gccCostPath[1],
    saved: 45,
    remaining: 55,
    saveLines: ["40–50%", "Saving"] as [string, string],
  },
  {
    ...gccCostPath[2],
    saved: 59,
    remaining: 41,
    saveLines: ["Further 20–30%", "Saving"] as [string, string],
  },
  {
    ...gccCostPath[3],
    saved: 66,
    remaining: 34,
    saveLines: ["Further 15–20%", "Saving"] as [string, string],
  },
] as const;

const TOTAL_SAVE = STEPS[STEPS.length - 1].saved;
const Y_MAX = 75;
const CHART_H = 260;

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
  const plotRef = useRef<HTMLDivElement>(null);
  const [plotW, setPlotW] = useState(0);

  useEffect(() => {
    const node = plotRef.current;
    if (!node) return;
    const measure = () => setPlotW(node.getBoundingClientRect().width);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  const n = STEPS.length;
  const gap = 14;
  const colW = plotW > 0 ? (plotW - gap * (n - 1)) / n : 0;
  const tipYs = STEPS.map((step) => {
    const barH = Math.max(step.saved === 0 ? 8 : (step.saved / Y_MAX) * (CHART_H - 36), 8);
    // tip sits above the bar; bar bottom is 8px from chart bottom
    return CHART_H - 8 - barH;
  });
  const tipXs = STEPS.map((_, i) => (colW > 0 ? i * (colW + gap) + colW / 2 : 0));

  const linePath =
    plotW > 0
      ? tipXs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${tipYs[i]}`).join(" ")
      : "";

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
          <div
            className="mono"
            style={{ fontSize: 12, letterSpacing: ".14em", color: "rgba(14,27,42,.5)" }}
          >
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
              fontSize: 15,
              lineHeight: 1.55,
              color: "rgba(14,27,42,.62)",
              fontWeight: 300,
              maxWidth: "28ch",
            }}
          >
            Midpoint model of labour arbitrage, GCC ownership and AI deflection stacking on the same cost base.
          </p>
        </div>

        {/* Chart + steps */}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "36px 1fr",
              gap: 10,
              alignItems: "stretch",
            }}
          >
            {/* Y-axis: 0–75 */}
            <div
              style={{
                position: "relative",
                height: CHART_H,
                fontFamily: "var(--font-plex-mono), monospace",
                fontSize: 11,
                color: "rgba(14,27,42,.45)",
              }}
              aria-hidden
            >
              {[75, 50, 25, 0].map((pct) => (
                <span
                  key={pct}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: `${((Y_MAX - pct) / Y_MAX) * (CHART_H - 16) + 4}px`,
                    transform: "translateY(-50%)",
                  }}
                >
                  {pct}
                </span>
              ))}
            </div>

            <div>
              <div
                ref={plotRef}
                style={{
                  position: "relative",
                  height: CHART_H,
                  display: "grid",
                  gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                  gap,
                  alignItems: "end",
                  borderBottom: "1px solid rgba(14,27,42,.12)",
                }}
              >
                {[25, 50, 75].map((pct) => (
                  <div
                    key={pct}
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: `${(pct / Y_MAX) * (CHART_H - 16) + 8}px`,
                      borderTop: "1px solid rgba(14,27,42,.08)",
                      pointerEvents: "none",
                    }}
                  />
                ))}

                {/* Trend line overlay */}
                {plotW > 0 ? (
                  <svg
                    width={plotW}
                    height={CHART_H}
                    viewBox={`0 0 ${plotW} ${CHART_H}`}
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      overflow: "visible",
                      zIndex: 2,
                    }}
                    aria-hidden
                  >
                    <path
                      d={linePath}
                      fill="none"
                      stroke="#0E1B2A"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength={1}
                      style={{
                        strokeDasharray: 1,
                        strokeDashoffset: active ? 0 : 1,
                        transition: "stroke-dashoffset 1.4s cubic-bezier(.16,.84,.44,1) .25s",
                      }}
                    />
                    {STEPS.map((step, i) => (
                      <circle
                        key={step.stage}
                        cx={tipXs[i]}
                        cy={tipYs[i]}
                        r={active ? 5 : 0}
                        fill="#2FE85C"
                        stroke="#fff"
                        strokeWidth={2}
                        style={{
                          transition: `r .4s ease ${0.55 + i * 0.15}s`,
                        }}
                      />
                    ))}
                  </svg>
                ) : null}

                {STEPS.map((step, i) => {
                  const barH = Math.max(
                    step.saved === 0 ? 8 : (step.saved / Y_MAX) * (CHART_H - 36),
                    8,
                  );
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
                          marginBottom: 10,
                          fontSize: 13,
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
                          width: "min(72px, 78%)",
                          height: active ? barH : 0,
                          borderRadius: 8,
                          background:
                            step.saved === 0
                              ? "rgba(14,27,42,.18)"
                              : "linear-gradient(180deg, #2FE85C 0%, #0E7C46 100%)",
                          transition: `height .95s cubic-bezier(.16,.84,.44,1) ${delay}`,
                          boxShadow:
                            step.saved > 0 ? "0 10px 24px rgba(14,124,70,.2)" : undefined,
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Full-width cumulative savings bar */}
              <div
                className="mono"
                style={{
                  marginTop: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "#0E1B2A",
                  color: "#2FE85C",
                  fontSize: 12,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                Cumulative savings →
              </div>

              {/* Step copy — same columns as bars */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
                  gap,
                  marginTop: 20,
                }}
              >
                {STEPS.map((step, i) => (
                  <div
                    key={step.stage}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      opacity: active ? 1 : 0,
                      transform: active ? "translateY(0)" : "translateY(10px)",
                      transition: `opacity .5s ease ${0.35 + i * 0.12}s, transform .5s ease ${0.35 + i * 0.12}s`,
                    }}
                  >
                    <div
                      className="mono"
                      style={{ fontSize: 11, letterSpacing: ".12em", color: "rgba(14,27,42,.5)" }}
                    >
                      Step 0{i + 1}
                    </div>
                    <div style={{ marginTop: 6, fontSize: 15, fontWeight: 500, lineHeight: 1.25 }}>
                      {step.stage}
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 13.5,
                        lineHeight: 1.5,
                        color: "rgba(14,27,42,.62)",
                        fontWeight: 300,
                        flex: 1,
                      }}
                    >
                      {step.label}
                    </div>
                    {/* Reserved row so Saving chips align across columns */}
                    <div
                      style={{
                        marginTop: 14,
                        minHeight: 52,
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      {step.saveLines ? (
                        <div
                          className="mono"
                          style={{
                            display: "inline-flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            padding: "8px 12px",
                            background: "#0E1B2A",
                            color: "#2FE85C",
                            fontSize: 11,
                            letterSpacing: ".08em",
                            borderRadius: 6,
                            textAlign: "center",
                            lineHeight: 1.25,
                          }}
                        >
                          <span>{step.saveLines[0]}</span>
                          <span>{step.saveLines[1]}</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
