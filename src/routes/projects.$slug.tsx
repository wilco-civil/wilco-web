import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { PhotoGallery } from "@/components/PhotoLightbox";
import { InfoBand, SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found | Wilco Civil Inc." },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} | Wilco Civil Inc.`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <main className="bg-background">
      <SiteNav active="Projects" />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-display text-4xl text-primary">
          Project not found
        </h1>
        <Link
          to="/projects"
          className="text-display mt-6 inline-block text-sm font-bold uppercase tracking-[0.14em] text-accent"
        >
          Back to projects
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}

function ProjectDetail() {
  const project = Route.useLoaderData();

  const roundValue = (raw: string) => {
    const amount = Number(raw.replace(/[^0-9.]/g, ""));
    if (!Number.isFinite(amount) || amount === 0) return raw;
    return `$${Math.round(amount).toLocaleString("en-CA")}`;
  };

  const facts = [
    { label: "Owner", value: project.owner },
    { label: "Location", value: project.location },
    ...(project.consultant ? [{ label: "Consultant", value: project.consultant }] : []),
    { label: "Construction period", value: project.period },
    { label: "Contract value", value: roundValue(project.value) },
  ];

  return (
    <main className="bg-background">
      <SiteNav active="Projects" />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src={project.photos[0]!.url}
            alt={project.photos[0]!.alt}
            width={1920}
            height={1080}
            className="size-full object-cover saturate-[1.35] brightness-110 contrast-105"
          />
        </div>
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="flex min-h-[55vh] items-end px-6 py-24 sm:min-h-[60vh] sm:px-10 sm:py-32">
          <div className="w-full text-left">
            <Link
              to="/projects"
              className="text-display inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-accent"
            >
              <ArrowLeft className="size-4" />
              All projects
            </Link>
            <h1 className="text-display mt-4 max-w-4xl text-4xl text-primary-foreground sm:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">

          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="border-l-2 border-accent pl-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                  {fact.label}
                </dt>
                <dd className="text-display mt-1 text-lg text-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="text-display mt-14 text-2xl text-primary sm:text-3xl">
            Key scope of work
          </h2>
          <div className="mt-4 h-1 w-16 bg-accent" />
          <ul className="mt-6 grid gap-x-10 gap-y-2 sm:grid-cols-2">
            {project.scope.map((item) => (
              <li
                key={item}
                className="border-b border-border py-2 text-sm text-foreground/80"
              >
                {item}
              </li>
            ))}
          </ul>

          {project.awards && project.awards.length > 0 && (
            <>
              <h2 className="text-display mt-14 text-2xl text-primary sm:text-3xl">
                Awards
              </h2>
              <div className="mt-4 h-1 w-16 bg-accent" />
              <ul className="mt-6 grid gap-x-10 gap-y-2 sm:grid-cols-2">
                {project.awards.map((award) => (
                  <li
                    key={award}
                    className="border-b border-border py-2 text-sm text-foreground/80"
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h2 className="text-display mt-14 text-2xl text-primary sm:text-3xl">
            Project photos
          </h2>
          <div className="mt-4 h-1 w-16 bg-accent" />
          <div className="mt-6">
            <PhotoGallery photos={project.photos} />
          </div>
        </div>
      </section>

      <InfoBand />
      <SiteFooter />
    </main>
  );
}
