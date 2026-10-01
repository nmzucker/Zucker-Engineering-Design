import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/Logo";
import { firm, nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overlay = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !overlay || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        solid
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" aria-label={`${firm.name} — home`} className="shrink-0">
          <Logo tone={solid ? "ink" : "paper"} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "eyebrow relative py-2 transition-colors",
                solid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-deep-muted hover:text-deep-foreground",
                pathname === item.to && (solid ? "text-foreground" : "text-deep-foreground"),
              )}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300",
                  pathname === item.to && "scale-x-100",
                )}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "eyebrow border px-4 py-2.5 transition-colors",
              solid
                ? "border-foreground/20 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
                : "border-deep-foreground/30 text-deep-foreground hover:bg-deep-foreground hover:text-deep",
            )}
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "grid h-10 w-10 place-items-center border transition-colors lg:hidden",
            solid
              ? "border-border text-foreground"
              : "border-deep-foreground/30 text-deep-foreground",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-5 py-2 sm:px-8" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-baseline justify-between border-b border-border py-4 font-display text-2xl text-foreground last:border-0"
            >
              {item.label}
              <span className="eyebrow text-muted-foreground">
                {String(nav.indexOf(item) + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <a
            href={`tel:${firm.phone.replace(/[^\d+]/g, "")}`}
            className="eyebrow py-5 text-primary"
          >
            {firm.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
