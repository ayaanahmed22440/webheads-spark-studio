import { createFileRoute } from "@tanstack/react-router";

import { MarketingLayout } from "@/components/marketing/chrome";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — WEBWARHEADS" },
      { name: "description", content: "Tell us about your business, we build the site, you approve it, we keep it running." },
      { property: "og:title", content: "How it works — WEBWARHEADS" },
      { property: "og:description", content: "Tell us about your business, we build the site, you approve it, we keep it running." },
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
        <p className="label-xs text-muted-foreground">Process</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          How it works
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">Tell us about your business, we build the site, you approve it, we keep it running.</p>
      </section>
    </MarketingLayout>
  );
}
