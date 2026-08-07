"use client";

import { useState } from "react";
import Image from "next/image";
import { brands } from "@/lib/content";

const tabs = [
  { key: "global" as const, label: "Global brands", path: "" },
  { key: "local" as const, label: "Local brands", path: "" },
  { key: "gccs" as const, label: "GCCs", path: "" },
  { key: "telco" as const, label: "Telco brands", path: "telco/" },
];

export function BrandTabs() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("global");
  const active = tabs.find((t) => t.key === tab)!;
  const list = brands[tab];

  return (
    <div className="rise">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
        {tabs.map((t) => {
          const on = t.key === tab;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                border: on ? "1px solid #0E7C46" : "1px solid rgba(14,27,42,.1)",
                background: on ? "rgba(14,124,70,.08)" : "#fff",
                color: on ? "#0E7C46" : "rgba(14,27,42,.64)",
                fontFamily: "var(--font-mono)",
                fontSize: 11.5,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: 16,
        }}
      >
        {list.map((slug) => (
          <div
            key={`${tab}-${slug}`}
            style={{
              background: "#fff",
              border: "1px solid rgba(14,27,42,.08)",
              borderRadius: 12,
              height: 88,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
            }}
          >
            <Image
              src={`/pool/brands/${active.path}${slug}.png`}
              alt={slug}
              width={120}
              height={48}
              style={{ width: "100%", height: 40, objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
