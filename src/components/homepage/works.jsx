import TiltPanel from "../common/tiltPanel";
import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="experience-grid">
			{INFO.works.map((work) => (
				<a
					key={`${work.company}-${work.position}`}
					href={work.link}
					target="_blank"
					rel="noreferrer"
					className="experience-card-link"
				>
					<TiltPanel className="experience-card">
						<div className="experience-card-topline">
							<div className="experience-logo">
								<img
									src={`${process.env.PUBLIC_URL}${work.logo}`}
									alt={work.company}
								/>
							</div>
							<div className="experience-duration">{work.duration}</div>
						</div>
						<h3>{work.position}</h3>
						<div className="experience-company">{work.company}</div>
						<p>{work.summary}</p>
					</TiltPanel>
				</a>
			))}
		</div>
	);
};

export default Works;
