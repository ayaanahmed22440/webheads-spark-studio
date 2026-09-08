import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({
    meta: [
      { title: "Settings — WEBWARHEADS" },
      { name: "description", content: "Platform configuration and team access." },
      { property: "og:title", content: "Settings — WEBWARHEADS" },
      { property: "og:description", content: "Platform configuration and team access." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Platform" title="Settings" description="Platform configuration and team access." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Settings} title="Nothing to configure yet" description="Platform settings and team access controls will appear here." />
      </Panel>
    </div>
  );
}
