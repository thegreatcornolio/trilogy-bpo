import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Moved to Trilogy Digital",
    description:
      "Trilogy BPO outsourced CX content now lives on Trilogy Digital.",
    path: "/trilogy-digital/",
    keywords: ["Trilogy Digital", "AI-enabled BPO"],
  }),
  robots: { index: false, follow: true },
};

/** Former BPO route — content lives on Trilogy Digital. */
export default function TrilogyBpoRedirectPage() {
  return (
    <main style={{ padding: "120px 24px", textAlign: "center" }}>
      <meta httpEquiv="refresh" content="0;url=/trilogy-digital/" />
      <p style={{ margin: 0, fontSize: 18, fontWeight: 300, color: "rgba(14,27,42,.72)" }}>
        This page has moved to{" "}
        <Link href="/trilogy-digital/" style={{ color: "#0E7C46", fontWeight: 500 }}>
          Trilogy Digital
        </Link>
        .
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("/trilogy-digital/");',
        }}
      />
    </main>
  );
}
