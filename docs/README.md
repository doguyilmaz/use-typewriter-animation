# Documentation Site

This directory contains the Docusaurus-based documentation site for `use-typewriter-animation`.

## 🚀 Quick Start

### Development

```bash
# From root directory
bun run docs:dev

# Or from docs-site directory
cd docs-site
bun install
bun run start
```

### Build

```bash
# From root directory
bun run docs:build

# Or from docs-site directory
cd docs-site
bun run build
```

## 📁 Structure

**📚 Consolidated Documentation**: All docs are now unified in this directory.

```
docs-site/
├── docs/                    # All documentation content
│   ├── intro.md             # Main welcome page
│   ├── getting-started/     # Setup and quick start guides
│   ├── examples/            # Live interactive examples
│   │   ├── basic/           # Basic examples
│   │   ├── creative/        # Creative use cases
│   │   └── advanced/        # Advanced features
│   ├── api/                 # API reference docs
│   ├── guides/              # Feature and usage guides
│   ├── contributing/        # Contributing guides (NEW)
│   └── ROADMAP.md           # Project roadmap (NEW)
├── src/
│   ├── components/          # Reusable components
│   ├── pages/               # Custom pages (home, examples)
│   └── css/                 # Custom styles
├── static/                  # Static assets
├── docusaurus.config.ts
└── sidebars.ts
```

## ✨ Features

- **Live Examples**: Interactive code examples with live preview
- **Responsive Design**: Mobile-friendly documentation
- **Search**: Built-in search functionality
- **Dark Mode**: Toggle between light and dark themes
- **Auto-Deploy**: Automatic deployment to GitHub Pages

## 🔧 Adding Content

### New Documentation Page

1. Create a new `.md` file in `docs/`
2. Add it to `sidebars.ts`
3. Content will auto-reload in development

### New Example

1. Add component to `src/pages/examples.tsx`
2. Include live preview and source code
3. Example will be interactive on the site

## 🌐 Deployment

The site auto-deploys to GitHub Pages when you push to main branch:

**URL**: https://doguyilmaz.github.io/use-typewriter-animation/

## 📚 Docusaurus Documentation

For more information about Docusaurus features:

- [Docusaurus Documentation](https://docusaurus.io/)
- [MDX Documentation](https://mdxjs.com/)
- [Live Code Blocks](https://docusaurus.io/docs/markdown-features/code-blocks#interactive-code-editor)
