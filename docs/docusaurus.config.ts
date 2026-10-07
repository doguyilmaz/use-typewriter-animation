import { fileURLToPath } from 'node:url';
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const repo = 'https://github.com/doguyilmaz/use-typewriter-animation';

const config: Config = {
  title: 'use-typewriter-animation',
  tagline: 'Typewriter animations for React',
  favicon: 'img/favicon.ico',
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
    navbar: {
      title: 'use-typewriter-animation',
      logo: { alt: '', src: 'img/logo.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
        { to: '/docs/examples/rotating-words', label: 'Examples', position: 'left' },
        { href: `${repo}/blob/main/CHANGELOG.md`, label: 'Changelog', position: 'right' },
        { href: repo, label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      copyright: `MIT License · <a href="${repo}">GitHub</a> · <a href="https://www.npmjs.com/package/use-typewriter-animation">npm</a>`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
