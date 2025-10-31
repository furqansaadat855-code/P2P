// File: Portfolios.jsx
import React from "react";
import styles from "./Portfolio.module.css";

/**
 * Portfolios component
 * Props:
 * - heading: main centered heading (string)
 * - subheading: array of 1-2 lines OR a single string (will be centered)
 * - cards: array of { id?, icon?, title, text, linkText, linkHref }
 *    - icon can be a React node (SVG) or omitted to use defaults
 * - className: optional extra class name
 *
 * Usage:
 * <Portfolios
 *   heading="Our Services"
 *   subheading={["Line one","Line two"]}
 *   cards={[{title:'Safe and Secure', text:'...', linkText:'Learn more', linkHref:'#' }, ...]}
 * />
 */
export default function Portfolios({
	heading = "What we offer",
	subheading = [
		"Trusted finance services",
		"Built for individuals and businesses",
	],
	cards = [
		{
			title: "Get a portfolio recommendation",
			text: "Complete your profile and receive investment recommendations based on your goals and risk tolerance.",
			linkText: "Learn more",
			linkHref: "#",
		},
		{
			title: "Invest and start earning",
			text: "Access loans and investment opportunities from 12+ verified pools with transparent risk profiles.",
			linkText: "Learn more",
			linkHref: "#",
		},
		{
			title: "Receive monthly income or reinvest",
			text: "Get monthly income payments or automatically reinvest your earnings to compound your returns.",
			linkText: "Learn more",
			linkHref: "#",
		},
	],
	className = "",
}) {
	const renderIcon = (idx) => (
		// simple default icon (circle with finance glyph)
		<svg
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden>
			<circle
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="1.2"
				fill="rgba(59,39,161,0.06)"
			/>
			<path
				d="M8 13c1.333-1.333 3.333-1.333 5 0"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<path
				d="M12 9v6"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
		</svg>
	);

	const lines = Array.isArray(subheading)
		? subheading
		: String(subheading).split("\n");

	return (
		<section
			className={`${styles.section} ${className}`}
			aria-label="portfolios">
			<div className={`container ${styles.inner}`}>
				<header className={styles.header}>
					<h2 className={styles.heading}>{heading}</h2>
					<div className={styles.subwrap}>
						{lines.slice(0, 2).map((ln, i) => (
							<p key={i} className={styles.subline}>
								{ln}
							</p>
						))}
					</div>
				</header>

				<div className={styles.grid}>
					{cards.map((c, i) => (
						<article key={c.id || i} className={styles.card}>
							<div className={styles.iconWrap} aria-hidden>
								{c.icon ? c.icon : renderIcon(i)}
							</div>

							<h3 className={styles.cardTitle}>{c.title}</h3>

							<p className={styles.cardText}>{c.text}</p>

							<a className={styles.cardLink} href={c.linkHref || "#"}>
								<span>{c.linkText || "Learn more"}</span>
								<svg
									width="16"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden>
									<path
										d="M5 12h14"
										stroke="currentColor"
										strokeWidth="1.8"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12 5l7 7-7 7"
										stroke="currentColor"
										strokeWidth="1.8"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
