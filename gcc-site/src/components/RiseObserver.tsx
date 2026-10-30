"use client";

import { useEffect } from "react";

export default function RiseObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const riseNodes = Array.from(document.querySelectorAll<HTMLElement>(".rise"));
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal-item"));
    const timelines = Array.from(document.querySelectorAll<HTMLElement>(".awards-timeline"));

    if (reduce) {
      riseNodes.forEach((n) => n.classList.add("in"));
      revealItems.forEach((n) => n.classList.add("is-visible"));
      timelines.forEach((t) => t.style.setProperty("--line-progress", "100%"));
      return;
    }

    const riseIo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            riseIo.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    riseNodes.forEach((n) => riseIo.observe(n));

    const revealIo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          revealIo.unobserve(el);

          const timeline = el.closest<HTMLElement>(".awards-timeline");
          if (timeline) {
            const items = Array.from(timeline.querySelectorAll(".reveal-item"));
            const visible = items.filter((i) => i.classList.contains("is-visible")).length;
            const pct = Math.round((visible / Math.max(items.length, 1)) * 100);
            timeline.style.setProperty("--line-progress", `${pct}%`);
          }
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -6% 0px" },
    );
    revealItems.forEach((n) => revealIo.observe(n));

    return () => {
      riseIo.disconnect();
      revealIo.disconnect();
    };
  }, []);

  return null;
}
