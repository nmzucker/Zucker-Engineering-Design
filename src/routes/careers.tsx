import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { ArrowLink } from "@/components/ProjectCard";
import { Reveal, Rule } from "@/components/Reveal";
import { firm } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Zucker Engineering & Design" },
      {
        name: "description",
        content:
          "Join a water resources engineering firm where you stay on the project from survey to closeout. Open roles in Denver and Boise.",
      },
      { property: "og:title", content: "Careers — Zucker Engineering & Design" },
      {
        property: "og:description",
        content:
          "Small senior teams, real responsibility early, and field time that makes you a better designer.",
      },
    ],
  }),
  component: CareersPage,
});

const reasons = [
  {
    title: "You stay on the project",
    body: "No churning between ten assignments a year. You carry a couple of engagements and you see them through construction, which is where the learning actually happens.",
  },
  {
    title: "Responsibility arrives early",
    body: "Engineers in their third and fourth year write the technical approach and sit in front of the client. We would rather over-trust you and back you up.",
  },
  {
    title: "Field time is protected",
    body: "Inspection days, survey days, and walk-downs are scheduled work, not something you squeeze in after the drawings go out.",
  },
  {
    title: "Licensure is a firm goal",
    body: "Review hours are on the clock, exam fees are covered, and the person reviewing your study plan is a principal, not a manager three levels up.",
  },
];

const roles = [
  {
    title: "Water Resources Engineer, PE",
    team: "Flood Risk & Drainage",
    location: "Denver, CO",
    type: "Full time",
    level: "5+ yrs, PE or on track",
  },
  {
    title: "Hydrologic/Hydraulic Modeler",
    team: "Water Resources Planning",
    location: "Denver, CO or Boise, ID",
    type: "Full time",
    level: "2–6 yrs, HEC-HMS / HEC-RAS",
  },
  {
    title: "Stream Restoration Engineer",
    team: "Streams & Habitat",
    location: "Boise, ID",
    type: "Full time",
    level: "3+ yrs, geomorphology a plus",
  },
  {
    title: "Land Surveyor / Party Chief",
    team: "Field Services",
    location: "Denver, CO",
    type: "Full time, seasonal overlap",
    level: "LS or RTS preferred",
  },
  {
    title: "Civil Engineering Intern",
    team: "All practices",
    location: "Denver, CO",
    type: "Summer, paid",
    level: "Rising junior or later",
  },
];

const steps = [
  { label: "Application", body: "Résumé and a paragraph on the project you are proudest of." },
  { label: "Technical conversation", body: "Ninety minutes on a real assignment, worked together." },
  { label: "Field or site day", body: "You spend a day with the team before any offer goes out." },
  { label: "Offer", body: "Range, review path, and licensure plan stated up front." },
];

function CareersPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/45 pt-32">
        <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-14 sm:px-8 sm:pb-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Careers</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[1.02]">
              Do the whole job, not a slice of it
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We are {firm.teamSize} people who chose this work because a river is a system and
              a drainage report has consequences. If that sounds like the reason you chose it too,
              the open roles are below.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Why Zucker</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3rem)] leading-[1.06]">
            Four things we promise and actually budget for
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 80}>
              <div className="h-full bg-background p-8">
                <p className="eyebrow text-primary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 font-display text-xl">{reason.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contour-grid relative overflow-hidden bg-deep text-deep-foreground">
        <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow text-river">Open roles</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.06] text-deep-foreground">
                  {roles.length} positions open
                </h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <p className="max-w-sm text-sm leading-relaxed text-deep-muted">
                Don't see your role? Send a résumé and two sentences about the work you want. We
                read every one and we keep good people on the list.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 border-t border-deep-border">
            {roles.map((role, index) => (
              <Reveal key={role.title} delay={index * 60}>
                <a
                  href={`mailto:${firm.email}?subject=${encodeURIComponent(
                    `Application — ${role.title}`,
                  )}`}
                  className="group grid gap-3 border-b border-deep-border py-7 transition-colors hover:bg-deep-foreground/[0.04] sm:grid-cols-[1.4fr_1fr_auto] sm:items-center sm:gap-8"
                >
                  <div>
                    <h3 className="font-display text-xl text-deep-foreground sm:text-2xl">
                      {role.title}
                    </h3>
                    <p className="eyebrow mt-2 text-river">{role.team}</p>
                  </div>
                  <div className="text-sm text-deep-muted">
                    <p>{role.location}</p>
                    <p className="mt-1">
                      {role.type} · {role.level}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-medium text-deep-foreground">
                    Apply
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">How we hire</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.06]">
              Four steps, and none of them are a black box
            </h2>
          </Reveal>
          <div>
            {steps.map((step, index) => (
              <Reveal key={step.label} delay={index * 80}>
                <div className="grid gap-2 border-t border-border py-7 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <h3 className="font-display text-lg">{step.label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            ))}
            <Rule className="mt-2" />
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={`mailto:${firm.email}?subject=${encodeURIComponent("Résumé for the list")}`}
                className="eyebrow bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-foreground"
              >
                Send a résumé
              </a>
              <ArrowLink to="/contact">Ask us something first</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
