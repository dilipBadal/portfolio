const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const TiltPanel = ({ className = "", children }) => {
	const handleMove = (event) => {
		const { currentTarget, clientX, clientY } = event;
		const bounds = currentTarget.getBoundingClientRect();
		const relativeX = (clientX - bounds.left) / bounds.width;
		const relativeY = (clientY - bounds.top) / bounds.height;
		const rotateY = (relativeX - 0.5) * 16;
		const rotateX = (0.5 - relativeY) * 16;

		currentTarget.style.setProperty(
			"--panel-rotate-x",
			`${clamp(rotateX, -8, 8)}deg`,
		);
		currentTarget.style.setProperty(
			"--panel-rotate-y",
			`${clamp(rotateY, -8, 8)}deg`,
		);
		currentTarget.style.setProperty("--panel-glow-x", `${relativeX * 100}%`);
		currentTarget.style.setProperty("--panel-glow-y", `${relativeY * 100}%`);
	};

	const resetPanel = (event) => {
		event.currentTarget.style.setProperty("--panel-rotate-x", "0deg");
		event.currentTarget.style.setProperty("--panel-rotate-y", "0deg");
		event.currentTarget.style.setProperty("--panel-glow-x", "50%");
		event.currentTarget.style.setProperty("--panel-glow-y", "50%");
	};

	return (
		<div
			className={`tilt-panel ${className}`.trim()}
			onMouseMove={handleMove}
			onMouseLeave={resetPanel}
		>
			{children}
		</div>
	);
};

export default TiltPanel;
