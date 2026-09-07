import { cn } from "@/lib/utils";

/**
 * Neutral template preview. Deliberately contains no invented business content —
 * it shows the structure of the template, not fake copy.
 */
export function SitePreview({
  active,
  className,
  device = "desktop",
}: {
  active?: string;
  className?: string;
  device?: "desktop" | "mobile";
}) {
  const block = (id: string, children: React.ReactNode, extra?: string) => (
    <div
      key={id}
      data-section={id}
      className={cn(
        "border-b border-border px-6 py-6 transition-colors duration-200",
        active === id && "bg-primary/4 ring-1 ring-inset ring-primary/35",
        extra,
      )}
    >
      {children}
    </div>
  );

  const bar = (w: string, h = "h-2.5") => (
    <span className={cn("block rounded-sm bg-border-strong/70", h)} style={{ width: w }} />
  );

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card",
        device === "mobile" ? "mx-auto max-w-[360px]" : "",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
        </span>
        <span className="ml-2 flex-1 truncate rounded border border-border bg-card px-2 py-1 text-[0.6875rem] text-muted-foreground">
          your-business-domain
        </span>
      </div>

      {block(
        "hero",
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] sm:items-center">
          <div className="grid gap-2.5">
            {bar("70%", "h-4")}
            {bar("90%")}
            {bar("55%")}
            <span className="mt-2 flex gap-2">
              <span className="h-7 w-24 rounded bg-primary/85" />
              <span className="h-7 w-20 rounded border border-border-strong" />
            </span>
          </div>
          <div className="aspect-[4/3] rounded-md border border-dashed border-border-strong bg-surface" />
        </div>,
        "bg-surface/40",
      )}

      {block(
        "services",
        <div className="grid gap-3">
          {bar("30%", "h-3")}
          <div className="grid gap-3 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="grid gap-2 rounded-md border border-border p-3">
                <span className="h-5 w-5 rounded bg-border-strong/70" />
                {bar("80%", "h-2")}
                {bar("60%", "h-2")}
              </div>
            ))}
          </div>
        </div>,
      )}

      {block(
        "about",
        <div className="grid gap-3 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
          <div className="aspect-square rounded-md border border-dashed border-border-strong bg-surface" />
          <div className="grid content-center gap-2">
            {bar("40%", "h-3")}
            {bar("95%", "h-2")}
            {bar("85%", "h-2")}
            {bar("70%", "h-2")}
          </div>
        </div>,
      )}

      {block(
        "gallery",
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-md border border-dashed border-border-strong bg-surface"
            />
          ))}
        </div>,
      )}

      {block(
        "reviews",
        <div className="grid gap-3 sm:grid-cols-2">
          {[0, 1].map((i) => (
            <div key={i} className="grid gap-2 rounded-md border border-border p-3">
              {bar("35%", "h-2")}
              {bar("90%", "h-2")}
              {bar("75%", "h-2")}
            </div>
          ))}
        </div>,
      )}

      {block(
        "cta",
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-navy px-5 py-5">
          <span className="grid gap-2">
            <span className="block h-3 w-40 rounded-sm bg-navy-muted/60" />
            <span className="block h-2 w-56 rounded-sm bg-navy-muted/35" />
          </span>
          <span className="h-8 w-28 rounded bg-primary" />
        </div>,
        "bg-surface/40",
      )}

      {block(
        "contact",
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-2">
            {bar("35%", "h-3")}
            {bar("60%", "h-2")}
            {bar("50%", "h-2")}
          </div>
          <div className="grid gap-2 rounded-md border border-border p-3">
            <span className="h-7 rounded border border-border" />
            <span className="h-7 rounded border border-border" />
            <span className="h-14 rounded border border-border" />
          </div>
        </div>,
      )}

      {block(
        "footer",
        <div className="flex flex-wrap items-center justify-between gap-3">
          {bar("22%", "h-2")}
          {bar("30%", "h-2")}
        </div>,
        "border-b-0",
      )}
    </div>
  );
}
