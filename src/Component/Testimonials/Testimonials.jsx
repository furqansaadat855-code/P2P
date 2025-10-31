// File: Testimonials.jsx
import React from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.css";

/**
 * Testimonials (slider)
 * Props:
 * - eyebrow, title, description: header texts
 * - items: [{ quote, name, role, avatar }]
 * - slidesToShowDesktop: number
 * - autoplay: bool
 * - dots/arrows: bool
 */
export default function Testimonials({
	eyebrow = "|| What Clients Say ||",
	title = "Trusted by businesses and individuals",
	description = "We pride ourselves on delivering secure, fast, and transparent financial services. Here are some words from our customers.",
	items = [
		{
			quote:
				"The financial education modules helped me improve my credit score and get lower rates. This platform truly empowers both borrowers and investors!",
			name: "Sarah J.",
			role: "Founder, Acme Co",
			avatar: "",
		},
		{
			quote:
				"I've been investing through this platform for 2 years. Great returns and transparency. The risk profiles help me make informed decisions.",
			name: "Mark T.",
			role: "CEO, FinPlus",
			avatar: "",
		},
		{
			quote:
				"As both a borrower and investor, I love how the platform connects people directly. The rates are better than traditional banks.",
			name: "Priya S.",
			role: "Operations Lead",
			avatar: "",
		},
		{
			quote:
				"As both a borrower and investor, I love how the platform connects people directly. The rates are better than traditional banks.",
			name: "Priya S.",
			role: "Operations Lead",
			avatar: "",
		},
		{
			quote:
				"As both a borrower and investor, I love how the platform connects people directly. The rates are better than traditional banks.",
			name: "Priya S.",
			role: "Operations Lead",
			avatar: "",
		},
	],
	slidesToShowDesktop = 3,
	autoplay = true,
	dots = true,
	arrows = true,
}) {
	const settings = {
		dots,
		arrows:false,
		infinite: true,
		speed: 600,
		slidesToShow: slidesToShowDesktop,
		slidesToScroll: 1,
		autoplay,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: { slidesToShow: Math.min(2, slidesToShowDesktop) },
			},
			{ breakpoint: 700, settings: { slidesToShow: 1 } },
		],
	};

	return (
		<section className={styles.section} aria-label="testimonials">
			<div className={`container ${styles.inner}`}>
				<header className={styles.header}>
					{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
					{title && <h2 className={styles.title}>{title}</h2>}
					{description && <p className={styles.description}>{description}</p>}
				</header>

				<div className={styles.sliderWrap}>
					<Slider {...settings} className={styles.slider}>
						{items.map((it, idx) => (
							<article key={idx} className={styles.card}>
								<div className={styles.quoteMark} aria-hidden>
									“
								</div>

								<p className={styles.quote}>{it.quote}</p>

								<footer className={styles.meta}>
									<div className={styles.avatar}>
										{it.avatar ? (
											<img src={it.avatar} alt={`${it.name} avatar`} />
										) : (
											<div className={styles.placeholder}>
												{it.name ? it.name.charAt(0) : "U"}
											</div>
										)}
									</div>
									<div className={styles.person}>
										<div className={styles.name}>{it.name}</div>
										<div className={styles.role}>{it.role}</div>
									</div>
								</footer>
							</article>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
}
