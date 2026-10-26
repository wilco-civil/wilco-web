// Production origin. Used for canonical URLs, Open Graph tags, sitemap.xml and
// robots.txt (update public/robots.txt too if this changes).
export const SITE_URL = "https://www.wilcocivil.ca";

export const SITE_NAME = "Wilco Civil Inc.";

// 1200x630 share image served from public/.
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).href;
}

export function canonicalLink(path: string) {
  return { rel: "canonical", href: absoluteUrl(path) };
}
