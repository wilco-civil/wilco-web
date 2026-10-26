import { createFileRoute } from "@tanstack/react-router";

import { PROJECTS } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

const STATIC_PATHS = ["/", "/services", "/projects", "/who-we-are", "/careers", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = [...STATIC_PATHS, ...PROJECTS.map((p) => `/projects/${p.slug}`)];
        const urls = paths
          .map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
