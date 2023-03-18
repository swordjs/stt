import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3001
  },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true
        }
      }
    }
  },
  integrations: [UnoCSS({}), svelte()]
});
