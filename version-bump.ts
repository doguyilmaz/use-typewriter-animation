#!/usr/bin/env bun

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import inquirer from 'inquirer';
import semver from 'semver'; // We use semver to handle version bumping

// Read package.json
const packageJsonPath = './package.json';
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

// Ask user for the version bump type
const versionChoices = ['major', 'minor', 'patch'];

(async () => {
	try {
		// Prompt user once for the version type
		const { versionType } = await inquirer.prompt([
			{
				type: 'list',
				name: 'versionType',
				message: 'Select the version type:',
				choices: versionChoices,
			},
		]);

		// Get the current version and bump it
		const currentVersion = packageJson.version;
		const newVersion = semver.inc(currentVersion, versionType as semver.ReleaseType);

		if (!newVersion) {
			throw new Error('Version bump failed');
		}

		// Update package.json with the new version
		packageJson.version = newVersion;
		writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

		console.log(`Version bumped to: ${newVersion}`);

		// Create a new Git tag for the version
		execSync(`git tag v${newVersion}`, { stdio: 'inherit' });

		// Push the new tag and package.json changes to the remote repository
		execSync(`git add ${packageJsonPath}`, { stdio: 'inherit' });
		execSync(`git commit -m "Bump version to v${newVersion}"`, {
			stdio: 'inherit',
		});
		execSync('git push origin main', { stdio: 'inherit' });
		execSync(`git push origin v${newVersion}`, { stdio: 'inherit' });

		console.log(`Git tag v${newVersion} created and pushed!`);

		// Explicitly exit after success
		process.exit(0);
	} catch (error) {
		console.error('Error during version bump:', error);
		process.exit(1); // Exit with error code on failure
	}
})();
