import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import SiteLayout from "../components/common/siteLayout";
import Reveal from "../components/common/reveal";
import INFO from "../data/user";

const ReadArticle = () => {
	const { slug } = useParams();
	const note = INFO.notes.find((item) => item.slug === slug) || INFO.notes[Number(slug) - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!note) {
		return (
			<SiteLayout active="articles">
				<section className="page-section page-hero">
					<div className="section-heading page-heading">
						<div className="eyebrow">Note not found</div>
						<h1>The thought escaped into the void.</h1>
						<p>This note does not exist anymore, or the link is outdated.</p>
						<Link to="/articles" className="button button-primary">
							Back to notes
						</Link>
					</div>
				</section>
			</SiteLayout>
		);
	}

	return (
		<>
			<Helmet>
				<title>{`${note.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={note.description} />
				<meta name="keywords" content={note.tags.join(", ")} />
			</Helmet>

			<SiteLayout active="articles">
				<section className="page-section article-shell">
					<Reveal className="article-hero">
						<Link to="/articles" className="article-back-link">
							Back to notes
						</Link>
						<div className="article-meta">
							<span>{note.date}</span>
							<span>{note.readTime}</span>
						</div>
						<h1>{note.title}</h1>
						<p>{note.description}</p>
					</Reveal>

					<div className="article-sections">
						{note.sections.map((section, index) => (
							<Reveal key={section.title} delay={index * 80} className="article-section">
								<h2>{section.title}</h2>
								{section.paragraphs.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</Reveal>
						))}
					</div>

					<Reveal className="takeaway-panel">
						<div className="eyebrow">Takeaways</div>
						<div className="takeaway-list">
							{note.takeaways.map((takeaway) => (
								<div key={takeaway} className="takeaway-item">
									{takeaway}
								</div>
							))}
						</div>
					</Reveal>
				</section>
			</SiteLayout>
		</>
	);
};

export default ReadArticle;
