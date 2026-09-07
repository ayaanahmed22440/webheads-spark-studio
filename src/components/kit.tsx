import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

/* ---------------------------------- Page --------------------------------- */

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border pb-6 sm:flex sm:flex-wrap sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="min-w-0">
        {eyebrow && <p className="label-xs mb-2 text-muted-foreground">{eyebrow}</p>}
        <h1 className="truncate text-[1.375rem] font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}

export function SectionHeader({
  title,
  description,
  actions,
  className,
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between",
        className,
      )}
    >
      <div className="min-w-0">
        <h2 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-foreground">
          {title}
        </h2>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

/* --------------------------------- Panels -------------------------------- */

export function Panel({
  className,
  children,
  flush,
}: {
  className?: string;
  children: React.ReactNode;
  flush?: boolean;
}) {
  return (
    <section
      className={cn(
        "rounded-lg border border-border bg-card",
        !flush && "p-5 sm:p-6",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function PanelHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-5 py-4 sm:flex sm:justify-between sm:px-6">
      <div className="min-w-0">
        <h2 className="truncate text-sm font-semibold text-foreground">{title}</h2>
        {description && <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

/* --------------------------------- Status -------------------------------- */

type Tone = "neutral" | "brand" | "success" | "warning" | "danger" | "navy";

const toneClass: Record<Tone, string> = {
  neutral: "border-border bg-surface text-muted-foreground",
  brand: "border-primary/25 bg-primary/8 text-primary",
  success: "border-success/25 bg-success/10 text-success",
  warning: "border-warning/35 bg-warning/12 text-foreground",
  danger: "border-destructive/25 bg-destructive/8 text-destructive",
  navy: "border-navy/20 bg-navy/6 text-navy",
};

export function StatusPill({
  children,
  tone = "neutral",
  dot = true,
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-xs font-medium",
        toneClass[tone],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  );
}

/* ------------------------------ Empty states ------------------------------ */

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  secondary,
  className,
  compact,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action?: React.ReactNode;
  secondary?: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center border border-dashed border-border-strong bg-card px-6 text-center",
        compact ? "rounded-md py-10" : "rounded-lg py-16",
        className,
      )}
    >
      {Icon && (
        <span className="mb-4 grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-muted-foreground">
          <Icon className="h-[18px] w-[18px]" />
        </span>
      )}
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>
      {(action || secondary) && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {action}
          {secondary}
        </div>
      )}
    </div>
  );
}

/* -------------------------------- Loading -------------------------------- */

export function TableSkeleton({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="divide-y divide-border">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="grid gap-4 px-5 py-3.5 sm:px-6" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
          {Array.from({ length: cols }).map((_, c) => (
            <Skeleton key={c} className="h-4 w-full max-w-[70%] rounded-sm" />
          ))}
        </div>
      ))}
    </div>
  );
}

/* --------------------------------- Forms --------------------------------- */

export function Field({
  label,
  htmlFor,
  hint,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-[0.8125rem] font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs leading-relaxed text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-6 border-b border-border py-8 first:pt-0 last:border-0 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-12">
      <div className="min-w-0">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="grid gap-5">{children}</div>
    </section>
  );
}

/* --------------------------------- Tables -------------------------------- */

export function TableShell({
  columns,
  children,
}: {
  columns: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-surface/60">
            {columns.map((c) => (
              <th
                key={c}
                scope="col"
                className="label-xs px-5 py-2.5 text-left text-muted-foreground sm:px-6"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function TableEmptyRow({ colSpan, children }: { colSpan: number; children: React.ReactNode }) {
  return (
    <tr>
      <td colSpan={colSpan} className="px-6 py-16 text-center">
        {children}
      </td>
    </tr>
  );
}
