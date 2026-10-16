"use client";

import { useEffect, useRef } from "react";

const dials = [
  {
    pct: 50,
    title: "Cheaper Than Onshoring",
    body: "Achieve 50–60% cost savings compared to maintaining operations in high-cost markets while accessing the same quality talent and capabilities.",
  },
  {
    pct: 35,
    title: "Cheaper Than Outsourcing",
    body: "Global Capability Centres provide 20–30% additional savings compared to traditional BPO outsourcing by eliminating vendor margins and overhead.",
  },
  {
    pct: 40,
    title: "Further Savings Through Deflection",
    body: "Implement aggressive automation, digital deflection and AI strategies without restrictions, driving an additional 15–20% cost reduction over time.",
  },
  {
    pct: 100,
    title: "More Control",
    body: "Maintain complete ownership and control over operations, technology decisions, data security and strategic direction — critical for long-term competitive advantage.",
  },
] as const;

export default function BenefitsDials() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const rings = Array.from(root.querySelectorAll<HTMLElement>(".dial__ring"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      root.classList.add("is-inview");
      rings.forEach((ring) => {
        const target = Number(ring.dataset.pct || 0);
        const valueEl = ring.querySelector<HTMLElement>(".dial__value");
        if (reduce) {
          ring.style.setProperty("--pct", `${target}%`);
          if (valueEl) valueEl.textContent = `${target}%`;
          return;
        }
        const start = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.round(target * eased);
          ring.style.setProperty("--pct", `${current}%`);
          if (valueEl) valueEl.textContent = `${current}%`;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
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
      { threshold: 0.3, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="dials" data-animate="ai-savings">
      {dials.map((d) => (
        <div key={d.title} className="dial">
          <div className="dial__ring" style={{ ["--pct" as string]: "0%" }} data-pct={d.pct}>
            <span className="dial__value">0%</span>
          </div>
          <div>
            <h4>{d.title}</h4>
            <p>{d.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
