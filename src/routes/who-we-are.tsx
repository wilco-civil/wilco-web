import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";

import crewPhoto from "@/assets/crew-handsworth-drone.jpg";
import natBailey from "@/assets/nat-bailey-field.png";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { Reveal } from "@/components/Reveal";
import { InfoBand, SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { absoluteUrl, canonicalLink } from "@/lib/seo";


export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are | Wilco Civil Inc." },
      {
        name: "description",
        content:
          "Wilco Civil Inc. is part of the Wilco group of companies, one of the largest civil and landscape development groups in Canada, with national reach and local ownership.",
      },
      { property: "og:title", content: "Who We Are | Wilco Civil Inc." },
      {
        property: "og:description",
        content:
          "A national leader in construction management of site works: civil, electrical, asphalt, concrete, steel and hard and soft landscaping.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/who-we-are") },
    ],
    links: [canonicalLink("/who-we-are")],
  }),
  component: WhoWeAre,
});

const PARAGRAPHS = [
  "Wilco Civil Inc. is part of the Wilco group of companies. We build complete site works from the ground up: civil, electrical, asphalt, concrete, steel, and hard and soft landscaping. We have national reach and local ownership.",
  "For 35 years we have built sports fields, parks, roads, dykes and public spaces across British Columbia. That includes the natural grass pitch inside BC Place for the FIFA World Cup 26 and the rebuilt field at Nat Bailey Stadium.",
  "Our reputation rests on three things: quality workmanship, on time, on budget. Many of our clients come back to us, and that says more about us than any brochure can.",
];

const PILLARS = [
  {
    title: "What We Build",
    body: "Sports fields and athletic facilities, parks and recreation, roads and infrastructure, earthworks, site servicing and landscape construction. One team handles all of it from start to finish.",
  },
  {
    title: "Who We Build For",
    body: "Municipalities, universities and colleges, public and private schools, port authorities and private developers across the Lower Mainland, Vancouver Island and beyond.",
  },
  {
    title: "How We Work",
    body: "Every project gets its own team of experienced project managers, contract administrators and crews. Microsoft Project and Explorer keep each schedule on track, so the work finishes on time and on budget.",
  },
];

const STATS = [
  { figure: "35", label: "Years building in BC" },
  { figure: "500+", label: "Projects delivered" },
  { figure: "National", label: "Reach, local ownership" },
];


function WhoWeAre() {
  return (
    <main className="bg-background">
      <SiteNav active="Who We Are" />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src={natBailey}
            alt="Aerial view of a completed natural grass ballpark field in Vancouver"
            width={1280}
            height={720}
            className="size-full slow-zoom object-cover object-[center_80%] saturate-[1.9] brightness-[1.15] contrast-110"
          />
        </div>
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="flex min-h-[70vh] items-end px-6 py-24 sm:min-h-[80vh] sm:px-10 sm:py-32">
          <div className="w-full text-left">
            <h1 className="text-display text-5xl text-primary-foreground sm:text-7xl">
              Who We Are
            </h1>
            <p className="text-display mt-4 max-w-2xl text-lg text-accent sm:text-2xl">
              National Reach. Local Roots. Proven Results.
            </p>
          </div>
        </div>
        <span className="absolute bottom-4 right-6 z-10 text-xs font-medium tracking-[0.12em] text-primary-foreground/80">
          Nat Bailey Stadium, Vancouver, BC
        </span>
      </section>

      <section className="border-t border-border bg-primary">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3 sm:px-10">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <p className="text-display text-4xl text-accent sm:text-5xl">
                {stat.figure}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-primary-foreground/80">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.3fr]">
          <Reveal>
            <h2 className="text-display text-3xl text-primary sm:text-5xl">
              About Wilco
            </h2>
            <div className="mt-5 h-1 w-20 bg-accent" />
            <p className="text-display mt-8 text-2xl leading-snug text-foreground sm:text-3xl">
              One of the largest <span className="text-accent">civil and landscape</span>{" "}
              development groups in Canada.
            </p>
          </Reveal>
          <Reveal delay={90} className="space-y-5 text-lg leading-relaxed text-foreground/80">
            {PARAGRAPHS.map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="cor-heading" className="border-t border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="mb-5 size-12 text-primary" aria-hidden="true" />
            <p className="text-sm font-bold uppercase text-primary">Health &amp; Safety</p>
            <h2 id="cor-heading" className="text-display mt-3 text-4xl text-primary sm:text-5xl">
              COR Certified
            </h2>
            <p className="mt-6 mx-auto max-w-xl text-lg leading-relaxed text-foreground/80">
              Wilco Civil Inc. holds a Certificate of Recognition (COR) for our
              health and safety management system. Independently audited to meet
              approved industry standards, our certification reflects our
              commitment to worker health and safety in British Columbia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary-deep">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10">
          <Reveal>
            <p className="text-display text-3xl leading-tight text-primary-foreground sm:text-5xl">
              We go looking for the tough ones — the unique, the complicated,
              the jobs that put <span className="text-accent">every bit of our experience</span> to work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 sm:px-10 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90} className="border-t-4 border-accent pt-6">
              <h3 className="text-display text-2xl text-primary">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
        <figure className="mx-auto max-w-7xl px-6 pb-16 sm:px-10">
          <img decoding="async"
            src={crewPhoto}
            alt="Wilco Civil crew celebrating on a completed field at Handsworth"
            className="aspect-[16/9] w-full rounded-sm object-cover object-[center_65%]"
            loading="lazy"
          />
          <figcaption className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground/60">
            The Wilco crew at Handsworth, North Vancouver
          </figcaption>
        </figure>
      </section>

      <ProjectSlideshow />

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center sm:px-10">
          <Link
            to="/projects"
            className="text-display inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-base tracking-[0.14em] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View all projects
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </section>


      <InfoBand />
      <SiteFooter />

    </main>
  );
}
