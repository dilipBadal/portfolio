import { Helmet } from "react-helmet-async";
export default function PageMeta({ title, description }) {
  return <Helmet><title>{title ? `${title} | Dilip Badal` : "Dilip Badal | Data Science & Analytics"}</title><meta name="description" content={description || "Dilip Badal’s portfolio: data science, analytics, business intelligence, and a software engineering foundation. Based in Paris, France."} /></Helmet>;
}
