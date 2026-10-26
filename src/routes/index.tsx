import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Volume2, VolumeX } from "lucide-react";

import heroReel from "@/assets/bcplace-reel-1-2.mp4.asset.json";
import heroReelMusic from "@/assets/bcplace-reel-music-highlight.mp4.asset.json";
import { useRef, useState } from "react";
import heroField from "@/assets/hero-field.png.asset.json";
import wc2 from "@/assets/worldcup-2.jpg.asset.json";
import logoPavco from "@/assets/logo-pavco-updated.png.asset.json";
import logoSurrey from "@/assets/logo-surrey-updated.png.asset.json";
import logoVancouver from "@/assets/logo-vancouver-updated.png.asset.json";
import logoRichmond from "@/assets/logo-richmond.png.asset.json";
import logoCoquitlam from "@/assets/logo-coquitlam.png.asset.json";
import logoDelta from "@/assets/logo-delta.png.asset.json";
import logoLangley from "@/assets/logo-langley.png.asset.json";
import logoNorthVan from "@/assets/logo-north-vancouver.png.asset.json";
import logoWestVan from "@/assets/logo-west-vancouver.png.asset.json";
import logoWhistler from "@/assets/logo-whistler.png.asset.json";
import logoPort from "@/assets/logo-port-vancouver.png.asset.json";
import logoAbbotsford from "@/assets/logo-abbotsford.png.asset.json";
import logoNanaimo from "@/assets/logo-nanaimo.png.asset.json";
import logoMapleRidge from "@/assets/logo-maple-ridge.png.asset.json";
import logoPcl from "@/assets/logo-pcl.png.asset.json";
import logoKelowna from "@/assets/logo-kelowna.png.asset.json";
import logoBurnaby from "@/assets/logo-burnaby.png.asset.json";
import logoTranslink from "@/assets/logo-translink.png.asset.json";
import logoHeatherbrae from "@/assets/logo-heatherbrae.png.asset.json";
import logoNewWestSchools from "@/assets/logo-new-west-schools.png.asset.json";
import logoSbw from "@/assets/logo-sbw.png.asset.json";
import logoDiamondBaseball from "@/assets/logo-diamond-baseball.png.asset.json";
import logoYvr from "@/assets/logo-yvr.png.asset.json";
import logoPortCoquitlam from "@/assets/logo-port-coquitlam.png.asset.json";
import logoVancouverCollege from "@/assets/logo-vancouver-college.png.asset.json";

