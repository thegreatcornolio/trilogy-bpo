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

export type FaqItem = { question: string; answer: string };

/** Homepage FAQs — must match visible on-page copy for FAQ rich results / AEO. */
export const homeFaqs: FaqItem[] = [
  {
    question: "What does Trilogy BPO do?",
    answer:
      "Trilogy BPO builds, staffs and runs AI-enabled contact centres and Global Capability Centres from Cape Town, South Africa, for UK, US and EMEA brands — combining human empathy with AI efficiency.",
  },
  {
    question: "Is Trilogy BPO ISO 27001 certified?",
    answer:
      "Yes. Trilogy BPO is ISO 27001 certified, demonstrating commitment to internationally recognised information security management standards.",
  },
  {
    question: "Is Trilogy BPO PCI DSS compliant?",
    answer:
      "Yes. Trilogy BPO is PCI DSS compliant, supporting the secure handling and protection of payment card data across relevant customer operations.",
  },
  {
    question: "Is Trilogy BPO UK GDPR and POPIA compliant?",
    answer:
      "Yes. Trilogy BPO is UK GDPR compliant and POPIA compliant, supporting lawful, secure processing of personal data for UK clients and responsible protection of personal information in South Africa.",
  },
  {
    question: "Where is Trilogy BPO based?",
    answer:
      "Trilogy BPO operates from Cape Town, South Africa (Block B, Brightway Park, Salt River), serving UK, US and EMEA clients with nearshore time-zone alignment.",
  },
  {
    question: "How do I contact Trilogy BPO?",
    answer: `Email ${company.email}, call UK ${company.phoneUk}, or SA ${company.phoneSa}.`,
  },
];

/** Privacy-page FAQs aligned to the published privacy notice. */
export const privacyFaqs: FaqItem[] = [
  {
    question: "How does Trilogy BPO protect personal data?",
    answer:
      "Trilogy BPO applies technical and organisational safeguards aligned with ISO 27001 certified information security management and PCI DSS compliant controls where relevant, including encryption, access controls, minimisation and staff privacy training.",
  },
  {
    question: "What lawful bases does Trilogy use under UK GDPR?",
    answer:
      "Trilogy documents a lawful basis under Article 6 of the UK GDPR for each processing activity, which may include consent, contract, legitimate interests or legal obligation, plus additional safeguards for higher-risk data.",
  },
  {
    question: "How can I exercise my data subject rights?",
    answer: `You can request access, rectification, erasure, restriction, portability or objection by emailing ${company.email}. Trilogy aims to respond within one month, subject to applicable law.`,
  },
  {
    question: "How does Trilogy handle personal data breaches?",
    answer:
      "Trilogy maintains an incident response plan and, where required, notifies the relevant supervisory authority without undue delay and within 72 hours of becoming aware of a personal data breach, and informs affected individuals when the law requires.",
  },
  {
    question: "Does Trilogy use third-party processors?",
    answer:
      "Yes, where vendors handle personal data on Trilogy’s behalf. Trilogy carries out due diligence and puts Data Processing Agreements (DPAs) in place covering instructions, security, sub-processing, assistance with rights requests and deletion or return of data.",
  },
];

/** Organization structured data — enables rich results / knowledge panel. */
export const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/trilogy-appicon-512.png`,
  image: `${SITE_URL}/trilogy-appicon-512.png`,
  email: company.email,
  description: site.description,
  slogan: site.tagline,
  areaServed: ["GB", "US", "EU", "ZA"],
  knowsAbout: [
    "Business process outsourcing",
    "AI-enabled contact centres",
    "Global Capability Centres",
    "ISO 27001",
    "PCI DSS",
    "UK GDPR",
    "POPIA",
    "Customer experience outsourcing",
  ],
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
    {
      "@type": "ContactPoint",
      email: company.email,
      contactType: "customer support",
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
  inLanguage: "en-GB",
  description: site.description,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

/** Build FAQPage JSON-LD from question/answer pairs. */
export function faqPageLd(faqs: FaqItem[], path = "/") {
  const normalised = path.endsWith("/") ? path : `${path}/`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${normalised}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** WebPage JSON-LD for key landing pages. */
export function webPageLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  const normalised = path.endsWith("/") || path === "/" ? path : `${path}/`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${normalised}#webpage`,
    url: `${SITE_URL}${normalised}`,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList JSON-LD for nested / service pages. */
export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => {
      const path = crumb.path.endsWith("/") || crumb.path === "/" ? crumb.path : `${crumb.path}/`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${path}`,
      };
    }),
  };
}

/**
 * Builds a page's metadata with a unique title/description plus a self-
 * referencing canonical and matching Open Graph / Twitter tags. `path` should
 * be the route with its trailing slash (e.g. "/trilogy-gcc/").
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      locale: "en_GB",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
