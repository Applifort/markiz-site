import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://markiz.example.com',
  redirects: {
    '/docs/nachalo-raboty': '/docs/markiz/nachalo',
    '/docs/operacii': '/docs/markiz/operacii',
    '/docs/etiketki': '/docs/markiz/etiketki',
    '/docs/scenarii': '/docs/markiz/scenarii',
  },
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
  integrations: [
    starlight({
      title: 'База знаний Маркиз',
      description:
        'Как работать с Честным знаком в Маркизе: операции, коды, этикетки, УПД и сценарии.',
      favicon: '/markiz-logo.svg',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      pagefind: true,
      components: {
        Header: './src/components/starlight/Header.astro',
        SiteTitle: './src/components/starlight/SiteTitle.astro',
        ThemeSelect: './src/components/starlight/ThemeSelect.astro',
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
      },
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        { slug: 'docs', label: 'Обзор' },
        {
          label: 'Честный знак',
          items: [
            { slug: 'docs/chestnyj-znak', label: 'Что такое Честный знак' },
            { slug: 'docs/chestnyj-znak/glossarij' },
            { slug: 'docs/chestnyj-znak/zhiznennyj-cikl' },
            { slug: 'docs/chestnyj-znak/kartochka-tovara' },
            { slug: 'docs/chestnyj-znak/emissiya' },
            { slug: 'docs/chestnyj-znak/nanesenie' },
            { slug: 'docs/chestnyj-znak/vvod-v-oborot' },
            { slug: 'docs/chestnyj-znak/otgruzka-upd' },
            { slug: 'docs/chestnyj-znak/vyvod-iz-oborota' },
            { slug: 'docs/chestnyj-znak/etiketka-datamatrix' },
            { slug: 'docs/chestnyj-znak/tovarnye-gruppy' },
            { slug: 'docs/chestnyj-znak/legprom-obuv' },
          ],
        },
        {
          label: 'Маркиз',
          items: [
            { slug: 'docs/markiz/nachalo' },
            { slug: 'docs/markiz/organizaciya' },
            { slug: 'docs/markiz/dashbord' },
            { slug: 'docs/markiz/tovary' },
            { slug: 'docs/markiz/kody' },
            { slug: 'docs/markiz/operacii' },
            { slug: 'docs/markiz/dokumenty' },
            { slug: 'docs/markiz/etiketki' },
            { slug: 'docs/markiz/scenarii' },
            { slug: 'docs/markiz/podklyuchenie-chz' },
          ],
        },
      ],
    }),
  ],
});
