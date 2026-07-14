import React from "react";
import { profile } from "../data/portfolio.js";
import { ui } from "../lib/i18n.js";

export function ContactPage({ lang }) {
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