import { Reveal } from "@/components/Reveal";
import { InfoBand, SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { SocialFeed } from "@/components/SocialFeed";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wilco Civil Inc. | Sports Fields & Civil Infrastructure" },
      {
        name: "description",
        content:
          "Wilco Civil Inc. builds sports fields, civil infrastructure, parks, roads, earthworks and landscape construction. Built from the ground up. Built for performance.",
      },
      {
        property: "og:title",
        content: "Wilco Civil Inc. | Sports Fields & Civil Infrastructure",
      },
      {
        property: "og:description",
        content:
          "Sports Fields, Civil Infrastructure, Parks & Public Spaces, Roads, Earthworks and Landscape Construction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const DISCIPLINES = [
  "Sports Fields",
  "Civil Infrastructure",
  "Parks & Public Spaces",
  "Roads",
  "Earthworks",
  "Landscape Construction",
];

const PARTNERS = [
  { name: "PavCo / BC Place", logo: logoPavco },
  { name: "City of Vancouver", logo: logoVancouver },
  { name: "City of Surrey", logo: logoSurrey },
  { name: "City of Richmond", logo: logoRichmond },
  { name: "City of Coquitlam", logo: logoCoquitlam },
  { name: "City of Delta", logo: logoDelta },
  { name: "Township of Langley", logo: logoLangley },
  { name: "District of North Vancouver", logo: logoNorthVan },
  { name: "District of West Vancouver", logo: logoWestVan },
  { name: "Resort Municipality of Whistler", logo: logoWhistler },
  { name: "Vancouver Fraser Port Authority", logo: logoPort },
  { name: "City of Abbotsford", logo: logoAbbotsford },
  { name: "City of Nanaimo", logo: logoNanaimo },
  { name: "City of Maple Ridge", logo: logoMapleRidge },
  { name: "City of Burnaby", logo: logoBurnaby },
  { name: "City of Kelowna", logo: logoKelowna },
  { name: "TransLink", logo: logoTranslink },
  { name: "New Westminster Schools", logo: logoNewWestSchools },
  { name: "PCL Construction", logo: logoPcl },
  { name: "Heatherbrae", logo: logoHeatherbrae },
  { name: "City of Port Coquitlam", logo: logoPortCoquitlam },
  { name: "YVR Vancouver International Airport", logo: logoYvr },
  { name: "Vancouver College", logo: logoVancouverCollege },
  { name: "Diamond Baseball Holdings", logo: logoDiamondBaseball },
  { name: "SBW", logo: logoSbw },
];


const COMPANY_STATS = [
  { value: "35", label: "Years building" },
  { value: "500+", label: "Projects since 1991" },
  { value: "BC", label: "Proudly building across British Columbia" },
];

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    if (muted) void v.play();
    setMuted(!muted);
  };
  return (
    <main id="top" className="bg-background">
      <section className="relative isolate flex min-h-[100vh] flex-col overflow-hidden">
        {/* Background media */}
        <div className="absolute inset-0 -z-20 overflow-hidden bg-primary-deep">
          <video
            src={heroReel.url}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 size-full scale-110 object-cover blur-2xl brightness-75 saturate-[1.2]"
          />
          <video
            ref={videoRef}
            src={heroReelMusic.url}
            poster={heroField.url}
            autoPlay
            muted
            loop
            playsInline
            aria-label="BC Place pitch construction reel"
            className="relative size-full object-contain object-[78%_center] saturate-[1.65] brightness-110 contrast-110"
          />
        </div>
        <div className="absolute inset-0 -z-10 hero-scrim" />

        <SiteNav active="Home" />

        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Turn music on" : "Turn music off"}
          className="absolute right-6 top-28 z-20 inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 bg-primary-deep/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent sm:right-10"
        >
          {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          {muted ? "Sound on" : "Sound off"}
        </button>


        <div className="relative z-10 flex flex-1 items-center px-6 py-16 sm:px-10">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Wilco Civil Inc.
            </p>
            <h1 className="text-display mt-4 text-5xl text-primary-foreground sm:text-7xl lg:text-8xl">
              We build the fields
              <br />
              the world plays on.
            </h1>
            <p className="text-display mt-5 text-xl text-accent sm:text-3xl">
              Built from the ground up. Built for performance.
            </p>

            <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              {DISCIPLINES.map((item) => (
                <li
                  key={item}
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/85"
                >
                  {item}
                </li>
              ))}
            </ul>

            <dl className="mt-10 flex flex-wrap items-end gap-x-12 gap-y-6">
              {COMPANY_STATS.map((stat) => (
                <div key={stat.value}>
                  <dt className="text-display text-5xl text-accent sm:text-6xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 max-w-[11rem] text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground/80">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-6 border-t border-primary-foreground/15 px-6 py-6 sm:px-10">
          <a
            href="#social"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/80 transition-colors hover:text-accent"
          >
            <ChevronDown className="size-4" aria-hidden="true" />
            Latest work
          </a>
          <span className="text-xs font-medium tracking-[0.12em] text-primary-foreground/80">
            FIFA World Cup 26, BC Place
          </span>
        </div>
      </section>

      {/* Featured project — full bleed */}
      <section aria-labelledby="featured-heading" className="bg-primary-deep">
        <Link
          to="/projects/$slug"
          params={{ slug: "world-cup-26-field-of-play" }}
          className="group relative isolate block overflow-hidden"
        >
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <img loading="lazy" decoding="async"
              src={wc2.url}
              alt="Field of play construction inside BC Place"
              className="size-full object-cover saturate-[1.35] brightness-105 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 -z-10 hero-scrim" />
          <div className="flex min-h-[70vh] items-end px-6 py-16 sm:px-10 sm:py-24">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Featured project
              </p>
              <h2
                id="featured-heading"
                className="text-display mt-4 text-4xl text-primary-foreground sm:text-6xl"
              >
                World Cup 26 — Field of Play
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                The natural grass pitch inside BC Place, built to the standard
                of the world&apos;s biggest tournament — drainage, root zone,
                irrigation, ventilation and hybrid sod, certified FIFA Quality
                Pro.
              </p>
              <span className="text-display mt-7 inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-[0.16em] text-accent">
                See the project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Reveal>
          </div>
        </Link>
      </section>

      <section aria-labelledby="intro-heading" className="bg-primary">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-24">
          <Reveal>
            <h2
              id="intro-heading"
              className="text-display text-3xl text-primary-foreground sm:text-5xl"
            >
              Building British Columbia Since 1991
            </h2>
            <div className="mt-5 h-1 w-20 bg-accent" />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              <p>
                Wilco Civil Inc. is a British Columbia contractor specializing in
                sports fields, civil infrastructure, parks, roads, earthworks and
                landscape construction. From natural grass pitches to underground
                servicing and dyke works, our crews deliver projects that are
                built to perform and built to last.
              </p>
              <p>
                We built the natural grass pitch inside BC Place for the FIFA
                World Cup 26 — a surface held to the standards of the world&apos;s
                biggest tournament. We have also rebuilt the field at Nat Bailey
                Stadium, home of the Vancouver Canadians, and taken on site works
                for the 2010 Vancouver Winter Olympics.
              </p>
              <p>
                Those projects sit alongside hundreds of community fields, parks
                and civil packages across the province — the same standard of
                work, whatever the scale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="partners-heading" className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center sm:px-10">
          <h2
            id="partners-heading"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Proud to build for
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-6">
            {PARTNERS.map((p) => (
              <li key={p.name} className="flex min-h-12 w-[28%] items-center justify-center sm:w-[17%] lg:w-[12%]">
                <img
                  src={p.logo.url}
                  alt={p.name}
                  loading="lazy"
                  className="h-10 w-auto max-w-full object-contain mix-blend-multiply sm:h-11 sm:max-w-[140px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SocialFeed />

      <InfoBand />

      <SiteFooter />

    </main>
  );
}
