import React, { useEffect, useMemo, useState } from "react";
import { projects } from "./data/portfolio.js";
import { Shell } from "./components/Shell.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { IndexPage } from "./pages/IndexPage.jsx";
import { ProjectPage } from "./pages/ProjectPage.jsx";

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || "#/");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return hash;
}

function App() {
  const route = useHashRoute();
  const [lang, setLang] = useState(() => localStorage.getItem("portfolio-lang") || "en");
  const projectSlug = route.startsWith("#/project/")
    ? route.replace("#/project/", "")
    : null;
  const activeProject = useMemo(
    () => projects.find((project) => project.id === projectSlug),
    [projectSlug],
  );

  const handleLanguageChange = (nextLang) => {
    setLang(nextLang);
    localStorage.setItem("portfolio-lang", nextLang);
  };

  let page = <IndexPage lang={lang} />;
  if (route === "#/contact") page = <ContactPage lang={lang} />;
  if (route === "#/about") page = <AboutPage lang={lang} />;
  if (projectSlug) page = <ProjectPage project={activeProject} lang={lang} />;

  return (
    <Shell route={route} lang={lang} onLanguageChange={handleLanguageChange}>
      {page}
    </Shell>
  );
}

export default App;
