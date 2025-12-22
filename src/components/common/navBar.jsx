import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        setTheme(current);
    }, []);

    const toggleTheme = () => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        setTheme(next);
        try {
            localStorage.setItem("theme", next);
        } catch (e) {}
    };

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
					{/* Articles link removed */}
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
                            <li className="nav-item theme-toggle-item">
                                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                                    <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                                </button>
                            </li>
                        </ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
