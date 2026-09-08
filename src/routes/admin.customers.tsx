import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/customers")({
  head: () => ({
    meta: [
      { title: "Customers — WEBWARHEADS" },
      { name: "description", content: "All business accounts on the platform." },
      { property: "og:title", content: "Customers — WEBWARHEADS" },
      { property: "og:description", content: "All business accounts on the platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Operations" title="Customers" description="All business accounts on the platform." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Users} title="No customers yet" description="Customer accounts will be listed here once they sign up." />
      </Panel>
    </div>
  );
}
