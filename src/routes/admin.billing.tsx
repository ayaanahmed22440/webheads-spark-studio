import { createFileRoute } from "@tanstack/react-router";
import { CreditCard } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/admin/billing")({
  head: () => ({
    meta: [
      { title: "Billing — WEBWARHEADS" },
      { name: "description", content: "Subscriptions, invoices and revenue." },
      { property: "og:title", content: "Billing — WEBWARHEADS" },
      { property: "og:description", content: "Subscriptions, invoices and revenue." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Finance" title="Billing" description="Subscriptions, invoices and revenue." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={CreditCard} title="No billing data yet" description="Subscription and invoice activity will appear here." />
      </Panel>
    </div>
  );
}
