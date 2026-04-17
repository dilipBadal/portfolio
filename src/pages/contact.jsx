import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import SiteLayout from "../components/common/siteLayout";
import Reveal from "../components/common/reveal";
import TiltPanel from "../components/common/tiltPanel";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<SiteLayout active="contact">
				<section className="page-section page-hero">
					<Reveal className="section-heading page-heading page-heading-wide">
						<div className="eyebrow">Contact</div>
						<h1>{INFO.contact.title}</h1>
						<p>{INFO.contact.description}</p>
					</Reveal>
				</section>

				<section className="page-section contact-layout">
					<Reveal>
						<TiltPanel className="contact-panel">
							<div className="eyebrow">Availability</div>
							<h2>{INFO.contact.availability}</h2>
							<p>{INFO.contact.response}</p>
							<a
								className="button button-primary"
								href={`mailto:${INFO.main.email}`}
							>
								{INFO.main.email}
							</a>
						</TiltPanel>
					</Reveal>

					<Reveal delay={120}>
						<div className="opportunity-list">
							<div className="eyebrow">Best fit collaborations</div>
							{INFO.contact.opportunities.map((opportunity, index) => (
								<div key={opportunity} className="opportunity-item">
									<span>0{index + 1}</span>
									<p>{opportunity}</p>
								</div>
							))}
						</div>
					</Reveal>
				</section>

				<section className="page-section">
					<Reveal className="section-heading">
						<div className="eyebrow">Reach out</div>
						<h2>Choose your lane. Email is fastest, socials stay open.</h2>
					</Reveal>
					<Socials />
				</section>
			</SiteLayout>
		</>
	);
};

export default Contact;
