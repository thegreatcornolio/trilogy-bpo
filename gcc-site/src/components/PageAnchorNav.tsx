"use client";

import { useEffect, useState } from "react";
import type { PageAnchor } from "@/lib/content";

/** Right-side in-page anchor rail (GCC microsite). */
export default function PageAnchorNav({ items }: { items: readonly PageAnchor[] }) {
  const [active, setActive] = useState("");

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

  if (!items.length) return null;

  return (
    <nav className="page-anchor-nav" aria-label="On this page">
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
