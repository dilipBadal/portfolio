import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import SiteLayout from "../components/common/siteLayout";
import Reveal from "../components/common/reveal";
import Article from "../components/articles/article";
import INFO from "../data/user";
import SEO from "../data/seo";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<>
			<Helmet>
				<title>{`Notes | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<SiteLayout active="articles">
				<section className="page-section page-hero">
					<Reveal className="section-heading page-heading">
						<div className="eyebrow">Notes</div>
						<h1>{INFO.notesPage.title}</h1>
						<p>{INFO.notesPage.description}</p>
					</Reveal>
				</section>

				<section className="page-section">
					<div className="note-grid">
						{INFO.notes.map((note, index) => (
							<Reveal key={note.slug} delay={index * 90}>
								<Article note={note} />
							</Reveal>
						))}
					</div>
				</section>
			</SiteLayout>
		</>
	);
};

export default Articles;
