import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const LINKS = [
  { to: "/product", label: "Product" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link to="/" className="min-w-0">
          <Logo />
        </Link>

        <nav className="hidden justify-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-1.5 text-[0.8125rem] font-medium text-muted-foreground transition-colors duration-150 hover:bg-surface hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/signin">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/signup">Get started</Link>
          </Button>
        </div>

        <div className="flex justify-end lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="iconSm" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="grid gap-1 p-4 pt-14">
                {LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-surface"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-4 grid gap-2 border-t border-border pt-4">
                  <Button variant="outline" asChild onClick={() => setOpen(false)}>
                    <Link to="/signin">Sign in</Link>
                  </Button>
                  <Button asChild onClick={() => setOpen(false)}>
                    <Link to="/signup">Get started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <div className="min-w-0">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-muted">
            Professional websites for local businesses — built, hosted and maintained by a team you
            can actually talk to.
          </p>
        </div>

        <FooterCol
          title="Product"
          links={[
            { to: "/product", label: "Overview" },
            { to: "/how-it-works", label: "How it works" },
            { to: "/pricing", label: "Pricing" },
          ]}
        />
        <FooterCol
          title="Platform"
          links={[
            { to: "/app", label: "Customer app" },
            { to: "/app/website/editor", label: "Website editor" },
            { to: "/admin", label: "Admin" },
          ]}
        />
        <FooterCol
          title="Account"
          links={[
            { to: "/signin", label: "Sign in" },
            { to: "/signup", label: "Create account" },
            { to: "/app/support", label: "Support" },
          ]}
        />
      </div>
      <div className="border-t border-navy-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-navy-muted sm:px-6">
          <p>© {new Date().getFullYear()} WEBWARHEADS</p>
          <p>Interface preview — product functionality in progress.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { to: string; label: string }[];
}) {
  return (
    <div className="min-w-0">
      <h2 className="label-xs text-navy-muted/70">{title}</h2>
      <ul className="mt-3 grid gap-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to as never}
              className="text-sm text-navy-foreground/85 transition-colors duration-150 hover:text-primary"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
