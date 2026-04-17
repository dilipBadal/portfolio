import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

const socials = [
	{
		label: "GitHub",
		value: "@dilipBadal",
		href: INFO.socials.github,
		icon: faGithub,
	},
	{
		label: "LinkedIn",
		value: "Professional profile",
		href: INFO.socials.linkedin,
		icon: faLinkedin,
	},
	{
		label: "Email",
		value: INFO.main.email,
		href: `mailto:${INFO.main.email}`,
		icon: faEnvelope,
	},
];

const Socials = () => {
	return (
		<div className="social-grid">
			{socials.map((social) => {
				const isEmail = social.label === "Email";

				return (
					<a
						key={social.label}
						href={social.href}
						target={isEmail ? undefined : "_blank"}
						rel={isEmail ? undefined : "noreferrer"}
						className={`social-card ${isEmail ? "social-card-full" : ""}`}
					>
						<div className="social-card-icon">
							<FontAwesomeIcon icon={social.icon} />
						</div>
						<div className="social-card-copy">
							<div className="social-card-label">{social.label}</div>
							<div className="social-card-value">
								{social.value}
							</div>
						</div>
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="social-card-arrow" />
					</a>
				);
			})}
		</div>
	);
};

export default Socials;
