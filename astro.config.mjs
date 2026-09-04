import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  site: 'https://DanaWendyGutierrezZOTES.github.io',

  // Reemplaza con el nombre exacto de tu repositorio en GitHub:
  base: '/mi-portafolio',

  integrations: [tailwind()]
});