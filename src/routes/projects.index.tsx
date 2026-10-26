import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { CATEGORIES, PROJECT_CATEGORIES, type Category } from "@/data/project-categories";

import { Reveal } from "@/components/Reveal";
import { InfoBand, SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Wilco Civil Inc." },
      {
        name: "description",
        content:
          "Sports fields, parks and civil infrastructure projects delivered by Wilco Civil across British Columbia.",
      },
      { property: "og:title", content: "Projects | Wilco Civil Inc." },
      {
        property: "og:description",
        content:
          "Explore Wilco Civil project profiles, photos and scopes of work from parks and sports field developments across British Columbia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

function endDateValue(period: string) {
  const end = period.split(/[–—-]/).pop()?.trim() ?? "";
  if (/current/i.test(end)) return Number.MAX_SAFE_INTEGER;
  const [monthName, yearText] = end.split(/\s+/);
  const year = Number(yearText);
  const month = MONTHS.indexOf((monthName ?? "").toLowerCase());
  if (!Number.isFinite(year)) return 0;
  return year * 12 + (month >= 0 ? month : 0);
}

function endYear(period: string) {
  const end = period.split(/[–—-]/).pop()?.trim() ?? "";
  return end.split(/\s+/).pop() ?? "";
}

const SORTED_PROJECTS = [...PROJECTS].sort(
  (a, b) => endDateValue(b.period) - endDateValue(a.period),
);

function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const visible =
    filter === "All"
      ? SORTED_PROJECTS
      : SORTED_PROJECTS.filter((p) => PROJECT_CATEGORIES[p.slug]?.includes(filter));
  const heroProject =
    SORTED_PROJECTS.find((p) => p.slug === "world-cup-26-field-of-play") ??
    SORTED_PROJECTS[0]!;
  const hero = { photos: [heroProject.photos[0]!, heroProject.photos[0]!] };

  return (
    <main className="bg-background">
      <SiteNav active="Projects" />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src={hero.photos[1]!.url}
            alt={hero.photos[1]!.alt}
            width={1920}
            height={1080}
            className="size-full slow-zoom object-cover saturate-[1.35] brightness-110 contrast-105"
          />
        </div>
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="flex min-h-[55vh] items-end px-6 py-24 sm:min-h-[60vh] sm:px-10 sm:py-32">
          <div className="w-full text-left">
            <h1 className="text-display text-5xl text-primary-foreground sm:text-7xl">
              Projects
            </h1>
            <p className="text-display mt-4 max-w-2xl text-lg text-accent sm:text-2xl">
              Built on time, on budget, across British Columbia.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[110rem] px-6 py-16 sm:px-10">
          <div className="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filter projects">
            {(["All", ...CATEGORIES] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`border px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-primary hover:border-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 4) * 90}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="card-lift group block h-full overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-accent"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.photos[0]!.url}
                      alt={project.photos[0]!.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <span className="text-display absolute bottom-0 left-0 bg-accent px-3 py-1.5 text-sm tracking-[0.12em] text-accent-foreground">
                      {endYear(project.period)}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {project.owner}
                    </p>
                    <h2 className="text-display mt-2 text-xl text-primary">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm text-foreground/70">
                      {project.location.split(",").slice(-2).join(",").trim()}
                    </p>

                    <span className="text-display mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-primary transition-colors group-hover:text-accent">
                      View project
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InfoBand />
      <SiteFooter />
    </main>
  );
}
