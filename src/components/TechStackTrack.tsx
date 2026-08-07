"use client";

import Image from "next/image";
import {
  discoveryEngines,
  discoveryLabel,
  partnerCategories,
} from "@/lib/content";

export function TechStackTrack() {
  return (
    <div className="rise" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      {partnerCategories.map((category) => {
        const hasLogos = category.providers.some((p) => p.logo);

        return (
          <div key={category.name}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              {category.letter ? (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: category.color ?? "rgba(255,255,255,.1)",
                    color: "#fff",
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  {category.letter}
                </span>
              ) : null}
              <div
                className="mono"
                style={{
                  fontSize: 11.5,
                  letterSpacing: ".16em",
                  color: category.color ?? "rgba(247,245,240,.45)",
                }}
              >
                {category.name}
              </div>
            </div>

            {hasLogos ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                  gap: 14,
                }}
              >
                {category.providers.map((provider) => (
                  <div
                    key={`${category.name}-${provider.name}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      minHeight: 118,
                      padding: "22px 16px 18px",
                      borderRadius: 14,
                      background: "#fff",
                      border: "1px solid rgba(255,255,255,.08)",
                    }}
                  >
                    {provider.logo ? (
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        width={120}
                        height={40}
                        style={{
                          width: "auto",
                          maxWidth: "78%",
                          height: 36,
                          objectFit: "contain",
                        }}
                      />
                    ) : null}
                    <span
                      style={{
                        fontSize: 12.5,
                        fontWeight: 500,
                        color: "rgba(14,27,42,.62)",
                        textAlign: "center",
                      }}
                    >
                      {provider.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {category.providers.map((provider) => (
                  <span
                    key={`${category.name}-${provider.name}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "12px 16px",
                      borderRadius: 12,
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.1)",
                      color: "#F7F5F0",
                      fontSize: 14.5,
                      fontWeight: 400,
                    }}
                  >
                    {provider.icon ? (
                      <Image
                        src={provider.icon}
                        alt=""
                        width={22}
                        height={22}
                        style={{ width: 22, height: 22, objectFit: "contain" }}
                      />
                    ) : null}
                    {provider.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
          paddingTop: 16,
          borderTop: "1px solid rgba(255,255,255,.1)",
        }}
      >
        <span
          className="mono"
          style={{
            fontSize: 11.5,
            letterSpacing: ".14em",
            color: "rgba(247,245,240,.45)",
          }}
        >
          {discoveryLabel}
        </span>
        {discoveryEngines.map((engine) => (
          <span
            key={engine}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              background: "#C43B3B",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              fontStyle: "italic",
            }}
          >
            {engine}
          </span>
        ))}
      </div>
    </div>
  );
}
