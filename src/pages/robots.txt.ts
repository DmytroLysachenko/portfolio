import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapIndexURL: string) => `
User-agent: *
Allow: /

Sitemap: ${sitemapIndexURL}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapIndexHref = site
    ? new URL("sitemap-index.xml", site).href
    : "/sitemap-index.xml";
  return new Response(getRobotsTxt(sitemapIndexHref), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
