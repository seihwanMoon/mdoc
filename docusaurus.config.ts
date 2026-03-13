import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'mdoc',
  tagline: 'My docs site',
  favicon: 'img/favicon.ico',

  url: 'https://seihwanmoon.github.io',
  baseUrl: '/mdoc/',

  organizationName: 'seihwanMoon',
  projectName: 'mdoc',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'mdoc',
      items: [{to: '/docs/intro', label: '문서', position: 'left'}],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;