import React, { useEffect, useState } from "react";
import { GlbViewer } from "../components/GlbViewer.jsx";
import { localize, ui } from "../lib/i18n.js";

export function ProjectPage({ project, lang }) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const copy = ui[lang];
  const hasGallerySlideshow = project?.galleryLayout === "slideshow" && project.gallery?.length > 0;
  const selectedGalleryMedia = project?.gallery?.[selectedGalleryIndex];

  useEffect(() => {
    if (!hasGallerySlideshow) return undefined;
    const timerId = window.setInterval(() => {
      setSelectedGalleryIndex((current) =>
        current === project.gallery.length - 1 ? 0 : current + 1,
      );
    }, 800);
    return () => window.clearInterval(timerId);
  }, [hasGallerySlideshow, project?.gallery?.length]);

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
    <article className={`project-detail project-detail-${project.id}`}>
      <a className="back-link" href="#/">
        <span aria-hidden="true">&lt;</span>
        {copy.backToIndex}
      </a>

      <header className="detail-hero">
        <div className="detail-copy">
          <img className="project-brand" src={project.brand} alt="" />
          <div className="detail-actions">
            {project.document && (
              <a
                className="primary-link document-link"
                href={project.document}
                target="_blank"
                rel="noreferrer"
              >
                {copy.downloadPdf}
              </a>
            )}
            {project.presentation && (
              <a
                className="secondary-link document-link"
                href={project.presentation}
                target="_blank"
                rel="noreferrer"
              >
                {copy.downloadPresentation}
              </a>
            )}
          </div>
        </div>
        {project.model ? (
          <GlbViewer
            hint={copy.interact3d}
            settings={project.modelSettings}
            src={project.model}
            title={project.title}
          />
        ) : (
          <img src={project.cover} alt={`Render principal de ${project.title}`} />
        )}
      </header>

      <section className="project-story" aria-label="Project information">
        {localize(project.detailSections, lang).map((section) => (
          <section className="story-section" key={section.title}>
            <div>
              <span className="section-kicker">{project.title}</span>
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

      {hasGallerySlideshow ? (
        <section className="gallery-slideshow-section" aria-label="Project gallery">
          <img
            className="gallery-feature-image"
            src={project.galleryFeature}
            alt={`Highlighted view of ${project.title}`}
          />
          <div className="gallery-slideshow">
            <img
              key={selectedGalleryMedia}
              src={selectedGalleryMedia}
              alt={`View ${selectedGalleryIndex + 1} of ${project.title}`}
            />
          </div>
        </section>
      ) : (
        <section className="gallery-section" aria-label="Project gallery">
          {project.gallery.map((media, index) =>
            isVideo(media) ? (
              <video
                key={media}
                src={media}
                aria-label={`Video ${index + 1} of ${project.title}`}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                key={media}
                src={media}
                alt={`View ${index + 1} of ${project.title}`}
              />
            ),
          )}
        </section>
      )}

      {project.plans.length > 0 && (
        <section className="plans-section">
          <div className="plans-heading">
          <div>
            <span className="section-kicker">{copy.plans}</span>
            <h2>
              {localize(selectedPlan.label, lang)} / {project.plans.length}
            </h2>
          </div>
        </div>
          <div className={`plan-viewer ${project.plansLayout === "portrait" ? "plan-viewer-portrait" : ""}`}>
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
      )}
    </article>
  );
}

function isVideo(path) {
  return /\.(mp4|webm|mov)$/i.test(path);
}
