import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/app/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — WEBWARHEADS" },
      { name: "description", content: "Connect Google reviews and show them on your site." },
      { property: "og:title", content: "Reviews — WEBWARHEADS" },
      { property: "og:description", content: "Connect Google reviews and show them on your site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Reputation" title="Reviews" description="Connect Google reviews and show them on your site." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Star} title="No reviews connected" description="Connect your Google Business profile to display reviews on your website." />
      </Panel>
    </div>
  );
}
