"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { nav, type NavItem } from "@/lib/content";

/** Match GCC microsite nav: light mono links on dark glass. */
const linkStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.78)",
  position: "relative",
};

const ctaStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 16px",
  borderRadius: 2,
  border: "none",
  background: "#2FE85C",
  color: "#0E1B2A",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: ".08em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

function ServicesDropdown({ item }: { item: Extract<NavItem, { children: unknown }> }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className="site-nav-link"
        style={{
          ...linkStyle,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        {item.label}
        <span
          aria-hidden
          style={{
            display: "inline-block",
            width: 0,
            height: 0,
            borderLeft: "3.5px solid transparent",
            borderRight: "3.5px solid transparent",
            borderTop: "4px solid rgba(255,255,255,.55)",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform .2s",
          }}
        />
      </button>
      {open ? (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            paddingTop: 10,
            minWidth: 180,
            zIndex: 60,
          }}
        >
          <div
            style={{
              background: "rgba(8,16,24,0.96)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4,
              padding: "8px 0",
              backdropFilter: "blur(14px)",
            }}
          >
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                style={{
                  ...linkStyle,
                  display: "block",
                  padding: "10px 18px",
                  color: "rgba(255,255,255,0.82)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(47,232,92,0.12)";
                  e.currentTarget.style.color = "#2FE85C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.82)";
                }}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      className="site-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(8, 16, 24, 0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div
        className="container header-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
          gap: 24,
        }}
      >
        <Link
          href="/"
          aria-label="Trilogy home"
          className="header-logo-link"
          style={{ display: "inline-flex", flex: "none", alignItems: "center", minWidth: 0 }}
        >
          <Image
            src="/logo/trilogy-logo-light.png"
            alt="Trilogy"
            width={1200}
            height={262}
            priority
            className="header-logo"
            style={{ height: 44, width: "auto", maxWidth: "100%" }}
          />
        </Link>

        <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: 20, flex: "none" }}>
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {nav.map((item) =>
              item.children ? (
                <ServicesDropdown key={item.label} item={item} />
              ) : (
                <Link key={item.href} href={item.href} className="site-nav-link" style={linkStyle}>
                  {item.label}
                </Link>
              ),
            )}
          </div>
          <Link href="/#contact" className="nav-cta site-nav-cta" style={ctaStyle}>
            Get in Touch
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="nav-burger"
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.06)",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 4,
              flex: "none",
            }}
          >
            <span style={{ display: "block", width: 16, height: 2, background: "#fff" }} />
            <span style={{ display: "block", width: 16, height: 2, background: "#fff" }} />
            <span style={{ display: "block", width: 16, height: 2, background: "#fff" }} />
          </button>
        </nav>
      </div>

      {open ? (
        <div
          className="nav-mobile-panel"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 28px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            background: "rgba(8,16,24,0.96)",
          }}
        >
          {nav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  style={{
                    ...linkStyle,
                    fontSize: 12,
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                  <span aria-hidden style={{ color: "rgba(255,255,255,.45)" }}>
                    {servicesOpen ? "−" : "+"}
                  </span>
                </button>
                {servicesOpen ? (
                  <div style={{ marginTop: 10, paddingLeft: 12, display: "flex", flexDirection: "column", gap: 10 }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        style={{
                          ...linkStyle,
                          fontSize: 12,
                          color: "rgba(255,255,255,.65)",
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  ...linkStyle,
                  fontSize: 12,
                }}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            style={{ ...ctaStyle, marginTop: 8, alignSelf: "flex-start" }}
          >
            Get in Touch
          </Link>
        </div>
      ) : null}
    </header>
  );
}
