import { createFileRoute } from "@tanstack/react-router";
import { Inbox } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/app/leads")({
  head: () => ({
    meta: [
      { title: "Enquiries — WEBWARHEADS" },
      { name: "description", content: "Contact form submissions from your website." },
      { property: "og:title", content: "Enquiries — WEBWARHEADS" },
      { property: "og:description", content: "Contact form submissions from your website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Enquiries" title="Enquiries" description="Contact form submissions from your website." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={Inbox} title="No enquiries yet" description="When someone fills in your contact form, their message will appear here." />
      </Panel>
    </div>
  );
}
