import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

import wilcoLogo from "@/assets/wilco-logo.png";
import { NAV_LINKS } from "@/components/SiteNav";

export function InfoBand() {
  return (
    <section
      aria-label="About Wilco Civil"
      className="border-t border-border bg-secondary/60"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]">
        <div>
          <img src={wilcoLogo} alt="Wilco Civil Inc." className="h-20 w-auto" />
          <p className="text-display mt-6 text-xl font-bold leading-snug text-foreground">
            Leaders in <span className="text-accent">sports field</span> &amp; civil
            construction.
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/70">
            Sports fields, civil infrastructure and landscape construction across
            British Columbia since 1991.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Explore
          </p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.filter((link) => link.label !== "Home").map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link
                    to={link.href}
                    className="text-base font-semibold text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-base font-semibold text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Headquarters
          </p>
          <p className="mt-5 text-base font-bold text-foreground">
            7286 Telegraph Trail
            <br />
            Langley, BC V1M 2M6
          </p>
          <p className="mt-4 text-sm text-foreground/70">
            Phone:{" "}
            <span className="text-base font-bold text-foreground">604-882-4752</span>
          </p>
          <p className="mt-4 inline-flex items-center gap-2 border border-accent px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
            COR Certified
          </p>
        </div>

        <div className="lg:border-l lg:border-border lg:pl-10">
          <div className="flex items-start gap-3">
            <p className="text-display text-6xl leading-none text-accent">35</p>
            <div className="pt-1">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground/80">
                Years
              </p>
              <p className="text-xs text-muted-foreground">1991–2026</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-foreground/70">
            500+ projects and counting.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-center">
        <p className="text-xs uppercase tracking-[0.22em] text-foreground/70">
          © {new Date().getFullYear()} Wilco Civil Inc.
        </p>
      </div>
    </footer>
  );
}
