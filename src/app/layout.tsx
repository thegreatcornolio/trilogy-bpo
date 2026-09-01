import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import RiseObserver from "@/components/RiseObserver";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/content";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name}: ${site.tagline}`,
    // Subpages set only their own name; this appends the brand automatically.
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: SITE_NAME,
  keywords: [
    "BPO",
    "business process outsourcing",
    "AI-enabled BPO",
    "contact centre outsourcing",
    "customer experience",
    "CX outsourcing",
    "Global Capability Centre",
    "GCC South Africa",
    "offshoring",
    "Cape Town BPO",
    "UK USA customer service",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    url: SITE_URL,
    locale: "en_GB",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
        <JsonLd />
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
