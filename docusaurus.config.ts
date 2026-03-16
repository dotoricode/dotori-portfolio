import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Dotori Portfolio',
  tagline: 'Built with Docusaurus + GitHub Pages',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://wpfhk.github.io',
  baseUrl: '/dotori-portfolio/',

  organizationName: 'wpfhk',
  projectName: 'dotori-portfolio',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
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
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Dotori Portfolio',
      logo: {
        alt: 'Dotori Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: '소개',
          position: 'left',
        },
        {
          href: 'https://github.com/wpfhk/dotori-portfolio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contents',
          items: [
            {
              label: '소개',
              to: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dotori`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
