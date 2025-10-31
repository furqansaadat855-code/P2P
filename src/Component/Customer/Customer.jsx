// File: Customers.jsx
import React from "react";
import styles from "./Customer.module.css";

/**
 * Customers section
 * Props:
 * - backgroundImage: url string
 * - heading: main heading (string)
 * - points: array of strings (ideally 6, will layout in 2 columns)
 * - overlayOpacity: number 0-1 for dark overlay (default 0.55)
 */
export default function Customers({
	backgroundImage = "/images/banner1.jpg",
	heading = "Hundreds of customers trust our company",
	points = [
		"Expert & Certified",
		"Quality Services",
		"Quick Loan Order",
		"Status Monitor",
		"Reliable Support",
		"Easy to Use",
	],
	overlayOpacity = 1,
}) {
	const cssVars = {
		"background-image": `url(${backgroundImage})`,
		opacity: overlayOpacity,
	};

	return (
		<section className={styles.section} style={cssVars} aria-label="customers">
			<div className={styles.overlay} />
			<div className={`container ${styles.inner}`}>
				<div className={styles.left}>
					<h2 className={styles.heading}>{heading}</h2>
				</div>

				<div className={styles.right}>
					<div className={styles.grid}>
						{points.map((p, i) => (
							<div key={i} className={styles.point}>
								<span className={styles.tick} aria-hidden>
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M20 6L9 17l-5-5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span className={styles.text}>{p}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
