import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
      wrap: true,
    },
  },
  site: 'https://reona.dev',
  integrations: [mdx(), sitemap(), tailwind(), image()],
})
