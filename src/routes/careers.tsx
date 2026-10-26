import { createFileRoute } from "@tanstack/react-router";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

import careersHero from "@/assets/careers-hero.jpg.asset.json";
import careersReel from "@/assets/careers-reel-audio.mp4.asset.json";
import { InfoBand, SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Wilco Civil Inc." },
      {
        name: "description",
        content:
          "Join the Wilco Civil crew. Careers in civil construction, sports field building, earthworks and landscape construction across British Columbia.",
      },
      { property: "og:title", content: "Careers | Wilco Civil Inc." },
      {
        property: "og:description",
        content:
          "Build landmark fields, parks and infrastructure with an experienced BC crew. See what it takes to work at Wilco Civil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Careers,
});

const VALUES = [
  {
    title: "Work that stands up",
    body: "Our crews build fields, parks, roads and public spaces that thousands of people use every day. When a project wraps, you can drive your family past it and point at what you built.",
  },
  {
    title: "Learn from the best in the trade",
    body: "You will work alongside project managers, superintendents and operators with decades of civil and landscape experience. We invest in training, certifications and equipment so our people keep moving forward.",
  },
  {
    title: "Safety comes first, always",
    body: "Everyone goes home the same way they came in. Our safety program, daily planning and site culture are built around that single commitment.",
  },
  {
    title: "Room to grow",
    body: "Many of our leaders started on the shovel. We promote from within and give motivated people the chance to take on bigger scopes, bigger crews and bigger projects.",
  },
];


function Careers() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <main className="bg-background">
      <SiteNav active="Careers" />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src={careersHero.url}
            alt="Two Wilco Civil crew members in high-visibility gear talking on the field at BC Place"
            width={1920}
            height={1280}
            className="size-full slow-zoom object-cover object-[center_12%] saturate-[1.25] brightness-105 contrast-105"
          />

        </div>
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="flex min-h-[55vh] items-end px-6 py-24 sm:min-h-[60vh] sm:px-10 sm:py-32">
          <div className="w-full text-left">
            <h1 className="text-display text-5xl text-primary-foreground sm:text-7xl">
              Careers
            </h1>
            <p className="text-display mt-4 max-w-2xl text-lg text-accent sm:text-2xl">
              Build Your Career From The Ground Up.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
          <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-sm bg-primary-deep">
            <video
              ref={videoRef}
              src={careersReel.url}
              autoPlay
              muted={muted}
              loop
              playsInline
              aria-label="Wilco Civil crew working at BC Place"
              className="size-full object-cover object-[center_20%]"
            />
            <button
              type="button"
              onClick={() => {
                const next = !muted;
                setMuted(next);
                if (videoRef.current) {
                  videoRef.current.muted = next;
                  if (!next) void videoRef.current.play();
                }
              }}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-sm border border-primary-foreground/30 bg-primary-deep/70 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {muted ? (
                <VolumeX className="size-4" aria-hidden="true" />
              ) : (
                <Volume2 className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-base leading-relaxed text-foreground/80">
              Whether you are starting out or bringing years of experience, we
              are always interested in hearing from skilled, safety-minded
              people. Send your resume and a note about the work you want to do,
              and we will be in touch when a fit comes up.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:careers@wilcocivil.ca"
                className="group rounded-sm border border-border border-l-4 border-l-accent bg-card p-5 transition-colors hover:border-accent"
              >
                <span className="text-display block text-xs uppercase tracking-widest text-foreground/60">
                  Email Your Resume
                </span>
                <span className="text-display mt-2 block text-lg text-primary group-hover:text-accent">
                  careers@wilcocivil.ca
                </span>
              </a>
              <a
                href="https://ca.indeed.com/cmp/Wilco-Civil-Inc./jobs"
                target="_blank"
                rel="noreferrer"
                className="group rounded-sm border border-border border-l-4 border-l-accent bg-card p-5 transition-colors hover:border-accent"
              >
                <span className="text-display block text-xs uppercase tracking-widest text-foreground/60">
                  Current Openings
                </span>
                <span className="text-display mt-2 block text-lg text-primary group-hover:text-accent">
                  View on Indeed →
                </span>
              </a>
            </div>
          </div>
        </div>

      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
          <h2 className="text-display text-3xl text-primary sm:text-4xl">
            Join the Crew
          </h2>
          <div className="mt-5 h-1 w-20 bg-accent" />
          <p className="text-display mt-6 max-w-3xl text-xl leading-snug text-foreground">
            We hire people who take{" "}
            <span className="text-accent">pride in the finished product</span>.
          </p>
          <div className="mt-12 grid grid-cols-1 content-start items-start gap-x-12 gap-y-12 md:grid-cols-2">
            {VALUES.map((value) => (
              <article key={value.title} className="space-y-4">
                <h3 className="text-display border-l-4 border-accent pl-4 text-xl uppercase tracking-wide text-primary">
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-foreground/80">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>






      <InfoBand />
      <SiteFooter />
    </main>
  );
}
