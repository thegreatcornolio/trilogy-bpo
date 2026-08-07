import Link from "next/link";
import { AutoVideo } from "@/components/AutoVideo";

type Props = {
  kicker: string;
  title: string;
  lead: string;
  video: string;
  poster: string;
  ctaHref?: string;
  ctaLabel?: string;
  meta?: string;
  objectPosition?: string;
};

/** Full-bleed video hero used on GCC / Ai service pages. */
export default function ServiceHero({
  kicker,
  title,
  lead,
  video,
  poster,
  ctaHref = "/#contact",
  ctaLabel = "Book a session",
  meta,
  objectPosition = "center",
}: Props) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "78vh",
        display: "flex",
        alignItems: "flex-end",
        color: "#F7F5F0",
        overflow: "hidden",
        background: "#0A121A",
      }}
    >
      <div aria-hidden style={{ position: "absolute", inset: 0 }}>
        <AutoVideo src={video} poster={poster} objectPosition={objectPosition} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(8,14,22,.92) 0%, rgba(8,14,22,.72) 42%, rgba(8,14,22,.35) 72%, rgba(8,14,22,.2) 100%), linear-gradient(180deg, rgba(8,14,22,.35) 0%, rgba(8,14,22,.15) 40%, rgba(8,14,22,.78) 100%)",
          }}
        />
      </div>

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          paddingTop: 120,
          paddingBottom: 72,
        }}
      >
        <div className="mono rise" style={{ fontSize: 12, letterSpacing: ".14em", color: "rgba(247,245,240,.55)" }}>
          {kicker}
        </div>
        <h1
          className="rise"
          style={{
            margin: "16px 0 0",
            maxWidth: "14ch",
            fontSize: "clamp(40px, 6.2vw, 68px)",
            fontWeight: 400,
            letterSpacing: "-.03em",
            lineHeight: 1.05,
          }}
        >
          {title}
        </h1>
        <p
          className="rise"
          style={{
            margin: "22px 0 0",
            maxWidth: "52ch",
            fontSize: 17.5,
            lineHeight: 1.65,
            fontWeight: 300,
            color: "rgba(247,245,240,.78)",
          }}
        >
          {lead}
        </p>
        <div className="rise" style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <Link
            href={ctaHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 22px",
              borderRadius: 999,
              background: "#2FE85C",
              color: "#0E1B2A",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {ctaLabel}
          </Link>
          {meta ? (
            <span className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "rgba(247,245,240,.5)" }}>
              {meta}
            </span>
          ) : null}
        </div>
      </div>
    </section>
  );
}
