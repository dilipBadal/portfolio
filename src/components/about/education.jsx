import TiltPanel from "../common/tiltPanel";
import INFO from "../../data/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
	if (!INFO.about.educations || INFO.about.educations.length === 0) return null;

	return (
		<div className="experience-grid">
			{INFO.about.educations.map((edu) => (
				<TiltPanel key={`${edu.institution}-${edu.degree}`} className="experience-card">
					<div className="experience-card-topline">
						<div className="experience-logo" style={{ display: "grid", placeItems: "center" }}>
							<FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: "1.4rem", color: "var(--primary-color)" }} />
						</div>
						<div className="experience-duration">{edu.duration}</div>
					</div>
					<h3>{edu.degree}</h3>
					<div className="experience-company">{edu.institution}</div>
					<p>{edu.summary}</p>
				</TiltPanel>
			))}
		</div>
	);
};

export default Education;
