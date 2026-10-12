import { breadcrumbLd, webPageLd, type Crumb } from "@/lib/seo";

type Props = {
  path: string;
  name: string;
  description: string;
  breadcrumbs?: Crumb[];
};

/** Emits WebPage (+ optional BreadcrumbList) JSON-LD for a landing page. */
export default function PageJsonLd({ path, name, description, breadcrumbs }: Props) {
  const blocks: Record<string, unknown>[] = [webPageLd({ path, name, description })];
  if (breadcrumbs?.length) {
    blocks.push(breadcrumbLd(breadcrumbs));
  }

  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
