import { createFileRoute, Link } from "@tanstack/react-router";

import { Logo } from "@/components/brand/logo";
import { Field } from "@/components/kit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — WEBWARHEADS" },
      { name: "description", content: "Sign in to manage your website, enquiries and account." },
      { property: "og:title", content: "Sign in — WEBWARHEADS" },
      { property: "og:description", content: "Sign in to manage your website, enquiries and account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="grid min-h-screen place-items-center bg-surface px-4 py-16">
      <div className="w-full max-w-sm">
        <Link to="/" className="inline-block">
          <Logo />
        </Link>
        <h1 className="mt-8 text-xl font-semibold tracking-[-0.02em]">Welcome back</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Sign in to manage your website, enquiries and account.</p>

        <form className="mt-7 grid gap-4 rounded-lg border border-border bg-card p-6" onSubmit={(e) => e.preventDefault()}>
          <Field label="Email address" htmlFor="email">
            <Input id="email" type="email" autoComplete="email" placeholder="you@business.co.uk" />
          </Field>
          <Field label="Password" htmlFor="password">
            <Input id="password" type="password" autoComplete="current-password" />
          </Field>
          <Button type="submit" className="mt-1 w-full">Sign in</Button>
        </form>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          New to WEBWARHEADS?{" "}
          <Link to="/signup" className="font-medium text-primary hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
