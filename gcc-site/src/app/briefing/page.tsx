import type { Metadata } from "next";
import GccSitePage from "@/components/GccSitePage";

export const metadata: Metadata = {
  title: "Trilogy GCC · DBIT briefing",
  description:
    "DBIT briefing for partners — GCC-specific methodology, journey, commercial models and cases.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

/**
 * Hidden partner briefing — not linked from the public GCC microsite.
 * Live URL: /trilogy-gcc/briefing/ (when deployed under web.trilogybpo.com)
 */
export default function BriefingPage() {
  return <GccSitePage variant="briefing" />;
}
