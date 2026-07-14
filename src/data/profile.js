import { asset } from './assets.js';

export const profile = {
  name: "Alejandro Biedma Carrasco",
  role: {
    en: "Industrial engineer",
    es: "Ingeniero industrial",
  },
  logo: asset("../assets/brand/logo-nombre.png"),
  symbol: asset("../assets/brand/logo.png"),
  portrait: asset("../assets/brand/cara.png"),
  location: "Spain",
  intro: {
    en: "Portfolio of industrial design, product development and technical visualization projects.",
    es: "Portfolio de proyectos de diseño industrial, desarrollo de producto y visualización técnica.",
  },
  about: {
    en: [
      "I am an Industrial Design and Product Development Engineering student at the University of Málaga.",
      "I believe that good design is not about adding more, but about understanding. It starts with defining the problem precisely, reducing complexity, and developing solutions that create real value. My work strives to balance innovation, functionality, and aesthetics while always considering technical and industrial feasibility.",
      "This portfolio showcases a selection of academic projects that reflect both my growth and my approach to design: simple when it can be, precise when it needs to be, and always focused on creating products that are useful, honest, and built to last.",
    ],
    es: [
      "Soy estudiante de Ingeniería en Diseño Industrial y Desarrollo del Producto en la Universidad de Málaga.",
      "Creo que el buen diseño no consiste en añadir más, sino en entender mejor. Empieza por definir el problema con precisión, reducir la complejidad y desarrollar soluciones que generen valor real. Mi trabajo busca equilibrar innovación, funcionalidad y estética, siempre considerando la viabilidad técnica e industrial.",
      "Este portfolio muestra una selección de proyectos académicos que reflejan tanto mi evolución como mi forma de entender el diseño: simple cuando puede serlo, preciso cuando debe serlo y siempre enfocado en crear productos útiles, honestos y pensados para durar.",
    ],
  },
  seeks: {
    en: "He seeks to participate in projects where technical rigor, aesthetics and user experience advance together from the first sketch to final validation.",
    es: "Busca participar en proyectos donde el rigor técnico, la estética y la experiencia de uso avancen juntos desde el primer boceto hasta la validación final.",
  },
  course: {
    en: "Starting the fourth year of the degree.",
    es: "Voy a cursar cuarto curso del grado.",
  },
  curriculum: {
    en: [
      "Industrial Design and Product Development Engineering student.",
      "Driving license.",
      "Black belt, First Dan in Karate, with more than 10 years of experience.",
    ],
    es: [
      "Estudiante de Ingeniería en Diseño Industrial y Desarrollo del Producto.",
      "Carnet de coche.",
      "Cinturón negro Primer Dan de Karate, con más de 10 años de experiencia.",
    ],
  },
  contacts: [
    {
      label: "Email",
      value: "a.biedmacarrasco@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=a.biedmacarrasco@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/alejandro-biedma-carrasco-ba7702405",
      href: "https://www.linkedin.com/in/alejandro-biedma-carrasco-ba7702405/",
    },
    {
      label: "Instagram",
      value: "@a.biedma",
      href: "https://www.instagram.com/a.biedma/",
    },
  ],
};

export const languages = [
  {
    name: { en: "Spanish", es: "Español" },
    level: { en: "Native", es: "Nativo" },
  },
  {
    name: { en: "English", es: "Inglés" },
    level: { en: "Intermediate", es: "Intermedio" },
  },
];

export const hobbies = {
  en: ["Karate", "Product design", "3D modeling", "Technical drawing"],
  es: ["Karate", "Diseño de producto", "Modelado 3D", "Dibujo técnico"],
};

