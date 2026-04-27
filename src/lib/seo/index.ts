import type { CollectionEntry } from "astro:content";

interface NamedUrl {
  name: string;
  url: string;
}

interface WebPageOptions {
  type?: string;
  name: string;
  url: string;
  description?: string;
  siteUrl: URL;
  image?: string;
  about?: Record<string, unknown>;
  mainEntity?: Record<string, unknown>;
}

const bio =
  "Full-stack developer specializing in modern web architectures and AI-driven automation. Experienced in building scalable applications with React/Next.js and extending system intelligence through Agentic AI, MCP servers, and serverless cloud solutions.";

const basePerson = (siteUrl: URL) => ({
  "@type": "Person",
  name: "Dmytro Lysachenko",
  jobTitle: "Full-Stack Developer",
  description: bio,
  url: siteUrl.href,
  image: new URL("seo-preview.webp", siteUrl).href,
  email: "mailto:dlysachenko98@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bydgoszcz",
    addressCountry: "PL",
  },
  knowsLanguage: ["English", "Polish", "Ukrainian", "Russian"],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Astro",
    "GCP (Google Cloud Platform)",
    "Agentic AI",
    "Model Context Protocol (MCP)",
    "Xano",
    "C#",
    ".NET",
  ],
  hasOccupation: [
    { "@type": "Occupation", name: "Web Developer" },
    { "@type": "Occupation", name: "Full-Stack Engineer" },
    { "@type": "Occupation", name: "AI Automation Developer" },
  ],
  sameAs: [
    "https://www.linkedin.com/in/dmytro-lysachenko",
    "https://github.com/DmytroLysachenko",
  ],
});

const website = (siteUrl: URL) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dmytro Lysachenko | Portfolio",
  url: siteUrl.href,
  inLanguage: "en",
});

const professionalService = (
  siteUrl: URL,
  person: Record<string, unknown>,
) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dmytro Lysachenko",
  url: siteUrl.href,
  founder: person,
  areaServed: ["Poland", "Europe", "Worldwide"],
  serviceType: [
    "Web Development",
    "Full-Stack Development",
    "AI Automation & Agentic Solutions",
    "Cloud Integrations",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business inquiries",
    email: "mailto:dlysachenko98@gmail.com",
  },
});

const webPage = ({
  type = "WebPage",
  name,
  url,
  description,
  siteUrl,
  image,
  about,
  mainEntity,
}: WebPageOptions) => ({
  "@context": "https://schema.org",
  "@type": type,
  name,
  url,
  ...(description ? { description } : {}),
  isPartOf: {
    "@type": "WebSite",
    url: siteUrl.href,
  },
  ...(image
    ? {
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: image,
        },
      }
    : {}),
  ...(about ? { about } : {}),
  ...(mainEntity ? { mainEntity } : {}),
});

const breadcrumbs = (items: NamedUrl[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

const collectionPage = ({
  name,
  url,
  siteUrl,
  image,
  items,
}: {
  name: string;
  url: string;
  siteUrl: URL;
  image?: string;
  items: NamedUrl[];
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  url,
  isPartOf: {
    "@type": "WebSite",
    url: siteUrl.href,
  },
  ...(image
    ? {
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: image,
        },
      }
    : {}),
  hasPart: items.map((item) => ({
    "@type": "CreativeWork",
    name: item.name,
    url: item.url,
  })),
});

const itemList = (items: NamedUrl[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: item.url,
  })),
});

const softwareApplication = ({
  entry,
  siteUrl,
  person,
  image,
}: {
  entry: CollectionEntry<"project">;
  siteUrl: URL;
  person: Record<string, unknown>;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: entry.data.title,
  description: entry.data.description,
  url: new URL(`/project/${entry.id}/`, siteUrl).href,
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  keywords: entry.data.tags.join(", "),
  author: person,
  datePublished: entry.data.publishDate.toISOString(),
  isPartOf: {
    "@type": "WebSite",
    url: siteUrl.href,
  },
  ...(image ? { image } : {}),
});

export {
  basePerson,
  bio,
  breadcrumbs,
  collectionPage,
  itemList,
  professionalService,
  softwareApplication,
  webPage,
  website,
};
