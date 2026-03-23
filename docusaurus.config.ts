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
    metadata: [
      {name: 'description', content: 'Dotori의 개인 포트폴리오 사이트 - 프로젝트, 기술스택, 경력 소개'},
      {name: 'keywords', content: 'portfolio, developer, projects, skills, typescript, react'},
      {property: 'og:type', content: 'website'},
    ],
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
        { to: '/about', label: '자기소개', position: 'left' },
        { to: '/projects', label: '프로젝트', position: 'left' },
        { to: '/skills', label: '기술스택', position: 'left' },
        { to: '/career', label: '경력', position: 'left' },
        { to: '/contact', label: '연락처', position: 'left' },
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
        {
          title: 'Contact',
          items: [
            {
              label: '연락처',
              to: '/contact',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yourusername',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/yourusername',
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
