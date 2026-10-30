"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { primaryNav } from "@/lib/content";

/** Same transparent chrome as the main site — light writing over the hero. */
const linkStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11.5,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "rgba(255, 255, 255, 0.92)",
  textDecoration: "none",
};

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-chrome${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="site-chrome__inner shell">
        <a href="/" aria-label="Trilogy home" className="site-chrome__logo">
          <Image
            src="/logo/trilogy-logo-light.png"
            alt="Trilogy"
            width={1200}
            height={262}
            priority
            className="site-chrome__logo-img"
          />
        </a>

        <nav className="site-chrome__nav" aria-label="Primary">
          <div className="site-chrome__desktop">
            {primaryNav.map((item) => (
              <a key={item.href} href={item.href} className="site-chrome__link" style={linkStyle}>
                {item.label}
              </a>
            ))}
          </div>
          <a href="/#contact" className="site-chrome__cta">
            Get in Touch
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="site-chrome__burger"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {open ? (
        <div className="site-chrome__mobile">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-chrome__link"
              style={{ ...linkStyle, fontSize: 12 }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="/#contact" className="site-chrome__cta" onClick={() => setOpen(false)}>
            Get in Touch
          </a>
        </div>
      ) : null}
    </header>
  );
}
