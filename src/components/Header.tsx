"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { nav, type NavItem } from "@/lib/content";

const linkStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11.5,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "rgba(14,27,42,.72)",
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
            borderTop: "4px solid rgba(14,27,42,.55)",
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
              background: "#fff",
              border: "1px solid rgba(14,27,42,.1)",
              borderRadius: 12,
              padding: "8px 0",
              boxShadow: "0 12px 32px rgba(14,27,42,.1)",
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
                  color: "rgba(14,27,42,.78)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F4F7F9";
                  e.currentTarget.style.color = "#0E7C46";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(14,27,42,.78)";
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
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(14,27,42,.1)",
        background: "rgba(255,255,255,.85)",
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
          paddingTop: 16,
          paddingBottom: 16,
          gap: 20,
        }}
      >
        <Link href="/" aria-label="Trilogy home" style={{ display: "inline-flex", flex: "none", alignItems: "center" }}>
          <Image
            src="/logo/trilogy-logo.png"
            alt="Trilogy"
            width={5280}
            height={1100}
            priority
            style={{ height: 68, width: "auto" }}
          />
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {nav.map((item) =>
              item.children ? (
                <ServicesDropdown key={item.label} item={item} />
              ) : (
                <Link key={item.href} href={item.href} style={linkStyle}>
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
              padding: "10px 18px",
              borderRadius: 999,
              background: "#0E1B2A",
              color: "#fff",
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
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
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "1px solid rgba(14,27,42,.12)",
              background: "#fff",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ display: "block", width: 16, height: 2, background: "#0E1B2A" }} />
            <span style={{ display: "block", width: 16, height: 2, background: "#0E1B2A" }} />
            <span style={{ display: "block", width: 16, height: 2, background: "#0E1B2A" }} />
          </button>
        </nav>
      </div>

      {open ? (
        <div
          className="nav-mobile-panel"
          style={{
            borderTop: "1px solid rgba(14,27,42,.08)",
            padding: "16px 28px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            background: "#fff",
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
                  <span aria-hidden style={{ color: "rgba(14,27,42,.45)" }}>
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
                          color: "rgba(14,27,42,.6)",
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
