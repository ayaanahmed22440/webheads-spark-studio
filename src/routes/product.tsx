import { createFileRoute } from "@tanstack/react-router";

import { MarketingLayout } from "@/components/marketing/chrome";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — WEBWARHEADS" },
      { name: "description", content: "A professional website for your business, built and maintained for you — no software to learn." },
      { property: "og:title", content: "Product — WEBWARHEADS" },
      { property: "og:description", content: "A professional website for your business, built and maintained for you — no software to learn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <MarketingLayout>
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="label-xs text-muted-foreground">Product</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Everything you get
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">A professional website for your business, built and maintained for you — no software to learn.</p>
      </section>
    </MarketingLayout>
  );
}
