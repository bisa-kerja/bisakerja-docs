import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	description: ReactNode;
	link: string;
};

const featureList: FeatureItem[] = [
	{
		title: "Platform Overview",
		description:
			"Architecture, system boundaries, and high-level design documents.",
		link: "/docs/overview/start-here",
	},
	{
		title: "Service Documentation",
		description:
			"Detailed documentation for individual microservices and components.",
		link: "/docs/services",
	},
	{
		title: "Standards & Guides",
		description:
			"Coding standards, contribution guides, and operational playbooks.",
		link: "/docs/standards/contribution-guide",
	},
];

function Feature({ title, description, link }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<Link to={link} className={clsx("card", styles.featureCard)}>
				<div className="card__header">
					<Heading as="h3">{title}</Heading>
				</div>
				<div className="card__body">
					<p>{description}</p>
				</div>
			</Link>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{featureList.map((feature, idx) => (
						<Feature key={idx} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}
