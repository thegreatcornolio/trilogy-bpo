"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals every `.rise` element once it scrolls into view.
 * Re-binds on route changes so client-side navigation never leaves
 * new page content stuck at opacity: 0.
 */
export default function RiseObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // New routes should start at the top — otherwise hero `.rise`
    // nodes sit above the viewport and never intersect.
    window.scrollTo(0, 0);

    const reveal = (el: Element) => el.classList.add("is-in");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".rise").forEach(reveal);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".rise").forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".rise:not(.is-in)").forEach((el) => {
        observer.observe(el);
      });
    };

    const frame = requestAnimationFrame(() => {
      observeAll();
      // Safety: reveal anything already in view after scroll reset.
      document.querySelectorAll<HTMLElement>(".rise:not(.is-in)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          reveal(el);
          observer.unobserve(el);
        }
      });
    });

    const mutation = new MutationObserver(() => observeAll());
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutation.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
