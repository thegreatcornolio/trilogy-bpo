import Link from "next/link";
import { insightsPosts } from "@/lib/content";

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insightsPosts.find((p) => p.slug === slug);

  return (
    <main style={{ padding: "88px 0 96px", background: "#fff" }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <Link href="/corporate/insights" className="mono" style={{ fontSize: 12, color: "#0E7C46" }}>
          ← Insights
        </Link>
        <h1
          style={{
            margin: "18px 0 0",
            fontSize: "clamp(32px, 4vw, 44px)",
            fontWeight: 400,
            letterSpacing: "-.02em",
            lineHeight: 1.15,
          }}
        >
          {post?.title ?? "Insight"}
        </h1>
        {post ? (
          <>
            <div className="mono" style={{ marginTop: 12, fontSize: 12, color: "rgba(14,27,42,.45)" }}>
              {post.type} · {post.mins} · {post.date}
            </div>
            <p style={{ margin: "28px 0 0", fontSize: 17, lineHeight: 1.75, color: "rgba(14,27,42,.72)", fontWeight: 300 }}>
              {post.body}
            </p>
            <p style={{ margin: "18px 0 0", fontSize: 16, lineHeight: 1.75, color: "rgba(14,27,42,.62)", fontWeight: 300 }}>
              Full article content will be published here. In the meantime, book a session with the Trilogy team to
              discuss how this applies to your operation.
            </p>
          </>
        ) : (
          <p style={{ marginTop: 24 }}>This insight could not be found.</p>
        )}
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return insightsPosts.map((post) => ({ slug: post.slug }));
}
