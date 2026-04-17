import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import TiltPanel from "../common/tiltPanel";

const Project = ({ project }) => {
	const {
		logo,
		title,
		category,
		year,
		description,
		outcome,
		stack,
		linkText,
		link,
	} = project;

	return (
		<a href={link} target="_blank" rel="noreferrer" className="project-card-link">
			<TiltPanel className="project-card">
				<div className="project-card-topline">
					<div className="project-card-meta">
						<span>{category}</span>
						<span>{year}</span>
					</div>
					<div className="project-card-logo">
						<img
							src={logo.startsWith("http") ? logo : `${process.env.PUBLIC_URL}${logo}`}
							alt={`${title} logo`}
						/>
					</div>
				</div>

				<div className="project-card-content">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>

				<div className="project-card-bottom">
					<div className="project-card-outcome">{outcome}</div>
					<div className="project-card-stack">
						{stack.map((item) => (
							<span key={item}>{item}</span>
						))}
					</div>
				</div>

				<div className="project-card-linkout">
					{linkText}
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</div>
			</TiltPanel>
		</a>
	);
};

export default Project;
