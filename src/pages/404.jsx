import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import SiteLayout from "../components/common/siteLayout";
import Reveal from "../components/common/reveal";
import INFO from "../data/user";

const Notfound = () => {
	return (
		<>
			<Helmet>
				<title>{`404 | ${INFO.main.title}`}</title>
			</Helmet>

			<SiteLayout>
				<section className="page-section notfound-shell">
					<Reveal className="notfound-panel">
						<div className="notfound-code">404</div>
						<div className="eyebrow">Lost in the dark</div>
						<h1>This page never made it into the final cut.</h1>
						<p>
							The link is broken, the route is gone, or the page was never meant
							to be seen.
						</p>
						<Link to="/" className="button button-primary">
							Return home
						</Link>
					</Reveal>
				</section>
			</SiteLayout>
		</>
	);
};

export default Notfound;
