import { useEffect, useRef, useState } from "react";

const Reveal = ({ as: Component = "div", className = "", delay = 0, children }) => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;

		if (!element) {
			return undefined;
		}

		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return undefined;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold: 0.16,
			},
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return (
		<Component
			ref={ref}
			className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</Component>
	);
};

export default Reveal;
