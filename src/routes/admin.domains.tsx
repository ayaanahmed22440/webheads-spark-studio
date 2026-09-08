import { createFileRoute } from "@tanstack/react-router";
import { Link2 } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/domains")({
  head: () => ({
    meta: [
      { title: "Domains — WEBWARHEADS" },
      { name: "description", content: "Domain connections and DNS status." },
      { property: "og:title", content: "Domains — WEBWARHEADS" },
      { property: "og:description", content: "Domain connections and DNS status." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Operations" title="Domains" description="Domain connections and DNS status." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Link2} title="No domains yet" description="Customer domain connections will be tracked here." />
      </Panel>
    </div>
  );
}
