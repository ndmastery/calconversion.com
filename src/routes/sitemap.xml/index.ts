import type { RequestHandler } from "@builder.io/qwik-city";
import { SITE_URL } from "@/constants/site";

export const onGet: RequestHandler = async ({ send, headers }) => {
  const siteUrl = SITE_URL;
  const routes = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/support", priority: "0.7", changefreq: "monthly" },
    { loc: "/terms", priority: "0.3", changefreq: "yearly" },
    { loc: "/privacy", priority: "0.3", changefreq: "yearly" },
  ];

  const today = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  headers.set("Content-Type", "application/xml");
  send(200, xml);
};
