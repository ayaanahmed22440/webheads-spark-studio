import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Inbox, Star, Link2, LifeBuoy, Gauge } from "lucide-react";

import { MarketingLayout } from "@/components/marketing/chrome";
import { Button } from "@/components/ui/button";
import { SitePreview } from "@/components/app/site-preview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WEBWARHEADS — Websites for local businesses, built and managed" },
      {
        name: "description",
        content:
          "WEBWARHEADS designs, hosts and maintains a professional website for your local business, with leads, reviews and domains in one simple dashboard.",
      },
      { property: "og:title", content: "WEBWARHEADS — Websites for local businesses" },
      {
        property: "og:description",
        content:
          "A professional website built, hosted and maintained for your local business — managed from one clear dashboard.",
      },
    ],
  }),
  component: Index,
});

const FEATURES = [
  {
    icon: Globe,
    title: "Your website, handled",
    body: "A clean, fast site built around your business — no builders, no templates to wrestle with.",
  },
  {
    icon: Inbox,
    title: "Enquiries in one place",
    body: "Every message from your site lands in a single inbox you can work through.",
  },
  {
    icon: Star,
    title: "Reviews on show",
    body: "Collect and display customer reviews where new customers actually look.",
  },
  {
    icon: Link2,
    title: "Domain sorted",
    body: "Connect a domain you own or get a new one set up for you — properly.",
  },
  {
    icon: Gauge,
    title: "Fast and findable",
    body: "Built to load quickly and be understood by search engines from day one.",
  },
  {
    icon: LifeBuoy,
    title: "Real people to ask",
    body: "Need a change? Send a request and our team makes it for you.",
  },
];

const STEPS = [
  { n: "01", t: "Tell us about the business", d: "Name, services, area, hours and how you want to be contacted." },
  { n: "02", t: "We build the site", d: "You review a working site, not a mockup, and tell us what to change." },
  { n: "03", t: "Go live and stay live", d: "We host it, keep it updated and handle the technical side for you." },
];

function Index() {
  return (
    <MarketingLayout>
      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:py-28">
          <div className="min-w-0">
            <span className="label-xs inline-flex items-center rounded border border-border bg-card px-2 py-1 text-muted-foreground">
              For local businesses
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              A proper website for your business — built and looked after for you.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              You run the business. We handle the website, the domain, the hosting and the
              enquiries — all managed from one straightforward dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/signup">
                  Get started <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/how-it-works">See how it works</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No website builders. No agency runaround.
            </p>
          </div>

          <div className="min-w-0">
            <SitePreview />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Everything a small business actually needs online
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card p-6">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-[0.9375rem] font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Three steps, and you're online
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-lg border border-border bg-card p-6">
                <span className="label-xs text-primary">{s.n}</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg bg-navy px-8 py-10">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold tracking-tight text-navy-foreground sm:text-2xl">
              Ready to get your business online?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-muted">
              Start with your details — we'll take it from there.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link to="/signup">
              Get started <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </MarketingLayout>
  );
}
