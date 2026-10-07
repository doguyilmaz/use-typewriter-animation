import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'api',
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        'examples/rotating-words',
        'examples/chaining',
        'examples/terminal',
        'examples/controls',
        'examples/streaming',
        'examples/playground',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: ['guides/accessibility', 'guides/ssr-and-compiler', 'guides/migration'],
    },
  ],
};

export default sidebars;
