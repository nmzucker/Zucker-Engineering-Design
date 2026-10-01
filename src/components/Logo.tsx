import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <span
      className={cn(
        "flex items-center",
        tone === "paper" && "rounded-sm bg-background/95 px-3 py-2",
        className,
      )}
    >
      <img
        src={logo}
        alt="Zucker Engineering & Design"
        className={cn("w-auto", tone === "paper" ? "h-8" : "h-10")}
      />
    </span>
  );
}
