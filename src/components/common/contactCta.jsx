import { Link } from "react-router-dom";
import INFO from "../../data/user";
import Icon from "./icon";
export default function ContactCta() { return <section className="contact-cta"><div><h2>Have a question worth exploring?</h2><a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a></div><Link className="button button-primary" to="/contact">Get in touch <Icon name="arrow" /></Link></section>; }
