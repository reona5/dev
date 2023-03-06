import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

export default defineConfig({
  site: 'https://reona.dev',
  integrations: [mdx(), sitemap(), tailwind(), image()],
})
