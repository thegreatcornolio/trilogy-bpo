"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { primaryNav } from "@/lib/content";

/** Same chrome as the main web.trilogybpo.com Header — light bar, identical link color. */
const linkStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11.5,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "rgba(14, 27, 42, 0.72)",
  textDecoration: "none",
};

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner shell shell--header">
        <a href="/" aria-label="Trilogy home" className="site-header__logo">
          <Image
            src="/logo/trilogy-logo.png"
            alt="Trilogy"
            width={5280}
            height={1100}
            priority
            className="site-header__logo-img"
          />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          <div className="site-header__desktop">
            {primaryNav.map((item) => (
              <a key={item.href} href={item.href} className="site-header__link" style={linkStyle}>
                {item.label}
              </a>
            ))}
          </div>
          <a href="/#contact" className="site-header__cta">
            Get in Touch
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="site-header__burger"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {open ? (
        <div className="site-header__mobile">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-header__link"
              style={{ ...linkStyle, fontSize: 12 }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="site-header__cta site-header__cta--mobile"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      ) : null}
    </header>
  );
}
