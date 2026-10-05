const projects = [
  {
    title: "ScoutLens",
    logo: "/brand/scoutlens-mark.png",
    description: "Football scouting with role-based player rankings, comparisons, and evidence charts. Built on data from Europe’s top five leagues across the 2024/25 and 2025/26 seasons.",
    visual: "lens",
    isNew: true,
    featured: true,
    stack: ["React", "TypeScript", "Python", "FastAPI"],
    link: "https://scout-lense.vercel.app/",
    linkText: "Visit app",
  },
  { title: "StudaConnect", logo: "/studaconnect_logo.png", description: "A connected digital campus. A white-labeled social platform for universities.", visual: "campus", initials: "SC", stack: ["React Native", "Python", "PostgreSQL", "Supabase"], link: "https://www.studaconnect.com/", linkText: "Visit platform", featured: true },
  { title: "LÜVYN", logo: "/luvyn_logo.png", description: "A slower way to connect. An intentional dating platform built around paced interactions.", visual: "social", initials: "LÜ", stack: ["React", "Python", "PostgreSQL"], link: "https://www.luvyn.app", linkText: "Visit platform", featured: true },
  {
    title: "PokéPal",
    featured: true,
    description: "An end-to-end Pokémon data science project: data collection, exploration, and primary-type prediction from six base stats, with model comparisons in an interactive Streamlit dashboard.",
    visual: "campus",
    initials: "PP",
    stack: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Plotly"],
    link: "https://github.com/dilipBadal/PokeGuesser",
    linkText: "View source",
  },
  { title: "Strategic Chess AI", description: "A Python chess engine exploring minimax search and heuristic evaluation.", visual: "lens", initials: "AI", stack: ["Python", "Algorithms", "Game Logic"], link: "https://github.com/dilipBadal/Chess-Game-Ai", linkText: "View source" }
];
export default projects;
