import { createFileRoute } from "@tanstack/react-router";
import { Globe } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/app/website")({
  head: () => ({
    meta: [
      { title: "Website — WEBWARHEADS" },
      { name: "description", content: "Content, sections and preview for your website." },
      { property: "og:title", content: "Website — WEBWARHEADS" },
      { property: "og:description", content: "Content, sections and preview for your website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Your site" title="Website" description="Content, sections and preview for your website." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Globe} title="No website yet" description="Once your site is created it will appear here with a live preview and section editor." />
      </Panel>
    </div>
  );
}
