import Icon from "../common/icon";
import BrandLogo from "../common/brandLogo";
import ProjectPattern from "./projectPattern";

export default function Project({ project }) {
  const content = (
    <>
      {project.logo ? <BrandLogo src={project.logo} className="project-logo" /> : (
        <div className={`project-mark project-mark-${project.visual}`} aria-hidden="true">
          {project.initials}
        </div>
      )}
      <div className="project-copy">
        <div className="project-title">
          <h3>{project.title}</h3>
          {project.isNew && <span className="project-badge">New project</span>}
        </div>
        <p>{project.description}</p>
        <div className="project-stack">{project.stack?.join(" · ")}</div>
      </div>
      <ProjectPattern visual={project.visual} pattern={project.pattern} />
      {project.link ? <Icon name="right" /> : <span className="project-pending">Details soon</span>}
    </>
  );
  return project.link ? (
    <a className="project-row" href={project.link} target="_blank" rel="noopener noreferrer"
      aria-label={`${project.title} — ${project.linkText}`}>
      {content}
    </a>
  ) : <article className="project-row">{content}</article>;
}
