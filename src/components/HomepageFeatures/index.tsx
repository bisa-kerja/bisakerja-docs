import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: ReactNode;
};

const featureList: FeatureItem[] = [
	{
		title: "Platform Orientation",
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description:
			"Overview pages establish the central mission, scope, and future architecture surface for the platform.",
	},
	{
		title: "Service Boundaries",
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description:
			"Dedicated service sections define ownership now and reserve stable sync targets for CI-managed content later.",
	},
	{
		title: "Documentation Governance",
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description:
			"Standards for metadata, naming, contribution flow, and review keep the centralized documentation system maintainable.",
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<article className={clsx("col col--4", styles.featureCard)}>
			<div className={styles.featureVisual}>
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className={styles.featureBody}>
				<Heading as="h2" className={styles.featureTitle}>
					{title}
				</Heading>
				<p className={styles.featureDescription}>{description}</p>
			</div>
		</article>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className={styles.sectionHeader}>
					<p className={styles.sectionLabel}>Foundation areas</p>
					<Heading as="h2" className={styles.sectionTitle}>
						Phase 1 establishes the documentation operating model
					</Heading>
					<p className={styles.sectionDescription}>
						The repository now exposes the structure, ownership boundaries, and
						contribution standards needed before deeper architecture and service
						documentation is synchronized.
					</p>
				</div>
				<div className="row">
					{featureList.map((feature) => (
						<Feature key={feature.title} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}
