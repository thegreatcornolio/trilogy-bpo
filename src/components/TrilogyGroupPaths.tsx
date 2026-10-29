"use client";

import Link from "next/link";
import { AutoVideo } from "@/components/AutoVideo";
import { trilogyGroup } from "@/lib/content";

export default function TrilogyGroupPaths() {
  return (
    <div
      className="rise group-grid"
      style={{
        marginTop: 40,
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 18,
      }}
    >
      {trilogyGroup.members.map((member, index) => (
        <Link
          key={member.key}
          href={member.href}
          className="group-path"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(14,27,42,.1)",
            background: "#0E1B2A",
            color: "#fff",
            textDecoration: "none",
            minHeight: "100%",
          }}
        >
          <div
            className="group-path__media"
            style={{
              position: "relative",
              aspectRatio: "16 / 11",
              overflow: "hidden",
              background: "#0A121A",
            }}
          >
            <AutoVideo
              src={member.video}
              poster={member.image}
              objectPosition={member.key === "gcc" ? "center 35%" : "center"}
              videoKey={member.key}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(8,14,22,.15) 0%, rgba(8,14,22,.55) 55%, rgba(8,14,22,.92) 100%)",
                pointerEvents: "none",
              }}
            />
            <div
              className="mono"
              style={{
                position: "absolute",
                left: 16,
                bottom: 14,
                zIndex: 1,
                fontSize: 11.5,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#2FE85C",
              }}
            >
              {String(index + 1).padStart(2, "0")} · {member.tag}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "22px 22px 24px",
              flex: 1,
            }}
          >
            <div style={{ fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 500, letterSpacing: "-.02em" }}>
              {member.name}
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.6,
                fontWeight: 300,
                color: "rgba(255,255,255,.72)",
                flex: 1,
              }}
            >
              {member.body}
            </p>
            <span
              className="mono group-path__cta"
              style={{
                marginTop: 8,
                fontSize: 12,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#2FE85C",
              }}
            >
              Explore →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
