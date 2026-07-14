import React, { useState } from "react";
import { localize, ui } from "../lib/i18n.js";

export function ProjectPage({ project, lang }) {
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
