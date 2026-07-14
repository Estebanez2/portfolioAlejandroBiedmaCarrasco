import React from "react";
import { profile } from "../data/portfolio.js";
import { localize, navItems, ui } from "../lib/i18n.js";

export function Shell({ children, route, lang, onLanguageChange }) {
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
          <span className="flag flag-en" aria-hidden="true" />
          EN
        </button>
        <button
          className={lang === "es" ? "active" : ""}
          type="button"
          onClick={() => onLanguageChange("es")}
        >
          <span className="flag flag-es" aria-hidden="true" />
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
