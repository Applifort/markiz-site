import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://markiz.example.com',
  server: {
    host: true,
    port: 4321,
    allowedHosts: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
