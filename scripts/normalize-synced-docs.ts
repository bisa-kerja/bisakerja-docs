import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const SERVICES_ROOT = path.join(process.cwd(), "docs", "services");
const TARGET_MARKERS = ["/synced/", "/versioned/"];
const INTERNAL_MARKDOWN_LINK_PATTERN =
	/\]\((?!https?:\/\/|mailto:|#|\/|data:)([^)\s]+\.md(?:#[^)]+)?)\)/g;

const markdownFiles = await collectTargetMarkdownFiles(SERVICES_ROOT);

for (const filePath of markdownFiles) {
	await convertMarkdownFile(filePath);
}

console.log(
	`Normalized ${String(markdownFiles.length)} synced/versioned markdown file(s) to .mdx.`
);

async function collectTargetMarkdownFiles(rootPath: string) {
	const files: string[] = [];
	const queue: string[] = [rootPath];

	while (queue.length > 0) {
		const currentPath = queue.shift();

		if (!currentPath) {
			continue;
		}

		let entries;

		try {
			entries = await readdir(currentPath, { withFileTypes: true });
		} catch {
			continue;
		}

		for (const entry of entries) {
			const entryPath = path.join(currentPath, entry.name);

			if (entry.isDirectory()) {
				queue.push(entryPath);
				continue;
			}

			if (!entry.isFile() || !entry.name.endsWith(".md")) {
				continue;
			}

			const normalizedPath = entryPath.split(path.sep).join("/");

			if (!isTargetPath(normalizedPath)) {
				continue;
			}

			files.push(entryPath);
		}
	}

	return files;
}

async function convertMarkdownFile(sourcePath: string) {
	const targetPath = sourcePath.slice(0, -3) + ".mdx";
	const content = await readFile(sourcePath, "utf8");
	const normalizedContent = content.replace(
		INTERNAL_MARKDOWN_LINK_PATTERN,
		(fullMatch: string, link: string) =>
			fullMatch.replace(link, rewriteLinkToMdx(link))
	);

	await writeFile(targetPath, normalizedContent, "utf8");
	await rm(sourcePath);
}

function rewriteLinkToMdx(link: string) {
	const [filePath = "", hash = ""] = link.split("#");

	if (!filePath.endsWith(".md")) {
		return link;
	}

	const mdxPath = filePath.slice(0, -3) + ".mdx";
	return hash.length === 0 ? mdxPath : `${mdxPath}#${hash}`;
}

function isTargetPath(filePath: string) {
	return TARGET_MARKERS.some((marker) => filePath.includes(marker));
}
