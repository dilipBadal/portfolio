import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import TiltPanel from "../common/tiltPanel";

const Article = ({ note }) => {
	return (
		<Link to={`/articles/${note.slug}`} className="note-card-link">
			<TiltPanel className="note-card">
				<div className="note-card-meta">
					<span>{note.date}</span>
					<span>{note.readTime}</span>
				</div>
				<h3>{note.title}</h3>
				<p>{note.description}</p>
				<div className="note-card-tags">
					{note.tags.map((tag) => (
						<span key={tag}>{tag}</span>
					))}
				</div>
				<div className="note-card-linkout">
					Read note
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</TiltPanel>
		</Link>
	);
};

export default Article;
