import { Link } from "react-router-dom";
import Icon from "./icon";

const items = [
  { label: "Work", to: "/", key: "home" },
  { label: "About", to: "/about", key: "about" },
  { label: "Contact", to: "/contact", key: "contact" },
];

export default function NavBar({ active, theme, toggleTheme }) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  return (
    <header className="site-header">
      <nav aria-label="Primary">
        {items.map(item => {
          const selected = active === item.key || (active === "projects" && item.key === "home");
          return (
            <Link key={item.key} to={item.to} className={`nav-link ${selected ? "is-active" : ""}`}
              aria-current={active === item.key ? "page" : undefined}>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button className="icon-button" onClick={toggleTheme}
        aria-label={`Switch to ${nextTheme} mode`} title={`Switch to ${nextTheme} mode`}>
        <Icon name={theme === "dark" ? "moon" : "sun"} />
      </button>
    </header>
  );
}
