import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: string, sitemapIndexURL: string) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL}
Sitemap: ${sitemapIndexURL}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapIndexHref = site
    ? new URL("sitemap-index.xml", site).href
    : "/sitemap-index.xml";
  const sitemapHref = site
    ? new URL("sitemap.xml", site).href
    : "/sitemap.xml";
  return new Response(getRobotsTxt(sitemapHref, sitemapIndexHref), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
