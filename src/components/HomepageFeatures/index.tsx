import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	description: ReactNode;
	link: string;
};

type QuickLinkItem = {
	label: string;
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

const quickLinkList: QuickLinkItem[] = [
	{
		label: "Operations",
		link: "/docs/operations/",
	},
	{
		label: "References",
		link: "/docs/references/",
	},
	{
		label: "Contribution Guide",
		link: "/docs/standards/contribution-guide",
	},
	{
		label: "All Docs",
		link: "/docs/intro",
	},
];

function Feature({ title, description, link }: FeatureItem) {
	return (
		<Link to={link} className={styles.featureCard}>
			<article>
				<Heading as="h3" className={styles.featureTitle}>
					{title}
				</Heading>
				<p className={styles.featureDescription}>{description}</p>
			</article>
		</Link>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className={styles.sectionIntro}>
					<Heading as="h2" className={styles.sectionTitle}>
						Explore the documentation hub
					</Heading>
					<p className={styles.sectionDescription}>
						Jump into platform context, service references, and the
						documentation standards that keep Bisakerja aligned.
					</p>
				</div>
				<div className={styles.primaryGrid}>
					{featureList.map((feature, idx) => (
						<Feature key={idx} {...feature} />
					))}
				</div>
				<div className={styles.quickLinks}>
					<Heading as="h2" className={styles.quickLinksTitle}>
						Quick links
					</Heading>
					<ul className={styles.quickLinksList}>
						{quickLinkList.map((linkItem) => (
							<li key={linkItem.link}>
								<Link to={linkItem.link} className={styles.quickLink}>
									{linkItem.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
