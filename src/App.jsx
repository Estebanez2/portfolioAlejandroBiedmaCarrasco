import React, { useEffect, useMemo, useState } from "react";
import {
  hobbies,
  languages,
  profile,
  programs,
  projects,
} from "./data/portfolio.js";

const navItems = [
  { label: { en: "Index", es: "Indice" }, hash: "#/" },
  { label: { en: "Contact", es: "Contacto" }, hash: "#/contact" },
  { label: { en: "About me", es: "Sobre mi" }, hash: "#/about" },
];

const ui = {
  en: {
    backToIndex: "Back to index",
    close: "Close",
    contact: "Contact",
    contactHeading: "Engineering dialogue for precise industrial solutions.",
    curriculum: "Curriculum",
    downloadPdf: "Project report",
    hobbies: "Hobbies",
    languages: "Languages",
    nextPlan: "Next drawing",
    notFound: "Project not found",
    plans: "Technical drawings",
    previousPlan: "Previous drawing",
    programs: "Software",
    seeMore: "See more",
    seeks: "What he is looking for",
    course: "Course",
    switchLanguage: "Language",
  },
  es: {
    backToIndex: "Volver al indice",
    close: "Cerrar",
    contact: "Contacto",
    contactHeading: "Dialogo tecnico para soluciones industriales precisas.",
    curriculum: "Curriculum",
    downloadPdf: "Memoria del Proyecto",
    hobbies: "Hobbies",
    languages: "Idiomas",
    nextPlan: "Plano siguiente",
    notFound: "Proyecto no encontrado",
    plans: "Planos tecnicos",
    previousPlan: "Plano anterior",
    programs: "Programas",
    seeMore: "Ver mas",
    seeks: "Que busca",
    course: "Curso",
    switchLanguage: "Idioma",
  },
};

function localize(value, lang) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object" && lang in value) return value[lang];
  return value;
}

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || "#/");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return hash;
}

function Shell({ children, route, lang, onLanguageChange }) {
  const activeRoute = route.startsWith("#/project/") ? "#/" : route;
  const showHeader = !route.startsWith("#/project/");
  const copy = ui[lang];

  return (
    <div className="site-shell">
      {showHeader && (
        <header className="site-header" aria-label="Identity">
          <a className="identity-link" href="#/" aria-label={copy.backToIndex}>
            <img src={profile.logo} alt={profile.name} />
          </a>
          <p>{localize(profile.role, lang)}</p>
        </header>
      )}

      <main className="main-stage">{children}</main>

      <div className="language-switcher" aria-label={copy.switchLanguage}>
        <button
          className={lang === "en" ? "active" : ""}
          type="button"
          onClick={() => onLanguageChange("en")}
        >
          <span aria-hidden="true">🇬🇧</span>
          EN
        </button>
        <button
          className={lang === "es" ? "active" : ""}
          type="button"
          onClick={() => onLanguageChange("es")}
        >
          <span aria-hidden="true">🇪🇸</span>
          ES
        </button>
      </div>

      <nav className="bottom-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.hash}
            className={activeRoute === item.hash ? "active" : ""}
            href={item.hash}
          >
            {localize(item.label, lang)}
          </a>
        ))}
      </nav>
    </div>
  );
}

