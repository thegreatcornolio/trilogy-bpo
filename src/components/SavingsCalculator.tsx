"use client";

import { useState } from "react";

const INK = "#0E1B2A";
const ACCENT = "#0E7C46";
const BORDER = "rgba(14,27,42,.1)";
const MUTED = "rgba(14,27,42,.64)";

const gbp = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

const asK = (n: number) => `£${Math.round(n / 1000).toLocaleString("en-GB")}k`;

const mono = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (n: number) => void;
}) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <span style={mono({ fontSize: 12, letterSpacing: ".14em", color: MUTED })}>{label}</span>
        <span
          style={{
            fontSize: 22,
            fontWeight: 300,
            letterSpacing: "-.01em",
            color: INK,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={`${label} ${display}`}
        style={{ width: "100%", marginTop: 14, accentColor: ACCENT, cursor: "pointer" }}
      />
    </label>
  );
}

export function SavingsCalculator() {
  const [seats, setSeats] = useState(50);
  const [cost, setCost] = useState(3000);
  const uk = seats * cost * 12;
  const sa = uk * 0.5;
  const gcc = sa * 0.75;
  const saveSa = Math.round(50);
  const saveGcc = Math.round((1 - gcc / uk) * 100);

  const card: React.CSSProperties = {
    background: "#fff",
    border: `1px solid ${BORDER}`,
    borderRadius: 14,
    padding: "26px 24px",
  };
  const label = mono({ fontSize: 11.5, letterSpacing: ".14em", color: MUTED });
  const value: React.CSSProperties = {
    margin: "12px 0 0",
    fontSize: "clamp(26px,3vw,38px)",
    fontWeight: 300,
    letterSpacing: "-.02em",
    color: INK,
    fontVariantNumeric: "tabular-nums",
  };
  const badge = (bg: string, color: string): React.CSSProperties =>
    mono({
      display: "inline-block",
      marginTop: 12,
      padding: "5px 12px",
      borderRadius: 999,
      background: bg,
      color,
      fontSize: 11.5,
      letterSpacing: ".08em",
    });

  return (
    <div
      className="rise"
      data-calc
      style={{ display: "grid", gridTemplateColumns: "340px minmax(0, 1fr)", gap: 28, alignItems: "start" }}
    >
      <div
        style={{
          background: "#F4F7F9",
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: 28,
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <Slider label="Seats" value={seats} min={10} max={1000} step={10} display={`${seats}`} onChange={setSeats} />
        <Slider
          label="UK cost / seat / month"
          value={cost}
          min={1500}
          max={5000}
          step={100}
          display={gbp.format(cost)}
          onChange={setCost}
        />
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: MUTED }}>
          Adjust the sliders for your operation. Figures are illustrative annual costs based on the deck&apos;s
          savings model.
        </p>
      </div>

      <div style={{ display: "grid", gap: 16 }}>
        <div className="t-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }}>
          <div style={card}>
            <div style={label}>Your UK baseline</div>
            <div style={value}>{asK(uk)}</div>
            <div style={{ marginTop: 8, fontSize: 13, color: MUTED }}>
              per year · {seats} seats
            </div>
          </div>
          <div style={card}>
            <div style={label}>Outsourced to South Africa</div>
            <div style={value}>{asK(sa)}</div>
            <div style={badge("rgba(14,124,70,.1)", ACCENT)}>Save ~{saveSa}%</div>
          </div>
          <div style={{ ...card, background: INK, border: "none", color: "#fff" }}>
            <div style={mono({ fontSize: 11.5, letterSpacing: ".14em", color: "rgba(255,255,255,.6)" })}>
              As a GCC
            </div>
            <div style={{ ...value, color: "#fff" }}>{asK(gcc)}</div>
            <div style={badge("#2FE85C", "#0A1F12")}>Save ~{saveGcc}% total</div>
          </div>
        </div>
        <p style={{ margin: "4px 0 0", fontSize: 13, lineHeight: 1.65, color: MUTED }}>
          Offshoring saves 40–60% versus a UK operation; a GCC structure adds a further 20–30%, and digital plus AI
          deflection compounds from there.
        </p>
      </div>
    </div>
  );
}
