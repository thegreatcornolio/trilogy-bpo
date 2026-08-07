import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import RiseObserver from "@/components/RiseObserver";
import { site } from "@/lib/content";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name}: ${site.tagline}`,
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/trilogy-appicon-512.png" },
    ],
    apple: "/trilogy-appicon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} antialiased`}
    >
      <body style={{ margin: 0, minHeight: "100dvh", background: "#F7F5F0" }}>
        <RiseObserver />
        <div
          style={{
            position: "relative",
            minHeight: "100dvh",
            background: "#fff",
            color: "#0E1B2A",
            overflowX: "clip",
            fontFamily: "var(--font-archivo), system-ui, sans-serif",
          }}
        >
          <span
            aria-hidden
            className="anim-floaty"
            style={{
              position: "absolute",
              right: "-9vw",
              top: "8vh",
              zIndex: 0,
              userSelect: "none",
              pointerEvents: "none",
              fontFamily: "var(--font-plex-mono), monospace",
              fontSize: "46vw",
              lineHeight: 1,
              color: "rgba(14,27,42,.03)",
            }}
          >
            三
          </span>
          <Header />
          <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
