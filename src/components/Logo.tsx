import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={cn(
          "h-7 w-7 shrink-0",
          tone === "paper" ? "text-deep-foreground" : "text-primary",
        )}
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 11h18M7 21h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          opacity="0.45"
        />
        <path
          d="M9.5 9.5h13L11 22.5h12.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="square"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.0625rem] font-medium tracking-tight",
            tone === "paper" ? "text-deep-foreground" : "text-foreground",
          )}
        >
          Zucker
        </span>
        <span
          className={cn(
            "eyebrow mt-1",
            tone === "paper" ? "text-deep-muted" : "text-muted-foreground",
          )}
        >
          Engineering&nbsp;&amp;&nbsp;Design
        </span>
      </span>
    </span>
  );
}
