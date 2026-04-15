import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
	docsSidebar: [
		"intro",
		{
			type: "category",
			label: "Overview",
			items: ["overview/index"],
		},
		{
			type: "category",
			label: "Services",
			items: [
				"services/index",
				"services/frontend-ui/index",
				"services/backend-api/index",
				"services/scraper-api/index",
				"services/model-api/index",
			],
		},
		{
			type: "category",
			label: "Operations",
			items: ["operations/index"],
		},
		{
			type: "category",
			label: "Standards",
			items: [
				"standards/index",
				"standards/scope-and-ownership",
				"standards/information-architecture",
				"standards/naming-conventions",
				"standards/metadata-standard",
				"standards/contribution-guide",
			],
		},
		{
			type: "category",
			label: "References",
			items: ["references/index"],
		},
	],
};

export default sidebars;
