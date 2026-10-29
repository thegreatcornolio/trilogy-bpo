"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Animated Test Kitchen / AI lab visual — pops in on scroll. */
export default function TestKitchenVisual() {
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
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="test-kitchen-visual">
      <div className="test-kitchen-visual__glow" aria-hidden />
      <div className="test-kitchen-visual__bob">
        <div className="test-kitchen-visual__frame">
          <Image
            src="/proposal/test-kitchen-ai.jpg"
            alt="Trilogy AI Test Kitchen — luminous test tube representing innovation lab"
            width={1152}
            height={864}
            sizes="(max-width: 900px) 100vw, 44vw"
            className="test-kitchen-visual__img"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
