import { createFileRoute } from "@tanstack/react-router";
import { LayoutTemplate } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/templates")({
  head: () => ({
    meta: [
      { title: "Templates — WEBWARHEADS" },
      { name: "description", content: "Starting points used to build customer sites." },
      { property: "og:title", content: "Templates — WEBWARHEADS" },
      { property: "og:description", content: "Starting points used to build customer sites." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Library" title="Templates" description="Starting points used to build customer sites." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={LayoutTemplate} title="No templates yet" description="Templates you create will be available when setting up a new customer site." />
      </Panel>
    </div>
  );
}
