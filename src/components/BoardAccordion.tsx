"use client";

import Image from "next/image";
import { useId, useState, type CSSProperties } from "react";
import type { TeamMember } from "@/lib/content";

function memberImageStyle(name: string): CSSProperties {
  if (name === "Jason Luboyera") {
    return {
      objectFit: "cover",
      objectPosition: "center 48%",
      transform: "scale(1.22) translateY(12%)",
      transformOrigin: "center center",
      background: "#fff",
    };
  }
  if (name === "Brandon Grant" || name === "Lizelle McLaughlin") {
    return {
      objectFit: "cover",
      objectPosition: "center 22%",
      transform: "scale(1.12)",
      transformOrigin: "center top",
      background: "#fff",
    };
  }
  return { objectFit: "cover", background: "#fff" };
}

/**
 * Collapsed-by-default board strip — expands to reveal member photos.
 */
export default function BoardAccordion({ members }: { members: TeamMember[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rise" style={{ marginTop: 48 }}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "16px 0",
          border: "none",
          borderTop: "1px solid rgba(14,27,42,.1)",
          borderBottom: "1px solid rgba(14,27,42,.1)",
          background: "transparent",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          className="mono"
          style={{
            fontSize: 12,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#0E7C46",
            fontWeight: 700,
          }}
        >
          Board Members
        </span>
        <span
          aria-hidden
          className="mono"
          style={{
            fontSize: 11,
            letterSpacing: ".1em",
            color: "rgba(14,27,42,.45)",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {open ? "Hide" : "View"}
          <span
            style={{
              display: "inline-block",
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: open ? "none" : "6px solid rgba(14,27,42,.45)",
              borderBottom: open ? "6px solid rgba(14,27,42,.45)" : "none",
            }}
          />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-hidden={!open}
        style={{
          overflow: "hidden",
          maxHeight: open ? 1200 : 0,
          opacity: open ? 1 : 0,
          transition: "max-height .45s cubic-bezier(.16,.84,.44,1), opacity .35s ease",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 22,
            paddingTop: 28,
            paddingBottom: 8,
          }}
        >
          {members.map((member) => {
            const inner = (
              <>
                <div
                  style={{
                    position: "relative",
                    width: "60%",
                    aspectRatio: "4/5",
                    borderRadius: 14,
                    overflow: "hidden",
                    background: "#fff",
                  }}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="144px"
                    style={memberImageStyle(member.name)}
                  />
                </div>
                <div style={{ marginTop: 12, fontSize: 15.5, fontWeight: 500 }}>{member.name}</div>
                <div className="mono" style={{ marginTop: 4, fontSize: 11, color: "rgba(14,27,42,.5)" }}>
                  {member.role}
                </div>
              </>
            );

            if (member.linkedin) {
              return (
                <a
                  key={member.name}
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  style={{ display: "block" }}
                  tabIndex={open ? 0 : -1}
                >
                  {inner}
                </a>
              );
            }

            return (
              <div key={member.name} style={{ display: "block" }}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
