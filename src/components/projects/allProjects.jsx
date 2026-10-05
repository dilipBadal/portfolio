import INFO from "../../data/user";
import Project from "./project";
export default function AllProjects({ featuredOnly = false }) {
  return <div className="project-list">{INFO.projects.filter(project => !featuredOnly || project.featured).map(project => <Project project={project} key={project.title} />)}</div>;
}
