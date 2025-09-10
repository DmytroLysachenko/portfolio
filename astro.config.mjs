// @ts-check
import { defineConfig, envField } from "astro/config";
import dotenv from "dotenv";
import sitemap from "@astrojs/sitemap";

dotenv.config();

const site = process.env.BASE_URL;

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "ignore",
  env: {
    schema: {
      GTM_ID: envField.string({ context: "client", access: "public" }),
    },
  },
  integrations: [sitemap()],
});
