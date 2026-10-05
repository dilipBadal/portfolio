import { Link } from "react-router-dom";
export default function Footer() { return <footer className="site-footer"><span>© {new Date().getFullYear()} Dilip Badal.</span><span>Based in Paris, France.</span><Link to="/projects">All projects ↗</Link></footer>; }
