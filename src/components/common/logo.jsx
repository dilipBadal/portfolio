
const Logo = () => {
	return (
		<div className="logo-mark" aria-hidden="true">
			<img
				src={`${process.env.PUBLIC_URL}/logo.png`}
				alt="Logo"
				style={{ width: "100%", height: "100%", objectFit: "cover" }}
			/>
		</div>
	);
};

export default Logo;
