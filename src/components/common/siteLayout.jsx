import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./footer";
import NavBar from "./navBar";
import Sidebar from "./sidebar";

export default function SiteLayout({ active, theme, toggleTheme, children }) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  const skipToContent = event => {
    event.preventDefault();
    document.getElementById("main-content")?.focus();
  };
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link" onClick={skipToContent}>Skip to content</a>
      <Sidebar />
      <div className="site-content">
        <NavBar active={active} theme={theme} toggleTheme={toggleTheme} />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
