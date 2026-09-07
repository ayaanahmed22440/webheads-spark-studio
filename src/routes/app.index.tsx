import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe,
  Building2,
  Inbox,
  Star,
  Link2,
  ArrowRight,
  PenLine,
  Eye,
  History,
} from "lucide-react";

import { PageHeader, Panel, PanelHeader, EmptyState, StatusPill, SectionHeader } from "@/components/kit";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/")({
  head: () => ({
    meta: [
      { title: "Dashboard — WEBWARHEADS" },
      { name: "description", content: "An overview of your website, enquiries and setup progress." },
      { property: "og:title", content: "Dashboard — WEBWARHEADS" },
      { property: "og:description", content: "An overview of your website, enquiries and setup progress." },
    ],
  }),
  component: Dashboard,
});

const SETUP = [
  { label: "Business information", to: "/app/business", state: "Not started" },
  { label: "Website content", to: "/app/website", state: "Not started" },
  { label: "Domain", to: "/app/domain", state: "Not started" },
] as const;

const SHORTCUTS = [
  { to: "/app/website", label: "Website", note: "Content, sections and preview", icon: Globe },
  { to: "/app/business", label: "Business details", note: "Hours, services, contact", icon: Building2 },
  { to: "/app/leads", label: "Enquiries", note: "Contact form submissions", icon: Inbox },
  { to: "/app/reviews", label: "Reviews", note: "Connect Google reviews", icon: Star },
  { to: "/app/domain", label: "Domain", note: "Connect your own address", icon: Link2 },
] as const;

function Dashboard() {
  return (
    <div className="grid gap-8">
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="Everything about your website in one place. Once your site is live, activity will start showing here."
        actions={
          <>
            <Button variant="outline" size="sm" asChild>
              <Link to="/app/website">
                <Eye /> Preview site
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/app/website/editor">
                <PenLine /> Edit website
              </Link>
            </Button>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Panel flush className="overflow-hidden">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <p className="label-xs text-muted-foreground">Website status</p>
              <p className="mt-1.5 text-lg font-semibold tracking-[-0.01em]">Not published yet</p>
            </div>
            <StatusPill tone="warning">Draft</StatusPill>
          </div>

          <div className="px-5 py-5 sm:px-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Complete the three steps below and our team will review and publish your site.
            </p>

            <ol className="mt-5 divide-y divide-border border-y border-border">
              {SETUP.map((step, i) => (
                <li key={step.label}>
                  <Link
                    to={step.to}
                    className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 py-3.5 transition-colors duration-150 hover:bg-surface/70"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded border border-border text-xs font-semibold text-muted-foreground">
                      {i + 1}
                    </span>
                    <span className="min-w-0 truncate text-sm font-medium">{step.label}</span>
                    <span className="flex shrink-0 items-center gap-3">
                      <span className="text-xs text-muted-foreground">{step.state}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Panel>

        <Panel flush>
          <PanelHeader title="Your plan" description="No subscription details yet." />
          <div className="px-5 py-5 sm:px-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Plan, invoices and payment method will appear here once billing is set up for your
              account.
            </p>
            <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
              <Link to="/app/billing">Go to billing</Link>
            </Button>
          </div>
        </Panel>
      </div>

      <section className="grid gap-4">
        <SectionHeader title="Quick actions" description="The things most people do first." />
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SHORTCUTS.map(({ to, label, note, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 bg-card p-5 transition-colors duration-150 hover:bg-surface"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition-colors duration-150 group-hover:border-primary/40 group-hover:text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">{label}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{note}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Panel flush>
        <PanelHeader
          title="Recent activity"
          description="Publishing, edits and enquiries appear here."
        />
        <div className="p-5 sm:p-6">
          <EmptyState
            compact
            icon={History}
            title="Nothing has happened yet"
            description="Your website activity — edits, enquiries and publishing events — will appear here once your site is live."
          />
        </div>
      </Panel>
    </div>
  );
}
