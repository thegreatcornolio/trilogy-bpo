"use client";

import { useEffect, useState } from "react";
import type { PageAnchor } from "@/lib/content";

function luminance(r: number, g: number, b: number) {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function parseRgb(color: string): [number, number, number] | null {
  const m = color.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  if (!m) return null;
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

function isDarkBehindRail(): boolean {
  if (typeof document === "undefined") return false;
  const x = Math.max(0, window.innerWidth - 36);
  const y = Math.round(window.innerHeight * 0.5);
  const rail = document.querySelector(".page-anchor-nav") as HTMLElement | null;
  const prev = rail?.style.pointerEvents;
  if (rail) rail.style.pointerEvents = "none";
  const el = document.elementFromPoint(x, y) as HTMLElement | null;
  if (rail) rail.style.pointerEvents = prev ?? "";

  let node: HTMLElement | null = el;
  while (node && node !== document.body) {
    const bg = getComputedStyle(node).backgroundColor;
    const rgb = parseRgb(bg);
    if (rgb) {
      const [r, g, b] = rgb;
      const alphaMatch = bg.match(/rgba?\([^)]+,\s*([\d.]+)\s*\)/i);
      const alpha = alphaMatch ? Number(alphaMatch[1]) : 1;
      if (alpha > 0.35) return luminance(r, g, b) < 0.45;
    }
    node = node.parentElement;
  }
  // GCC pages are mostly dark; default to on-dark when unknown
  return true;
}

/** Right-side in-page anchor rail (GCC microsite). */
export default function PageAnchorNav({ items }: { items: readonly PageAnchor[] }) {
  const [active, setActive] = useState("");
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    if (!items.length) return;
    const elements = items
      .map((item) => document.getElementById(item.href.replace(/^#/, "")))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-22% 0px -48% 0px", threshold: [0.08, 0.2, 0.4, 0.6] },
    );
    for (const el of elements) io.observe(el);
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    if (!items.length) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      setOnDark(isDarkBehindRail());
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items, active]);

  if (!items.length) return null;

  return (
    <nav className={`page-anchor-nav${onDark ? " is-on-dark" : ""}`} aria-label="On this page">
      <ul className="page-anchor-nav__list">
        {items.map((item) => {
          const id = item.href.replace(/^#/, "");
          const isActive = active === id;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`page-anchor-nav__link${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="page-anchor-nav__dot" aria-hidden />
                <span className="page-anchor-nav__label">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
