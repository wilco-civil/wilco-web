import { createFileRoute } from "@tanstack/react-router";

import servicesHero from "@/assets/services-hero.jpg";
import { Reveal } from "@/components/Reveal";
import { InfoBand, SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { absoluteUrl, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Wilco Civil Inc." },
      {
        name: "description",
        content:
          "Civil construction, sports fields, parks and recreation, roads and infrastructure, earthworks and landscape construction across British Columbia.",
      },
      { property: "og:title", content: "Services | Wilco Civil Inc." },
      {
        property: "og:description",
        content:
          "Wilco Civil delivers civil construction, high-performance sports fields, parks, roads, earthworks and landscape construction throughout British Columbia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/services") },
    ],
    links: [canonicalLink("/services")],
  }),
  component: Services,
});

const SERVICES = [
  {
    title: "Civil Construction",
    body: "Wilco Civil provides comprehensive civil construction services for municipal, commercial, recreational, and infrastructure projects throughout British Columbia. Our capabilities include site preparation, excavation, earthworks, grading, underground utilities, stormwater management, drainage systems, roadworks, concrete, asphalt, and site servicing. With experienced crews, modern equipment, and in-house survey capabilities, we manage complex civil works efficiently from initial site preparation through final completion.",
  },
  {
    title: "Sports Fields & Athletic Facilities",
    body: "Wilco Civil specializes in the construction and redevelopment of high-performance sports fields and athletic facilities. Our experience includes natural and synthetic turf fields, hybrid playing surfaces, running tracks, tennis courts, basketball courts, and multi-sport facilities. We deliver the complete supporting infrastructure, including field drainage, base preparation, irrigation, lighting, fencing, pathways, spectator areas, landscaping, and site amenities.",
  },
  {
    title: "Parks & Recreation",
    body: "From community parks and playgrounds to large-scale recreational developments, Wilco Civil delivers outdoor spaces designed for long-term public use. Our work includes pathways and plazas, playground areas, sports courts, site furnishings, drainage and utilities, retaining structures, irrigation, planting, lawns, landscaping, and other park infrastructure. Our integrated civil and landscape capabilities allow us to coordinate multiple scopes under one experienced construction team.",
  },
  {
    title: "Roads & Infrastructure",
    body: "Wilco Civil delivers road, transportation, and public infrastructure improvements for municipalities and other public-sector clients. Our services include excavation, road base construction, asphalt paving, curbs and gutters, sidewalks, drainage, underground servicing, culverts, retaining structures, lighting infrastructure, and associated landscaping and restoration.",
  },
  {
    title: "Earthworks & Site Development",
    body: "Our earthworks capabilities include bulk excavation, cut and fill operations, site grading, subgrade preparation, material placement, compaction, erosion and sediment control, and detailed finished grading. Wilco combines experienced operators with GPS technology, machine control, and in-house surveying to achieve accurate grades while improving productivity and reducing rework.",
  },
  {
    title: "Landscape Construction",
    body: "Wilco Civil provides complete hard and soft landscape construction as part of our integrated project delivery. Services include growing medium placement, planting, lawns and sod, irrigation, pathways, plazas, concrete and hardscape features, retaining walls, fencing, site furnishings, and final site restoration. This combination of civil and landscape expertise allows us to take projects from raw ground through to a finished public space.",
  },
];

function Services() {
  return (
    <main className="bg-background">
      <SiteNav active="Services" />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src={servicesHero}
            alt="Completed waterfront park in Squamish with the Stawamus Chief behind it"
            width={1920}
            height={1080}
            className="size-full slow-zoom object-cover object-[center_78%] saturate-[1.35] brightness-110 contrast-105"
          />
        </div>
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="flex min-h-[55vh] items-end px-6 py-24 sm:min-h-[60vh] sm:px-10 sm:py-32">
          <div className="w-full text-left">
            <h1 className="text-display text-5xl text-primary-foreground sm:text-7xl">
              Services
            </h1>
            <p className="text-display mt-4 max-w-2xl text-lg text-accent sm:text-2xl">
              Civil, Sport &amp; Landscape — All Under One Team.
            </p>
          </div>
        </div>
        <span className="absolute bottom-4 right-6 z-10 text-xs font-medium tracking-[0.12em] text-primary-foreground/80">
          Oceanfront Squamish, Squamish, BC
        </span>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-5xl space-y-12 px-6 py-16 sm:px-10">
          {SERVICES.map((service) => (
            <Reveal key={service.title}>
            <article>
              <h2 className="text-display text-2xl text-primary sm:text-3xl">
                {service.title}
              </h2>
              <div className="mt-4 h-1 w-16 bg-accent" />
              <p className="mt-5 text-base leading-relaxed text-foreground/80">
                {service.body}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      <InfoBand />
      <SiteFooter />
    </main>
  );
}
