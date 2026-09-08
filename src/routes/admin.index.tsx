import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Overview — WEBWARHEADS" },
      { name: "description", content: "Everything happening across WEBWARHEADS accounts." },
      { property: "og:title", content: "Overview — WEBWARHEADS" },
      { property: "og:description", content: "Everything happening across WEBWARHEADS accounts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Operations" title="Overview" description="Everything happening across WEBWARHEADS accounts." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={LayoutDashboard} title="No activity yet" description="Customer accounts, websites and enquiries will be summarised here." />
      </Panel>
    </div>
  );
}
