import type { Metadata } from "next";
import { company, site } from "@/lib/content";

/**
 * Single source of truth for SEO / discoverability config.
 *
 * SITE_URL is the canonical production origin. It defaults to the live custom
 * domain (https://www.trilogybpo.com) and can be overridden per-environment with
 * NEXT_PUBLIC_SITE_URL. Everything needing an absolute URL — canonical tags,
 * sitemap, robots, Open Graph — reads from here.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trilogybpo.com").replace(/\/+$/, "");

export const SITE_NAME = company.name; // "Trilogy BPO"

/** Static social-share card (public/og-image.png), 1200×630. */
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${company.name} — ${site.tagline}`,
};

const COMPANY_LINKEDIN = "https://www.linkedin.com/company/trilogybpo";

/** Organization structured data — enables rich results / knowledge panel. */
export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/trilogy-appicon-512.png`,
  image: `${SITE_URL}/trilogy-appicon-512.png`,
  email: company.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block B, Brightway Park, Salt River",
    addressLocality: "Cape Town",
    postalCode: "7795",
    addressCountry: "ZA",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phoneUk,
      contactType: "sales",
      areaServed: ["GB", "US", "EU"],
      availableLanguage: "en",
    },
    {
      "@type": "ContactPoint",
      telephone: company.phoneSa,
      contactType: "customer service",
      areaServed: "ZA",
      availableLanguage: "en",
    },
  ],
  sameAs: [COMPANY_LINKEDIN],
};

/** WebSite structured data — ties the domain to the organization. */
export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

/**
 * Builds a page's metadata with a unique title/description plus a self-
 * referencing canonical and matching Open Graph / Twitter tags. `path` should
 * be the route with its trailing slash (e.g. "/trilogy-gcc/").
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      locale: "en_GB",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
