import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import astroPlugin from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import unusedImports from "eslint-plugin-unused-imports";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";

const require = createRequire(import.meta.url);
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsPluginPath = require.resolve("@typescript-eslint/eslint-plugin");
const tsStrictTypeChecked = require(
  path.join(path.dirname(tsPluginPath), "configs", "flat", "strict-type-checked.js")
).default;
const tsStylisticTypeChecked = require(
  path.join(path.dirname(tsPluginPath), "configs", "flat", "stylistic-type-checked.js")
).default;
const tsFiles = ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"];
const tsConfigRoot = path.dirname(fileURLToPath(import.meta.url));
const withTsFiles = (config) => ({
  ...config,
  files: tsFiles,
  languageOptions: {
    ...(config.languageOptions ?? {}),
    parser: tsParser,
    parserOptions: {
      ...(config.languageOptions?.parserOptions ?? {}),
      project: "./tsconfig.json",
      tsconfigRootDir: tsConfigRoot,
    },
  },
});

export default [
  {
    ignores: [
      "node_modules",
      "dist",
      ".astro",
      "eslint.config.js",
      "**/*.astro/*.ts",
      "**/*.astro/*.tsx",
      "src/content/**",
    ],
  },
  js.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^astro:", "^astro/"],
        },
      ],
      "import/no-cycle": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["astro.config.mjs", "src/pages/robots.txt.ts"],
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
    rules: {
      "import/no-unresolved": "off",
    },
  },
  {
    files: ["scripts/**/*.mjs"],
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly",
      },
    },
  },
  ...tsStrictTypeChecked(tsPlugin, tsParser).map(withTsFiles),
  ...tsStylisticTypeChecked(tsPlugin, tsParser).map(withTsFiles),
  {
    files: tsFiles,
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false },
      ],
      "@typescript-eslint/no-unused-vars": [
        "off",
      ],
    },
  },
  ...astroPlugin.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    rules: {
      "import/no-unresolved": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
