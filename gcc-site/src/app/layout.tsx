import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import RiseObserver from "@/components/RiseObserver";
import "./globals.css";

// Self-hosted so `next dev` does not depend on Google Fonts' extensionless kit URLs.
const lexend = localFont({
  src: "../fonts/lexend-latin.woff2",
  variable: "--font-lexend",
  weight: "200 700",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trilogy Global Capability Centres · DBIT",
  description:
    "Design, Build, Innovate, Transfer — Trilogy’s risk-mitigated roadmap to a fully owned Global Capability Centre in South Africa. Open-book costing, fixed management fee, path to ownership.",
  applicationName: "Trilogy GCC",
  icons: {
    icon: [
      { url: "/favicon.ico?v=trilogy-lines", sizes: "any" },
      { url: "/icon-48.png?v=trilogy-lines", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png?v=trilogy-lines", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=trilogy-lines", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=trilogy-lines", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${lexend.variable} ${plexMono.variable}`}>
      <body>
        {children}
        <RiseObserver />
      </body>
    </html>
  );
}
