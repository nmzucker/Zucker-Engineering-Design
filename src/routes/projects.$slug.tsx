import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ArrowLink, ProjectCard } from "@/components/ProjectCard";
import { Reveal, Rule } from "@/components/Reveal";
import { getProject, relatedProjects } from "@/lib/projects";
import { firm } from "@/lib/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Zucker Engineering & Design" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Zucker Engineering & Design` },
        { name: "description", content: project.summary },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = relatedProjects(project, 3);

  return (
    <>
      <section className="border-b border-border bg-secondary/45 pt-32">
        <div className="mx-auto max-w-[88rem] px-5 pb-14 pt-14 sm:px-8 sm:pb-16">
          <nav aria-label="Breadcrumb" className="eyebrow flex items-center gap-2 text-muted-foreground">
            <Link to="/projects" className="transition-colors hover:text-primary">
              Projects
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{project.sector}</span>
          </nav>
          <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.04]">
            {project.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 pt-14 sm:px-8">
        <Reveal>
          <div className="plate aspect-[16/9] w-full">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              width={1408}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8">
        <div className="grid gap-x-10 gap-y-8 border-y border-border py-10 sm:grid-cols-2 lg:grid-cols-4">
          <Meta label="Client" value={project.client} />
          <Meta label="Location" value={project.location} />
          <Meta label="Completed" value={String(project.year)} />
          <Meta label="Project value" value={project.budget} />
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 pb-8 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
          <div>
            <NarrativeBlock label="The situation" body={project.situation} />
            <NarrativeBlock label="My approach" body={project.approach} />
            <NarrativeBlock label="The outcome" body={project.outcome} />
          </div>

          <aside className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
            <div>
              <p className="eyebrow text-muted-foreground">My role</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Services provided</p>
              <ul className="mt-4 flex flex-col">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="border-b border-border py-3 text-sm text-foreground first:border-t"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/60 p-6">
              <p className="eyebrow text-muted-foreground">Talk about a similar project</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                Sidebar note placeholder — one sentence inviting questions about this kind of
                work.
              </p>
              <Link
                to="/contact"
                className="eyebrow mt-5 inline-block border border-foreground/25 px-4 py-2.5 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get in touch
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="contour-grid relative overflow-hidden bg-deep text-deep-foreground">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-3">
            {project.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90}>
                <div>
                  <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-deep-foreground">
                    {stat.value}
                  </p>
                  <p className="eyebrow mt-4 text-deep-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-muted-foreground">More work</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.08]">
                Related projects
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <ArrowLink to="/projects">All projects</ArrowLink>
          </Reveal>
        </div>
        <Rule className="mt-10" />
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item, index) => (
            <ProjectCard key={item.slug} project={item} index={index} />
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-10 text-sm text-muted-foreground">
          <p>
            Footer note placeholder — e.g. how to request references. Call {firm.phone} or write{" "}
            <a href={`mailto:${firm.email}`} className="text-primary underline-offset-4 hover:underline">
              {firm.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <Reveal>
      <div>
        <p className="eyebrow text-muted-foreground">{label}</p>
        <p className="mt-3 text-base leading-snug text-foreground">{value}</p>
      </div>
    </Reveal>
  );
}

function NarrativeBlock({ label, body }: { label: string; body: string }) {
  return (
    <Reveal>
      <div className="border-t border-border py-10 first:border-t-0 first:pt-0">
        <p className="eyebrow text-primary">{label}</p>
        <p className="mt-5 max-w-2xl text-base leading-[1.75] text-foreground">{body}</p>
      </div>
    </Reveal>
  );
}
