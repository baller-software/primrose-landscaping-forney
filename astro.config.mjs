import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://baller-software.github.io',
  base: '/primrose-landscaping-forney',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
