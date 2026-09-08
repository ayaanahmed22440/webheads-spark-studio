import { createFileRoute } from "@tanstack/react-router";

import { MarketingLayout } from "@/components/marketing/chrome";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — WEBWARHEADS" },
      { name: "description", content: "One monthly price covering design, hosting, updates and support." },
      { property: "og:title", content: "Pricing — WEBWARHEADS" },
      { property: "og:description", content: "One monthly price covering design, hosting, updates and support." },
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
        <p className="label-xs text-muted-foreground">Pricing</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Simple monthly pricing
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">One monthly price covering design, hosting, updates and support.</p>
      </section>
    </MarketingLayout>
  );
}
