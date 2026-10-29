"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { nav, type NavItem } from "@/lib/content";

const linkStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,.78)",
  textDecoration: "none",
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
        className="nav-link nav-acc-green"
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
            minWidth: 160,
            zIndex: 60,
          }}
        >
          <div
            style={{
              background: "rgba(8,16,24,.96)",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: 2,
              padding: "8px 0",
              boxShadow: "0 12px 32px rgba(0,0,0,.28)",
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
                  color: "rgba(255,255,255,.78)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,.06)";
                  e.currentTarget.style.color = "#2FE85C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,.78)";
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(8, 16, 24, 0.92)",
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
        <Link href="/" aria-label="Trilogy home" className="header-logo-link" style={{ display: "inline-flex", flex: "none", alignItems: "center", minWidth: 0 }}>
          <Image
            src="/logo/trilogy-logo-light.png"
            alt="Trilogy"
            width={1200}
            height={262}
            priority
            className="header-logo"
            style={{ height: 44, width: "auto", maxWidth: "min(56vw, 200px)" }}
          />
        </Link>

        <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: 20, flex: "none" }}>
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {nav.map((item) =>
              item.children ? (
                <ServicesDropdown key={item.label} item={item} />
              ) : (
                <Link key={item.href} href={item.href} className="nav-link nav-acc-green" style={linkStyle}>
                  {item.label}
                </Link>
              ),
            )}
          </div>
          <Link
            href="/#contact"
            className="nav-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 16px",
              borderRadius: 2,
              background: "#2FE85C",
              color: "#0E1B2A",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            Get in Touch
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="nav-burger"
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.22)",
              background: "rgba(8, 16, 24, 0.35)",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 5,
              flex: "none",
            }}
          >
            <span style={{ display: "block", width: 18, height: 2, borderRadius: 1, background: "#fff" }} />
            <span style={{ display: "block", width: 18, height: 2, borderRadius: 1, background: "#fff" }} />
            <span style={{ display: "block", width: 18, height: 2, borderRadius: 1, background: "#fff" }} />
          </button>
        </nav>
      </div>

      {open ? (
        <div
          className="nav-mobile-panel"
          style={{
            borderTop: "1px solid rgba(255,255,255,.1)",
            padding: "8px 28px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            background: "rgba(8, 16, 24, 0.96)",
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
                          color: "rgba(255,255,255,.7)",
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
        </div>
      ) : null}
    </header>
  );
}
