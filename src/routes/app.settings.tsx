import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/app/settings")({
  head: () => ({
    meta: [
      { title: "Settings — WEBWARHEADS" },
      { name: "description", content: "Your account, team and notification preferences." },
      { property: "og:title", content: "Settings — WEBWARHEADS" },
      { property: "og:description", content: "Your account, team and notification preferences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Account" title="Settings" description="Your account, team and notification preferences." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Settings} title="Nothing to configure yet" description="Account and notification settings will appear here." />
      </Panel>
    </div>
  );
}
