import { createFileRoute } from "@tanstack/react-router";
import { Link2 } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/app/domain")({
  head: () => ({
    meta: [
      { title: "Domain — WEBWARHEADS" },
      { name: "description", content: "Connect your own web address to your site." },
      { property: "og:title", content: "Domain — WEBWARHEADS" },
      { property: "og:description", content: "Connect your own web address to your site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Address" title="Domain" description="Connect your own web address to your site." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Link2} title="No domain connected" description="You can use a free address for now and connect your own domain at any time." />
      </Panel>
    </div>
  );
}
