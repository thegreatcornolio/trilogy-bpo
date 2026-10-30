"use client";

import { useEffect, useId, useState } from "react";
import { primaryNav, type NavItem } from "@/lib/content";

export default function MobileNav({ items = primaryNav as readonly NavItem[] }: { items?: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className={`mobile-nav__toggle${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mobile-nav__bar" />
        <span className="mobile-nav__bar" />
        <span className="mobile-nav__bar" />
      </button>

      <div
        id={panelId}
        className={`mobile-nav__panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-nav__links" aria-label="Mobile">
          {items.map((item, index) => (
            <span key={item.href} style={{ display: "contents" }}>
              {item.href.startsWith("#") && index > 0 && !items[index - 1].href.startsWith("#") ? (
                <span className="mobile-nav__divider" aria-hidden />
              ) : null}
              <a
                href={item.href}
                className="mobile-nav__link mono"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </span>
          ))}
          <a
            href="#contact"
            className="cta mobile-nav__cta"
            onClick={() => setOpen(false)}
          >
            Talk to us
          </a>
        </nav>
      </div>

      <button
        type="button"
        className={`mobile-nav__backdrop${open ? " is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
    </div>
  );
}
