# 🚀 Release Process Guide

This guide covers the release process for `use-typewriter-animation` maintainers and contributors.

## 📋 Table of Contents

- [🎯 Release Types](#-release-types)
- [📦 Pre-Release Checklist](#-pre-release-checklist)
- [🔄 Release Workflow](#-release-workflow)
- [📝 Version Management](#-version-management)
- [📖 Changelog Updates](#-changelog-updates)
- [🎉 Publishing](#-publishing)
- [📞 Post-Release](#-post-release)

## 🎯 Release Types

We follow [Semantic Versioning](https://semver.org/) (SemVer):

### **Patch Releases** (3.5.1)

- 🐛 Bug fixes
- 📚 Documentation updates
- 🧪 Test improvements
- 🔧 Internal refactoring

### **Minor Releases** (3.6.0)

- ✨ New features (backward compatible)
- 🚀 Performance improvements
- 📦 New hooks or utilities
- 🔄 API extensions

### **Major Releases** (4.0.0)

- 💥 Breaking changes
- 🏗️ Architecture changes
- 📱 React version requirement updates
- 🔄 API redesigns

## 📦 Pre-Release Checklist

Before starting a release, ensure:

### Code Quality ✅

- [ ] All tests pass: `bun test`
- [ ] Build succeeds: `bun run build`
- [ ] No TypeScript errors: `bun run types`
- [ ] Code is formatted: `bun run format`
- [ ] No linting issues

### Documentation ✅

- [ ] README is up to date
- [ ] API documentation reflects changes
- [ ] Examples work with new features
- [ ] Migration guide (for breaking changes)
- [ ] CHANGELOG is ready

### Testing ✅

- [ ] Coverage meets requirements (>80%)
- [ ] All features tested in multiple React versions
- [ ] SSR compatibility verified
- [ ] Performance benchmarks acceptable

### Dependencies ✅

- [ ] Dependencies are up to date
- [ ] Security vulnerabilities addressed
- [ ] Bundle size is acceptable
- [ ] Peer dependencies are correct

## 🔄 Release Workflow

### 1. **Prepare Release Branch**

```bash
# Create release branch from main
git checkout main
git pull origin main
git checkout -b release/v3.6.0

# Run full test suite
bun test
bun run build
bun run types
```

### 2. **Update Version**

```bash
# Interactive version bump
bun run version

# This will:
# - Prompt for version type (patch/minor/major)
# - Update package.json
# - Generate changelog entry
# - Create git commit
```

### 3. **Update Changelog**

```typescript
// scripts/version-bump.ts handles this automatically
// Manual updates if needed:
```

```markdown
## [3.6.0] - 2025-01-14

### ✨ New Features

- Added concurrent typing support with React 19
- New `useConcurrentTypewriter` hook
- Performance monitoring utilities

### 🐛 Bug Fixes

- Fixed SSR hydration issues
- Resolved timing inconsistencies

### 📚 Documentation

- Updated API reference
- Added React 19 migration guide
```

### 4. **Test Release Build**

```bash
# Build and test the release
bun run build
bun run test:coverage

# Test package contents
bun run pack
tar -tf use-typewriter-animation-*.tgz

# Verify bundle size
bun run analyze
```

### 5. **Create Pull Request**

```bash
# Push release branch
git push origin release/v3.6.0

# Create PR with template:
```

```markdown
## 🚀 Release v3.6.0

### Changes

- [ ] Version bumped to 3.6.0
- [ ] Changelog updated
- [ ] Documentation updated
- [ ] All tests passing

### Checklist

- [ ] Build succeeds
- [ ] Tests pass
- [ ] Documentation reviewed
- [ ] Breaking changes documented

### Review Notes

[Description of changes and any special considerations]
```

## 📝 Version Management

### Automated Versioning

```typescript
// scripts/version-bump.ts - Interactive version management
import inquirer from 'inquirer';
import semver from 'semver';
import { readFileSync, writeFileSync } from 'fs';

const currentVersion = JSON.parse(readFileSync('package.json', 'utf8')).version;

const { versionType } = await inquirer.prompt([
  {
    type: 'list',
    name: 'versionType',
    message: 'Select version bump type:',
    choices: [
      { name: `Patch (${semver.inc(currentVersion, 'patch')})`, value: 'patch' },
      { name: `Minor (${semver.inc(currentVersion, 'minor')})`, value: 'minor' },
      { name: `Major (${semver.inc(currentVersion, 'major')})`, value: 'major' },
    ],
  },
]);

const newVersion = semver.inc(currentVersion, versionType);
```

### Manual Version Updates

For manual version management:

```bash
# Update package.json version
npm version patch --no-git-tag-version
npm version minor --no-git-tag-version
npm version major --no-git-tag-version

# Or direct edit package.json
```

## 📖 Changelog Updates

### Automated Changelog

The version bump script automatically:

- Generates changelog entry
- Categorizes changes by type
- Adds proper date and version
- Includes contributor credits

### Manual Changelog Format

```markdown
## [Version] - YYYY-MM-DD

### 🎉 **Release Highlights**

Brief description of major changes

### ✨ **New Features**

- Feature 1 with brief description
- Feature 2 with brief description

### 🐛 **Bug Fixes**

- Fix 1 description
- Fix 2 description

### 📚 **Documentation**

- Documentation improvements
- New guides or examples

### 🔧 **Internal Changes**

- Refactoring and improvements
- Dependency updates

### 💥 **Breaking Changes** (Major versions only)

- Breaking change 1 with migration guide
- Breaking change 2 with migration guide

### 🙏 **Contributors**

Thanks to [@username1](link), [@username2](link) for contributions!
```

## 🎉 Publishing

### Automated Publishing

```bash
# Full release pipeline
bun run release

# This runs:
# 1. bun run version (interactive)
# 2. bun run build
# 3. bun run test
# 4. bun run pack
# 5. npm publish
```

### Manual Publishing

```bash
# Build the project
bun run build

# Create package
bun run pack

# Verify package contents
tar -tf use-typewriter-animation-*.tgz

# Publish to npm
npm publish

# Tag release on GitHub
git tag v3.6.0
git push origin v3.6.0
```

### Publishing Checklist

Before publishing:

- [ ] Version number is correct
- [ ] Build artifacts are present
- [ ] Tests pass in CI
- [ ] Documentation is updated
- [ ] Changelog is complete

## 📞 Post-Release

### 1. **Create GitHub Release**

````markdown
# Release v3.6.0

## 🎉 What's New

Brief description of release highlights

## 📦 Installation

```bash
npm install use-typewriter-animation@3.6.0
# or
bun add use-typewriter-animation@3.6.0
```
````

## 🔗 Links

- [Full Changelog](CHANGELOG.md#360---2025-01-14)
- [Documentation](docs/README.md)
- [Migration Guide](docs/guides/migration.md) (if breaking changes)

## 🙏 Thanks

Special thanks to contributors: @username1, @username2

````

### 2. **Update Documentation**

- [ ] Update README with new version
- [ ] Update examples if needed
- [ ] Update migration guides
- [ ] Verify all links work

### 3. **Announce Release**

Consider announcing on:
- 🐦 Twitter/X
- 📱 LinkedIn
- 💬 Discord/Slack communities
- 📧 Newsletter (if applicable)

### 4. **Monitor Release**

After release, monitor:
- 📊 Download statistics
- 🐛 Bug reports
- 💬 Community feedback
- 🔍 Performance metrics

## 🔄 Hotfix Process

For critical bugs requiring immediate fixes:

### 1. **Create Hotfix Branch**
```bash
git checkout main
git checkout -b hotfix/v3.6.1
````

### 2. **Make Minimal Changes**

- Fix only the critical issue
- Add test to prevent regression
- Update changelog

### 3. **Fast-Track Release**

```bash
# Quick version bump
npm version patch --no-git-tag-version
git add package.json
git commit -m "hotfix: bump version to 3.6.1"

# Build and publish
bun run build
bun run test
npm publish
```

### 4. **Merge Back**

```bash
# Merge hotfix to main
git checkout main
git merge hotfix/v3.6.1
git push origin main

# Tag release
git tag v3.6.1
git push origin v3.6.1
```

## 📋 Release Templates

### Patch Release Template

```
🔧 Patch release v3.5.1 with bug fixes and improvements
- Fixed SSR compatibility issues
- Improved test reliability
- Updated documentation
```

### Minor Release Template

```
✨ Minor release v3.6.0 with new features
- Added React 19 concurrent features
- New performance monitoring utilities
- Enhanced TypeScript support
- Improved documentation
```

### Major Release Template

```
🚀 Major release v4.0.0 with breaking changes
- Redesigned API for better developer experience
- React 18+ now required
- Improved performance and bundle size
- Migration guide available
```

---

## 🎯 Quick Reference

| Command           | Purpose                  |
| ----------------- | ------------------------ |
| `bun run version` | Interactive version bump |
| `bun run build`   | Build the project        |
| `bun run test`    | Run test suite           |
| `bun run pack`    | Create package archive   |
| `bun run release` | Full release pipeline    |
| `npm publish`     | Publish to npm           |

**Remember**: Releases are permanent, so double-check everything before publishing! 🚀
