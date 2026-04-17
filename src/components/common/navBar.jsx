import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faArrowUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";
import Logo from "./logo";

const navigation = [
	{ key: "home", label: "Home", to: "/" },
	{ key: "about", label: "About", to: "/about" },
	{ key: "projects", label: "Projects", to: "/projects" },
	{ key: "contact", label: "Contact", to: "/contact" },
];

const NavBar = ({ active }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	return (
		<header className="site-header">
			<div className="site-header-inner">
				<Link to="/" className="wordmark-wrap" aria-label={`${INFO.main.name} home`}>
					<Logo />
					<div className="wordmark-copy">
						<div className="wordmark-name">{INFO.main.name}</div>
						<div className="wordmark-role">{INFO.main.role}</div>
					</div>
				</Link>

				<nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
					{navigation.map((item) => (
						<Link
							key={item.key}
							to={item.to}
							className={`main-nav-link ${active === item.key ? "is-active" : ""}`}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="site-header-actions">
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
						className="header-pill"
					>
						GitHub
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</a>
					<button
						type="button"
						className="menu-toggle"
						onClick={() => setMenuOpen((current) => !current)}
						aria-expanded={menuOpen}
						aria-label={menuOpen ? "Close navigation" : "Open navigation"}
					>
						<FontAwesomeIcon icon={menuOpen ? faXmark : faBarsStaggered} />
					</button>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
