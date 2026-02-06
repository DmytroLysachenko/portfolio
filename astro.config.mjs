// @ts-check
import { defineConfig, envField } from "astro/config";
import dotenv from "dotenv";

dotenv.config();

const configuredSite =
  process.env.SITE_URL ?? process.env.BASE_URL ?? "https://www.dlysachenkodev.icu";
const isProd = process.env.NODE_ENV === "production";
const site =
  isProd && configuredSite.includes("localhost")
    ? "https://www.dlysachenkodev.icu"
    : configuredSite;

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "always",
  },
  env: {
    schema: {
      GTM_ID: envField.string({ context: "client", access: "public" }),
    },
  },
  integrations: [],
});
