import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
      logo: {
        src: './src/assets/markiz-mark.svg',
        alt: 'Маркиз',
      },
      components: {
        SocialIcons: './src/components/starlight/SocialIcons.astro',
      },
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Начало работы',
          items: [
            { slug: 'docs', label: 'Обзор' },
            { slug: 'docs/nachalo-raboty' },
          ],
        },
        {
          label: 'Честный знак в Маркизе',
          items: [{ slug: 'docs/chestnyj-znak' }, { slug: 'docs/operacii' }],
        },
        {
          label: 'Этикетки',
          items: [{ slug: 'docs/etiketki' }],
        },
        {
          label: 'Сценарии',
          items: [{ slug: 'docs/scenarii' }],
        },
      ],
    }),
  ],
});
