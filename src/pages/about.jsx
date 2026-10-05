import SiteLayout from "../components/common/siteLayout";
import PageMeta from "../components/common/pageMeta";
import Portrait from "../components/common/portrait";
import ContactCta from "../components/common/contactCta";
import ToolGroups from "../components/about/toolGroups";
import BrandLogo from "../components/common/brandLogo";

const timeline = [
  { date: "2025–2027", type: "Education", title: "EDC Paris Business School", detail: "Masters in Data Science & Business Intelligence" },
  { date: "2023–2025", type: "Experience", title: "Levich Solutions", logo: "/levich.svg", detail: "Software Engineer", description: "Product delivery, reliable features, and full-stack engineering." },
  { date: "2021–2023", type: "Education", title: "RJS First Grade College", detail: "Bachelor of Computer Applications" },
];
const principles = [
  { title: "Ask the right question", body: "Start with the decision the analysis needs to support." },
  { title: "Build clear systems", body: "Keep the structure reusable, understandable, and dependable." },
  { title: "Communicate simply", body: "Make the findings and their limits easy to understand." },
];

export default function About(props) {
  return (
    <SiteLayout active="about" {...props}>
      <PageMeta title="About" />
      <section className="about-hero">
        <div>
          <p className="eyebrow">The person behind the work</p>
          <h1>Engineering roots.<br /><span className="accent">A data-focused future.</span></h1>
          <p>I’m Dilip, based in Paris. I bring a software engineering foundation to data science, analytics, and business intelligence.</p>
          <p>I enjoy understanding how systems work, asking useful questions, and making complex information easier to act on.</p>
        </div>
        <Portrait variant="personal" />
      </section>
      <section className="section about-foundations">
        <div>
          <h2>My path</h2>
          <ol className="timeline">
            {timeline.map(item => (
              <li key={item.title}>
                <p className="timeline-meta">{item.date} · {item.type}</p>
                <div className="timeline-title">{item.logo && <BrandLogo src={item.logo} className="company-logo" />}<h3>{item.title}</h3></div>
                <p>{item.detail}</p>
                {item.description && <p>{item.description}</p>}
              </li>
            ))}
          </ol>
        </div>
        <div className="about-tools"><h2>Tools I work with</h2><ToolGroups engineering /></div>
      </section>
      <section className="section approach">
        <h2>How I approach the work</h2>
        <div className="principles-grid">
          {principles.map(item => (
            <div key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>
          ))}
        </div>
        <p className="personal-note">Outside the work? I love dogs.</p>
      </section>
      <ContactCta />
    </SiteLayout>
  );
}
