import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal, Rule } from "@/components/Reveal";
import { capabilities } from "@/lib/site";
import { cn } from "@/lib/utils";

type Search = { focus?: string };

export const Route = createFileRoute("/capabilities")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const next: Search = {};
    if (typeof search["focus"] === "string") next.focus = search["focus"];
    return next;
  },
  head: () => ({
    meta: [
      { title: "Capabilities — Zucker Engineering & Design" },
      {
        name: "description",
        content:
          "Flood risk and hazard mitigation, drainage and stormwater, stream restoration, water supply and treatment, water resources planning, and construction services.",
      },
      { property: "og:title", content: "Capabilities — Zucker Engineering & Design" },
      {
        property: "og:description",
        content:
          "Six water resources practices, delivered by one project team from survey through permitting.",
      },
    ],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  const { focus } = Route.useSearch();
  const initial = capabilities.findIndex((item) => item.slug === focus);
  const [active, setActive] = useState(initial >= 0 ? initial : 0);
  const current = (capabilities[active] ?? capabilities[0])!;

  return (
    <>
      <section className="border-b border-border bg-secondary/45 pt-32">
        <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-14 sm:px-8 sm:pb-24">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Capabilities</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[1.02]">
              Everything between the hydrology and the permit
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Six practices cover the work a water resources project actually needs. They share
              models, survey control, and a project manager, so you sign one agreement instead of
              three.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-5 text-muted-foreground">Practices</p>
            <div className="flex flex-col border-t border-border">
              {capabilities.map((capability, index) => (
                <button
                  key={capability.slug}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-current={active === index}
                  className={cn(
                    "group flex items-baseline gap-4 border-b border-border py-4 text-left transition-colors",
                    active === index ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="eyebrow pt-0.5 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg leading-snug">{capability.title}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "ml-auto h-px w-6 shrink-0 origin-right bg-primary transition-transform duration-300",
                      active === index ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          <div key={current.slug} className="animate-rise">
            <p className="eyebrow text-primary">{current.slug.replace(/-/g, " / ")}</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.06]">
              {current.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {current.lede}
            </p>
            <Rule className="mt-10" />
            <div className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {current.items.map((item) => (
                <p
                  key={item}
                  className="flex items-baseline gap-3 border-b border-border pb-3 text-sm text-foreground"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-clay" />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-border bg-secondary/45 p-6">
              <p className="eyebrow text-muted-foreground">Track record</p>
              <p className="font-display text-2xl text-foreground">{current.metric}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-accent">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <h2 className="max-w-2xl font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.1]">
                Need something you don't see here?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="lg:flex lg:justify-end">
                <a
                  href="mailto:studio@zuckerengineering.com"
                  className="eyebrow inline-block bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-foreground"
                >
                  Ask us directly
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
