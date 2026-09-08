import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — WEBWARHEADS" },
      { name: "description", content: "Traffic and performance across hosted sites." },
      { property: "og:title", content: "Analytics — WEBWARHEADS" },
      { property: "og:description", content: "Traffic and performance across hosted sites." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Insight" title="Analytics" description="Traffic and performance across hosted sites." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={BarChart3} title="No analytics yet" description="Traffic and performance data will appear here once sites are live." />
      </Panel>
    </div>
  );
}
