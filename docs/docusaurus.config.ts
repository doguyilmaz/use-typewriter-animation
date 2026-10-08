import { fileURLToPath } from 'node:url';
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const repo = 'https://github.com/doguyilmaz/use-typewriter-animation';

const config: Config = {
  title: 'use-typewriter-animation',
  tagline: 'Typewriter effects for React 18 and 19',
  favicon: 'img/logo.svg',
  url: 'https://doguyilmaz.github.io',
  baseUrl: '/use-typewriter-animation/',
  organizationName: 'doguyilmaz',
  projectName: 'use-typewriter-animation',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },
  future: { v4: true },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${repo}/tree/main/docs/`,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // The examples import 'use-typewriter-animation'; point it at the source in this repository,
    // and resolve its imports (React) from this site's node_modules so there is one React.
    () => ({
      name: 'local-library',
      configureWebpack: () => ({
        resolve: {
          alias: {
            'use-typewriter-animation$': fileURLToPath(new URL('../src/index.ts', import.meta.url)),
          },
          modules: [fileURLToPath(new URL('node_modules', import.meta.url)), 'node_modules'],
        },
      }),
    }),
  ],

  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'use-typewriter-animation',
      logo: { alt: '', src: 'img/logo.svg' },
      hideOnScroll: false,
      items: [
        {
          to: '/docs/intro',
          label: 'Docs',
          position: 'left',
          activeBaseRegex: '/docs/(intro|guides)',
        },
        {
          to: '/docs/basics/sequences',
          label: 'Examples',
          position: 'left',
          activeBaseRegex: '/docs/basics',
        },
        {
          to: '/docs/showcase/hero',
          label: 'Showcase',
          position: 'left',
          activeBaseRegex: '/docs/showcase',
        },
        { to: '/docs/api', label: 'API', position: 'left' },
        {
          href: 'https://www.npmjs.com/package/use-typewriter-animation',
          label: 'npm',
          position: 'right',
        },
        { href: repo, label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting started', to: '/docs/intro' },
            { label: 'API reference', to: '/docs/api' },
            { label: 'Migrating from v3', to: '/docs/guides/migration' },
          ],
        },
        {
          title: 'Examples',
          items: [
            { label: 'Basics', to: '/docs/basics/sequences' },
            { label: 'Showcase', to: '/docs/showcase/hero' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'GitHub', href: repo },
            { label: 'npm', href: 'https://www.npmjs.com/package/use-typewriter-animation' },
            { label: 'Changelog', href: `${repo}/blob/main/CHANGELOG.md` },
          ],
        },
      ],
      copyright: 'MIT License',
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
    },
    tableOfContents: { maxHeadingLevel: 3 },
  } satisfies Preset.ThemeConfig,
};

export default config;
