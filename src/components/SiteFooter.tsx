import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/Logo";
import { sectors } from "@/lib/projects";
import { firm, nav } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-deep-border bg-deep text-deep-foreground">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="paper" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-deep-muted">
              Water resources engineering and design for the places where the water is hardest to
              manage. Licensed in {firm.licensedIn.join(", ")}.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href={`tel:${firm.phone.replace(/[^\d+]/g, "")}`}
                className="eyebrow text-deep-foreground transition-colors hover:text-river"
              >
                {firm.phone}
              </a>
              <a
                href={`mailto:${firm.email}`}
                className="eyebrow text-deep-foreground transition-colors hover:text-river"
              >
                {firm.email}
              </a>
            </div>
          </div>

          <FooterColumn title="Firm">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-deep-muted transition-colors hover:text-deep-foreground"
              >
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Work by sector">
            {sectors.map((sector) => (
              <Link
                key={sector}
                to="/projects"
                search={{ sector }}
                className="text-sm text-deep-muted transition-colors hover:text-deep-foreground"
              >
                {sector}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title={firm.office.role}>
            <div className="text-sm text-deep-muted">
              <p className="eyebrow mb-1 text-deep-foreground">
                {firm.office.city}, {firm.office.region}
              </p>
              <p>{firm.office.serviceArea}</p>
              <a
                href={`tel:${firm.office.phone.replace(/[^\d+]/g, "")}`}
                className="mt-3 inline-block text-deep-foreground transition-colors hover:text-river"
              >
                {firm.office.phone}
              </a>
            </div>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-deep-border pt-8 text-xs text-deep-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {firm.name}. All rights reserved.
          </p>
          <p className="eyebrow">
            Professional Engineering Firm · {firm.licensedIn.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="eyebrow mb-1 text-deep-foreground">{title}</p>
      {children}
    </div>
  );
}
