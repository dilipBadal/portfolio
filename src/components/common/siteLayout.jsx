import Footer from "./footer";
import NavBar from "./navBar";

const SiteLayout = ({ active, children }) => {
	return (
		<div className="site-shell">
			<div className="site-progress" />
			<div className="site-ambient site-ambient-one" />
			<div className="site-ambient site-ambient-two" />
			<div className="site-grid" />
			<NavBar active={active} />
			<main className="site-main">{children}</main>
			<Footer />
		</div>
	);
};

export default SiteLayout;
