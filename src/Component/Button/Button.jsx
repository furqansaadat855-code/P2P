import React from "react";
import styles from "./Button.module.css";

const CtaButton = ({ text, link, target = "_self", className = "" }) => {
	const buttonClass = `${styles.cta} ${className}`.trim();

	return (
		<a
			href={link}
			target={target}
			rel="noopener noreferrer"
			className={buttonClass}>
			{text}
		</a>
	);
};

export default CtaButton;
