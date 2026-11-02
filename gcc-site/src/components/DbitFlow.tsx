"use client";

import { useEffect, useRef } from "react";

const phases = [
  {
    title: "Design",
    body: "We architect your operating model, technology stack and organisational structure around your specific service-delivery requirements and growth trajectory.",
  },
  {
    title: "Build",
    body: "We stand up the full operation — recruitment, training, facilities, technology implementation, compliance and governance frameworks.",
  },
  {
    title: "Innovate",
    body: "We actively reduce required headcount through digital deflection, intelligent routing, automation and AI-assisted resolution — because we are not paid on heads.",
  },
  {
    title: "Transfer",
    body: "We transition full operational ownership to your team when you are ready, with ongoing support as needed.",
  },
] as const;

export default function DbitFlow() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.classList.add("is-inview");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            root.classList.add("is-inview");
            io.unobserve(root);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="dbit-flow" data-animate="dbit-flow">
      <div className="dbit-flow__rail" aria-hidden="true">
        <svg className="dbit-flow__svg" viewBox="0 0 1000 28" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dbitArrowGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#61d779" />
              <stop offset="50%" stopColor="#d5ec67" />
              <stop offset="100%" stopColor="#61d779" />
            </linearGradient>
          </defs>
          <line
            className="dbit-flow__line"
            x1="12"
            y1="14"
            x2="948"
            y2="14"
            stroke="url(#dbitArrowGrad)"
          />
          <polygon className="dbit-flow__head" points="948,5 996,14 948,23" />
        </svg>
        <span className="dbit-flow__pulse" />
      </div>

      <ol className="dbit-flow__cards">
        {phases.map((phase, index) => (
          <li key={phase.title} className="dbit-flow__step">
            <article className="dbit-flow__card">
              <div className="dbit-flow__card-head">
                <span className="dbit-flow__step-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="dbit-flow__step-title">{phase.title}</span>
              </div>
              <div className="dbit-flow__card-body">{phase.body}</div>
              <div className="dbit-flow__card-foot" aria-hidden="true" />
            </article>

            {index < phases.length - 1 ? (
              <div className="dbit-flow__connector" aria-hidden="true">
                <span className="dbit-flow__connector-line" />
                <span className="dbit-flow__connector-pulse" />
                <span className="dbit-flow__then">
                  Then
                  <span className="dbit-flow__chevron" />
                </span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
