import * as React from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Globe,
  Building2,
  Inbox,
  Star,
  Link2,
  CreditCard,
  LifeBuoy,
  Settings,
  Users,
  LayoutTemplate,
  BarChart3,
  Menu,
  Search,
  Bell,
  ChevronDown,
  LogOut,
  ArrowUpRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type NavItem = {
  to: LinkProps["to"];
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  exact?: boolean;
};

export const APP_NAV: NavItem[] = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/app/website", label: "Website", icon: Globe },
  { to: "/app/business", label: "Business", icon: Building2 },
  { to: "/app/leads", label: "Leads", icon: Inbox },
  { to: "/app/reviews", label: "Reviews", icon: Star },
  { to: "/app/domain", label: "Domain", icon: Link2 },
  { to: "/app/billing", label: "Billing", icon: CreditCard },
  { to: "/app/support", label: "Support", icon: LifeBuoy },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export const ADMIN_NAV: NavItem[] = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/customers", label: "Customers", icon: Users },
  { to: "/admin/websites", label: "Websites", icon: Globe },
  { to: "/admin/templates", label: "Templates", icon: LayoutTemplate },
  { to: "/admin/domains", label: "Domains", icon: Link2 },
  { to: "/admin/leads", label: "Leads", icon: Inbox },
  { to: "/admin/billing", label: "Billing", icon: CreditCard },
  { to: "/admin/support", label: "Support", icon: LifeBuoy },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

function NavList({ items, onNavigate }: { items: NavItem[]; onNavigate?: () => void }) {
  return (
    <nav className="grid gap-0.5 px-3">
      {items.map(({ to, label, icon: Icon, exact }) => (
        <Link
          key={to as string}
          to={to}
          activeOptions={{ exact: exact ?? false }}
          onClick={onNavigate}
          className="group relative flex items-center gap-3 rounded-md px-3 py-2 text-[0.8125rem] font-medium text-navy-muted transition-colors duration-150 hover:bg-navy-soft hover:text-navy-foreground focus-visible:ring-offset-navy"
          activeProps={{ className: "bg-navy-soft text-navy-foreground" }}
        >
          {({ isActive }) => (
            <>
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r bg-primary transition-transform duration-200 ease-[var(--ease-standard)]",
                  isActive ? "scale-y-100" : "scale-y-0",
                )}
              />
              <Icon className="h-[17px] w-[17px] shrink-0" />
              <span className="truncate">{label}</span>
            </>
          )}
        </Link>
      ))}
    </nav>
  );
}

function SidebarBody({
  items,
  variant,
  onNavigate,
}: {
  items: NavItem[];
  variant: "app" | "admin";
  onNavigate?: () => void;
}) {
  return (
    <div className="flex h-full flex-col bg-navy">
      <div className="flex h-14 shrink-0 items-center gap-2 border-b border-navy-line px-5">
        <Link to="/" className="min-w-0">
          <Logo tone="light" />
        </Link>
        {variant === "admin" && (
          <span className="label-xs shrink-0 rounded border border-primary/45 px-1.5 py-0.5 text-primary">
            Admin
          </span>
        )}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto py-4">
        <p className="label-xs px-6 pb-2 text-navy-muted/70">
          {variant === "admin" ? "Operations" : "Workspace"}
        </p>
        <NavList items={items} {...(onNavigate ? { onNavigate } : {})} />
      </div>

      <div className="shrink-0 border-t border-navy-line p-3">
        {variant === "app" ? (
          <Link
            to="/app/support"
            onClick={onNavigate}
            className="block rounded-md border border-navy-line p-3 transition-colors duration-150 hover:border-primary/60"
          >
            <p className="text-[0.8125rem] font-medium text-navy-foreground">Need a hand?</p>
            <p className="mt-1 text-xs leading-relaxed text-navy-muted">
              Our team handles the technical work for you.
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
              Contact support <ArrowUpRight className="h-3 w-3" />
            </span>
          </Link>
        ) : (
          <Link
            to="/app"
            onClick={onNavigate}
            className="flex items-center justify-between rounded-md border border-navy-line px-3 py-2 text-[0.8125rem] text-navy-muted transition-colors duration-150 hover:border-primary/60 hover:text-navy-foreground"
          >
            Customer app <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}

export function ProductShell({
  nav,
  variant = "app",
  children,
  contextLabel,
}: {
  nav: NavItem[];
  variant?: "app" | "admin";
  children: React.ReactNode;
  contextLabel: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="sticky top-0 hidden h-screen lg:block">
        <SidebarBody items={nav} variant={variant} />
      </aside>

      <div className="flex min-h-screen min-w-0 flex-col">
        <header className="sticky top-0 z-30 grid h-14 shrink-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="iconSm" className="lg:hidden" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] border-navy-line bg-navy p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SidebarBody items={nav} variant={variant} onNavigate={() => setOpen(false)} />
              </SheetContent>
            </Sheet>
            <span className="truncate text-[0.8125rem] font-medium text-muted-foreground">
              {contextLabel}
            </span>
          </div>

          <div className="hidden justify-center md:flex">
            <button
              type="button"
              className="flex w-full max-w-sm items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[0.8125rem] text-muted-foreground transition-colors duration-150 hover:border-border-strong"
            >
              <Search className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">Search</span>
              <kbd className="ml-auto rounded border border-border px-1.5 py-px font-sans text-[0.6875rem] text-muted-foreground">
                ⌘K
              </kbd>
            </button>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <Button variant="ghost" size="iconSm" aria-label="Notifications">
              <Bell />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-md px-1.5 py-1 transition-colors duration-150 hover:bg-surface">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-navy text-xs font-semibold text-navy-foreground">
                    —
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                  Signed-in account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/app/settings">Account settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/app/billing">Billing</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/signin">
                    <LogOut className="mr-2 h-3.5 w-3.5" /> Sign out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-6xl animate-[fade_200ms_var(--ease-standard)]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
