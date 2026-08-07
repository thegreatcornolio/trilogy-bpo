"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AutoVideo } from "@/components/AutoVideo";
import { slate } from "@/lib/theme";

export type HomeService = {
  index: string;
  name: string;
  title: string;
  body: string;
  points: readonly string[];
  video: string;
  poster: string;
  href: string;
  cta: string;
};

export default function HomeServicesPanel({ services }: { services: readonly HomeService[] }) {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const current = services[active];

  useEffect(() => {
    const node = panelRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.style.animation = "none";
    void node.offsetWidth;
    node.style.animation = "trilogy-offerin .45s cubic-bezier(.16,.84,.44,1) both";
  }, [active]);

  return (
    <div
      className="rise home-services-panel"
      style={{
        display: "grid",
        gridTemplateColumns: "0.78fr 1.22fr",
        border: "1px solid rgba(14,27,42,.1)",
        borderRadius: 4,
        overflow: "hidden",
        background: "#fff",
        minHeight: 480,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          borderRight: "1px solid rgba(14,27,42,.1)",
        }}
      >
        {services.map((service, index) => {
          const selected = index === active;
          return (
            <button
              key={service.name}
              type="button"
              id={`service-tab-${service.name.toLowerCase()}`}
              aria-selected={selected}
              aria-controls="service-panel"
              role="tab"
              onClick={() => setActive(index)}
              style={{
                flex: 1,
                textAlign: "left",
                padding: "28px 26px",
                border: "none",
                borderBottom: index < services.length - 1 ? "1px solid rgba(14,27,42,.08)" : "none",
                borderLeft: `3px solid ${selected ? "#2FE85C" : "transparent"}`,
                background: selected ? "#0E1B2A" : "#fff",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                color: selected ? "#fff" : "rgba(14,27,42,.55)",
                transition: "background .25s, color .25s",
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: selected ? "#2FE85C" : "rgba(14,27,42,.4)",
                }}
              >
                {service.index}
              </span>
              <span
                style={{
                  display: "block",
                  marginTop: 8,
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 300,
                  letterSpacing: "-.02em",
                }}
              >
                {service.name}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="service-panel"
        role="tabpanel"
        aria-labelledby={`service-tab-${current.name.toLowerCase()}`}
        style={{ display: "grid", gridTemplateColumns: "1fr 0.95fr" }}
        className="home-services-detail"
      >
        <div ref={panelRef} style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", color: slate }}>
            {current.index} · {current.name}
          </div>
          <h3
            style={{
              margin: "12px 0 0",
              fontSize: "clamp(26px, 2.8vw, 34px)",
              fontWeight: 300,
              letterSpacing: "-.025em",
              lineHeight: 1.15,
              color: "#0E1B2A",
            }}
          >
            {current.title}
          </h3>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 15.5,
              lineHeight: 1.7,
              fontWeight: 300,
              color: "rgba(14,27,42,.62)",
            }}
          >
            {current.body}
          </p>
          <ul style={{ listStyle: "none", margin: "24px 0 0", padding: 0, display: "grid", gap: 10 }}>
            {current.points.map((point) => (
              <li
                key={point}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  fontSize: 14,
                  color: "rgba(14,27,42,.72)",
                  fontWeight: 300,
                }}
              >
                <span style={{ width: 16, height: 1, background: slate, flex: "none" }} />
                {point}
              </li>
            ))}
          </ul>
          <Link
            href={current.href}
            className="mono"
            style={{
              display: "inline-flex",
              marginTop: 28,
              fontSize: 12,
              letterSpacing: ".14em",
              color: "#0E1B2A",
              borderBottom: `1px solid ${slate}`,
              paddingBottom: 4,
              alignSelf: "flex-start",
            }}
          >
            {current.cta} →
          </Link>
        </div>

        <div style={{ position: "relative", minHeight: 360, background: "#0A121A" }}>
          <AutoVideo
            src={current.video}
            poster={current.poster}
            videoKey={current.video}
            objectPosition="center"
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, transparent 50%, rgba(8,14,22,.5) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .home-services-panel {
            grid-template-columns: 1fr !important;
          }
          .home-services-detail {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
