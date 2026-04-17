import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import SiteLayout from "../components/common/siteLayout";
import Reveal from "../components/common/reveal";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<SiteLayout active="projects">
				<section className="page-section page-hero">
					<Reveal className="section-heading page-heading page-heading-wide">
						<div className="eyebrow">Projects</div>
						<h1>{INFO.projectsPage.title}</h1>
						<p>{INFO.projectsPage.description}</p>
					</Reveal>
				</section>

				<section className="page-section">
					<AllProjects />
				</section>

				<section className="page-section">
					<Reveal className="section-heading">
						<div className="eyebrow">Process</div>
						<h2>My build process is part engineering, part choreography.</h2>
					</Reveal>

					<div className="process-grid">
						{INFO.projectsPage.process.map((item, index) => (
							<Reveal key={item.step} delay={index * 100} className="process-card">
								<div className="process-step">{item.step}</div>
								<h3>{item.title}</h3>
								<p>{item.body}</p>
							</Reveal>
						))}
					</div>
				</section>
			</SiteLayout>
		</>
	);
};

export default Projects;
