import { createFileRoute } from "@tanstack/react-router";
import { CreditCard } from "lucide-react";

import { PageHeader, Panel, EmptyState } from "@/components/kit";

export const Route = createFileRoute("/app/billing")({
  head: () => ({
    meta: [
      { title: "Billing — WEBWARHEADS" },
      { name: "description", content: "Plan, invoices and payment method." },
      { property: "og:title", content: "Billing — WEBWARHEADS" },
      { property: "og:description", content: "Plan, invoices and payment method." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-8">
      <PageHeader eyebrow="Account" title="Billing" description="Plan, invoices and payment method." />
      <Panel flush className="p-5 sm:p-6">
        <EmptyState icon={CreditCard} title="No billing set up" description="Your plan, invoices and payment method will appear here once billing is active." />
      </Panel>
    </div>
  );
}
