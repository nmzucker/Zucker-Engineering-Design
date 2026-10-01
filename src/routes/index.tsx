import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero-river.jpg";
import aboutField from "@/assets/about-field.jpg";
import { ArrowLink, ProjectCard } from "@/components/ProjectCard";
import { Reveal, Rule } from "@/components/Reveal";
import { firm } from "@/lib/site";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Zucker Engineering & Design — Water Resources Engineering, Denver, Colorado",
      },
      {
        name: "description",
        content:
          "A single-principal water resources engineering practice delivering flood risk, drainage and stormwater, stream restoration, and water supply projects across the Mountain West.",
      },
      { property: "og:title", content: "Zucker Engineering & Design" },
      {
        property: "og:description",
        content:
          "Water resources engineering for the places where the water is hardest to manage.",
      },
    ],
  }),
  component: Index,
});

const clientTypes = [
  "Cities & counties",
  "Special districts",
  "State & federal agencies",
  "Developers & landowners",
  "Water & wastewater authorities",
  "Tribes & mitigation sponsors",
];

const whatYouGet = [
  {
    title: "A site walk before a proposal",
    body: "The scope is written after the bank has been walked, not after the RFP was read.",
  },
  {
    title: "The model with the drawings",
    body: "Assumptions, calibration notes, and the working files travel with the deliverable.",
  },
  {
    title: "A named engineer of record",
    body: "One licensed principal answers the reviewer, the agency, and the contractor.",
  },
  {
    title: "Field presence through construction",
    body: "Observation and field decisions stay with the person who designed the work.",
  },
];

function Index() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <Hero />
      <Positioning />
      <FeaturedProjects projects={featured} />
      <Approach />
      <AboutTeaser />
      <CallToAction />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-deep">
      <img
        src={heroImage}
        alt="Aerial view of a river confluence with a concrete spillway and stone riprap bank at golden hour"
        width={1808}
        height={1008}
        className="absolute inset-0 h-full w-full animate-drift object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-deep/80 via-deep/45 to-deep/95" />
      <div className="absolute inset-0 bg-linear-to-r from-deep/85 via-deep/30 to-transparent" />

      <svg
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 w-full opacity-40"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        {[0, 26, 52].map((offset, i) => (
          <path
            key={offset}
            d={`M0 ${60 + offset} C 240 ${20 + offset}, 420 ${96 + offset}, 720 ${58 + offset} S 1200 ${
              18 + offset
            }, 1440 ${64 + offset}`}
            fill="none"
            stroke="var(--color-river)"
            strokeWidth="1"
            strokeDasharray="6 10"
            className="animate-flow"
            style={{ animationDelay: `${i * -2}s`, animationDuration: `${9 + i * 3}s` }}
          />
        ))}
      </svg>

      <div className="relative mx-auto flex min-h-[92svh] max-w-[88rem] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow animate-rise text-river">
            Water resources engineering · Est. {firm.founded} · {firm.office.city},{" "}
            {firm.office.region}
          </p>
          <h1
            className="mt-6 animate-rise font-display text-[clamp(2.6rem,6.2vw,5.25rem)] leading-[0.98] text-deep-foreground"
            style={{ animationDelay: "90ms" }}
          >
            I design for the water that{" "}
            <span className="text-river">moves, floods, and runs out.</span>
          </h1>
          <p
            className="mt-7 max-w-xl animate-rise text-base leading-relaxed text-deep-muted sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            Zucker Engineering &amp; Design is a water resources practice working the river
            corridors, drainage systems, and water supplies of the Mountain West — from the first
            survey shot to the final stamped drawing.
          </p>
          <div
            className="mt-9 flex animate-rise flex-wrap items-center gap-4"
            style={{ animationDelay: "260ms" }}
          >
            <Link
              to="/projects"
              className="eyebrow bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-river hover:text-deep"
            >
              View my work
            </Link>
            <Link
              to="/contact"
              className="eyebrow border border-deep-foreground/35 px-6 py-4 text-deep-foreground transition-colors hover:border-deep-foreground hover:bg-deep-foreground hover:text-deep"
            >
              Talk to an engineer
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-deep-border pt-8 sm:grid-cols-3">
          {firm.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-deep-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="eyebrow mt-2 text-deep-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Who I am</p>
        </Reveal>
        <div>
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.18] text-foreground">
              Flood, drainage, and water supply problems rarely arrive on their own. They arrive as
              a permitting deadline, a failing bank, a capacity shortfall, and a bond measure that
              has to pass. I take the whole thing on — the modeling, the design, the regulatory
              path, and the field work that proves it.
            </p>
          </Reveal>
          <Rule className="mt-14" />
          <Reveal delay={120}>
            <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {clientTypes.map((type) => (
                <p key={type} className="flex items-baseline gap-3 text-sm text-muted-foreground">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-clay" />
                  {type}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects({ projects: list }: { projects: typeof projects }) {
  return (
    <section className="border-y border-border bg-secondary/45">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-muted-foreground">Selected projects</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]">
                Work that is still holding ten years later
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <ArrowLink to="/projects">Full project list</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="contour-grid relative overflow-hidden bg-deep text-deep-foreground">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow text-river">How I work</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-deep-foreground">
                The model, the assumptions, and the notes that tie them together
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-deep-muted">
                Everything that produced the answer gets handed over. When a reviewer, a state
                engineer, or your successor asks how a number was reached, the file already has the
                response.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10">
                <ArrowLink to="/about" tone="paper">
                  More about the firm
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-px bg-deep-border sm:grid-cols-2">
            {whatYouGet.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="h-full bg-deep p-8">
                  <p className="eyebrow text-river">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-display text-xl leading-snug text-deep-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-deep-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="plate aspect-[4/3] w-full">
            <img
              src={aboutField}
              alt="Engineer in a hard hat reviewing plans on a stone riprap riverbank"
              loading="lazy"
              width={1408}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow text-muted-foreground">About the firm</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]">
              One engineer, start to finish — on purpose
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Zucker Engineering &amp; Design was founded in {firm.founded} on a simple idea: the
              person who runs the model should be the person who signs the drawing and stands on
              the bank when it is built. Everything else about how this firm runs follows from that
              — short project lists, direct access, and no layers between you and the engineering.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
              {firm.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl">{stat.value}</p>
                  <p className="eyebrow mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9">
              <ArrowLink to="/about">My story &amp; how I work</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="border-t border-border bg-accent">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-muted-foreground">Next step</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.08]">
                Send me the reach, the basin, or the drawing set — I will tell you what I think.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/contact"
                className="eyebrow bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-foreground"
              >
                Start a project
              </Link>
              <a
                href={`tel:${firm.phone.replace(/[^\d+]/g, "")}`}
                className="eyebrow border border-foreground/25 px-6 py-4 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {firm.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
