# 🤝 Contributing to use-typewriter-animation

We welcome contributions! This guide will help you get started contributing to the `use-typewriter-animation` project.

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [🛠️ Development Setup](#️-development-setup)
- [📝 Types of Contributions](#-types-of-contributions)
- [🔄 Pull Request Process](#-pull-request-process)
- [🧪 Testing Guidelines](#-testing-guidelines)
- [📖 Documentation](#-documentation)
- [🐛 Bug Reports](#-bug-reports)
- [💡 Feature Requests](#-feature-requests)
- [📏 Code Style](#-code-style)
- [📜 License](#-license)

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/your-username/use-typewriter-animation.git` (replace `your-username` with your GitHub username)
3. **Install** dependencies: `bun install`
4. **Run** tests: `bun test`
5. **Build** the project: `bun run build`

## 🛠️ Development Setup

### Prerequisites

- **Node.js** 18.0.0 or higher
- **Bun** 1.0.0 or higher (preferred package manager)
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/doguyilmaz/use-typewriter-animation.git
cd use-typewriter-animation

# Install dependencies
bun install

# Run tests to ensure everything works
bun test

# Start development
bun run watch
```

### Available Scripts

```bash
# Build the project
bun run build

# Run tests
bun test
bun test:coverage
bun test:watch
bun test:ui

# Type checking
bun run types

# Format code
bun run format

# Watch for changes during development
bun run watch

# Analyze bundle
bun run analyze
```

## 📝 Types of Contributions

We welcome several types of contributions:

### 🐛 **Bug Fixes**

- Fix existing bugs
- Improve error handling
- Performance improvements
- SSR/RSC compatibility fixes

### ✨ **New Features**

- New animation types
- Additional customization options
- React 19 concurrent features
- Accessibility improvements

### 📖 **Documentation**

- Fix typos or unclear explanations
- Add examples and use cases
- Improve API documentation
- Create tutorials and guides

### 🧪 **Tests**

- Add missing test coverage
- Improve test reliability
- Add integration tests
- Performance benchmarks

### 🔄 **Refactoring**

- Code quality improvements
- TypeScript enhancements
- Bundle size optimizations
- Developer experience improvements

## 🔄 Pull Request Process

### Before You Start

1. **Check existing issues** - Ensure your contribution isn't already being worked on
2. **Create an issue** - For significant changes, create an issue first to discuss
3. **Follow conventions** - Use our code style and commit message format

### Making Changes

1. **Create a branch** from `main`:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following our guidelines
3. **Write tests** for new functionality
4. **Update documentation** if needed
5. **Ensure tests pass**: `bun test`
6. **Build successfully**: `bun run build`

### Submitting

1. **Commit changes** with descriptive messages:

   ```bash
   git commit -m "feat: add concurrent typing animations"
   git commit -m "fix: resolve SSR hydration mismatch"
   git commit -m "docs: update installation guide"
   ```

2. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** with:
   - Clear title and description
   - Reference related issues
   - List of changes made
   - Screenshots/GIFs for UI changes

## 🧪 Testing Guidelines

### Test Requirements

- **Unit tests** for all new functions/hooks
- **Integration tests** for complex features
- **TypeScript type tests** for type safety
- **Performance tests** for critical paths

### Running Tests

```bash
# Run all tests
bun test

# Watch mode for development
bun test:watch

# Coverage report
bun test:coverage

# Visual test UI
bun test:ui
```

### Test Structure

```typescript
describe('useTypewriter', () => {
  describe('basic functionality', () => {
    test('should render text progressively', () => {
      // Test implementation
    });
  });

  describe('edge cases', () => {
    test('should handle empty text', () => {
      // Test implementation
    });
  });
});
```

## 📖 Documentation

### Documentation Standards

- **Clear examples** with copy-paste code
- **TypeScript types** for all APIs
- **Common use cases** and patterns
- **Troubleshooting** for known issues

### Documentation Structure

```
docs/
├── api/                 # API reference
├── guides/             # Usage guides
├── examples/           # Code examples
├── contributing/       # Contributing docs
└── README.md          # Main documentation
```

### Writing Style

- Use **clear, concise language**
- Include **working code examples**
- Add **TypeScript types** in examples
- Use **consistent formatting**

## 🐛 Bug Reports

When reporting bugs, please include:

### Required Information

- **React version** you're using
- **use-typewriter-animation version**
- **Environment** (browser, Node.js, etc.)
- **Minimal reproduction** (CodeSandbox preferred)

### Bug Report Template

```markdown
**Description**
A clear description of the bug.

**Steps to Reproduce**

1. Step one
2. Step two
3. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Environment**

- React: 18.2.0
- use-typewriter-animation: 3.5.0
- Browser: Chrome 120
- OS: macOS 14

**Minimal Reproduction**
Link to CodeSandbox or minimal repository.
```

## 💡 Feature Requests

For feature requests, please provide:

- **Use case** - Why is this needed?
- **Proposed API** - How should it work?
- **Examples** - Show usage examples
- **Alternatives** - What workarounds exist?

## 📏 Code Style

### TypeScript Guidelines

- Use **strict TypeScript** settings
- Export **proper types** for all APIs
- Add **JSDoc comments** for public APIs
- Use **generic types** where appropriate

### React Guidelines

- Use **function components** with hooks
- Follow **React best practices**
- Ensure **SSR compatibility**
- Support **React 16.8+**

### Code Formatting

We use **Biome** for formatting:

```bash
# Format code
bun run format

# Check formatting
bun run format --check
```

### Commit Messages

Use conventional commits format:

```bash
feat: add new animation type
fix: resolve timing issue
docs: update API reference
test: add edge case coverage
refactor: improve performance
chore: update dependencies
```

## 📜 License

By contributing, you agree that your contributions will be licensed under the **MIT License**.

## 🙏 Recognition

Contributors will be:

- **Listed** in the README
- **Credited** in release notes
- **Mentioned** in the changelog
- **Thanked** in the community

## 📞 Getting Help

Need help contributing?

- 💬 [GitHub Discussions](https://github.com/doguyilmaz/use-typewriter-animation/discussions)
- 🐛 [GitHub Issues](https://github.com/doguyilmaz/use-typewriter-animation/issues)
- 📧 Create an issue with the `question` label

---

**Thank you for contributing to use-typewriter-animation!** 🎉

Your contributions help make this library better for everyone. Every contribution, no matter how small, is appreciated and makes a difference.
