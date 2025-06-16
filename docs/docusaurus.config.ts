import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'use-typewriter-animation',
  tagline: 'Modern React Typewriter Hook with TypeScript Support',
  favicon: 'img/apple-touch-icon.png',

  url: 'https://doguyilmaz.github.io',
  baseUrl: '/use-typewriter-animation/',

  organizationName: 'doguyilmaz',
  projectName: 'use-typewriter-animation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/doguyilmaz/use-typewriter-animation/tree/main/docs-site/',
          breadcrumbs: true,
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'use-typewriter-animation',
      logo: {
        alt: 'Typewriter Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/examples',
          label: 'Examples',
          position: 'left',
        },
        {
          to: '/docs/changelog',
          label: 'Changelog',
          position: 'left',
        },
        {
          href: 'https://github.com/doguyilmaz/use-typewriter-animation',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/package/use-typewriter-animation',
          label: 'npm',
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
            {
              label: 'Quick Start',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'API Reference',
              to: '/docs/api/use-typewriter',
            },
            {
              label: 'Accessibility Guide',
              to: '/docs/guides/accessibility',
            },
            {
              label: 'Performance Tips',
              to: '/docs/guides/performance',
            },
          ],
        },
        {
          title: 'Examples',
          items: [
            {
              label: 'Basic Examples',
              to: '/docs/examples/basic/simple-typewriter',
            },
            {
              label: 'Creative Examples',
              to: '/docs/examples/creative/terminal-simulation',
            },
            {
              label: 'Advanced Examples',
              to: '/docs/examples/advanced/hero-section',
            },
            {
              label: 'Examples Showcase',
              to: '/docs/examples',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'TypeScript Types',
              to: '/docs/api/types',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/guides/troubleshooting',
            },
            {
              label: 'Changelog',
              to: '/docs/changelog',
            },
            {
              label: 'Contributing',
              to: '/docs/contributing',
            },
            {
              label: 'Roadmap',
              to: '/docs/ROADMAP',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/doguyilmaz/use-typewriter-animation',
            },
            {
              label: 'npm Package',
              href: 'https://www.npmjs.com/package/use-typewriter-animation',
            },
            {
              label: 'Issues',
              href: 'https://github.com/doguyilmaz/use-typewriter-animation/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/doguyilmaz/use-typewriter-animation/discussions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/doguyilmaz" target="_blank" rel="noopener noreferrer">@doguyilmaz</a> • Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
  } satisfies Preset.ThemeConfig,

  themes: ['@docusaurus/theme-live-codeblock'],
};

export default config;
