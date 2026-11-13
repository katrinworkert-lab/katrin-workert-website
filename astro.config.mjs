import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.katrin-workert.de',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
});
