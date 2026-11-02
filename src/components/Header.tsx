"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { primaryNav } from "@/lib/content";

/** Light writing — same color on every product link. */
const linkStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11.5,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "rgba(255, 255, 255, 0.92)",
  textDecoration: "none",
};

export function Header() {
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
      <div className="container site-chrome__inner">
        <Link href="/" aria-label="Trilogy home" className="site-chrome__logo">
          <Image
            src="/logo/trilogy-logo-light.png"
            alt="Trilogy"
            width={1200}
            height={262}
            priority
            className="site-chrome__logo-img"
          />
        </Link>

        <nav className="site-chrome__nav" aria-label="Primary">
          <div className="site-chrome__desktop nav-desktop">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href!} className="site-chrome__link" style={linkStyle}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/#contact" className="site-chrome__cta nav-cta">
            Get in Touch
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="site-chrome__burger nav-burger"
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
            <Link
              key={item.href}
              href={item.href!}
              className="site-chrome__link"
              style={{ ...linkStyle, fontSize: 12 }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="site-chrome__cta" onClick={() => setOpen(false)}>
            Get in Touch
          </Link>
        </div>
      ) : null}
    </header>
  );
}
