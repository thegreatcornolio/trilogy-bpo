import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Emit a static /sitemap.xml at build time (required with next.config output: "export").
export const dynamic = "force-static";

/**
 * Served at /sitemap.xml — the map of indexable URLs. Paths use trailing
 * slashes to match next.config `trailingSlash: true` (the static-export URLs).
 * Add new routes here as the site grows so Google discovers them promptly.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/trilogy-bpo/", priority: 0.8 },
    { path: "/trilogy-ai/", priority: 0.8 },
    { path: "/trilogy-digital/", priority: 0.8 },
    { path: "/trilogy-gcc/", priority: 0.8 },
    { path: "/corporate/insights/", priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
