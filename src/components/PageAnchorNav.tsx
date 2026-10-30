"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { pageAnchorsByPath, type PageAnchor } from "@/lib/content";

function normalizePath(pathname: string | null): string {
  if (!pathname) return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

export default function PageAnchorNav({ anchors }: { anchors?: PageAnchor[] }) {
  const pathname = usePathname();
  const items = useMemo(() => {
    if (anchors) return anchors;
    return pageAnchorsByPath[normalizePath(pathname)] ?? [];
  }, [anchors, pathname]);

  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (!items.length) return;
    const ids = items
      .map((item) => item.href.replace(/^#/, ""))
      .filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
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
    <nav
      className="page-anchor-nav"
      aria-label="On this page"
    >
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
