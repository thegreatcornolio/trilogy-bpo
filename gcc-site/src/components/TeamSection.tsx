"use client";

import Image from "next/image";
import { useId, useState, type CSSProperties } from "react";
import type { TeamMember } from "@/lib/content";

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
      <path
        fill="#fff"
        d="M7.2 9.4h2.1v7.2H7.2V9.4Zm1.05-3.4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM11.1 9.4h2v1h.03c.28-.53.97-1.1 2-1.1 2.14 0 2.54 1.4 2.54 3.23v4.07h-2.1v-3.6c0-.86-.02-1.96-1.2-1.96-1.2 0-1.38.93-1.38 1.9v3.66h-2.1V9.4Z"
      />
    </svg>
  );
}

function photoStyle(name: string): CSSProperties {
  if (name === "Craig Shalekoff") {
    return {
      objectFit: "cover",
      objectPosition: "center center",
      filter: "grayscale(1)",
    };
  }
  if (name === "Lizelle McLaughlin" || name === "Heather Wallace") {
    return {
      objectFit: "cover",
      objectPosition: "center 18%",
      filter: "grayscale(1)",
    };
  }
  if (name === "Frank Kilbourn") {
    return {
      objectFit: "cover",
      objectPosition: "center 30%",
      filter: "grayscale(1)",
    };
  }
  return {
    objectFit: "cover",
    objectPosition: "center top",
    filter: "grayscale(1)",
  };
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div>
      <div className="team-card__photo">
        <Image src={member.img} alt={member.name} fill sizes="108px" style={photoStyle(member.name)} />
      </div>
      <div className="team-card__name-row">
        <div className="team-card__name">{member.name}</div>
        {member.linkedin ? (
          <a
            className="team-linkedin"
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
          >
            <LinkedInIcon />
          </a>
        ) : null}
      </div>
      <div className="mono team-card__role">{member.role}</div>
    </div>
  );
}

function BoardAccordion({ members }: { members: TeamMember[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rise" style={{ marginTop: 8 }}>
      <button
        type="button"
        className="board-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mono team-group-label" style={{ margin: 0 }}>
          Board Members
        </span>
        <span className="mono board-toggle__action">
          {open ? "Hide" : "Read more"}
          <span className={`board-toggle__chevron${open ? " is-open" : ""}`} aria-hidden />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-hidden={!open}
        className={`board-panel${open ? " is-open" : ""}`}
      >
        <div className="team-grid" style={{ paddingTop: 18 }}>
          {members.map((m) => (
            <MemberCard key={`board-${m.name}`} member={m} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TeamSection({
  groups,
}: {
  groups: { title: string; members: TeamMember[] }[];
}) {
  const visible = groups.filter((g) => g.title !== "Board Members");
  const board = groups.find((g) => g.title === "Board Members");

  return (
    <>
      {visible.map((group) => (
        <div key={group.title}>
          <p className="mono team-group-label rise">{group.title}</p>
          <div className="team-grid rise">
            {group.members.map((m) => (
              <MemberCard key={`${group.title}-${m.name}`} member={m} />
            ))}
          </div>
        </div>
      ))}
      {board ? <BoardAccordion members={[...board.members]} /> : null}
    </>
  );
}
