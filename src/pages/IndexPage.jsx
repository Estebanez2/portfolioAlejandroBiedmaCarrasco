import React, { useEffect } from "react";
import { projects } from "../data/portfolio.js";
import { localize, ui } from "../lib/i18n.js";
import { useState } from "react";

export function IndexPage({ lang }) {
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
