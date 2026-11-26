import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Emit a static /robots.txt at build time (required with next.config output: "export").
export const dynamic = "force-static";

/** Paths kept out of search + answer-engine crawlers. */
const HIDDEN = ["/trilogy-gcc/", "/trilogy-gcc"];

/** Common AI / answer-engine crawlers (AEO / GEO). */
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "PerplexityBot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
  "FacebookBot",
  "cohere-ai",
  "Diffbot",
  "ImagesiftBot",
] as const;

/**
 * Served at /robots.txt — the first file Googlebot requests.
 * Site is open by default; /trilogy-gcc/ is disallowed for SEO and AEO/GEO bots.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: HIDDEN,
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        disallow: HIDDEN,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
