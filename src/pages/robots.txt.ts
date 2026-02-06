import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: string) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapHref = site
    ? new URL("sitemap.xml", site).href
    : "/sitemap.xml";
  return new Response(getRobotsTxt(sitemapHref), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
