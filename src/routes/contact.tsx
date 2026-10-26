import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import servicesHero from "@/assets/services-hero.jpg.asset.json";
import { ContactForm } from "@/components/ContactForm";
import { InfoBand, SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Wilco Civil Inc." },
      {
        name: "description",
        content:
          "Get in touch with Wilco Civil Inc. Call 604-882-4752 or send us a message about sports field, civil and landscape construction projects in British Columbia.",
      },
      { property: "og:title", content: "Contact | Wilco Civil Inc." },
      {
        property: "og:description",
        content:
          "Reach the Wilco Civil team in Langley, BC for tenders, project enquiries and careers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const DETAILS = [
  {
    icon: Phone,
    label: "Phone",
    value: "604-882-4752",
    href: "tel:+16048824752",
  },
  {
    icon: Mail,
    label: "General Inquiries",
    value: "info@wilcocivil.ca",
    href: "mailto:info@wilcocivil.ca",
  },
  {
    icon: Mail,
    label: "Careers",
    value: "careers@wilcocivil.ca",
    href: "mailto:careers@wilcocivil.ca",
  },
  {
    icon: Mail,
    label: "Accounts Payable",
    value: "accounts@wilcocivil.ca",
    href: "mailto:accounts@wilcocivil.ca",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "7286 Telegraph Trail, Langley, BC V1M 2M6",
    href: "https://www.google.com/maps/search/?api=1&query=7286+Telegraph+Trail+Langley+BC+V1M+2M6",
  },
];

const MAP_EMBED =
  "https://www.google.com/maps?q=7286+Telegraph+Trail,+Langley,+BC+V1M+2M6&output=embed";

function Contact() {
  return (
    <main className="bg-background">
      <SiteNav active="Contact" />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src={servicesHero.url}
            alt="Aerial view of a completed Wilco Civil park and sports field project"
            width={1920}
            height={1080}
            className="size-full slow-zoom object-cover object-[center_78%] saturate-[1.3] brightness-105 contrast-105"
          />
        </div>
        <div className="absolute inset-0 -z-10 hero-scrim" />
        <div className="flex min-h-[45vh] items-end px-6 py-20 sm:min-h-[50vh] sm:px-10 sm:py-28">
          <div className="w-full text-left">
            <h1 className="text-display text-5xl text-primary-foreground sm:text-7xl">
              Contact
            </h1>
            <p className="text-display mt-4 max-w-2xl text-lg text-accent sm:text-2xl">
              Let&apos;s Build Something That Lasts.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-display text-3xl text-primary sm:text-4xl">
              Get In Touch
            </h2>
            <div className="mt-5 h-1 w-20 bg-accent" />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/80">
              Tenders, project enquiries, supplier questions or careers — reach
              the team directly and we will get back to you.
            </p>

            <dl className="mt-10 space-y-8">
              {DETAILS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon
                    className="mt-1 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-lg font-bold text-foreground">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="transition-colors hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-l-2 border-accent bg-card px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Office hours
              </p>
              <p className="mt-2 text-sm text-foreground/80">
                Monday to Friday, 7:30am – 5:00pm
              </p>
            </div>

            <div className="mt-8 aspect-[4/3] w-full overflow-hidden rounded-sm border border-border">
              <iframe
                title="Map to Wilco Civil headquarters, 7286 Telegraph Trail, Langley"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full border-0"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <InfoBand />
      <SiteFooter />
    </main>
  );
}
