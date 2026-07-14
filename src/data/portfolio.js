const asset = (path) => new URL(path, import.meta.url).href;
const projectAsset = (projectId, path) =>
  asset(`../assets/projects/${projectId}/${path}`);

export const profile = {
  name: "Alejandro Biedma Carrasco",
  role: {
    en: "Industrial engineer",
    es: "Ingeniero industrial",
  },
  logo: asset("../assets/brand/logo-nombre.png"),
  symbol: asset("../assets/brand/logo.png"),
  location: "Spain",
  intro: {
    en: "Portfolio of industrial design, product development and technical visualization projects.",
    es: "Portfolio de proyectos de diseno industrial, desarrollo de producto y visualizacion tecnica.",
  },
  about: {
    en: "Industrial engineer interested in product design, manufacturing, functional improvement of everyday objects and visual communication of technical solutions.",
    es: "Ingeniero industrial con interes en el diseno de producto, la fabricacion, la mejora funcional de objetos cotidianos y la comunicacion visual de soluciones tecnicas.",
  },
  seeks: {
    en: "He seeks to participate in projects where technical rigor, aesthetics and user experience advance together from the first sketch to final validation.",
    es: "Busca participar en proyectos donde el rigor tecnico, la estetica y la experiencia de uso avancen juntos desde el primer boceto hasta la validacion final.",
  },
  course: {
    en: "Degree in Industrial Engineering",
    es: "Grado en Ingenieria Industrial",
  },
  curriculum: {
    en: [
      "Technical training focused on design, 3D modeling and product analysis.",
      "Academic experience developing concepts, drawings, renders and technical documentation.",
      "Interest in manufacturing processes, prototyping, materials and professional project presentation.",
    ],
    es: [
      "Formacion tecnica orientada al diseno, modelado 3D y analisis de producto.",
      "Experiencia academica en desarrollo de conceptos, planos, renders y documentacion tecnica.",
      "Interes por procesos de fabricacion, prototipado, materiales y presentacion profesional de proyectos.",
    ],
  },
  contacts: [
    {
      label: "Email",
      value: "alejandro@dominio.com",
      href: "mailto:alejandro@dominio.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/alejandro-biedma",
      href: "https://www.linkedin.com/in/alejandro-biedma",
    },
    {
      label: "Instagram",
      value: "@alejandro.biedma",
      href: "https://www.instagram.com/alejandro.biedma",
    },
  ],
};

export const programs = [
  {
    name: "SolidWorks",
    logo: "https://cdn.simpleicons.org/dassaultsystemes/1f1f1f",
  },
  {
    name: "AutoCAD",
    logo: "https://cdn.simpleicons.org/autodesk/1f1f1f",
  },
  {
    name: "Fusion 360",
    logo: "https://cdn.simpleicons.org/autodesk/1f1f1f",
  },
  {
    name: "KeyShot",
    logo: "https://cdn.simpleicons.org/keyshot/1f1f1f",
  },
  {
    name: "MATLAB",
    logo: "https://cdn.simpleicons.org/mathworks/1f1f1f",
  },
  {
    name: "Adobe Illustrator",
    logo: "https://cdn.simpleicons.org/adobeillustrator/1f1f1f",
  },
];

export const languages = [
  {
    name: { en: "Spanish", es: "Espanol" },
    level: { en: "Native", es: "Nativo" },
  },
  {
    name: { en: "English", es: "Ingles" },
    level: { en: "Professional proficiency", es: "Competencia profesional" },
  },
];

export const hobbies = {
  en: ["Product design", "3D modeling", "Prototyping", "Product photography"],
  es: ["Diseno de producto", "Modelado 3D", "Prototipado", "Fotografia de producto"],
};

