import { useState } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "../components/common/siteLayout";
import PageMeta from "../components/common/pageMeta";
import Icon from "../components/common/icon";
import INFO from "../data/user";

const topics = [
  "Data science & analytics opportunities",
  "Business intelligence & data products",
  "Product engineering collaborations",
];
const socials = [
  { name: "linkedin", label: "LinkedIn", detail: "Professional profile" },
  { name: "github", label: "GitHub", detail: "@dilipBadal" },
];

export default function Contact(props) {
  const [copyStatus, setCopyStatus] = useState("");
  const copied = copyStatus === "Email address copied.";
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(INFO.main.email);
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus("Copy isn’t available. Select the email address above to copy it.");
    }
  };

  return (
    <SiteLayout active="contact" {...props}>
      <PageMeta title="Contact" />
      <section className="page-intro contact-intro">
        <p className="eyebrow">Get in touch</p>
        <h1>Good conversations.<br /><span className="accent">Useful possibilities.</span></h1>
        <p>Have a project, a data question, or an opportunity in mind?<br />I’d love to hear about it.</p>
      </section>
      <section className="email-panel">
        <h2>Email is the best place to start.</h2>
        <a className="contact-email" href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${INFO.main.email}`}>
            <Icon name="email" /> Write an email <Icon name="arrow" />
          </a>
          <button className="copy-button" onClick={copyAddress}>
            <Icon name={copied ? "check" : "copy"} /> {copied ? "Copied" : "Copy address"}
          </button>
        </div>
        <p className="copy-status" role="status">{copyStatus}</p>
      </section>
      <section className="contact-columns">
        <div>
          <h2>What we can talk about</h2>
          <ul className="conversation-list">{topics.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h2>Elsewhere</h2>
          <div className="contact-socials">
            {socials.map(item => (
              <a key={item.name} href={INFO.socials[item.name]} target="_blank" rel="noopener noreferrer">
                <Icon name={item.name} />
                <div><h3>{item.label}</h3><p>{item.detail}</p></div>
                <Icon name="arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="contact-location">
        <Icon name="pin" />
        <div><h3>Based in Paris, France</h3><p>Happy to connect about thoughtful work.</p></div>
      </div>
      <Link className="text-link back-to-work" to="/">Back to work <Icon name="arrow" /></Link>
    </SiteLayout>
  );
}
