import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/app/business")({
  head: () => ({
    meta: [
      { title: "Business details — WEBWARHEADS" },
      { name: "description", content: "Hours, services and contact information used across your site." },
      { property: "og:title", content: "Business details — WEBWARHEADS" },
      { property: "og:description", content: "Hours, services and contact information used across your site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Your business" title="Business details" description="Hours, services and contact information used across your site." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Building2} title="Nothing added yet" description="Add your business information and it will be used automatically across your website." />
      </Panel>
    </div>
  );
}
