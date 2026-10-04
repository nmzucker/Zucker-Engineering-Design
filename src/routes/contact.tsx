import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Mail, MapPin, Phone } from "lucide-react";

import { Reveal, Rule } from "@/components/Reveal";
import { firm, needs } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please tell me your name."),
  organization: z.string().min(1, "Which agency, district, or company?"),
  email: z.string().email("That email doesn't look right."),
  phone: z.string().optional(),
  need: z.string().min(1, "Pick the closest match."),
  location: z.string().optional(),
  message: z.string().min(20, "A sentence or two helps me route this correctly."),
});

type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zucker Engineering & Design" },
      {
        name: "description",
        content: "Contact page description placeholder — one sentence for search results.",
      },
      { property: "og:title", content: "Contact Zucker Engineering & Design" },
      {
        property: "og:description",
        content: "Contact page description placeholder — one sentence about getting in touch.",
      },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground";
const labelClass = "eyebrow mb-3 block text-muted-foreground";

function ContactPage() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    setSubmitted(values);
  };

  return (
    <>
      <section className="border-b border-border bg-secondary/45 pt-32">
        <div className="mx-auto max-w-[88rem] px-5 pb-16 pt-14 sm:px-8 sm:pb-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[1.02]">
              Contact page headline placeholder
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Contact intro placeholder — one or two sentences inviting visitors to reach out.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-24">
          <div>
            {submitted ? (
              <Reveal>
                <div className="border border-primary/40 bg-secondary/50 p-8 sm:p-10">
                  <span className="grid h-11 w-11 place-items-center bg-primary text-primary-foreground">
                    <Check className="h-5 w-5" />
                  </span>
                  <h2 className="mt-6 font-display text-3xl">Thanks — I have it</h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    You will usually hear back within one business day. To be certain your message
                    reaches me, press the button below and it will open in your own email app ready
                    to send.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={buildMailto(submitted)}
                      className="eyebrow inline-flex items-center gap-2 bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-foreground"
                    >
                      <Mail className="h-4 w-4" />
                      Open in email
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(null)}
                      className="eyebrow border border-border px-6 py-4 text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      Send another
                    </button>
                  </div>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col">
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name <span className="text-clay">*</span>
                    </label>
                    <input id="name" {...register("name")} className={inputClass} />
                    <ErrorText message={errors.name?.message} />
                  </div>

                  <div>
                    <label htmlFor="organization" className={labelClass}>
                      Organization <span className="text-clay">*</span>
                    </label>
                    <input
                      id="organization"
                      placeholder="City of…, County of…, District…"
                      {...register("organization")}
                      className={inputClass}
                    />
                    <ErrorText message={errors.organization?.message} />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-clay">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className={inputClass}
                    />
                    <ErrorText message={errors.email?.message} />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input id="phone" type="tel" {...register("phone")} className={inputClass} />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="need" className={labelClass}>
                      What do you need? <span className="text-clay">*</span>
                    </label>
                    <select id="need" {...register("need")} className={cn(inputClass, "appearance-none")}>
                      <option value="">Select the closest match…</option>
                      {needs.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                    <ErrorText message={errors.need?.message} />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="location" className={labelClass}>
                      Project location
                    </label>
                    <input
                      id="location"
                      placeholder="River, basin, or jurisdiction"
                      {...register("location")}
                      className={inputClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                      Tell me about the project <span className="text-clay">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Water body, jurisdiction, rough scope, and any deadlines you are working against."
                      {...register("message")}
                      className={cn(inputClass, "resize-y leading-relaxed")}
                    />
                    <ErrorText message={errors.message?.message} />
                  </div>
                </div>

                <Rule className="mt-10" />

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="eyebrow bg-primary px-7 py-4 text-primary-foreground transition-colors hover:bg-foreground disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Or email{" "}
                    <a href={`mailto:${firm.email}`} className="text-primary hover:underline">
                      {firm.email}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>

          <aside className="flex flex-col gap-10">
            <Reveal>
              <div className="border-t border-border pt-6">
                <p className="eyebrow text-muted-foreground">{firm.office.role}</p>
                <h2 className="mt-3 font-display text-2xl">
                  {firm.office.city}, {firm.office.region}
                </h2>
                <address className="mt-4 flex flex-col gap-1 text-sm not-italic leading-relaxed text-muted-foreground">
                  <span className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {firm.office.serviceArea}
                  </span>
                </address>
                <a
                  href={`tel:${firm.office.phone.replace(/[^\d+]/g, "")}`}
                  className="mt-4 flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {firm.office.phone}
                </a>
              </div>
            </Reveal>


            <Reveal>
              <div className="border-t border-border pt-6">
                <p className="eyebrow text-muted-foreground">Licensed in</p>
                <p className="mt-3 font-display text-2xl">{firm.licensedIn.join(" · ")}</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-border pt-6">
                <p className="eyebrow text-muted-foreground">Typical response</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Response time placeholder — e.g. how quickly you usually reply.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}

function ErrorText({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-2 text-xs text-destructive">{message}</p>;
}

function buildMailto(values: FormValues) {
  const lines = [
    `Name: ${values.name}`,
    `Organization: ${values.organization}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : "",
    `Need: ${values.need}`,
    values.location ? `Location: ${values.location}` : "",
    "",
    values.message,
  ].filter(Boolean);

  return `mailto:${firm.email}?subject=${encodeURIComponent(
    `Project inquiry — ${values.organization || values.name}`,
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}
