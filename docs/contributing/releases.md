# 🚀 Release Process

This guide covers the release process for `use-typewriter-animation` maintainers.

## 📋 Release Types

We follow [Semantic Versioning](https://semver.org/):

- **Patch** (3.5.1) - Bug fixes, documentation updates
- **Minor** (3.6.0) - New features, non-breaking changes
- **Major** (4.0.0) - Breaking changes, major refactors

## ✅ Pre-Release Checklist

### Code Quality

```bash
bun test              # All tests pass
bun run build         # Build succeeds
bun run types         # No TypeScript errors
bun run format        # Code formatted
bun run analyze       # Bundle size acceptable
```

### Documentation

- [ ] API documentation updated
- [ ] Examples work with new features
- [ ] README updated if needed
- [ ] Migration guide (for breaking changes)

### Testing

- [ ] Coverage >80%
- [ ] SSR compatibility verified
- [ ] Cross-browser testing completed

## 🔄 Release Workflow

### 1. Prepare Release

```bash
# Create release branch
git checkout main
git pull origin main
git checkout -b release/v3.6.0

# Verify everything works
bun test && bun run build
```

### 2. Update Version

```bash
# Interactive version bump
bun run version

# This will:
# - Prompt for version type (patch/minor/major)
# - Update package.json
# - Generate changelog entry
# - Create git commit and tag
```

### 3. Test Release Build

```bash
# Build and verify
bun run build
bun run pack

# Check package contents
tar -tf use-typewriter-animation-*.tgz

# Verify bundle size
bun run analyze
```

### 4. Create Pull Request

```bash
# Push release branch
git push origin release/v3.6.0
```

**PR Template:**

```markdown
## 🚀 Release v3.6.0

### Changes

- [ ] Version bumped to 3.6.0
- [ ] Changelog updated
- [ ] Documentation updated
- [ ] All tests passing

### Review Notes

[Description of changes and special considerations]
```

## 📝 Changelog Format

```markdown
## [3.6.0] - 2025-01-14

### ✨ New Features

- Added concurrent typing support
- New performance monitoring utilities

### 🐛 Bug Fixes

- Fixed SSR hydration issues
- Resolved timing inconsistencies

### 📚 Documentation

- Updated API reference
- Added migration guide

### 🙏 Contributors

Thanks to [@username1](link), [@username2](link)!
```

## 🎉 Publishing

### Automated Publishing

```bash
# Full release pipeline
bun run release

# This runs:
# 1. Version bump (interactive)
# 2. Build and test
# 3. Create package
# 4. Publish to npm
```

### Manual Publishing

```bash
# Build the project
bun run build

# Create and verify package
bun run pack
tar -tf use-typewriter-animation-*.tgz

# Publish to npm
npm publish

# Tag release on GitHub
git tag v3.6.0
git push origin v3.6.0
```

## 📞 Post-Release

### 1. Create GitHub Release

````markdown
# Release v3.6.0

## 🎉 What's New

Brief description of release highlights

## 📦 Installation

```bash
bun add use-typewriter-animation@3.6.0
```
````

## 🔗 Links

- [Full Changelog](CHANGELOG.md#360---2025-01-14)
- [Documentation](docs/README.md)

````

### 2. Update Documentation
- [ ] Update README with new version
- [ ] Verify examples work
- [ ] Update migration guides
- [ ] Check all links

### 3. Monitor Release
- 📊 Download statistics
- 🐛 Bug reports
- 💬 Community feedback

## 🚨 Hotfix Process

For critical bugs:

```bash
# Create hotfix branch
git checkout main
git checkout -b hotfix/v3.5.1

# Apply fix and test
# ... make changes ...
bun test && bun run build

# Quick release
bun run version  # Select patch
git push origin hotfix/v3.5.1
````

**Fast-track review process for hotfixes**

## 🔍 Release Validation

### Before Publishing

- [ ] Version number correct
- [ ] Build artifacts present
- [ ] Tests pass in CI
- [ ] Documentation complete

### After Publishing

```bash
# Verify npm installation
npm install use-typewriter-animation@latest
npm list use-typewriter-animation

# Test basic functionality
node -e "console.log(require('use-typewriter-animation'))"
```

## 📊 Bundle Size Targets

- **ESM**: ~5.3KB gzipped
- **CJS**: ~5.6KB gzipped
- **Types**: ~2KB

## 🎯 Quick Reference

| Command           | Purpose                  |
| ----------------- | ------------------------ |
| `bun run version` | Interactive version bump |
| `bun run build`   | Build the project        |
| `bun run test`    | Run test suite           |
| `bun run pack`    | Create package archive   |
| `bun run release` | Full release pipeline    |
| `npm publish`     | Publish to npm           |

---

**Remember**: Releases are permanent - double-check everything before publishing! 🚀

**Questions?** Contact maintainers or open a discussion on GitHub.
