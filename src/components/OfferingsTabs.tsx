"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AutoVideo from "@/components/AutoVideo";
import { offerings } from "@/lib/content";
import { forest, ink, lime, line, mono, panel } from "@/lib/theme";

export default function OfferingsTabs() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const current = offerings[active];

  useEffect(() => {
    const node = panelRef.current;
    if (!node) return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    node.style.animation = "none";
    void node.offsetWidth;
    node.style.animation =
      "trilogy-offerin .5s cubic-bezier(.16,.84,.44,1) both";
  }, [active]);

  return (
    <div
      className="rise t-offer-corp"
      style={{
        display: "grid",
        gridTemplateColumns: "0.85fr 1.4fr 1.05fr",
        alignItems: "stretch",
        border: `1px solid ${line}`,
        borderRadius: 14,
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRight: `1px solid ${line}`,
        }}
      >
        {offerings.map((offering, index) => {
          const selected = index === active;
          const isHovered = hovered === index;
          return (
            <button
              key={offering.key}
              type="button"
              onClick={() => setActive(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              aria-pressed={selected}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
                cursor: "pointer",
                padding: "24px 26px",
                border: "none",
                borderBottom:
                  index < offerings.length - 1
                    ? "1px solid rgba(14,27,42,.08)"
                    : "none",
                borderLeft: `3px solid ${selected ? forest : "transparent"}`,
                background: selected
                  ? "#0c1926"
                  : isHovered
                    ? panel
                    : "transparent",
                fontFamily: "var(--font-sans)",
                transition: "background .25s, border-color .25s, color .25s",
              }}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <span
                  style={mono({
                    fontSize: 13,
                    color: selected ? lime : "rgba(14,27,42,.4)",
                  })}
                >
                  {offering.index}
                </span>
                <span
                  style={{
                    fontSize: "clamp(17px,1.6vw,21px)",
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                    color: selected ? "#fff" : "rgba(14,27,42,.62)",
                  }}
                >
                  {offering.name}
                </span>
              </span>
              <span
                style={mono({
                  display: "block",
                  marginTop: 8,
                  paddingLeft: 30,
                  fontSize: 13.5,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  color: selected ? "rgba(255,255,255,.92)" : "rgba(14,27,42,.62)",
                })}
              >
                {offering.kicker}
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={panelRef}
        style={{
          padding: 44,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(22px,2.4vw,30px)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-.01em",
            color: ink,
          }}
        >
          {current.headline}
        </p>
        <p
          style={{
            margin: "18px 0 0",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "rgba(14,27,42,.62)",
          }}
        >
          {current.body}
        </p>
        <ul
          style={{
            listStyle: "none",
            margin: "26px 0 0",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {current.points.map((point) => (
            <li
              key={point}
              style={mono({
                display: "flex",
                gap: 11,
                alignItems: "center",
                fontSize: 13,
                letterSpacing: ".08em",
                lineHeight: 1.5,
                color: ink,
              })}
            >
              <span style={{ flex: "none", color: forest, fontWeight: 700 }}>
                +
              </span>
              {point}
            </li>
          ))}
        </ul>
        {current.href ? (
          <Link
            href={current.href}
            style={mono({
              display: "inline-flex",
              marginTop: 28,
              fontSize: 12,
              letterSpacing: ".12em",
              color: forest,
            })}
          >
            Explore {current.name} →
          </Link>
        ) : null}
      </div>

      <div
        className="t-offer-corp-media"
        style={{
          position: "relative",
          minHeight: 420,
          borderLeft: `1px solid ${line}`,
          background: ink,
        }}
      >
        <AutoVideo
          src={current.video}
          poster={current.image}
          videoKey={current.video}
        />
        <span
          aria-hidden
          style={mono({
            position: "absolute",
            left: 16,
            bottom: 14,
            fontSize: 12,
            letterSpacing: ".16em",
            color: lime,
          })}
        >
          {current.index} · {current.name}
        </span>
      </div>
    </div>
  );
}
