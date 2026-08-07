"use client";

import Image from "next/image";
import { useState } from "react";
import { slate } from "@/lib/theme";

type Member = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
};

export default function TeamAccordion({ members }: { members: readonly Member[] }) {
  const [open, setOpen] = useState<string | null>(members[0]?.name ?? null);

  return (
    <div className="rise" style={{ marginTop: 48 }}>
      {/* Compact thumbs */}
      <div
        className="team-thumbs"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
          gap: 10,
          maxWidth: 820,
        }}
      >
        {members.map((member) => {
          const active = open === member.name;
          return (
            <button
              key={member.name}
              type="button"
              aria-expanded={active}
              aria-controls={`team-panel-${member.name.replace(/\s+/g, "-")}`}
              onClick={() => setOpen(active ? null : member.name)}
              style={{
                padding: 0,
                border: active ? "2px solid #2FE85C" : "2px solid transparent",
                borderRadius: 2,
                background: "#fff",
                cursor: "pointer",
                overflow: "hidden",
                opacity: open && !active ? 0.45 : 1,
                transition: "opacity .25s, border-color .25s",
              }}
            >
              <span
                style={{
                  position: "relative",
                  display: "block",
                  aspectRatio: "1",
                  width: "100%",
                }}
              >
                <Image
                  src={member.img}
                  alt=""
                  fill
                  sizes="80px"
                  style={{
                    objectFit: "cover",
                    objectPosition:
                      member.name === "Jason Luboyera" ? "center 48%" : "center top",
                    transform: member.name === "Jason Luboyera" ? "scale(1.15)" : undefined,
                  }}
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* Expanded panel */}
      {members.map((member) => {
        const active = open === member.name;
        if (!active) return null;
        return (
          <div
            key={member.name}
            id={`team-panel-${member.name.replace(/\s+/g, "-")}`}
            className="team-expand"
            style={{
              marginTop: 20,
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              gap: 28,
              alignItems: "center",
              padding: 22,
              background: "rgba(255,255,255,.04)",
              border: `1px solid rgba(255,255,255,.1)`,
              borderRadius: 4,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 200,
                aspectRatio: "4 / 5",
                borderRadius: 2,
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="200px"
                style={{
                  objectFit: "cover",
                  objectPosition:
                    member.name === "Jason Luboyera" ? "center 48%" : "center top",
                  transform: member.name === "Jason Luboyera" ? "scale(1.2) translateY(8%)" : undefined,
                }}
              />
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", color: "rgba(247,245,240,.4)" }}>
                Leadership
              </div>
              <h3 style={{ margin: "8px 0 0", fontSize: 24, fontWeight: 400 }}>{member.name}</h3>
              <div className="mono" style={{ marginTop: 6, fontSize: 12, letterSpacing: ".1em", color: "#2FE85C" }}>
                {member.role}
              </div>
              <p
                style={{
                  margin: "14px 0 0",
                  maxWidth: "46ch",
                  fontSize: 15,
                  lineHeight: 1.65,
                  fontWeight: 300,
                  color: "rgba(247,245,240,.62)",
                }}
              >
                Part of the operator team that built 30+ centres and scaled thousands of seats — available to clients
                as principals, not a sales layer.
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mono"
                style={{
                  display: "inline-flex",
                  marginTop: 18,
                  fontSize: 11,
                  letterSpacing: ".12em",
                  color: "rgba(247,245,240,.7)",
                  borderBottom: `1px solid ${slate}`,
                  paddingBottom: 3,
                }}
              >
                LinkedIn profile →
              </a>
            </div>
          </div>
        );
      })}

      <style>{`
        @media (max-width: 900px) {
          .team-thumbs {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
          .team-expand {
            grid-template-columns: 140px 1fr !important;
            gap: 18px !important;
          }
        }
        @media (max-width: 560px) {
          .team-thumbs {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
          .team-expand {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
