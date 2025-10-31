// File: Disclosure.jsx
import React from "react";
import styles from "./Disclosure.module.css";

/**
 * Disclosure component
 * Props:
 * - eyebrow: small heading above title
 * - title: main heading
 * - description: paragraph under title
 * - items: array of disclosure strings
 * - compact: boolean (if true, tighter spacing)
 */
export default function Disclosure({
	eyebrow = "Important Information",
	title = "Risk & Regulatory Disclosures",
	description = "Please read the following disclosures carefully before participating in lending or investment activities on our platform.",
	items = [
		`Lending Risks: Peer-to-peer lending involves risk of loss. All loans are subject to credit approval. Interest rates are variable and subject to change. Past performance does not guarantee future results.`,
		`Investment Risks: Investing in loans may result in loss of principal. Diversification does not eliminate the risk of experiencing investment losses. Always consider your investment objectives, risk tolerance, and financial situation before investing.`,
		`Regulatory Information: Gurley Club is operated as a licensed lending institution. We comply with all applicable federal and state lending regulations.`,
	],
	compact = false,
}) {
	return (
		<section className={styles.section} aria-label="disclosures">
			<div className={`container ${styles.inner}`}>
				<header className={styles.header}>
					{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
					{title && <h2 className={styles.title}>{title}</h2>}
					{description && <p className={styles.description}>{description}</p>}
				</header>

				<div className={`${styles.list} ${compact ? styles.compact : ""}`}>
					{items.map((it, idx) => (
						<article key={idx} className={styles.item}>
							<div className={styles.index}>{`0${idx + 1}`}</div>
							<div className={styles.body}>
								<p>{it}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
