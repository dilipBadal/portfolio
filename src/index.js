import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function ThemeBootstrappedApp() {
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = stored || (prefersDark ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", theme);
    }, []);

    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

root.render(
    <React.StrictMode>
        <ThemeBootstrappedApp />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
