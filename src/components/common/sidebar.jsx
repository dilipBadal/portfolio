import { Link } from "react-router-dom";
import INFO from "../../data/user";
import Icon from "./icon";
export default function Sidebar() {
  return <aside className="sidebar" aria-label="Profile links">
    <Link to="/" className="monogram" aria-label="Dilip Badal home">DB<span /></Link>
    <div className="sidebar-socials">{["github", "linkedin"].map(name => <a key={name} href={INFO.socials[name]} target="_blank" rel="noopener noreferrer" aria-label={name === "github" ? "GitHub" : "LinkedIn"}><Icon name={name} /></a>)}</div>
    <div className="sidebar-rule" /><div className="sidebar-location"><Icon name="pin" /><span>Paris<br />France</span></div>
  </aside>;
}
