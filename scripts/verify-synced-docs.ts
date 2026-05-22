import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const SERVICES_ROOT = path.join(process.cwd(), "docs", "services");
const TARGET_MARKERS = ["/synced/", "/versioned/"];
const INTERNAL_MARKDOWN_LINK_PATTERN =
	/\]\((?!https?:\/\/|mailto:|#|\/|data:)([^)\s]+\.md(?:#[^)]+)?)\)/g;

const issues: string[] = [];

await inspectServicesTree(SERVICES_ROOT);

if (issues.length > 0) {
	for (const issue of issues) {
		console.error(issue);
	}

	process.exit(1);
}

console.log("Synced docs validation passed.");

async function inspectServicesTree(rootPath: string) {
	let entries;

	try {
		entries = await readdir(rootPath, { withFileTypes: true });
	} catch {
		console.log(`Skip synced docs validation. Path not found: ${rootPath}`);
		return;
	}

	for (const entry of entries) {
		const entryPath = path.join(rootPath, entry.name);

		if (entry.isDirectory()) {
			await inspectServicesTree(entryPath);
			continue;
		}

		if (!entry.isFile()) {
			continue;
		}

		const normalizedPath = entryPath.split(path.sep).join("/");

		if (!isTargetPath(normalizedPath)) {
			continue;
		}

		if (entry.name.endsWith(".md")) {
			issues.push(
				`[synced-docs] markdown file must be .mdx: ${normalizedPath}`
			);
			continue;
		}

		if (!entry.name.endsWith(".mdx")) {
			continue;
		}

		const content = await readFile(entryPath, "utf8");
		const links = [...content.matchAll(INTERNAL_MARKDOWN_LINK_PATTERN)];

		for (const match of links) {
			const link = match[1] ?? "";
			issues.push(
				`[synced-docs] relative link must target .mdx in ${normalizedPath}: ${link}`
			);
		}
	}
}

function isTargetPath(filePath: string) {
	return TARGET_MARKERS.some((marker) => filePath.includes(marker));
}
