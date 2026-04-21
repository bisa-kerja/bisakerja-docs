import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { UserThemeConfig as DocSearchThemeConfig } from "@docsearch/docusaurus-adapter";
import { config as loadEnv } from "dotenv";

loadEnv({ path: ".env", quiet: true });

const algoliaAppId = process.env.DOCSEARCH_APP_ID;
const algoliaApiKey = process.env.DOCSEARCH_API_KEY;
const algoliaIndexName = process.env.DOCSEARCH_INDEX_NAME;
const algoliaAskAiAssistantId = process.env.DOCSEARCH_ASK_AI_ASSISTANT_ID;
const algoliaAskAiSuggestedQuestions =
	process.env.DOCSEARCH_ASK_AI_SUGGESTED_QUESTIONS === "true";

const docsearch =
	algoliaAppId && algoliaApiKey && algoliaIndexName
		? {
				appId: algoliaAppId,
				apiKey: algoliaApiKey,
				indexName: algoliaIndexName,
				contextualSearch: true,
				searchPagePath: "search",
				insights: false,
				...(algoliaAskAiAssistantId
					? {
							askAi: {
								assistantId: algoliaAskAiAssistantId,
								indexName: algoliaIndexName,
								apiKey: algoliaApiKey,
								appId: algoliaAppId,
								agentStudio: true,
								searchParameters: {
									[algoliaIndexName]: {
										filters: "type:content AND language:en",
										attributesToRetrieve: ["title", "content", "url"],
										restrictSearchableAttributes: ["title", "content"],
										distinct: "url",
									},
								},
								sidePanel: true,
								suggestedQuestions: algoliaAskAiSuggestedQuestions,
							},
						}
					: {}),
			}
		: undefined;

const config: Config = {
	title: "Bisakerja Docs",
	tagline: "Internal documentation hub for Bisakerja Engineering",
	favicon: "img/favicon.ico",
	headTags: [
		{
			tagName: "meta",
			attributes: {
				name: "algolia-site-verification",
				content: "BC8807116185890A",
			},
		},
	],

	future: {
		v4: true,
	},

	// Update deployment values if the hosting target changes.
	url: "https://bisakerja-docs.netlify.app",
	baseUrl: "/",

	organizationName: "bisakerja",
	projectName: "bisakerja-docs",

	onBrokenLinks: "throw",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],
	plugins: [...(docsearch ? ["@docsearch/docusaurus-adapter"] : [])],

	themeConfig: {
		image: "img/docusaurus-social-card.jpg",
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "Bisakerja Docs",
			logo: {
				alt: "Bisakerja Docs Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "docsSidebar",
					position: "left",
					label: "Docs",
				},
			],
		},
		footer: {
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Overview",
							to: "/docs/intro",
						},
					],
				},
				{
					title: "Sections",
					items: [
						{
							label: "Services",
							to: "/docs/services/",
						},
						{
							label: "Standards",
							to: "/docs/standards/",
						},
					],
				},
				{
					title: "Foundation",
					items: [
						{
							label: "Information Architecture",
							to: "/docs/standards/information-architecture",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Bisakerja. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		...(docsearch ? { docsearch } : {}),
	} satisfies Preset.ThemeConfig & DocSearchThemeConfig,
};

export default config;
