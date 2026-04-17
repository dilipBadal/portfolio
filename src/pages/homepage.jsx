import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import SiteLayout from "../components/common/siteLayout";
import Reveal from "../components/common/reveal";
import TiltPanel from "../components/common/tiltPanel";
import AllProjects from "../components/projects/allProjects";
import Works from "../components/homepage/works";
import INFO from "../data/user";
import SEO from "../data/seo";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<SiteLayout active="home">
				<section className="page-section hero-section">
					<Reveal className="hero-grid">
						<div className="hero-copy hero-copy-intro">
							<div className="eyebrow">{INFO.homepage.label}</div>
							<h1>{INFO.homepage.title}</h1>
						</div>

						<div className="hero-copy hero-copy-body">
							<p className="hero-lead">{INFO.homepage.description}</p>
							<p className="hero-secondary">{INFO.homepage.secondary}</p>

							<div className="hero-actions">
								<a 
									href="#featured-work" 
									className="button button-primary"
									onClick={(e) => {
										e.preventDefault();
										document.querySelector("#featured-work")?.scrollIntoView({
											behavior: "smooth",
										});
									}}
								>
									See featured work
									<FontAwesomeIcon icon={faArrowDown} />
								</a>
								<Link to="/contact" className="button button-secondary">
									Start a conversation
									<FontAwesomeIcon icon={faArrowRight} />
								</Link>
							</div>

							<div className="hero-location">
								<FontAwesomeIcon icon={faLocationDot} />
								<span>
									{INFO.main.location}
									{INFO.main.availability && ` / ${INFO.main.availability}`}
								</span>
							</div>
						</div>

						<div className="hero-visual-column">
							<TiltPanel className="hero-visual">
								<div className="hero-visual-rings hero-visual-rings-one" />
								<div className="hero-visual-rings hero-visual-rings-two" />
								<div className="hero-portrait-wrap">
									<img
										src={`${process.env.PUBLIC_URL}/Dilip Badal.png`}
										alt={INFO.main.name}
										className="hero-portrait"
									/>
								</div>

							</TiltPanel>
						</div>

						<div className="metric-row hero-metrics">
							{INFO.homepage.metrics.map((metric) => (
								<div key={metric.label} className="metric-card">
									<div className="metric-value">{metric.value}</div>
									<div className="metric-label">{metric.label}</div>
								</div>
							))}
						</div>
					</Reveal>
				</section>

				<section className="ticker-shell" aria-label="Capabilities">
					<div className="ticker-track">
						{INFO.homepage.ticker.concat(INFO.homepage.ticker).map((item, index) => (
							<span key={`${item}-${index}`}>{item}</span>
						))}
					</div>
				</section>


				<section className="page-section" id="featured-work">
					<Reveal className="section-heading">
						<div className="eyebrow">Featured work</div>
						<h2>Products shaped to feel cleaner, smarter, and more alive.</h2>
					</Reveal>
					<AllProjects featuredOnly />
				</section>

				<section className="page-section">
					<Reveal className="section-heading">
						<div className="eyebrow">Experience</div>
						<h2>Built in real environments where shipping matters.</h2>
					</Reveal>
					<Works />
				</section>

				<section className="page-section cta-section">
					<Reveal className="cta-panel">
						<div>
							<div className="eyebrow">Ready when the brief is ambitious</div>
							<h2>Need a site or product experience that actually lands?</h2>
						</div>
						<Link to="/contact" className="button button-primary">
							Let's build it
							<FontAwesomeIcon icon={faArrowRight} />
						</Link>
					</Reveal>
				</section>
			</SiteLayout>
		</>
	);
};

export default Homepage;
