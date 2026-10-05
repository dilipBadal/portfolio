import { Link } from "react-router-dom";
import SiteLayout from "../components/common/siteLayout";
import PageMeta from "../components/common/pageMeta";
import Portrait from "../components/common/portrait";
import ContactCta from "../components/common/contactCta";
import Icon from "../components/common/icon";
import AllProjects from "../components/projects/allProjects";
import ToolGroups from "../components/about/toolGroups";
import BrandLogo from "../components/common/brandLogo";

function scrollToWork(event) {
  event.preventDefault();
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("selected-work")?.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
  });
}

export default function Homepage(props) {
  return (
    <SiteLayout active="home" {...props}>
      <PageMeta />
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Data science & analytics · Paris, FR</p>
          <h1>Dilip Badal<span className="accent">.</span></h1>
          <h2>Better questions.<br /><span className="accent">Clearer insights.</span></h2>
          <p className="hero-description">
            An engineering foundation, a data-focused direction. I work with Python,
            SQL, and BI to turn complex questions into useful insights.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#selected-work" onClick={scrollToWork}>
              Explore my work <Icon name="arrow" />
            </a>
            <Link className="text-link" to="/contact">Let’s talk <Icon name="arrow" /></Link>
          </div>
        </div>
        <Portrait />
      </section>
      <section className="section" id="selected-work">
        <div className="section-heading">
          <h2>Selected work</h2>
          <span className="heading-rule" />
          <Link className="text-link" to="/projects">All projects <Icon name="arrow" /></Link>
        </div>
        <AllProjects featuredOnly />
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>Tools & foundations</h2><span className="heading-rule" />
        </div>
        <div className="foundations-grid">
          <ToolGroups />
          <div className="foundation-details">
            <div>
              <h3>Currently studying</h3>
              <p>Data Science & Business Intelligence<br />EDC Paris Business School · 2025–2027</p>
            </div>
            <div>
              <h3>Previously</h3><div className="experience-summary"><BrandLogo src="/levich.svg" className="company-logo" /><p>Software engineering · Levich Solutions</p></div>
            </div>
          </div>
        </div>
      </section>
      <ContactCta />
    </SiteLayout>
  );
}
