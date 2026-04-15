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
		<header className={clsx("hero", styles.heroBanner)}>
			<div className="container">
				<div className={styles.heroContent}>
					<p className={styles.eyebrow}>Phase 1 foundation implemented</p>
					<Heading as="h1" className={styles.heroTitle}>
						{siteConfig.title}
					</Heading>
					<p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
					<p className={styles.heroBody}>
						A single place to understand the platform, navigate service
						documentation, and enforce documentation standards across the
						system.
					</p>
					<div className={styles.actions}>
						<Link
							className="button button--primary button--lg"
							to="/docs/overview/start-here"
						>
							Open documentation
						</Link>
						<Link
							className="button button--secondary button--lg"
							to="/docs/standards/contribution-guide"
						>
							View contribution rules
						</Link>
					</div>
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
			description="Centralized platform documentation for Bisakerja services, standards, and future synchronized service docs."
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
