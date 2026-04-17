import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import SiteLayout from "../components/common/siteLayout";
import Reveal from "../components/common/reveal";
import TiltPanel from "../components/common/tiltPanel";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";
import Education from "../components/about/education";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<SiteLayout active="about">
				<section className="page-section about-top-grid">
					<Reveal className="section-heading page-heading" style={{ maxWidth: "100%", margin: 0 }}>
						<div className="eyebrow">About</div>
						<h1>{INFO.about.title}</h1>
						<p>{INFO.about.description}</p>
					</Reveal>

					<Reveal delay={120} className="about-top-visual">
						<div className="about-visual-panel">
							<TiltPanel className="portrait-card">
								<img
									src={`${process.env.PUBLIC_URL}/ab1.png`}
									alt={INFO.main.name}
									className="about-portrait"
								/>
							</TiltPanel>
						</div>
					</Reveal>
				</section>

				<section className="page-section about-bottom-story">
					<Reveal className="about-story">
						<div className="about-cards-wrap">
							
							<div className="metric-row">
								{INFO.about.stats.map((stat) => (
									<div key={stat.label} className="metric-card">
										<div className="metric-value">{stat.value}</div>
										<div className="metric-label">{stat.label}</div>
									</div>
								))}
							</div>
						</div>

						{INFO.about.story.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</Reveal>
				</section>

				<section className="page-section">
					<Reveal className="section-heading">
						<div className="eyebrow">Principles</div>
						<h2>How I like products to behave.</h2>
					</Reveal>

					<div className="principles-grid">
						{INFO.about.principles.map((principle, index) => (
							<Reveal key={principle.title} delay={index * 90} className="principle-card">
								<div className="spotlight-index">0{index + 1}</div>
								<h3>{principle.title}</h3>
								<p>{principle.body}</p>
							</Reveal>
						))}
					</div>
				</section>
                
                <section className="page-section">
					<Reveal className="section-heading">
						<div className="eyebrow">Education</div>
						<h2>Academic background and foundations.</h2>
					</Reveal>
					<Education />
				</section>

				<section className="page-section about-bottom-grid">
					<Reveal className="stack-panel">
						<div className="eyebrow">Stack and strengths</div>
						<div className="tag-cloud">
							{INFO.about.stack.map((item) => (
								<span key={item}>{item}</span>
							))}
						</div>
					</Reveal>

					<Reveal delay={120} className="social-panel">
						<Socials />
					</Reveal>
				</section>
			</SiteLayout>
		</>
	);
};

export default About;
