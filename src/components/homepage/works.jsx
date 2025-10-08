import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work" onClick={() => window.open("https://www.linkedin.com/company/levich/", "_blank")} style={{ cursor: "pointer" }}>
							<img
								src="./levich.svg"
								alt="levich"
								className="work-image"
							/>
							<div className="work-title">Levich Solutions</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 - 2025</div>
						</div>

						<div className="work" onClick={() => window.open("https://www.linkedin.com/company/levich/", "_blank")} style={{ cursor: "pointer" }}>
							<img
								src="./levich.svg"
								alt="levich"
								className="work-image"
							/>
							<div className="work-title">Levich Solutions</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">5 months</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
