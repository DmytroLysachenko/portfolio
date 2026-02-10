import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

const normalizePath = (path: string) => {
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}/` : "/";
};

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("https://www.dlysachenkodev.icu");
  const projects = await getCollection("project");
  const now = new Date().toISOString();

  const entries = [
    {
      path: "/",
      changefreq: "monthly",
      priority: "1.0",
      lastmod: now,
    },
    {
      path: "/about",
      changefreq: "yearly",
      priority: "0.6",
      lastmod: now,
    },
    {
      path: "/projects",
      changefreq: "monthly",
      priority: "0.8",
      lastmod: now,
    },
    ...projects.map((entry) => ({
      path: `/project/${entry.id}`,
      changefreq: "yearly",
      priority: "0.6",
      lastmod: entry.data.publishDate.toISOString(),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((item) => {
    const loc = new URL(normalizePath(item.path), base).href;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
