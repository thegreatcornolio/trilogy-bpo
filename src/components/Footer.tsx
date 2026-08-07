import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        background: "#0E1B2A",
        color: "#F7F5F0",
        padding: "64px 0 36px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 40,
          }}
          className="footer-grid"
        >
          <div>
            <Image
              src="/logo/trilogy-deck-dark.png"
              alt="Trilogy"
              width={768}
              height={192}
              style={{ height: 52, width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <p
              style={{
                margin: "18px 0 0",
                maxWidth: "36ch",
                fontSize: 14.5,
                lineHeight: 1.65,
                color: "rgba(247,245,240,.66)",
                fontWeight: 300,
              }}
            >
              Human empathy meets AI efficiency. Customer experience operations
              built, staffed and run from Cape Town, South Africa.
            </p>
          </div>
          <div>
            <div
              className="mono"
              style={{ fontSize: 11.5, color: "rgba(247,245,240,.45)", marginBottom: 14 }}
            >
              Navigate
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {nav.flatMap((item) =>
                item.children
                  ? item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        style={{
                          fontSize: 14.5,
                          color: "rgba(247,245,240,.82)",
                          fontWeight: 300,
                        }}
                      >
                        {child.label}
                      </Link>
                    ))
                  : [
                      <Link
                        key={item.label}
                        href={item.href}
                        style={{
                          fontSize: 14.5,
                          color: "rgba(247,245,240,.82)",
                          fontWeight: 300,
                        }}
                      >
                        {item.label}
                      </Link>,
                    ],
              )}
            </div>
          </div>
          <div>
            <div
              className="mono"
              style={{ fontSize: 11.5, color: "rgba(247,245,240,.45)", marginBottom: 14 }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5, fontWeight: 300 }}>
              <a href={`mailto:${site.email}`} style={{ color: "#2FE85C" }}>
                {site.email}
              </a>
              <span>UK {site.phones.uk}</span>
              <span>SA {site.phones.sa}</span>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            paddingTop: 22,
            borderTop: "1px solid rgba(247,245,240,.1)",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 12.5,
            color: "rgba(247,245,240,.45)",
          }}
        >
          <span>© {new Date().getFullYear()} Trilogy BPO</span>
          <span className="mono" style={{ fontSize: 11 }}>
            Cape Town · UK · US · EMEA
          </span>
        </div>
      </div>
      </footer>
  );
}
