import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  publicDir: "./src/assets",
  site: "https://dev-by-astro.github.io",
  experimental: {
    assets: true,
  },
  markdown: {
    shikiConfig: {
      wrap: true,
    },
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
