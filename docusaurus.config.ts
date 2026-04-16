import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "Bisakerja Docs",
	tagline:
		"Central documentation hub for platform overview, service integration, and documentation standards",
	favicon: "img/favicon.ico",

	future: {
		v4: true,
	},

	// Update deployment values if the hosting target changes.
	url: "https://docs.bisakerja.com",
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
					label: "Documentation",
				},
			],
		},
		footer: {
			style: "dark",
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
	} satisfies Preset.ThemeConfig,
};

export default config;
