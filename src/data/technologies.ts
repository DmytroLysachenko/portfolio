interface ITech {
  name: string;
  icon: string;
  background?: boolean;
}

interface ICategory {
  category: string;
  items: ITech[];
}

const technologies: ICategory[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: "/icons/languages/typescript.webp" },
      { name: "JavaScript", icon: "/icons/languages/javascript.webp" },
      { name: "HTML5", icon: "/icons/languages/html.webp" },
    ],
  },
  {
    category: "Styling",
    items: [
      { name: "CSS3", icon: "/icons/styling/css.webp" },
      { name: "TailwindCSS", icon: "/icons/styling/tailwind.webp" },
      { name: "Chakra-UI", icon: "/icons/styling/chakra-ui.webp" },
      {
        name: "Shadcn UI",
        icon: "/icons/styling/shadcn-ui.webp",
        background: true,
      },
    ],
  },
  {
    category: "Frameworks/Libraries",
    items: [
      { name: "React", icon: "/icons/frameworks/react.webp" },
      {
        name: "Next.js",
        icon: "/icons/frameworks/next.webp",
        background: true,
      },
      { name: "Astro", icon: "/icons/frameworks/astro.webp", background: true },
      { name: "Node.js", icon: "/icons/frameworks/node.webp" },
      {
        name: "Express.js",
        icon: "/icons/frameworks/express.webp",
        background: true,
      },
    ],
  },

  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: "/icons/databases/mongo.webp" },
      { name: "PostgreSQL", icon: "/icons/databases/postgre.webp" },
      { name: "SQLite", icon: "/icons/databases/sqlite.webp" },
      { name: "Neon", icon: "/icons/databases/neon.webp" },
      { name: "Upstash", icon: "/icons/databases/upstash.webp" },
      { name: "Appwrite", icon: "/icons/databases/appwrite.webp" },
      { name: "Firebase", icon: "/icons/databases/firebase.webp" },
      {
        name: "Prisma ORM",
        icon: "/icons/databases/prisma.webp",
        background: true,
      },
      { name: "Drizzle ORM", icon: "/icons/databases/drizzle.webp" },
    ],
  },
  {
    category: "Instrumentation",
    items: [
      { name: "Redux Toolkit", icon: "/icons/instruments/redux.webp" },
      { name: "Tanstack query", icon: "/icons/instruments/tanstackquery.webp" },
      {
        name: "GitHub",
        icon: "/icons/instruments/github.webp",
        background: true,
      },
      { name: "Git", icon: "/icons/instruments/git.webp" },
      { name: "GitLab", icon: "/icons/instruments/gitlab.webp" },
      { name: "PNPM", icon: "/icons/instruments/pnpm.webp" },
      { name: "NPM", icon: "/icons/instruments/npm.webp" },
      { name: "VSC", icon: "/icons/instruments/vsc.webp" },
      { name: "Vite", icon: "/icons/instruments/vite.webp" },
      { name: "Jira", icon: "/icons/instruments/jira.webp" },
      { name: "Trello", icon: "/icons/instruments/trello.webp" },
      { name: "Slack", icon: "/icons/instruments/slack.webp" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Jest", icon: "/icons/testing/jest.webp" },
      { name: "Vitest", icon: "/icons/testing/vitest.webp" },
      { name: "Playwright", icon: "/icons/testing/playwright.webp" },
      { name: "Postman", icon: "/icons/testing/postman.webp" },
    ],
  },
];

export default technologies;
