"use client";

import { useEffect, useRef, useState } from "react";
import { demoConversation } from "@/lib/content";

type Msg = {
  role: "customer" | "ai";
  text: string;
  approved?: boolean;
  approvalText?: string;
};

const theme = {
  card: {
    border: "1px solid rgba(14,27,42,.1)",
    borderRadius: 14,
    background: "#FFFFFF",
    boxShadow: "0 30px 70px rgba(14,27,42,.1)",
  } as React.CSSProperties,
  headerBorder: "rgba(14,27,42,.08)",
  headerLabel: "rgba(14,27,42,.55)",
  customer: {
    background: "#0E1B2A",
    color: "#FFFFFF",
    borderRadius: "14px 14px 4px 14px",
  } as React.CSSProperties,
  avatar: {
    background: "rgba(14,124,70,.1)",
    color: "#0E7C46",
    borderRadius: 8,
  } as React.CSSProperties,
  aiBubble: {
    background: "#F4F7F9",
    border: "1px solid rgba(14,27,42,.07)",
    color: "#0E1B2A",
    borderRadius: "4px 14px 14px 14px",
  } as React.CSSProperties,
  accent: "#0E7C46",
  resolvedMuted: "rgba(14,27,42,.5)",
  dot: "#0E7C46",
  footerBorder: "rgba(14,27,42,.08)",
};

export function AgentDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const started = useRef(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;
      clearTimers();
      setMsgs([]);
      setTyping(false);
      setDone(false);

      const later = (ms: number, fn: () => void) => {
        timers.current.push(window.setTimeout(fn, ms));
      };

      let t = 450;
      demoConversation.forEach((item) => {
        const approval = "approval" in item ? item.approval : undefined;
        if (item.role === "ai") {
          later(t, () => setTyping(true));
          later((t += 1200), () => {
            setTyping(false);
            setMsgs((prev) => [
              ...prev,
              { role: "ai", text: item.text, approved: false, approvalText: approval },
            ]);
          });
          if (approval) {
            later((t += 800), () =>
              setMsgs((prev) =>
                prev.map((m, i) => (i === prev.length - 1 ? { ...m, approved: true } : m)),
              ),
            );
          }
          t += 700;
        } else {
          later(t, () => setMsgs((prev) => [...prev, { role: "customer", text: item.text }]));
          t += 900;
        }
      });
      later(t, () => setDone(true));
    };

    if (reduced || !("IntersectionObserver" in window)) {
      setMsgs(
        demoConversation.map((item) => {
          const approval = "approval" in item ? item.approval : undefined;
          return {
            role: item.role,
            text: item.text,
            approved: !!approval,
            approvalText: approval,
          };
        }),
      );
      setDone(true);
      started.current = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(root);
    return () => {
      io.disconnect();
      clearTimers();
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, typing, done]);

  return (
    <div ref={rootRef} className="rise" style={{ ...theme.card, overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "15px 20px",
          borderBottom: `1px solid ${theme.headerBorder}`,
        }}
      >
        <span
          className="anim-pulse"
          style={{ width: 9, height: 9, borderRadius: 999, background: "#2FE85C" }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: ".14em",
            color: theme.headerLabel,
          }}
        >
          Live conversation · #4821
        </span>
      </div>

      <div
        ref={scrollRef}
        style={{
          height: 340,
          overflowY: "auto",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {msgs.map((msg, i) =>
          msg.role === "customer" ? (
            <div
              key={i}
              style={{ alignSelf: "flex-end", maxWidth: "78%", animation: "trilogy-msgin .4s ease both" }}
            >
              <div style={{ ...theme.customer, padding: "12px 16px", fontSize: 14, lineHeight: 1.5 }}>
                {msg.text}
              </div>
            </div>
          ) : (
            <div
              key={i}
              style={{ alignSelf: "flex-start", maxWidth: "84%", animation: "trilogy-msgin .4s ease both" }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span
                  style={{
                    ...theme.avatar,
                    flex: "none",
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                  }}
                >
                  三
                </span>
                <div>
                  <div style={{ ...theme.aiBubble, padding: "12px 16px", fontSize: 14, lineHeight: 1.5 }}>
                    {msg.text}
                  </div>
                  {msg.approved ? (
                    <div
                      style={{
                        marginTop: 8,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: ".12em",
                        color: theme.accent,
                        animation: "trilogy-chip .35s ease both",
                      }}
                    >
                      <span
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: 999,
                          background: "#2FE85C",
                          color: "#0A1F12",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                        }}
                      >
                        ✓
                      </span>
                      {msg.approvalText}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ),
        )}

        {typing ? (
          <div
            style={{
              alignSelf: "flex-start",
              display: "flex",
              gap: 10,
              alignItems: "center",
              animation: "trilogy-msgin .3s ease both",
            }}
          >
            <span
              style={{
                ...theme.avatar,
                flex: "none",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 13,
              }}
            >
              三
            </span>
            <div style={{ ...theme.aiBubble, padding: "13px 16px", display: "flex", gap: 5 }}>
              {[0, 0.2, 0.4].map((delay) => (
                <span
                  key={delay}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: theme.dot,
                    animation: `trilogy-typed 1.2s infinite ${delay}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {done ? (
        <div
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            padding: "14px 20px",
            borderTop: `1px solid ${theme.footerBorder}`,
            animation: "trilogy-chip .4s ease both",
          }}
        >
          {[
            ["Resolved in", "38s"],
            ["CSAT", "5.0 ★"],
            ["Human touch", "1 tap"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                color: theme.resolvedMuted,
              }}
            >
              {label}{" "}
              <span style={{ color: theme.accent, fontWeight: 700 }}>{value}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
