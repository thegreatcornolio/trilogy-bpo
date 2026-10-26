import type { Metadata } from "next";
import { Lexend, IBM_Plex_Mono } from "next/font/google";
import RiseObserver from "@/components/RiseObserver";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
      { url: "/favicon.ico?v=trilogy-mark", sizes: "32x32" },
      { url: "/icon-48.png?v=trilogy-mark", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png?v=trilogy-mark", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=trilogy-mark", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=trilogy-mark", sizes: "180x180" }],
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
