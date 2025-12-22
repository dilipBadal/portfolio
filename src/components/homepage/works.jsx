import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{INFO.works.map((work, index) => (
							<div
								className="work"
								key={index}
								onClick={() => window.open(work.link, "_blank")}
								style={{ cursor: "pointer" }}
							>
								<img
									src={process.env.PUBLIC_URL + work.logo}
									alt={work.company}
									className="work-image"
								/>
								<div className="work-title">{work.company}</div>
								<div className="work-subtitle">
									{work.position}
								</div>
								<div className="work-duration">
									{work.duration}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
