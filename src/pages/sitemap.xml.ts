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

  const urls = [
    "/",
    "/about",
    "/projects",
    ...projects.map((entry) => `/project/${entry.id}`),
  ].map((path) => new URL(normalizePath(path), base).href);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
