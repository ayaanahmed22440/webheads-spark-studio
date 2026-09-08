import { createFileRoute } from "@tanstack/react-router";
import { LifeBuoy } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/app/support")({
  head: () => ({
    meta: [
      { title: "Support — WEBWARHEADS" },
      { name: "description", content: "Talk to the team that builds and maintains your site." },
      { property: "og:title", content: "Support — WEBWARHEADS" },
      { property: "og:description", content: "Talk to the team that builds and maintains your site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Help" title="Support" description="Talk to the team that builds and maintains your site." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={LifeBuoy} title="No conversations yet" description="Start a conversation and our team will get back to you." />
      </Panel>
    </div>
  );
}
