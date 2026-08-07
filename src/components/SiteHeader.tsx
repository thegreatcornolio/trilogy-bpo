"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { company, navLinks } from "@/lib/content";
import { ink, line, maxWidth, mono } from "@/lib/theme";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: `1px solid ${line}`,
        background: "rgba(255,255,255,.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div
        style={{
          maxWidth,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "16px 28px",
        }}
      >
        <Link
          href="/"
          aria-label="Trilogy home"
          style={{ display: "inline-flex", flex: "none" }}
        >
          <Image
            src="/logo/trilogy-deck-light.png"
            alt="Trilogy"
            width={768}
            height={192}
            priority
            style={{ height: 26, width: "auto" }}
          />
        </Link>

        <nav
          className="t-nav"
          style={mono({
            display: "flex",
            gap: 26,
            fontSize: 12.5,
            letterSpacing: ".16em",
            color: "rgba(14,27,42,.6)",
          })}
        >
          {navLinks.flatMap((item) =>
            item.children
              ? item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="nav-link nav-acc-navy"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {child.label}
                  </Link>
                ))
              : [
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-link nav-acc-navy"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>,
                ],
          )}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            type="button"
            className="t-nav-burger"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: 10,
              border: `1px solid ${line}`,
              background: "#fff",
              color: ink,
              cursor: "pointer",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              {open ? (
                <path
                  d="M5 5l14 14M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>

          <Link
            href="/#contact"
            className="nav-cta"
            style={mono({
              flex: "none",
              background: ink,
              color: "#fff",
              padding: "9px 20px",
              borderRadius: 999,
              fontSize: 12.5,
              fontWeight: 500,
              letterSpacing: ".14em",
              textDecoration: "none",
            })}
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {open ? (
        <nav
          style={mono({
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "8px 28px 20px",
            borderTop: `1px solid ${line}`,
            fontSize: 13,
            letterSpacing: ".14em",
            color: "rgba(14,27,42,.7)",
          })}
        >
          {navLinks.flatMap((item) =>
            item.children
              ? item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "10px 0",
                    }}
                  >
                    {child.label}
                  </Link>
                ))
              : [
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "10px 0",
                    }}
                  >
                    {item.label}
                  </Link>,
                ],
          )}
        </nav>
      ) : null}
    </header>
  );
}
