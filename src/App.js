import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import useTheme from "./hooks/useTheme";
import "./app.css";

export default function App() {
  const appearance = useTheme();
  return <HelmetProvider><Routes>
    <Route path="/" element={<Homepage {...appearance} />} />
    <Route path="/about" element={<About {...appearance} />} />
    <Route path="/projects" element={<Projects {...appearance} />} />
    <Route path="/contact" element={<Contact {...appearance} />} />
    <Route path="*" element={<Notfound {...appearance} />} />
  </Routes></HelmetProvider>;
}
