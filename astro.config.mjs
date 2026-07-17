import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kpab.github.io',
  base: '/astro-darkness',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});