export const projects = [
  {
    id: "toca-a-tiempo",
    title: "Toca a Tiempo",
    year: "2025",
    discipline: {
      en: "Industrial Product Design",
      es: "Diseno de producto industrial",
    },
    cover: projectAsset("toca-a-tiempo", "images/portada.jpg"),
    logo: projectAsset("toca-a-tiempo", "logo/logo-azul.png"),
    logoHover: projectAsset("toca-a-tiempo", "logo/logo-rojo.png"),
    brand: projectAsset("toca-a-tiempo", "logo/logo-completo.png"),
    summary: {
      en: "An autonomous interactive product designed to make cognitive stimulation accessible, dignified and enjoyable for older adults.",
      es: "Producto interactivo autonomo disenado para hacer que la estimulacion cognitiva sea accesible, digna y disfrutable para personas mayores.",
    },
    modalDetails: {
      en: [
        { label: "Project 01", value: "Toca a Tiempo" },
        { label: "Typology", value: "Industrial Product Design" },
        { label: "Course", value: "Design Methodology (September-December 2025)" },
        {
          label: "Authors",
          value: [
            "Alejandro Biedma",
            "Emma Cuadras",
            "Lydia Romero",
            "Tomas Soler",
            "Claudia Cabrera",
          ],
        },
      ],
      es: [
        { label: "Proyecto 01", value: "Toca a Tiempo" },
        { label: "Tipologia", value: "Diseno de producto industrial" },
        { label: "Curso", value: "Metodologia del Diseno (septiembre-diciembre 2025)" },
        {
          label: "Autores",
          value: [
            "Alejandro Biedma",
            "Emma Cuadras",
            "Lydia Romero",
            "Tomas Soler",
            "Claudia Cabrera",
          ],
        },
      ],
    },
    detailSections: {
      en: [
        {
          title: "The Challenge",
          paragraphs: [
            "Following field visits and direct research in adult day care centers, it was identified that a large portion of users experience advanced physical and cognitive decline, such as hearing loss, visual impairment, osteoarthritis, and tremors. Current technological leisure options often generate frustration and dependency, as they require complex setups, WiFi networks, or mobile applications controlled by third parties. Similarly, the market frequently offers products with childish aesthetics that devalue the dignity of elderly users.",
          ],
        },
        {
          title: "Project Description",
          paragraphs: [
            "Toca a Tiempo was born as a hybrid between traditional cognitive games and electronic interactivity. It consists of a completely autonomous physical device that eliminates the need for smartphones or secondary screens. Its aesthetics steer away from childish tropes to draw inspiration from the clean interface of a classic TV game show or a user-friendly control panel, completely eliminating the fear of breaking it and opening an accessible door to cognitive stimulation.",
          ],
        },
        {
          title: "Gameplay Mechanics and Interactions",
          intro:
            "The board's operation is intuitive and provides immediate sensory feedback:",
          items: [
            {
              label: "Memorable Stimulation",
              text: "The board features a matrix of 21 translucent buttons that light up in blue, configuring a random pattern. The user has 30 seconds to memorize it.",
            },
            {
              label: "Immediate Feedback",
              text: "Once the lights turn off, the user must replicate the sequence. If correct, the buttons turn green; if they fail, the panel blinks red, granting new opportunities without stressful penalties.",
            },
            {
              label: "Accessibility at the User's Pace",
              text: "On the left side, 3 functional buttons allow the user to recall the remaining sequence for 5, 10, or 15 seconds. A touch sensor on the right side generates a new game instantly.",
            },
          ],
        },
        {
          title: "Ergonomy and materials selection",
          intro:
            "Every component has been meticulously selected through an ergonomic and anthropometric study to adapt to the actual capabilities of the target user:",
          items: [
            {
              label: "ABS Plastic Casing",
              text: "Manufactured via injection molding, it offers a rigid, lightweight, and impact-resistant outer shell with a textured non-slip finish.",
            },
            {
              label: "Elastomeric Silicone Buttons",
              text: "A matrix featuring large-surface buttons (42 x 42 mm) with a soft touch that requires minimal actuation force, making them ideal for hands with osteoarthritis or tremors.",
            },
            {
              label: "Neutral Posture",
              text: "Optimized dimensions (550 x 240 x 60 mm) are designed so that, while the user is seated, the entire board remains within their frontal reach without needing to stretch, effectively preventing lumbar fatigue.",
            },
            {
              label: "Visual Comfort",
              text: "Internal LEDs emit a homogeneous and diffuse light, ensuring sharp contrast for people with visual deficits or cataracts without causing annoying glare.",
            },
          ],
        },
        {
          title: "Conclusions",
          paragraphs: [
            "In short, Toca a Tiempo demonstrates how industrial design can be transformed into a tool for social impact with the capacity to improve people's quality of life. By balancing fully adapted ergonomics, an intuitive electronic interface, and solid commercial viability, the project transcends the concept of a simple interactive product. Its true value lies in democratizing access to cognitive stimulation, eliminating the barriers of the digital divide, and restoring autonomy, enjoyment, and dignity to the leisure time of older adults.",
          ],
        },
      ],
      es: [
        {
          title: "El reto",
          paragraphs: [
            "Tras visitas de campo e investigacion directa en centros de dia para adultos, se identifico que una gran parte de los usuarios presenta deterioro fisico y cognitivo avanzado, como perdida auditiva, dificultades visuales, artrosis y temblores. Las opciones tecnologicas de ocio actuales suelen generar frustracion y dependencia, ya que requieren configuraciones complejas, redes WiFi o aplicaciones moviles controladas por terceros. Del mismo modo, el mercado ofrece con frecuencia productos con esteticas infantiles que devaluan la dignidad de las personas mayores.",
          ],
        },
        {
          title: "Descripcion del proyecto",
          paragraphs: [
            "Toca a Tiempo nace como un hibrido entre los juegos cognitivos tradicionales y la interactividad electronica. Consiste en un dispositivo fisico completamente autonomo que elimina la necesidad de smartphones o pantallas secundarias. Su estetica se aleja de los codigos infantiles y se inspira en la interfaz limpia de un concurso televisivo clasico o de un panel de control amable, eliminando el miedo a romperlo y abriendo una puerta accesible a la estimulacion cognitiva.",
          ],
        },
        {
          title: "Mecanicas de juego e interacciones",
          intro:
            "El funcionamiento del tablero es intuitivo y ofrece feedback sensorial inmediato:",
          items: [
            {
              label: "Estimulacion memorable",
              text: "El tablero incorpora una matriz de 21 botones translucidos que se iluminan en azul configurando un patron aleatorio. El usuario dispone de 30 segundos para memorizarlo.",
            },
            {
              label: "Feedback inmediato",
              text: "Cuando las luces se apagan, el usuario debe replicar la secuencia. Si acierta, los botones se iluminan en verde; si falla, el panel parpadea en rojo y concede nuevas oportunidades sin penalizaciones estresantes.",
            },
            {
              label: "Accesibilidad al ritmo del usuario",
              text: "En el lateral izquierdo, 3 botones funcionales permiten recordar la secuencia restante durante 5, 10 o 15 segundos. Un sensor tactil en el lateral derecho genera una nueva partida al instante.",
            },
          ],
        },
        {
          title: "Ergonomia y seleccion de materiales",
          intro:
            "Cada componente se ha seleccionado mediante un estudio ergonomico y antropometrico para adaptarse a las capacidades reales del usuario objetivo:",
          items: [
            {
              label: "Carcasa de plastico ABS",
              text: "Fabricada mediante moldeo por inyeccion, ofrece una envolvente rigida, ligera y resistente a impactos con acabado texturizado antideslizante.",
            },
            {
              label: "Botones de silicona elastomerica",
              text: "Matriz con botones de gran superficie (42 x 42 mm), tacto blando y fuerza de accionamiento minima, adecuados para manos con artrosis o temblores.",
            },
            {
              label: "Postura neutra",
              text: "Sus dimensiones optimizadas (550 x 240 x 60 mm) permiten que, con el usuario sentado, todo el tablero quede dentro del alcance frontal sin necesidad de estirarse, evitando fatiga lumbar.",
            },
            {
              label: "Confort visual",
              text: "Los LEDs internos emiten una luz homogenea y difusa, con contraste claro para personas con deficit visual o cataratas sin producir deslumbramientos molestos.",
            },
          ],
        },
        {
          title: "Conclusiones",
          paragraphs: [
            "En resumen, Toca a Tiempo demuestra como el diseno industrial puede transformarse en una herramienta de impacto social capaz de mejorar la calidad de vida de las personas. Al equilibrar ergonomia adaptada, una interfaz electronica intuitiva y viabilidad comercial, el proyecto trasciende el concepto de producto interactivo. Su verdadero valor reside en democratizar el acceso a la estimulacion cognitiva, eliminar barreras de la brecha digital y devolver autonomia, disfrute y dignidad al ocio de las personas mayores.",
          ],
        },
      ],
    },
    gallery: [
      projectAsset("toca-a-tiempo", "renders/juego-memoria-perspectiva-luces.jpg"),
      projectAsset("toca-a-tiempo", "renders/juego-memoria-perfil.jpg"),
      projectAsset("toca-a-tiempo", "renders/arriba-azul.jpg"),
      projectAsset("toca-a-tiempo", "renders/arriba-rojo.jpg"),
      projectAsset("toca-a-tiempo", "renders/arriba-verde.jpg"),
    ],
    document: projectAsset("toca-a-tiempo", "documents/memoria.pdf"),
    plans: [
      {
        label: { en: "Drawing 1", es: "Plano 1" },
        href: projectAsset("toca-a-tiempo", "plans/plano-1.pdf"),
        image: projectAsset("toca-a-tiempo", "plans/images/plano-1.png"),
      },
      {
        label: { en: "Drawing 2", es: "Plano 2" },
        href: projectAsset("toca-a-tiempo", "plans/plano-2.pdf"),
        image: projectAsset("toca-a-tiempo", "plans/images/plano-2.png"),
      },
      {
        label: { en: "Drawing 3", es: "Plano 3" },
        href: projectAsset("toca-a-tiempo", "plans/plano-3.pdf"),
        image: projectAsset("toca-a-tiempo", "plans/images/plano-3.png"),
      },
      {
        label: { en: "Drawing 4", es: "Plano 4" },
        href: projectAsset("toca-a-tiempo", "plans/plano-4.pdf"),
        image: projectAsset("toca-a-tiempo", "plans/images/plano-4.png"),
      },
    ],
  },
];
