"use client";

import { useEffect, useRef, useState } from "react";
import { gccCostPath } from "@/lib/content";

/** Midpoint compounding model for the animated bars (remaining cost of baseline). */
const STEPS = [
  {
    ...gccCostPath[0],
    remaining: 100,
    cut: 0,
    saveLabel: null as string | null,
  },
  {
    ...gccCostPath[1],
    remaining: 55,
    cut: 45,
    saveLabel: "40–50%",
  },
  {
    ...gccCostPath[2],
    remaining: 41,
    cut: 14,
    saveLabel: "Further 20–30%",
  },
  {
    ...gccCostPath[3],
    remaining: 34,
    cut: 7,
    saveLabel: "Further 15–20%",
  },
] as const;

const TOTAL_SAVE = 100 - STEPS[STEPS.length - 1].remaining;

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

  const chartH = 220;
  const padX = 28;
  const gap = 18;
  const n = STEPS.length;
  const barW = 52;
  const width = padX * 2 + n * barW + (n - 1) * gap;

  const points = STEPS.map((step, i) => {
    const x = padX + i * (barW + gap) + barW / 2;
    const y = chartH - (step.remaining / 100) * (chartH - 24) - 8;
    return { x, y };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaPath = [
    `M ${points[0].x} ${chartH}`,
    ...points.map((p) => `L ${p.x} ${p.y}`),
    `L ${points[points.length - 1].x} ${chartH}`,
    "Z",
  ].join(" ");

  return (
    <div ref={ref} className="gcc-cost-chart rise">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(180px, 220px) 1fr",
          gap: 36,
          alignItems: "end",
          marginTop: 40,
        }}
        className="gcc-cost-layout"
      >
        <div>
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

        <div style={{ minWidth: 0 }}>
          <svg
            viewBox={`0 0 ${width} ${chartH + 8}`}
            width="100%"
            height="auto"
            role="img"
            aria-label="Animated chart of remaining operating cost across four DBIT stages"
            style={{ display: "block", overflow: "visible" }}
          >
            <defs>
              <linearGradient id="gccArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0E7C46" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#0E7C46" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gccBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a334d" />
                <stop offset="100%" stopColor="#0E1B2A" />
              </linearGradient>
            </defs>

            {/* grid lines */}
            {[0, 25, 50, 75, 100].map((pct) => {
              const y = chartH - (pct / 100) * (chartH - 24) - 8;
              return (
                <g key={pct}>
                  <line
                    x1={padX - 8}
                    x2={width - padX + 8}
                    y1={y}
                    y2={y}
                    stroke="rgba(14,27,42,.08)"
                    strokeWidth={1}
                  />
                  <text
                    x={8}
                    y={y + 3}
                    fill="rgba(14,27,42,.35)"
                    fontSize={9}
                    fontFamily="var(--font-plex-mono), monospace"
                  >
                    {pct}
                  </text>
                </g>
              );
            })}

            <path
              d={areaPath}
              fill="url(#gccArea)"
              style={{
                opacity: active ? 1 : 0,
                transition: "opacity 1.1s ease .4s",
              }}
            />

            <path
              d={linePath}
              fill="none"
              stroke="#2FE85C"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: active ? 0 : 1,
                transition: "stroke-dashoffset 1.4s cubic-bezier(.16,.84,.44,1) .2s",
              }}
            />

            {STEPS.map((step, i) => {
              const x = padX + i * (barW + gap);
              const remainH = (step.remaining / 100) * (chartH - 24);
              const cutH = (step.cut / 100) * (chartH - 24);
              const baseY = chartH - 8;
              const delay = `${0.15 + i * 0.18}s`;

              return (
                <g key={step.stage}>
                  {/* saved (cut) segment — ghost above remaining */}
                  {step.cut > 0 ? (
                    <rect
                      x={x}
                      y={active ? baseY - remainH - cutH : baseY}
                      width={barW}
                      height={active ? cutH : 0}
                      rx={6}
                      fill="#2FE85C"
                      opacity={0.35}
                      style={{
                        transition: `y .9s cubic-bezier(.16,.84,.44,1) ${delay}, height .9s cubic-bezier(.16,.84,.44,1) ${delay}`,
                      }}
                    />
                  ) : null}

                  {/* remaining cost bar */}
                  <rect
                    x={x}
                    y={active ? baseY - remainH : baseY}
                    width={barW}
                    height={active ? remainH : 0}
                    rx={6}
                    fill="url(#gccBar)"
                    style={{
                      transition: `y .95s cubic-bezier(.16,.84,.44,1) ${delay}, height .95s cubic-bezier(.16,.84,.44,1) ${delay}`,
                    }}
                  />

                  {/* tip dot on line */}
                  <circle
                    cx={points[i].x}
                    cy={points[i].y}
                    r={active ? 4.5 : 0}
                    fill="#2FE85C"
                    stroke="#fff"
                    strokeWidth={2}
                    style={{
                      transition: `r .4s ease ${0.55 + i * 0.18}s`,
                    }}
                  />

                  <text
                    x={points[i].x}
                    y={active ? points[i].y - 12 : points[i].y}
                    textAnchor="middle"
                    fill="#0E1B2A"
                    fontSize={11}
                    fontWeight={600}
                    fontFamily="var(--font-plex-mono), monospace"
                    style={{
                      opacity: active ? 1 : 0,
                      transition: `opacity .4s ease ${0.7 + i * 0.15}s`,
                    }}
                  >
                    {step.remaining}%
                  </text>
                </g>
              );
            })}
          </svg>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
              gap: 12,
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
    </div>
  );
}
