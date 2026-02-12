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
      { name: "TypeScript", icon: "languages/typescript.webp" },
      { name: "JavaScript", icon: "languages/javascript.webp" },
      { name: "HTML5", icon: "languages/html.webp" },
    ],
  },
  {
    category: "Styling",
    items: [
      { name: "CSS3", icon: "styling/css.webp" },
      { name: "TailwindCSS", icon: "styling/tailwind.webp" },
      { name: "Chakra-UI", icon: "styling/chakra-ui.webp" },
      {
        name: "Shadcn UI",
        icon: "styling/shadcn-ui.webp",
        background: true,
      },
    ],
  },
  {
    category: "Frameworks/Libraries",
    items: [
      { name: "React", icon: "frameworks/react.webp" },
      {
        name: "Next.js",
        icon: "frameworks/next.webp",
        background: true,
      },
      { name: "Astro", icon: "frameworks/astro.webp", background: true },
      { name: "Node.js", icon: "frameworks/node.webp" },
      {
        name: "Express.js",
        icon: "frameworks/express.webp",
        background: true,
      },
    ],
  },

  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: "databases/mongo.webp" },
      { name: "PostgreSQL", icon: "databases/postgre.webp" },
      { name: "SQLite", icon: "databases/sqlite.webp" },
      { name: "Neon", icon: "databases/neon.webp" },
      { name: "Upstash", icon: "databases/upstash.webp" },
      { name: "Appwrite", icon: "databases/appwrite.webp" },
      { name: "Firebase", icon: "databases/firebase.webp" },
      {
        name: "Prisma ORM",
        icon: "databases/prisma.webp",
        background: true,
      },
      { name: "Drizzle ORM", icon: "databases/drizzle.webp" },
    ],
  },
  {
    category: "Instrumentation",
    items: [
      { name: "Redux Toolkit", icon: "instruments/redux.webp" },
      { name: "Tanstack query", icon: "instruments/tanstackquery.webp" },
      {
        name: "GitHub",
        icon: "instruments/github.webp",
        background: true,
      },
      { name: "Git", icon: "instruments/git.webp" },
      { name: "GitLab", icon: "instruments/gitlab.webp" },
      { name: "PNPM", icon: "instruments/pnpm.webp" },
      { name: "NPM", icon: "instruments/npm.webp" },
      { name: "VSC", icon: "instruments/vsc.webp" },
      { name: "Vite", icon: "instruments/vite.webp" },
      { name: "Jira", icon: "instruments/jira.webp" },
      { name: "Trello", icon: "instruments/trello.webp" },
      { name: "Slack", icon: "instruments/slack.webp" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Jest", icon: "testing/jest.webp" },
      { name: "Vitest", icon: "testing/vitest.webp" },
      { name: "Playwright", icon: "testing/playwright.webp" },
      { name: "Postman", icon: "testing/postman.webp" },
    ],
  },
];

export default technologies;
