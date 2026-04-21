import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={styles.heroBanner}>
			<div className="container">
				<div className={styles.heroContent}>
					<Heading as="h1" className={styles.heroTitle}>
						{siteConfig.title}
					</Heading>
					<p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
				</div>
				<div className={styles.actions}>
					<Link
						className="button button--primary button--lg"
						to="/docs/overview/start-here"
					>
						Get Started
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout title={siteConfig.title} description={siteConfig.tagline}>
			<HomepageHeader />
			<main className={styles.homeMain}>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
