"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  value: string;
  className?: string;
  style?: CSSProperties;
};

/** Animates the numeric portion of a label (e.g. "10,000+") when scrolled into
 * view, preserving any surrounding characters. */
export default function CountUp({ value, className, style }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/[\d,]+(?:\.\d+)?/);
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!match || reduceMotion) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[0].replace(/,/g, ""));
    const start = match.index ?? 0;
    const prefix = value.slice(0, start);
    const suffix = value.slice(start + match[0].length);
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - t0) / 1300);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(
          prefix +
            Math.floor(eased * target).toLocaleString("en-US") +
            suffix,
        );
        if (progress < 1) requestAnimationFrame(step);
        else setDisplay(value);
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
