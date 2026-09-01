import { organizationLd, websiteLd } from "@/lib/seo";

/**
 * Emits Organization + WebSite structured data (JSON-LD) so Google can build a
 * knowledge panel and understand the business (address, phones, socials).
 * Server component — rendered into the initial HTML, no client JS.
 */
export default function JsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
    </>
  );
}
