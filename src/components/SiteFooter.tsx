import Image from "next/image";
import Link from "next/link";
import { company, navLinks } from "@/lib/content";
import { ink, lime, maxWidth, mono } from "@/lib/theme";

export default function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 10,
        background: ink,
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth,
          margin: "0 auto",
          padding: "72px 28px 40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        <div style={{ maxWidth: "32ch" }}>
          <Image
            src="/logo/trilogy-deck-dark.png"
            alt="Trilogy"
            width={768}
            height={192}
            style={{ height: 26, width: "auto" }}
          />
          <p
            style={{
              margin: "22px 0 0",
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.6,
              color: "rgba(255,255,255,.55)",
            }}
          >
            Human empathy meets AI efficiency. Customer experience operations
            built, staffed and run from Cape Town, South Africa.
          </p>
          <div
            style={mono({
              marginTop: 18,
              fontSize: 12,
              letterSpacing: ".1em",
              lineHeight: 1.9,
              color: "rgba(255,255,255,.6)",
            })}
          >
            <a
              href={`mailto:${company.email}`}
              style={{ color: lime, textDecoration: "none" }}
            >
              {company.email}
            </a>
            <br />
            UK {company.phoneUk}
            <br />
            SA {company.phoneSa}
          </div>
        </div>

        <nav
          style={mono({
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            fontSize: 13,
            letterSpacing: ".14em",
            color: "rgba(255,255,255,.6)",
          })}
        >
          {navLinks.flatMap((item) =>
            item.children
              ? item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="nav-link nav-acc-green"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {child.label}
                  </Link>
                ))
              : [
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-link nav-acc-green"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>,
                ],
          )}
        </nav>
      </div>

      <div
        style={mono({
          maxWidth,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          padding: "24px 28px",
          borderTop: "1px solid rgba(255,255,255,.1)",
          fontSize: 12,
          letterSpacing: ".16em",
          color: "rgba(255,255,255,.45)",
        })}
      >
        <span>
          © 2026 {company.legalName} · {company.address}
        </span>
        <span>三 AI-enabled BPO</span>
      </div>
    </footer>
  );
}
