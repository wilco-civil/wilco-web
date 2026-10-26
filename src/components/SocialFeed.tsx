import { Instagram, ArrowUpRight } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/wilcocivil/";

export function SocialFeed() {
  return (
    <section
      id="social"
      aria-labelledby="social-heading"
      className="bg-background py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Instagram className="size-6" aria-hidden="true" />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-accent-foreground/70">
          From the field
        </p>
        <h2
          id="social-heading"
          className="text-display mt-3 text-3xl text-foreground sm:text-4xl"
        >
          Follow Us on Instagram
        </h2>
        <div className="mt-5 h-1 w-20 bg-accent" />
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          See our latest projects, milestones and crews at work across British
          Columbia.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-display mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          @wilcocivil
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
