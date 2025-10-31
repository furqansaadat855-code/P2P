// File: HeroBanner.jsx
import React, { useEffect, useState } from "react";
import styles from "./HeroBanner.module.css";

export default function HeroBanner({
	backgroundImage = "https://picsum.photos/1200/600",
	heading = "Welcome to Our Service",
	subtext = "Chhota sa description yahan",
	buttonText = "Start Now",
	// counters accepts either simple {value, label} objects (legacy)
	// or richer { value, label, title, desc, prefix, suffix }
	counters = [
		{ value: 500, label: "returns" },
		{ value: 120, label: "loans" },
		{ value: 70, label: "verified funds" },
		{ value: 15, label: "Years" },
	],
}) {
	const [counts, setCounts] = useState(counters.map(() => 0));

	useEffect(() => {
		// animate numeric counts (simple ease)
		const duration = 1100;
		const fps = 60;
		const totalFrames = Math.round((duration / 1000) * fps);
		let frame = 0;

		function tick() {
			frame++;
			const progress = Math.min(1, frame / totalFrames);
			setCounts(counters.map((c) => Math.round((c.value || 0) * progress)));
			if (progress < 1) requestAnimationFrame(tick);
		}

		requestAnimationFrame(tick);
		return () => setCounts(counters.map(() => 0));
	}, [JSON.stringify(counters)]);

	// helper: fallback for title if not provided
	const fallbackTitle = (lbl) => {
		if (!lbl) return "";
		// simple capitalization (first letter)
		return lbl.charAt(0).toUpperCase() + lbl.slice(1);
	};

	return (
		<section
			className={styles.hero}
			style={{ backgroundImage: `url(${backgroundImage})` }}
			aria-label="Hero banner">
			<div className={styles.backdrop} />

			{/* using global container if you have it */}
			<div className={`container ${styles.inner}`}>
				<div className={styles.left}>
					<h1 className={styles.title}>{heading}</h1>
					<p className={styles.lead}>{subtext}</p>
					<button className={styles.cta}>{buttonText}</button>
				</div>

				<aside className={styles.right}>
					<div className={styles.counters}>
						{counters.map((c, i) => {
							const {
								value, // numeric target
								label, // legacy label
								title, // optional full title
								desc, // optional description under title
								prefix, // optional prefix string like "$"
								suffix, // optional suffix like "M+", "+"
							} = c;

							const displayedTitle = title || fallbackTitle(label);
							const displayedNumber = `${prefix || ""}${(
								counts[i] || 0
							).toLocaleString()}${suffix || ""}`;

							return (
								<div key={i} className={styles.counter}>
									<div className={styles.number}>{displayedNumber}</div>

									{displayedTitle ? (
										<div className={styles.counterTitle}>{displayedTitle}</div>
									) : null}

									{desc ? (
										<div className={styles.counterDesc}>{desc}</div>
									) : null}
								</div>
							);
						})}
					</div>
				</aside>
			</div>
		</section>
	);
}
