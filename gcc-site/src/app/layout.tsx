import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import RiseObserver from "@/components/RiseObserver";
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
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        {children}
        <RiseObserver />
      </body>
    </html>
  );
}
