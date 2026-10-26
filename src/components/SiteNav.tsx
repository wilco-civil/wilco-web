import { Link } from "@tanstack/react-router";

import wilcoLogo from "@/assets/wilco-logo.png";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav({ active }: { active: string }) {
  return (
    <nav
      aria-label="Main navigation"
      className="relative z-20 border-b border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-3 sm:px-10 sm:py-4">
        <Link to="/" className="flex items-center">
          <img
            src={wilcoLogo}
            alt="Wilco Civil Inc."
            className="h-12 w-auto sm:h-16"
          />
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-8 gap-y-2 sm:gap-x-10">
          {NAV_LINKS.map((link) => {
            const isActive = link.label === active;
            const className = `text-display relative pb-1.5 text-sm font-bold tracking-wide text-primary transition-colors hover:text-accent sm:text-base ${
              isActive ? "nav-active" : ""
            }`;
            return (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link
                    to={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={className}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className={className}>
                    {link.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
