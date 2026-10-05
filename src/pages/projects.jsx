import SiteLayout from "../components/common/siteLayout";
import PageMeta from "../components/common/pageMeta";
import ContactCta from "../components/common/contactCta";
import AllProjects from "../components/projects/allProjects";

export default function Projects(props) {
  return (
    <SiteLayout active="projects" {...props}>
      <PageMeta title="Projects" />
      <section className="page-intro">
        <p className="eyebrow">The work</p>
        <h1>Ideas into products.<br /><span className="accent">One project at a time.</span></h1>
        <p>A selection of community platforms, social products, and experiments.<br />Built on an engineering foundation, with a growing focus on data.</p>
      </section>
      <section className="section">
        <h2 className="projects-heading">Projects & experiments</h2><AllProjects />
      </section>
      <ContactCta />
    </SiteLayout>
  );
}
