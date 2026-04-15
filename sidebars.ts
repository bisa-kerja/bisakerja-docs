import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
	docsSidebar: [
		"intro",
		{
			type: "category",
			label: "Overview",
			items: [
				"overview/index",
				"overview/product-overview",
				"overview/project-preview",
				"overview/system-landscape",
				"overview/system-architecture",
				"overview/service-interactions",
				"overview/database-overview",
				"overview/data-flow",
				"overview/user-journeys",
				"overview/glossary",
				"overview/service-dependency-map",
				"overview/request-response-flows",
				"overview/asynchronous-workflows",
				"overview/authentication-and-trust-boundaries",
			],
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
			items: [
				"operations/index",
				"operations/environments",
				"operations/failure-scenarios",
			],
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
				"standards/service-documentation-integration",
			],
		},
		{
			type: "category",
			label: "References",
			items: [
				"references/index",
				"references/domain-entities",
				"references/integrations",
			],
		},
	],
};

export default sidebars;
