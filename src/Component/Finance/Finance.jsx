// File: Finance.jsx
import Button from "../Button/Button";
import styles from "./Finance.module.css";
export default function Finance({
	eyebrow = "About Company",
	title = "Personal loans to fulfill your dreams",
	description = "We're in this business since 1987 and we provide the best services. Alteration in some form by injected humour.",
	points = ["No hidden fees", "Fast approval", "Transparent pricing"],
	buttonText = "Discover More",
	onButtonClick = null,
	image = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=example",
	imageAlt = "Team working",
	reverse = false,
}) {
	return (
		<section className={styles.section}>
			<div className={`container ${styles.wrap} ${reverse ? styles.rev : ""}`}>
				<div className={styles.left}>
					{eyebrow && (
						<div className={styles.eyebrow}>
							<h6>{eyebrow}</h6>
						</div>
					)}
					<h2 className={styles.title}>{title}</h2>
					{description && <p className={styles.desc}>{description}</p>}

					<ul className={styles.list}>
						{points.map((p, i) => (
							<li key={i} className={styles.point}>
								<span className={styles.check} aria-hidden>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-check-circle w-4 h-4 text-[#10B981]">
										<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
										<path d="m9 11 3 3L22 4"></path>
									</svg>
								</span>
								<span className={styles.pointText}>{p}</span>
							</li>
						))}
					</ul>

					<div className={styles.actions}>
						<button
							className={styles.cta}
							onClick={(e) => {
								if (onButtonClick) onButtonClick(e);
							}}>
							{buttonText}
						</button>
					</div>
				</div>

				<div className={styles.right}>
					<div className={styles.imageWrap}>
						<img src={image} alt={imageAlt} className={styles.image} />
						<div className={styles.badge}>
							<div className={styles.badgeNumber}>25+</div>
							<div className={styles.badgeText}>Years Experience</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
