import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  publicDir: "./src/assets",
  output: "static",
  adapter: vercel(),
  experimental: {
    assets: true,
  },
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      wrap: true,
    },
  },
  site: "https://reona.dev",
  integrations: [mdx(), sitemap(), tailwind()],
});
