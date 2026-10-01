import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  className,
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  return (
    <Reveal className={cn("h-full", className)}>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group flex h-full flex-col border-t border-border pt-5 transition-colors hover:border-primary"
      >
        <div className="flex items-baseline justify-between gap-4">
          <span className="eyebrow text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="eyebrow text-muted-foreground">{project.year}</span>
        </div>

        <div className="plate mt-5 aspect-[4/3] w-full">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            width={1408}
            height={912}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
          />
        </div>

        <div className="mt-6 flex flex-1 flex-col">
          <p className="eyebrow text-primary">{project.sector}</p>
          <h3 className="mt-3 font-display text-2xl leading-snug text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <span className="text-sm text-muted-foreground">{project.location}</span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
              Case study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function ArrowLink({
  to,
  children,
  className,
  tone = "ink",
}: {
  to: "/" | "/projects" | "/about" | "/capabilities" | "/contact" | "/careers";
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <Link
      to={to}
      className={cn(
        "eyebrow group inline-flex items-center gap-2 border-b pb-1.5 transition-colors",
        tone === "ink"
          ? "border-foreground/25 text-foreground hover:border-primary hover:text-primary"
          : "border-deep-foreground/30 text-deep-foreground hover:border-river hover:text-river",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
