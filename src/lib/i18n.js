export const navItems = [
  { label: { en: "Index", es: "Índice" }, hash: "#/" },
  { label: { en: "Contact", es: "Contacto" }, hash: "#/contact" },
  { label: { en: "About me", es: "Sobre mí" }, hash: "#/about" },
];

export const ui = {
  en: {
    backToIndex: "Back to index",
    close: "Close",
    contact: "Contact",
    contactHeading: "Engineering díalogue for precise industrial solutions.",
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
    backToIndex: "Volver al índice",
    close: "Cerrar",
    contact: "Contacto",
    contactHeading: "Diálogo técnico para soluciones industriales precisas.",
    curriculum: "Currículum",
    downloadPdf: "Memoria del Proyecto",
    hobbies: "Hobbies",
    languages: "Idiomas",
    nextPlan: "Plano siguiente",
    notFound: "Proyecto no encontrado",
    plans: "Planos técnicos",
    previousPlan: "Plano anterior",
    programs: "Programas",
    seeMore: "Ver más",
    seeks: "Qué busca",
    course: "Curso",
    switchLanguage: "Idioma",
  },
};

export function localize(value, lang) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object" && lang in value) return value[lang];
  return value;
}
