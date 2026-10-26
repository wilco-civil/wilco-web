import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PROJECTS } from "@/data/projects";

const SLIDES = PROJECTS.filter((p) => p.photos.length > 0).map((project) => ({
  slug: project.slug,
  title: project.title,
  location: project.location.split(",").slice(-2).join(",").trim(),
  url: project.photos[0]!.url,
  alt: project.photos[0]!.alt,
}));

export function ProjectSlideshow() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  const current = SLIDES[index]!;

  return (
    <section
      aria-label="Project photo slideshow"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <h2 className="text-display text-3xl text-primary sm:text-4xl">
          Our Work
        </h2>
        <div className="mt-5 h-1 w-20 bg-accent" />

        <div className="relative mx-auto mt-8 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-sm bg-primary-deep">
          {SLIDES.map((slide, i) => (
            <img decoding="async"
              key={slide.slug}
              src={slide.url}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i === index ? undefined : true}
            />
          ))}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/90 to-transparent px-5 pb-12 pt-16">
            <Link
              to="/projects/$slug"
              params={{ slug: current.slug }}
              className="text-display block text-lg text-primary-foreground transition-colors hover:text-accent sm:text-2xl"
            >
              {current.title}
            </Link>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {current.location}
            </p>
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm border border-primary-foreground/30 bg-primary-deep/60 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm border border-primary-foreground/30 bg-primary-deep/60 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.slug}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to ${slide.title}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-1.5 w-7 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-primary-foreground/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
