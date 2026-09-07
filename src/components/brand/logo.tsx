import { cn } from "@/lib/utils";

/** Geometric WW mark from the WEBWARHEADS identity. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="WEBWARHEADS"
      className={cn("h-8 w-8", className)}
    >
      <rect width="48" height="48" rx="6" className="fill-navy" />
      <path
        d="M7 13h6.4l3.2 12.4L20 13h5.4l3.4 12.4L32 13h6.4l-6.2 22h-6.2l-3.3-11.8L19.4 35h-6.2L7 13Z"
        className="fill-[var(--color-navy-foreground)]"
      />
      <rect x="7" y="37" width="18" height="3" className="fill-primary" />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
  showWordmark = true,
}: {
  className?: string;
  tone?: "dark" | "light";
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showWordmark && (
        <span
          className={cn(
            "text-[0.9375rem] font-bold tracking-[-0.01em]",
            tone === "light" ? "text-navy-foreground" : "text-foreground",
          )}
        >
          WEBWARHEADS
        </span>
      )}
    </span>
  );
}
