import { useEffect, useState } from "react";

const preferenceKey = "portfolio-theme";
const systemTheme = () => window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const savedTheme = () => {
  try {
    const saved = localStorage.getItem(preferenceKey);
    return ["light", "dark"].includes(saved) ? saved : null;
  } catch { return null; }
};

export default function useTheme() {
  const [theme, setTheme] = useState(() => savedTheme() || systemTheme());
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#14171e" : "#fcfcff");
  }, [theme]);
  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const update = () => { if (!savedTheme()) setTheme(systemTheme()); };
    media?.addEventListener?.("change", update);
    return () => media?.removeEventListener?.("change", update);
  }, []);
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    try { localStorage.setItem(preferenceKey, next); } catch { /* In-memory choice still works. */ }
    setTheme(next);
  };
  return { theme, toggleTheme };
}
