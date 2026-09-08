import { createFileRoute } from "@tanstack/react-router";
import { Globe } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/websites")({
  head: () => ({
    meta: [
      { title: "Websites — WEBWARHEADS" },
      { name: "description", content: "Every site being built, reviewed or hosted." },
      { property: "og:title", content: "Websites — WEBWARHEADS" },
      { property: "og:description", content: "Every site being built, reviewed or hosted." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Operations" title="Websites" description="Every site being built, reviewed or hosted." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Globe} title="No websites yet" description="Sites in draft, review and published states will be listed here." />
      </Panel>
    </div>
  );
}
