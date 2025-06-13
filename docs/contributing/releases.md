# Release Process Guide

Comprehensive guide for managing releases of `use-typewriter-animation`.

## 🚀 Release Overview

Our release process ensures quality, consistency, and proper versioning for all library updates.

### Release Types

- **Patch** (3.5.1) - Bug fixes, documentation updates
- **Minor** (3.6.0) - New features, non-breaking changes
- **Major** (4.0.0) - Breaking changes, major refactors

### Release Schedule

- **Patch releases** - As needed for critical fixes
- **Minor releases** - Monthly or when significant features are ready
- **Major releases** - Quarterly or when breaking changes are necessary

## 📋 Pre-Release Checklist

### 1. **Code Quality**

```bash
# Run all tests
bun test

# Check TypeScript compilation
bun run types

# Verify build process
bun run build

# Analyze bundle size
bun run analyze

# Format and lint code
bun run format
bunx biome check --apply .
```

### 2. **Documentation Review**

- [ ] API documentation updated
- [ ] Examples reflect new features
- [ ] README.md updated if needed
- [ ] Migration guide for breaking changes
- [ ] Accessibility documentation current

### 3. **Testing Verification**

```bash
# Full test suite
bun test --coverage

# Cross-browser testing
# Manual testing in target browsers

# Accessibility testing
# Screen reader testing if UI changes
```

## 🔢 Version Management

### Automated Versioning

```bash
# Interactive version selection
bun run version

# This will:
# 1. Prompt for version type (patch/minor/major)
# 2. Update package.json
# 3. Generate changelog entry
# 4. Create git commit
# 5. Create git tag
# 6. Push changes
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

## 📝 Release Process

### 1. **Prepare Release Branch**

```bash
# Create release branch
git checkout -b release/v3.6.0

# Ensure clean working directory
git status
```

### 2. **Update Version**

```bash
# Use automated version bump
bun run version

# Select appropriate version type:
# - patch: Bug fixes, docs
# - minor: New features
# - major: Breaking changes
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
git pull origin main
git checkout -b hotfix/v3.5.1
````

### 2. **Apply Fix**

```bash
# Make necessary changes
# Add tests for the fix
bun test

# Commit changes
git add .
git commit -m "fix: critical bug description"
```

### 3. **Release Hotfix**

```bash
# Bump patch version
bun run version  # Select patch

# Push and create PR
git push origin hotfix/v3.5.1
```

### 4. **Fast-track Review**

- Expedited review process
- Focus on fix verification
- Minimal additional changes

## 🔍 Release Validation

### Pre-Release Testing

```bash
# Install from tarball
npm install ./use-typewriter-animation-*.tgz

# Test in example project
cd example-project
npm install ../use-typewriter-animation-*.tgz
npm start
```

### Post-Release Verification

```bash
# Install from npm
npm install use-typewriter-animation@latest

# Verify version
npm list use-typewriter-animation

# Test basic functionality
node -e "console.log(require('use-typewriter-animation'))"
```

## 📊 Release Metrics

### Success Criteria

- [ ] All tests pass
- [ ] Bundle size within targets
- [ ] No breaking changes (unless major)
- [ ] Documentation complete
- [ ] Examples work correctly

### Monitoring

Track after release:

- Download counts
- GitHub stars/forks
- Issue reports
- Community feedback

## 🚨 Rollback Process

If issues are discovered post-release:

### 1. **Assess Severity**

- Critical: Immediate rollback
- Major: Hotfix release
- Minor: Include in next release

### 2. **Rollback Steps**

```bash
# Unpublish if within 24 hours
npm unpublish use-typewriter-animation@3.6.0

# Or deprecate version
npm deprecate use-typewriter-animation@3.6.0 "Critical bug, use 3.5.1"
```

### 3. **Communication**

- Update GitHub release notes
- Notify users via appropriate channels
- Document lessons learned

## 📚 Resources

### Tools

- **npm** - Package publishing
- **semver** - Version management
- **inquirer** - Interactive prompts
- **GitHub Actions** - CI/CD automation

### Documentation

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

**Questions about releases?** Contact the maintainers or open a discussion!
