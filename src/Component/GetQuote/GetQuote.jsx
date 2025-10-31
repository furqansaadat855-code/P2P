// File: GetQuote.jsx
import React from "react";
import styles from "./GetQuote.module.css";

/**
 * GetQuote Component
 * Two-column CTA section with image and text side by side.
 * Props:
 * - image: string (image URL)
 * - tagline: small text
 * - heading: main heading text
 * - buttonText: CTA button text
 * - onButtonClick: function (optional)
 * - reverse: boolean to flip image and text
 */
export default function GetQuote({
	image = "https://images.unsplash.com/photo-1565514020186-34b9f87c2c6c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=example",
	tagline = "SIMPLE / TRANSPARENT / SECURE",
	heading = "Get quick business loans",
	buttonText = "Apply For Loan",
	onButtonClick = null,
	reverse = false,
}) {
	return (
		<section className={styles.section} aria-label="get quote section">
			<div
				className={` ${styles.wrapper} ${
					reverse ? styles.reverse : ""
				}`}>
				<div className={styles.imageWrap}>
					<img src={image} alt="Get Quote visual" className={styles.image} />
				</div>

				<div className={styles.content}>
					<p className={styles.tagline}>{tagline}</p>
					<h2 className={styles.heading}>{heading}</h2>
					<button
						className={styles.button}
						onClick={(e) => onButtonClick && onButtonClick(e)}>
						{buttonText}
					</button>
				</div>
			</div>
		</section>
	);
}
