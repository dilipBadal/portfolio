import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import "./app.css";

import { HelmetProvider } from "react-helmet-async";

function App() {
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", "noir");

		const handlePointerMove = (event) => {
			document.documentElement.style.setProperty(
				"--pointer-x",
				`${event.clientX}px`,
			);
			document.documentElement.style.setProperty(
				"--pointer-y",
				`${event.clientY}px`,
			);
		};

		const handleScroll = () => {
			const scrollableHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress =
				scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

			document.documentElement.style.setProperty(
				"--scroll-progress",
				progress.toFixed(4),
			);
		};

		handleScroll();
		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<HelmetProvider>
			<div className="App">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		</HelmetProvider>
	);
}

export default App;
