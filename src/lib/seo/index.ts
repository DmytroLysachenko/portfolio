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
  "Software developer working with TypeScript, React, Next.js, full-stack applications, and custom WordPress sites with PHP. Experience with APIs, cloud integrations, and reusable UI components.";

const basePerson = (siteUrl: URL) => ({
  "@type": "Person",
  name: "Dmytro Lysachenko",
  jobTitle: "Software Engineer",
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
    "React Native",
    "Expo",
    "Node.js",
    "Next.js",
    "PHP",
    "WordPress",
    "Sage 11",
    "Acorn",
    "Laravel",
    "Blade",
    "Advanced Custom Fields (ACF)",
    "Astro",
    "GCP (Google Cloud Platform)",
    "Docker",
    "Agentic AI",
    "Model Context Protocol (MCP)",
    "Xano",
    "C#",
    ".NET",
  ],
  hasOccupation: [
    { "@type": "Occupation", name: "Web Developer" },
    { "@type": "Occupation", name: "Software Engineer" },
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
}) => {
  const isMobileApp = entry.data.tags.includes("Mobile App");
  const isBackendApi = entry.data.tags.includes("Backend Development");

  return {
    "@context": "https://schema.org",
    "@type": isMobileApp ? "MobileApplication" : "SoftwareApplication",
    name: entry.data.title,
    description: entry.data.description,
    url: new URL(`/project/${entry.id}/`, siteUrl).href,
    applicationCategory: isMobileApp
      ? "MobileApplication"
      : isBackendApi
        ? "Backend API"
        : "WebApplication",
    ...(!isMobileApp && !isBackendApi ? { operatingSystem: "Web" } : {}),
    keywords: entry.data.tags.join(", "),
    author: person,
    datePublished: entry.data.publishDate.toISOString(),
    isPartOf: {
      "@type": "WebSite",
      url: siteUrl.href,
    },
    ...(image ? { image } : {}),
  };
};

export {
  basePerson,
  bio,
  breadcrumbs,
  collectionPage,
  itemList,
  softwareApplication,
  webPage,
  website,
};
