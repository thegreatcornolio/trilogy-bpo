import { faqPageLd, type FaqItem } from "@/lib/seo";

/** Page-level FAQPage JSON-LD. Pair with a visible FaqSection using the same copy. */
export default function FaqJsonLd({ faqs, path = "/" }: { faqs: FaqItem[]; path?: string }) {
  if (!faqs.length) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd(faqs, path)) }}
    />
  );
}
