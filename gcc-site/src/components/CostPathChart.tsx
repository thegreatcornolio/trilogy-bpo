"use client";

import { useEffect, useRef } from "react";

/** Midpoint model from approved Oct 2026 deck — ends ~45% before AI unlocks. */
const stages = [
  {
    cost: 100,
    label: "100%",
    name: "In-house captive (UK/USA)",
    desc: "Starting base",
    pill: null as string | null,
  },
  {
    cost: 60,
    label: "~60%",
    name: "BPO outsourcer",
    desc: "Labour arbitrage · ≈40% lower",
    pill: "≈40% lower",
  },
  {
    cost: 45,
    label: "~45%",
    name: "Trilogy DBOT",
    desc: "Own your centre · further 20–30%",
    pill: "Further 20–30%",
  },
] as const;

const END_COST = 45;
const CHART_BOTTOM = 212;
const CHART_TOP = 16;
const CHART_H = CHART_BOTTOM - CHART_TOP;

function yFor(cost: number) {
  return CHART_BOTTOM - (cost / 100) * CHART_H;
}

export default function CostPathChart() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      root.classList.add("is-inview");
      const bars = root.querySelectorAll<SVGRectElement>("[data-y][data-h]");
      bars.forEach((bar) => {
        bar.setAttribute("y", bar.dataset.y || "0");
        bar.setAttribute("height", bar.dataset.h || "0");
      });
      const dots = root.querySelectorAll<SVGCircleElement>(".gcc-savings__dot");
      dots.forEach((dot) => {
        dot.setAttribute("r", dot.dataset.r || "5.5");
      });
      const total = root.querySelector<HTMLElement>("[data-gcc-total]");
      const pill = root.querySelector<HTMLElement>("[data-gcc-pill]");
      if (reduce) {
        if (total) total.innerHTML = `${END_COST}<span>%</span>`;
        if (pill) pill.textContent = `${END_COST}% of in-house cost`;
        return;
      }
      const start = performance.now();
      const duration = 1200;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(100 - (100 - END_COST) * eased);
        if (total) total.innerHTML = `${current}<span>%</span>`;
        if (pill) pill.textContent = `${current}% of in-house cost`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (reduce) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            io.unobserve(root);
          }
        }
      },
      { threshold: 0.28, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  const xs = [70, 159, 248];
  const points = stages.map((s, i) => ({ x: xs[i], y: yFor(s.cost), ...s }));
  const lineD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y.toFixed(2)}`).join(" ");
  const areaD = `${lineD} L ${points[points.length - 1].x} ${CHART_BOTTOM} L ${points[0].x} ${CHART_BOTTOM} Z`;

  return (
    <div
      ref={rootRef}
      className="gcc-savings"
      data-animate="gcc-savings"
      aria-label="Cost path from in-house captive to GCC"
    >
      <div className="gcc-savings__eyebrow">Cost evolution</div>
      <h4 className="gcc-savings__title">Cost path from an in-house captive to a GCC.</h4>
      <p className="gcc-savings__lead">
        Start at 100% UK/USA cost — then compound reductions as maturity rises
      </p>

      <div className="gcc-savings__layout">
        <div className="gcc-savings__summary">
          <div className="gcc-savings__summary-label">Typical end cost</div>
          <div className="gcc-savings__summary-value" data-gcc-total>
            100<span>%</span>
          </div>
          <div className="gcc-savings__pill" data-gcc-pill>
            100% of in-house cost
          </div>
          <p className="gcc-savings__summary-note">
            Midpoint model: labour arbitrage, then GCC ownership, stacking on the same cost base —
            from 100% in-house UK/USA down to around 45%. AI unlocks are additional.
          </p>
        </div>

        <div className="gcc-savings__chart-wrap">
          <svg
            className="gcc-savings__svg"
            viewBox="0 0 318 228"
            width="100%"
            height="auto"
            role="img"
            aria-label="Animated chart of declining cost across three DBIT stages"
          >
            <defs>
              <linearGradient id="gccArea" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#0E7C46" stopOpacity="0" />
                <stop offset="100%" stopColor="#0E7C46" stopOpacity="0.18" />
              </linearGradient>
              <linearGradient id="gccBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a334d" />
                <stop offset="100%" stopColor="#0E1B2A" />
              </linearGradient>
            </defs>
            <g className="gcc-savings__grid" aria-hidden="true">
              {[0, 25, 50, 75, 100].map((n) => {
                const y = yFor(n);
                return (
                  <g key={n}>
                    <line x1="20" x2="298" y1={y} y2={y} />
                    <text x="8" y={y + 3}>
                      {n}
                    </text>
                  </g>
                );
              })}
            </g>
            <path className="gcc-savings__area" d={areaD} fill="url(#gccArea)" />
            <path className="gcc-savings__line" d={lineD} fill="none" pathLength={1} />

            {points.map((p, i) => {
              const h = (p.cost / 100) * CHART_H;
              const y = CHART_BOTTOM - h;
              const barX = p.x - 26;
              return (
                <g key={p.name} className="gcc-savings__col" data-step={i}>
                  <rect
                    className="gcc-savings__bar"
                    x={barX}
                    y={CHART_BOTTOM}
                    width="52"
                    height="0"
                    rx="6"
                    fill="url(#gccBar)"
                    data-y={y.toFixed(2)}
                    data-h={h.toFixed(2)}
                  />
                  {i > 0 ? (
                    <rect
                      className="gcc-savings__bar-inc"
                      x={barX}
                      y={CHART_BOTTOM}
                      width="52"
                      height="0"
                      rx="6"
                      data-y={y.toFixed(2)}
                      data-h={Math.max(0, yFor(points[i - 1].cost) - y).toFixed(2)}
                    />
                  ) : null}
                  <circle className="gcc-savings__dot" cx={p.x} cy={p.y} r="0" data-r="5.5" />
                  <text className="gcc-savings__pct" x={p.x} y={p.y - 12} textAnchor="middle">
                    {p.label}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="gcc-savings__steps">
            {stages.map((s, i) => (
              <div key={s.name} className="gcc-savings__step" data-step={i}>
                <div className="gcc-savings__step-num">
                  {i === 0 ? "Starting point" : `Step ${i}`}
                </div>
                <div className="gcc-savings__step-name">{s.name}</div>
                <div className="gcc-savings__step-desc">{s.desc}</div>
                {s.pill ? <div className="gcc-savings__step-pill">{s.pill}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
