import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/basic-usage',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api/use-typewriter', 'api/types', 'api/configuration'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/accessibility', 'guides/performance', 'guides/troubleshooting'],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/contributing',
        'contributing/development', 
        'contributing/testing',
        'contributing/releases'
      ],
    },
    'ROADMAP',
    'examples',
    {
      type: 'category',
      label: 'Live Examples',
      items: [
        {
          type: 'category',
          label: 'Basic',
          items: [
            'examples/basic/simple-typewriter',
            'examples/basic/colorful-text',
            'examples/basic/looping-animation',
            'examples/basic/comprehensive-basic',
          ],
        },
        {
          type: 'category',
          label: 'Creative',
          items: [
            'examples/creative/terminal-simulation',
            'examples/creative/code-editor',
            'examples/creative/chat-simulation',
            'examples/creative/loading-states',
            'examples/creative/storytelling-demo',
          ],
        },
        {
          type: 'category',
          label: 'Interactive',
          items: [
            'examples/interactive/keyboard-controls',
          ],
        },
        {
          type: 'category',
          label: 'Performance',
          items: [
            'examples/performance/virtualization-demo',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'examples/advanced/hero-section',
            'examples/advanced/accessibility-showcase',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
