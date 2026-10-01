import { createFileRoute } from "@tanstack/react-router";

import aboutField from "@/assets/about-field.jpg";
import { Reveal, Rule } from "@/components/Reveal";
import { firm, values, differentiators } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zucker Engineering & Design" },
      {
        name: "description",
        content:
          "Zucker Engineering & Design is a single-principal water resources engineering practice founded in 2009, licensed in seven western states and working across the Mountain West.",
      },
      { property: "og:title", content: "About Zucker Engineering & Design" },
      {
        property: "og:description",
        content:
          "One licensed engineer from the first site walk through construction closeout — no handoffs, no layers.",
      },
    ],
  }),
  component: AboutPage,
});

const affiliations = [
  "American Society of Civil Engineers (ASCE)",
  "Association of Water Resources Professionals (AWRA)",
  "Utah Water Conservers Association (UWC)",
  "Water & Environmental Research Center (WERC)",
  "National Association of Flood & Stormwater Management Agencies",
  "Society of American Military Engineers (SAME)",
];

function AboutPage() {
  return (
    <>
      <PageHeader />
      <Story />
      <Values />
      <Differentiators />
      <Principal />
      <Affiliations />
    </>
  );
}

function PageHeader() {
  return (
    <section className="border-b border-border bg-secondary/45 pt-32">
      <div className="mx-auto max-w-[88rem] px-5 pb-20 pt-14 sm:px-8 sm:pb-28">
        <Reveal>
          <p className="eyebrow text-muted-foreground">About</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[1.02]">
            One principal, a long memory for every basin, and no layers in between
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {firm.name} was founded in {firm.founded} and has stayed deliberately small. One
            licensed engineer carries each project from the site walk through construction
            closeout, supported by a bench of trusted surveyors, hydrologists, and civil
            designers. Licensed in {firm.licensedIn.length} states.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-muted-foreground">The short version</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.25]">
              The firm started with a floodplain mapping contract, a borrowed truck, and a
              conviction that the smaller shops were better at this work than they were being given
              credit for.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Seventeen years later that conviction hasn't changed. Water resources work is
              site-specific, relationship-heavy, and unforgiving of guesswork. The firms that do it
              well are usually the ones where the person who ran the model is the person standing on
              the bank when the structure is built.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              So the practice is structured around that. The project list stays short enough that a
              principal is actually on it, the model and the assumptions travel with the
              deliverable, and nobody is promoted out of the field.
            </p>
          </Reveal>
          <Rule className="mt-12" />
          <Reveal delay={240}>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {firm.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl">{stat.value}</p>
                  <p className="eyebrow mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="plate aspect-[4/5] w-full lg:sticky lg:top-28">
            <img
              src={aboutField}
              alt="Engineer in a hard hat reviewing plans on a stone riprap riverbank with a survey tripod"
              loading="lazy"
              width={1408}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="border-y border-border bg-secondary/45">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow text-muted-foreground">How I work</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3rem)] leading-[1.06]">
            Four rules the practice is built on
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="h-full bg-background p-8">
                <p className="eyebrow text-primary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 font-display text-xl leading-snug">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Why clients stay</p>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.06]">
            Three things a small practice does better
          </h2>
        </Reveal>
        <div className="flex flex-col">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div className="grid gap-3 border-t border-border py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-10">
                <h3 className="font-display text-xl leading-snug">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principal() {
  return (
    <section className="contour-grid relative overflow-hidden bg-deep text-deep-foreground">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-river">The principal</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.06] text-deep-foreground">
                {firm.principal.name}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-3 text-sm text-deep-foreground">{firm.principal.role}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-deep-muted">
                {firm.principal.bio}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={`mailto:${firm.email}`}
                  className="eyebrow bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-river hover:text-deep"
                >
                  Email the principal
                </a>
                <a
                  href={`tel:${firm.phone.replace(/[^\d+]/g, "")}`}
                  className="eyebrow border border-deep-foreground/35 px-6 py-4 text-deep-foreground transition-colors hover:border-deep-foreground hover:bg-deep-foreground hover:text-deep"
                >
                  {firm.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="border-t border-deep-border pt-8">
              <p className="eyebrow text-river">Focus areas</p>
              <ul className="mt-6 flex flex-col">
                {firm.principal.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-deep-border py-4 text-base text-deep-foreground"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-clay" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-deep-muted">
                Licensed professional engineer in {firm.licensedIn.join(", ")}. Every deliverable
                that leaves this firm is stamped by the principal named above.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Affiliations() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Credentials &amp; membership</p>
        </Reveal>
        <div>
          <Reveal>
            <p className="font-display text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.3]">
              Licensed professional engineering firm in {firm.licensedIn.join(", ")}. Active in
              state and regional technical committees through:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {affiliations.map((affiliation, index) => (
              <Reveal key={affiliation} delay={index * 60}>
                <p className="flex items-baseline gap-3 border-b border-border pb-4 text-sm text-muted-foreground">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-clay" />
                  {affiliation}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
