import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        'basics/sequences',
        'basics/chaining',
        'basics/speed',
        'basics/styling',
        'basics/controls',
        'basics/patterns',
      ],
    },
    {
      type: 'category',
      label: 'Showcase',
      collapsed: false,
      items: [
        'showcase/hero',
        'showcase/terminal',
        'showcase/ai-chat',
        'showcase/code-editor',
        'showcase/search',
      ],
    },
    'api',
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/accessibility',
        'guides/ssr',
        'guides/performance',
        'guides/faq',
        'guides/migration',
      ],
    },
  ],
};

export default sidebars;
