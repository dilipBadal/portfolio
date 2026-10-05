import { Link } from "react-router-dom";
import SiteLayout from "../components/common/siteLayout";
import PageMeta from "../components/common/pageMeta";
export default function Notfound(props) { return <SiteLayout {...props}><PageMeta title="Page not found" /><section className="page-intro notfound"><p className="eyebrow">404 · Page not found</p><h1>A wrong turn.<br /><span className="accent">An easy way back.</span></h1><p>This page doesn’t exist. Let’s get you back to the work.</p><Link className="button button-primary" to="/">Back to work ↗</Link></section></SiteLayout>; }
