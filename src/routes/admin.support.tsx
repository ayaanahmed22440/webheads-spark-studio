import { createFileRoute } from "@tanstack/react-router";
import { LifeBuoy } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/support")({
  head: () => ({
    meta: [
      { title: "Support — WEBWARHEADS" },
      { name: "description", content: "Customer conversations and requests." },
      { property: "og:title", content: "Support — WEBWARHEADS" },
      { property: "og:description", content: "Customer conversations and requests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Service" title="Support" description="Customer conversations and requests." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={LifeBuoy} title="No tickets yet" description="Customer support conversations will appear here." />
      </Panel>
    </div>
  );
}