function IndexPage({ lang }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="project-grid" aria-label="Projects">
        {projects.map((project) => (
          <button
            className="project-tile"
            key={project.id}
            onClick={() => setSelectedProject(project)}
            type="button"
          >
            <img className="tile-cover" src={project.cover} alt="" />
            <span className="tile-logo" aria-hidden="true">
              <img className="tile-logo-default" src={project.logo} alt="" />
              <img className="tile-logo-hover" src={project.logoHover} alt="" />
            </span>
            <span className="tile-meta">{localize(project.discipline, lang)}</span>
            <strong>{project.title}</strong>
          </button>
        ))}
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

function ProjectModal({ project, lang, onClose }) {
  const copy = ui[lang];

  useEffect(() => {
    const closeWithEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeWithEsc);
    return () => window.removeEventListener("keydown", closeWithEsc);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="project-modal"
        aria-modal="true"
        role="dialog"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="icon-button close-button" type="button" onClick={onClose}>
          <span aria-hidden="true">x</span>
          <span className="sr-only">{copy.close}</span>
        </button>
        <div className="modal-media">
          <img src={project.gallery[0] || project.cover} alt="" />
        </div>
        <div className="modal-copy">
          <div className="modal-content">
            <img className="modal-brand" src={project.brand} alt="" />
            <dl className="modal-details" id="modal-title">
              {(localize(project.modalDetails, lang) ?? []).map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>
                    {Array.isArray(detail.value)
                      ? detail.value.map((item) => <span key={item}>{item}</span>)
                      : detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="modal-actions">
            <a className="primary-link" href={`#/project/${project.id}`}>
              {copy.seeMore}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function ProjectPage({ project, lang }) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const copy = ui[lang];

  if (!project) {
    return (
      <section className="empty-state">
        <h1>{copy.notFound}</h1>
        <a className="primary-link" href="#/">
          {copy.backToIndex}
        </a>
      </section>
    );
  }

  const selectedPlan = project.plans[selectedPlanIndex];
  const goToPreviousPlan = () => {
    setSelectedPlanIndex((current) =>
      current === 0 ? project.plans.length - 1 : current - 1,
    );
  };
  const goToNextPlan = () => {
    setSelectedPlanIndex((current) =>
      current === project.plans.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <article className="project-detail">
      <a className="back-link" href="#/">
        <span aria-hidden="true">&lt;</span>
        {copy.backToIndex}
      </a>

      <header className="detail-hero">
        <div className="detail-copy">
          <img className="project-brand" src={project.brand} alt="" />
          <div className="detail-actions">
            <a
              className="primary-link document-link"
              href={project.document}
              target="_blank"
              rel="noreferrer"
            >
              {copy.downloadPdf}
            </a>
          </div>
        </div>
        <img src={project.cover} alt={`Render principal de ${project.title}`} />
      </header>

      <section className="project-story" aria-label="Project information">
        {localize(project.detailSections, lang).map((section) => (
          <section className="story-section" key={section.title}>
            <div>
              <span className="section-kicker">Toca a Tiempo</span>
              <h2>{section.title}</h2>
            </div>
            <div className="story-copy">
              {section.intro && <p>{section.intro}</p>}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items && (
                <ul className="story-list">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </section>

      <section className="gallery-section" aria-label="Project gallery">
        {project.gallery.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`View ${index + 1} of ${project.title}`}
          />
        ))}
      </section>

      <section className="plans-section">
        <div className="plans-heading">
          <div>
            <span className="section-kicker">{copy.plans}</span>
            <h2>{localize(selectedPlan.label, lang)}</h2>
          </div>
          <span className="plan-count">
            {selectedPlanIndex + 1} / {project.plans.length}
          </span>
        </div>
        <div className="plan-viewer">
          <button
            className="plan-arrow plan-arrow-left"
            type="button"
            onClick={goToPreviousPlan}
            aria-label={copy.previousPlan}
          >
            <span aria-hidden="true">&lt;</span>
          </button>
          <img src={selectedPlan.image} alt={localize(selectedPlan.label, lang)} />
          <button
            className="plan-arrow plan-arrow-right"
            type="button"
            onClick={goToNextPlan}
            aria-label={copy.nextPlan}
          >
            <span aria-hidden="true">&gt;</span>
          </button>
        </div>
      </section>
    </article>
  );
}

function ContactPage({ lang }) {
  const copy = ui[lang];

  return (
    <section className="contact-page">
      <div className="page-heading contact-heading">
        <div>
          <span>{copy.contact}</span>
          <h1>{copy.contactHeading}</h1>
        </div>
        <div className="contact-list">
          {profile.contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
            >
              <ContactIcon label={contact.label} />
              <span>
                <strong>{contact.label}</strong>
                <small>
                  {contact.label === "Email" ? contact.value : "@a.biedma"}
                </small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ label }) {
  const key = label.toLowerCase();

  if (key === "email") {
    return (
      <img
        src="https://cdn.simpleicons.org/gmail/FFFFFF"
        alt=""
        aria-hidden="true"
      />
    );
  }

  if (key === "linkedin") {
    return (
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23ffffff' d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'/%3E%3C/svg%3E"
        alt=""
        aria-hidden="true"
      />
    );
  }

  return (
    <img
      src="https://cdn.simpleicons.org/instagram/FFFFFF"
      alt=""
      aria-hidden="true"
    />
  );
}

function AboutPage({ lang }) {
  const copy = ui[lang];
  const aboutContent = localize(profile.about, lang);
  const aboutLines = Array.isArray(aboutContent) ? aboutContent : [aboutContent];

  return (
    <section className="about-page">
      <div className="page-heading about-heading">
        <div className="about-heading-copy">
          <span>{localize(navItems[2].label, lang)}</span>
          <h1>{aboutLines[0]}</h1>
          <div className="about-intro">
            {aboutLines.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <img src={profile.portrait} alt={profile.name} />
      </div>

      <section className="about-block">
        <h2>{copy.curriculum}</h2>
        <ul className="text-list">
          {localize(profile.curriculum, lang).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="about-block">
        <h2>{copy.programs}</h2>
        <div className="software-grid">
          {programs.map((program) => (
            <div className="software-item" key={program.name}>
              <span className="software-mark" aria-hidden="true">
                <span>{getInitials(program.name)}</span>
                <img
                  src={program.logo}
                  alt=""
                  onError={(event) => event.currentTarget.remove()}
                />
              </span>
              <span>{program.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-two-columns">
        <div className="about-block">
          <h2>{copy.seeks}</h2>
          <p>{localize(profile.seeks, lang)}</p>
        </div>
        <div className="about-block">
          <h2>{copy.course}</h2>
          <p>{localize(profile.course, lang)}</p>
        </div>
      </section>

      <section className="about-two-columns">
        <div className="about-block">
          <h2>{copy.languages}</h2>
          <div className="pill-list">
            {languages.map((language) => (
              <span key={localize(language.name, lang)}>
                {localize(language.name, lang)} / {localize(language.level, lang)}
              </span>
            ))}
          </div>
        </div>
        <div className="about-block">
          <h2>{copy.hobbies}</h2>
          <div className="pill-list">
            {localize(hobbies, lang).map((hobby) => (
              <span key={hobby}>{hobby}</span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
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
