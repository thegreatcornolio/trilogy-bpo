"use client";

import { useEffect, useRef, useState } from "react";
import { aiMetrics } from "@/lib/content";

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
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, active };
}

function Metric({
  value,
  suffix,
  label,
  body,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  body: string;
  active: boolean;
  delay: number;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start - delay) / duration);
      if (t < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, delay]);

  return (
    <div
      style={{
        padding: "26px 24px",
        background: "rgba(255,255,255,.03)",
        border: "1px solid rgba(255,255,255,.1)",
        borderRadius: 14,
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(16px)",
        transition: `opacity .5s ease ${delay}ms, transform .5s ease ${delay}ms`,
      }}
    >
      <div
        style={{
          fontSize: "clamp(36px, 5vw, 48px)",
          fontWeight: 400,
          letterSpacing: "-.03em",
          color: "#2FE85C",
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
        }}
      >
        {n}
        <span style={{ fontSize: "0.5em" }}>{suffix}</span>
      </div>
      <div className="mono" style={{ marginTop: 12, fontSize: 11, letterSpacing: ".12em", color: "rgba(247,245,240,.55)" }}>
        {label}
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.55, color: "rgba(247,245,240,.62)", fontWeight: 300 }}>
        {body}
      </p>
    </div>
  );
}

export default function AiMetrics() {
  const { ref, active } = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="rise t-2"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 14,
        marginTop: 40,
      }}
    >
      {aiMetrics.map((m, i) => (
        <Metric key={m.label} {...m} active={active} delay={i * 120} />
      ))}
    </div>
  );
}
