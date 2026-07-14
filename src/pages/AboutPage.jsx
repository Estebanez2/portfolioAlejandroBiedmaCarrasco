import React from "react";
import {
  hobbies,
  languages,
  profile,
  programs,
} from "../data/portfolio.js";
import { localize, navItems, ui } from "../lib/i18n.js";

export function AboutPage({ lang }) {
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
