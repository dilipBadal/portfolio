import INFO from "../../data/user";
import Reveal from "../common/reveal";
import Project from "./project";

const AllProjects = ({ featuredOnly = false }) => {
	const projects = featuredOnly
		? INFO.projects.filter((project) => project.featured)
		: INFO.projects;

	return (
		<div className="project-grid">
			{projects.map((project, index) => (
				<Reveal key={project.title} delay={index * 90}>
					<Project project={project} />
				</Reveal>
			))}
		</div>
	);
};

export default AllProjects;
