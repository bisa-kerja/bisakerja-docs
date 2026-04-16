import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">
					Internal Documentation Hub for Bisakerja Engineering
				</p>
				<div className={styles.actions}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/overview/start-here"
					>
						Get Started
					</Link>
					<Link
						className="button button--outline button--secondary button--lg"
						to="/docs/standards/contribution-guide"
					>
						Contribution Guide
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout
			title={siteConfig.title}
			description="Internal Documentation Hub for Bisakerja Engineering."
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
