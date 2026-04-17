import INFO from "../../data/user";

const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="site-footer-inner">

				<a href={`mailto:${INFO.main.email}`} className="footer-email">
					{INFO.main.email}
				</a>
				<div className="footer-copyright">
					© {new Date().getFullYear()} {INFO.main.name}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
