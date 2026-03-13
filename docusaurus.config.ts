import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'mdoc',
  tagline: 'Obsidian 기반 공개 문서 사이트',
  favicon: 'img/favicon.ico',

  url: 'https://seihwanmoon.github.io',
  baseUrl: '/mdoc/',

  organizationName: 'seihwanMoon',
  projectName: 'mdoc',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/seihwanMoon/mdoc/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'mdoc',
      logo: {
        alt: 'mdoc logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '문서',
        },
        {
          to: '/docs/intro',
          label: '시작하기',
          position: 'left',
        },
        {
          href: 'https://github.com/seihwanMoon/mdoc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: '소개', to: '/docs/intro' },
            { label: '작성 규칙', to: '/docs/guide/writing-rules' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/seihwanMoon/mdoc' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} mdoc`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
