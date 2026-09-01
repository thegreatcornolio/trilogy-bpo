import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Emit a static /robots.txt at build time (required with next.config output: "export").
export const dynamic = "force-static";

/**
 * Served at /robots.txt — the first file Googlebot requests. Allows the whole
 * site and points crawlers at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
