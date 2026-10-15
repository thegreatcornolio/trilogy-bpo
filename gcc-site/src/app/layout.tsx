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
  title: "Trilogy Global Capability Centre",
  description:
    "Design, build, innovate and transfer a Global Capability Centre in South Africa with Trilogy’s DBIT method — ownership without the offshore risk.",
  applicationName: "Trilogy GCC",
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
