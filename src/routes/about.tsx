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
          "A water resources engineering firm founded in 2009, now 48 engineers and scientists across Denver and Boise, licensed in seven western states.",
      },
      { property: "og:title", content: "About Zucker Engineering & Design" },
      {
        property: "og:description",
        content:
          "Senior-led water resources engineering teams that stay on the project through construction.",
      },
    ],
  }),
  component: AboutPage,
});

const leadership = [
  {
    name: "Maya Zucker, PE",
    role: "Founder & Principal",
    focus: "Floodplain management, levee and floodwall design, CLOMR/DLOMR strategy",
    bio: "Twenty-two years in river engineering, including a decade with a federal agency before starting the firm.",
  },
  {
    name: "Daniel Okafor, PE, BCEE",
    role: "Principal, Water Supply",
    focus: "Intake, transmission, pump station and treatment facilities planning",
    bio: "Leads the water supply practice and has taken four facilities from concept through startup.",
  },
  {
    name: "Rhea Sandoval, PE",
    role: "Practice Lead, Drainage & Stormwater",
    focus: "Drainage master planning, MS4 programs, detention and water quality design",
    bio: "Specializes in frameworks that let a jurisdiction model a service area once and reuse it.",
  },
  {
    name: "Tom Brantley, PE",
    role: "Practice Lead, Streams & Habitat",
    focus: "Geomorphology, grade control, bioengineering, Corps permitting",
    bio: "Runs the field program and the instrest flow lab; has restored or stabilized over 20 miles of channel.",
  },
];

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
      <Leadership />
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
            Small firm, senior people, and a long memory for every basin we work in
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {firm.name} was founded in {firm.founded} and has grown to {firm.teamSize} engineers,
            surveyors, and scientists working out of Denver and Boise. We are licensed in{" "}
            {firm.licensedIn.length} states and we keep our project lists short enough that a
            principal is actually on them.
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
              conviction that the smaller firms were better at this work than they were being given
              credit for.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Seventeen years later the conviction hasn't changed. Water resources work is
              site-specific, relationship-heavy, and unforgiving of guesswork. The firms that do it
              well are usually the ones where the person who ran the model is the person standing on
              the bank when the structure is built.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              So we structured the firm around that. Project teams are small and senior, the model
              and the assumptions travel with the deliverable, and nobody is promoted out of the
              field.
            </p>
          </Reveal>
          <Rule className="mt-12" />
          <Reveal delay={240}>
            <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
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
              alt="Two engineers in hard hats reviewing plans on a stone riprap riverbank with a survey tripod"
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
          <p className="eyebrow text-muted-foreground">How we behave</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3rem)] leading-[1.06]">
            Four rules we actually hold each other to
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
            Three things we do differently on purpose
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

function Leadership() {
  return (
    <section className="contour-grid relative overflow-hidden bg-deep text-deep-foreground">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-river">Leadership</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3rem)] leading-[1.06] text-deep-foreground">
                The people who will be in the room
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="max-w-sm text-sm leading-relaxed text-deep-muted">
              Every engagement has a named principal of record. You will know theirs before the
              proposal is signed.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-deep-border sm:grid-cols-2">
          {leadership.map((person, index) => (
            <Reveal key={person.name} delay={index * 80}>
              <div className="h-full bg-deep p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-deep-foreground">{person.name}</h3>
                  <span className="eyebrow shrink-0 text-river">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-deep-foreground">{person.role}</p>
                <p className="mt-5 text-sm leading-relaxed text-deep-muted">{person.bio}</p>
                <p className="mt-5 border-t border-deep-border pt-4 text-sm text-deep-muted">
                  <span className="eyebrow mr-2 text-river">Focus</span>
                  {person.focus}
                </p>
              </div>
            </Reveal>
          ))}
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
              Licensed professional engineering firm in {firm.licensedIn.join(", ")}. Our people sit
              on state and regional technical committees and publish through:
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
