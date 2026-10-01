import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { ArrowLink, ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projectMatches, projects, sectors } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Search = { sector?: string; q?: string };

export const Route = createFileRoute("/projects/")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const next: Search = {};
    if (typeof search["sector"] === "string") next.sector = search["sector"];
    if (typeof search["q"] === "string") next.q = search["q"];
    return next;
  },
  head: () => ({
    meta: [
      { title: "Projects — Zucker Engineering & Design" },
      {
        name: "description",
        content:
          "Case studies from Zucker Engineering & Design: levee and floodwall districts, stream restoration, drainage master plans, intakes and pump stations, and wetland mitigation banks.",
      },
      { property: "og:title", content: "Projects — Zucker Engineering & Design" },
      {
        property: "og:description",
        content:
          "Selected water resources engineering case studies across the Mountain West, with the numbers behind them.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { sector, q } = Route.useSearch();
  const [query, setQuery] = useState(q ?? "");
  const [activeSector, setActiveSector] = useState(sector ?? "All");

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (activeSector === "All" || project.sector === activeSector) &&
          projectMatches(project, query),
      ),
    [activeSector, query],
  );

  return (
    <>
      <section className="border-b border-border bg-secondary/45 pt-32">
        <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-14 sm:px-8 sm:pb-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Projects</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[1.02]">
              Past work, with the numbers that made it work
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Six case studies across flood risk, drainage, streams, water supply, and wetlands.
              Each one says what the problem was, what I did, and what happened after.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
            {["All", ...sectors].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setActiveSector(item)}
                aria-pressed={activeSector === item}
                className={cn(
                  "eyebrow border px-4 py-2.5 transition-colors",
                  activeSector === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="relative flex w-full max-w-sm items-center lg:w-auto">
            <span className="sr-only">Search projects</span>
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by client, river, service…"
              className="w-full border border-border bg-background py-3 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground"
            />
          </label>
        </div>

        <p className="eyebrow mt-6 text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          {activeSector !== "All" ? ` · ${activeSector}` : ""}
        </p>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 border-t border-border py-16 text-center">
            <p className="font-display text-2xl">Nothing matches that yet</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Try a different sector, or tell me what you're looking for.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveSector("All");
                }}
                className="eyebrow border border-border px-5 py-3 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Clear filters
              </button>
              <ArrowLink to="/contact">Ask about this work</ArrowLink>
            </div>
          </div>
        )}
      </section>

      <section className="border-t border-border bg-accent">
        <div className="mx-auto grid max-w-[88rem] items-center gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="max-w-2xl font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.1]">
              The right reference depends on your basin, not mine
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="lg:flex lg:justify-end">
              <ArrowLink to="/contact">Request relevant references</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
