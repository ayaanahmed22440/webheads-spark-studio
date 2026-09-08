import { createFileRoute } from "@tanstack/react-router";
import { Inbox } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/leads")({
  head: () => ({
    meta: [
      { title: "Leads — WEBWARHEADS" },
      { name: "description", content: "Enquiries across all customer websites." },
      { property: "og:title", content: "Leads — WEBWARHEADS" },
      { property: "og:description", content: "Enquiries across all customer websites." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Operations" title="Leads" description="Enquiries across all customer websites." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Inbox} title="No leads yet" description="Enquiries from every customer site will appear here." />
      </Panel>
    </div>
  );
}
