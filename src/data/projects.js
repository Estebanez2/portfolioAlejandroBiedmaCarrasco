import { projectAsset } from "./assets.js";

const planImages = (projectId, count) =>
  Array.from({ length: count }, (_, index) => ({
    label: { en: `Drawing ${index + 1}`, es: `Plano ${index + 1}` },
    image: projectAsset(projectId, `plans/plan-${index + 1}.png`),
  }));

export const projects = [
  {
    id: "toca-a-tiempo",
    title: "Toca a Tiempo",
    year: "2025",
    discipline: {
      en: "Industrial Product Design",
      es: "Diseño de producto industrial",
    },
    cover: projectAsset("toca-a-tiempo", "images/portada.jpg"),
    logo: projectAsset("toca-a-tiempo", "logo/logo.png"),
    logoHover: projectAsset("toca-a-tiempo", "logo/logo-hoover.png"),
    brand: projectAsset("toca-a-tiempo", "logo/logo-completo.png"),
    summary: {
      en: "An autonomous interactive product designed to make cognitive stimulation accessible, dignified and enjoyable for older adults.",
      es: "Producto interactivo autónomo diseñado para hacer que la estimulación cognitiva sea accesible, digna y disfrutable para personas mayores.",
    },
    modalDetails: {
      en: [
        { label: "Project 01", value: "Toca a Tiempo" },
        { label: "Typology", value: "Industrial Product Design" },
        { label: "Course", value: "Design Methodology (September-December 2025)" },
        {
          label: "Authors",
          value: ["Alejandro Biedma", "Emma Cuadras", "Lydia Romero", "Tomás Soler", "Claudia Cabrera"],
        },
      ],
      es: [
        { label: "Proyecto 01", value: "Toca a Tiempo" },
        { label: "Tipología", value: "Diseño de producto industrial" },
        { label: "Curso", value: "Metodología del Diseño (septiembre-diciembre 2025)" },
        {
          label: "Autores",
          value: ["Alejandro Biedma", "Emma Cuadras", "Lydia Romero", "Tomás Soler", "Claudia Cabrera"],
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
          intro: "The board's operation is intuitive and provides immediate sensory feedback:",
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
              text: "On the left side, three functional buttons allow the user to recall the remaining sequence for 5, 10, or 15 seconds. A touch sensor on the right side generates a new game instantly.",
            },
          ],
        },
        {
          title: "Ergonomy and Materials Selection",
          intro: "Every component was selected through an ergonomic and anthropometric study to adapt to the actual capabilities of the target user:",
          items: [
            {
              label: "ABS Plastic Casing",
              text: "Manufactured via injection molding, it offers a rigid, lightweight and impact-resistant outer shell with a textured non-slip finish.",
            },
            {
              label: "Elastomeric Silicone Buttons",
              text: "A matrix featuring large-surface buttons (42 x 42 mm) with a soft touch that requires minimal actuation force, making them ideal for hands with osteoarthritis or tremors.",
            },
            {
              label: "Neutral Posture",
              text: "Optimized dimensions (550 x 240 x 60 mm) keep the entire board within frontal reach while the user is seated, preventing lumbar fatigue.",
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
            "In short, Toca a Tiempo demonstrates how industrial design can be transformed into a tool for social impact with the capacity to improve people's quality of life. By balancing adapted ergonomics, an intuitive electronic interface and solid commercial viability, the project transcends the concept of a simple interactive product. Its true value lies in democratizing access to cognitive stimulation, eliminating the barriers of the digital divide and restoring autonomy, enjoyment and dignity to the leisure time of older adults.",
          ],
        },
      ],
      es: [
        {
          title: "El reto",
          paragraphs: [
            "Tras visitas de campo e investigación directa en centros de día para personas mayores, se identificó que gran parte de los usuarios presenta un deterioro físico y cognitivo avanzado, como pérdida auditiva, discapacidad visual, artrosis y temblores. Las opciones tecnológicas actuales de ocio suelen generar frustración y dependencia, ya que requieren configuraciones complejas, redes WiFi o aplicaciones móviles controladas por terceros. Del mismo modo, el mercado ofrece con frecuencia productos con una estética infantil que devalúa la dignidad de los usuarios mayores.",
          ],
        },
        {
          title: "Descripción del proyecto",
          paragraphs: [
            "Toca a Tiempo nace como un híbrido entre los juegos cognitivos tradicionales y la interactividad electrónica. Consiste en un dispositivo físico completamente autónomo que elimina la necesidad de utilizar teléfonos móviles o pantallas secundarias. Su estética se aleja de los recursos infantiles y toma como referencia la interfaz limpia de un concurso televisivo clásico o de un panel de control accesible, eliminando el miedo a romperlo y abriendo una puerta sencilla a la estimulación cognitiva.",
          ],
        },
        {
          title: "Mecánica de juego e interacciones",
          intro: "El funcionamiento del tablero es intuitivo y proporciona una respuesta sensorial inmediata:",
          items: [
            {
              label: "Estimulación memorable",
              text: "El tablero cuenta con una matriz de 21 botones translúcidos que se iluminan en azul configurando un patrón aleatorio. El usuario dispone de 30 segundos para memorizarlo.",
            },
            {
              label: "Respuesta inmediata",
              text: "Cuando las luces se apagan, el usuario debe replicar la secuencia. Si acierta, los botones se iluminan en verde; si falla, el panel parpadea en rojo y ofrece nuevas oportunidades sin penalizaciones estresantes.",
            },
            {
              label: "Accesibilidad al ritmo del usuario",
              text: "En el lateral izquierdo, tres botones funcionales permiten recordar la secuencia restante durante 5, 10 o 15 segundos. Un sensor táctil en el lateral derecho genera una nueva partida al instante.",
            },
          ],
        },
        {
          title: "Ergonomía y selección de materiales",
          intro: "Cada componente se seleccionó mediante un estudio ergonómico y antropométrico para adaptarse a las capacidades reales del usuario:",
          items: [
            {
              label: "Carcasa de plástico ABS",
              text: "Fabricada mediante moldeo por inyección, ofrece una envolvente rígida, ligera y resistente a impactos, con acabado texturizado antideslizante.",
            },
            {
              label: "Botones de silicona elastomérica",
              text: "La matriz incorpora botones de gran superficie (42 x 42 mm), tacto blando y mínima fuerza de accionamiento, ideales para manos con artrosis o temblores.",
            },
            {
              label: "Postura neutra",
              text: "Las dimensiones optimizadas (550 x 240 x 60 mm) permiten que, con el usuario sentado, todo el tablero quede dentro de su alcance frontal sin necesidad de estirarse, evitando la fatiga lumbar.",
            },
            {
              label: "Confort visual",
              text: "Los LED internos emiten una luz homogénea y difusa, con contraste claro para personas con déficit visual o cataratas sin provocar deslumbramientos molestos.",
            },
          ],
        },
        {
          title: "Conclusiones",
          paragraphs: [
            "En resumen, Toca a Tiempo demuestra cómo el diseño industrial puede transformarse en una herramienta de impacto social capaz de mejorar la calidad de vida de las personas. Al equilibrar ergonomía adaptada, una interfaz electrónica intuitiva y viabilidad comercial, el proyecto trasciende el concepto de producto interactivo. Su verdadero valor reside en democratizar el acceso a la estimulación cognitiva, eliminar barreras de la brecha digital y devolver autonomía, disfrute y dignidad al ocio de las personas mayores.",
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
    presentation: null,
    plans: [
      { label: { en: "Drawing 1", es: "Plano 1" }, image: projectAsset("toca-a-tiempo", "plans/plano-1.png") },
      { label: { en: "Drawing 2", es: "Plano 2" }, image: projectAsset("toca-a-tiempo", "plans/plano-2.png") },
      { label: { en: "Drawing 3", es: "Plano 3" }, image: projectAsset("toca-a-tiempo", "plans/plano-3.png") },
      { label: { en: "Drawing 4", es: "Plano 4" }, image: projectAsset("toca-a-tiempo", "plans/plano-4.png") },
    ],
  },
  {
    id: "spira",
    title: "Spira EVO x900",
    year: "2025",
    discipline: {
      en: "Smart Domestic Appliances / Modular Vacuum Cleaner",
      es: "Electrodomésticos inteligentes / Aspiradora modular",
    },
    cover: projectAsset("spira", "images/portada.jpg"),
    logo: projectAsset("spira", "logos/logo.png"),
    logoHover: projectAsset("spira", "logos/logo-hoover.png"),
    brand: projectAsset("spira", "logos/logo-completo.png"),
    summary: {
      en: "A modular stick vacuum cleaner that improves ergonomics, adaptability and the sensory experience of domestic cleaning.",
      es: "Aspiradora modular de tipo escoba que mejora la ergonomía, la adaptabilidad y la experiencia sensorial de la limpieza doméstica.",
    },
    modalDetails: {
      en: [
        { label: "Project 02", value: "Spira EVO x900" },
        { label: "Typology", value: "Smart Domestic Appliances / Modular Vacuum Cleaner" },
        { label: "Course", value: "Computer-Aided Design (September-December 2025)" },
        { label: "Authors", value: ["Alejandro Biedma", "Claudia Cabrera", "Emma Cuadras", "Carlos Sanz"] },
      ],
      es: [
        { label: "Proyecto 02", value: "Spira EVO x900" },
        { label: "Tipología", value: "Electrodomésticos inteligentes / Aspiradora modular" },
        { label: "Curso", value: "Diseño asistido por ordenador (septiembre-diciembre 2025)" },
        { label: "Autores", value: ["Alejandro Biedma", "Claudia Cabrera", "Emma Cuadras", "Carlos Sanz"] },
      ],
    },
    detailSections: {
      en: [
        {
          title: "Project Description",
          paragraphs: [
            "The Spira EVO x900 is an advanced, modular stick vacuum cleaner designed to redefine the domestic cleaning experience. By merging ergonomic innovation with sensory enhancement, the product transcends standard utility appliances. It features a highly adaptable architecture that responds directly to the physical demands of the user and the spatial complexities of modern domestic environments.",
          ],
        },
        {
          title: "Problem Statement",
          paragraphs: [
            "Conventional vacuum cleaners often force users into rigid, unnatural postures, leading to wrist and back strain during prolonged use. Traditional floor heads also struggle to efficiently clean tight corners or irregular baseboards without manual repositioning. Finally, the exhaust air from standard vacuums often leaves a stale odor, turning a cleaning task into a suboptimal sensory experience.",
          ],
        },
        {
          title: "Solution Provided",
          intro: "The Spira EVO x900 tackles these ergonomic and functional challenges through a highly modular and adaptive design:",
          items: [
            {
              label: "Ergonomic Dual Grip",
              text: "The main body features a distinct dual-loop handle system, allowing users to naturally shift their grip depending on the angle of use, significantly reducing wrist fatigue and improving maneuverability.",
            },
            {
              label: "Adaptive Articulation",
              text: "The cleaning head is engineered with a flexible, segmented joint system that automatically bends and conforms to the geometry of corners and edges, ensuring maximum suction coverage.",
            },
            {
              label: "Sensory Modularity",
              text: "The system integrates a dedicated compartment for interchangeable aromatic tablets. As the vacuum operates, the exhaust air is filtered and scented, actively freshening the room.",
            },
            {
              label: "Periscopic Tube",
              text: "A structurally integrated telescopic tube allows for instant height adjustment and easy transformation from a full-length floor vacuum to a compact handheld device.",
            },
          ],
        },
        {
          title: "Materials Selection",
          intro: "The material palette was chosen to balance lightweight handling with structural integrity, reflecting the product's black, white and vibrant blue aesthetic:",
          items: [
            {
              label: "Impact-Resistant Polycarbonate",
              text: "Used for the transparent dust bin, allowing users to easily monitor dirt levels while showcasing the internal blue filtration mechanics.",
            },
            {
              label: "High-Grade ABS Plastics",
              text: "Employed for the main outer chassis in matte black and white finishes to provide a durable, scratch-resistant housing that withstands daily impacts.",
            },
            {
              label: "Extruded Aluminum Alloys",
              text: "Used for the periscopic tube mechanism, offering a high strength-to-weight ratio crucial for user comfort.",
            },
            {
              label: "Elastomeric Polymers",
              text: "Applied to the dual-grip handles for anti-slip comfort and integrated into the flexible joints of the adaptive brush head.",
            },
          ],
        },
        {
          title: "Conclusions",
          paragraphs: [
            "The Spira EVO x900 bridges high-performance engineering and user-centric design. By introducing the dual grip and adaptive cornering head, the project resolves long-standing ergonomic flaws in domestic cleaning tools. The addition of aromatic modularity elevates the product, transforming a routine chore into a more pleasant and holistic experience.",
          ],
        },
      ],
      es: [
        {
          title: "Descripción del proyecto",
          paragraphs: [
            "Spira EVO x900 es una aspiradora de escoba avanzada y modular diseñada para redefinir la experiencia de limpieza doméstica. Al combinar innovación ergonómica y mejora sensorial, el producto trasciende la utilidad estándar de los electrodomésticos. Presenta una arquitectura altamente adaptable que responde directamente a las demandas físicas del usuario y a la complejidad espacial de los entornos domésticos actuales.",
          ],
        },
        {
          title: "Planteamiento del problema",
          paragraphs: [
            "Las aspiradoras convencionales suelen obligar al usuario a adoptar posturas rígidas y poco naturales, provocando tensión en muñecas y espalda durante usos prolongados. Además, los cabezales tradicionales tienen dificultades para limpiar esquinas estrechas o rodapiés irregulares sin recolocación manual. Por último, el aire expulsado por las aspiradoras estándar puede dejar olores poco agradables, convirtiendo la limpieza en una experiencia sensorial mejorable.",
          ],
        },
        {
          title: "Solución propuesta",
          intro: "Spira EVO x900 aborda estos retos ergonómicos y funcionales mediante un diseño modular y adaptativo:",
          items: [
            {
              label: "Doble agarre ergonómico",
              text: "El cuerpo principal incorpora un sistema de doble asa que permite cambiar la posición de agarre de forma natural según el ángulo de uso, reduciendo la fatiga de muñeca y mejorando la maniobrabilidad.",
            },
            {
              label: "Articulación adaptativa",
              text: "El cabezal de limpieza integra un sistema flexible y segmentado que se adapta automáticamente a esquinas y bordes, asegurando la máxima cobertura de succión.",
            },
            {
              label: "Modularidad sensorial",
              text: "El sistema incorpora un compartimento específico para pastillas aromáticas intercambiables. Durante el funcionamiento, el aire expulsado se filtra y perfuma, refrescando activamente la estancia.",
            },
            {
              label: "Tubo periscópico",
              text: "Un tubo telescópico integrado estructuralmente permite ajustar la altura al instante y transformar la aspiradora de formato completo en un dispositivo compacto de mano.",
            },
          ],
        },
        {
          title: "Selección de materiales",
          intro: "La paleta de materiales se eligió para equilibrar ligereza, resistencia estructural y una estética en negro, blanco y azul vibrante:",
          items: [
            {
              label: "Policarbonato resistente a impactos",
              text: "Utilizado en el depósito transparente para que el usuario pueda controlar el nivel de suciedad y ver la mecánica interna azul de filtración.",
            },
            {
              label: "Plásticos ABS de alta calidad",
              text: "Empleados en la carcasa exterior principal, con acabados mate en blanco y negro, para ofrecer una envolvente duradera y resistente a rayaduras e impactos diarios.",
            },
            {
              label: "Aleaciones de aluminio extruido",
              text: "Utilizadas en el mecanismo del tubo periscópico por su alta relación resistencia-peso, clave para la comodidad del usuario.",
            },
            {
              label: "Polímeros elastoméricos",
              text: "Aplicados en los agarres para aportar confort antideslizante e integrados en las articulaciones flexibles del cabezal adaptativo.",
            },
          ],
        },
        {
          title: "Conclusiones",
          paragraphs: [
            "Spira EVO x900 une ingeniería de alto rendimiento y diseño centrado en el usuario. Gracias al doble agarre y al cabezal adaptativo, el proyecto resuelve problemas ergonómicos habituales en las herramientas de limpieza doméstica. La modularidad aromática eleva la experiencia y convierte una tarea rutinaria en una acción más agradable, versátil y coherente con los espacios contemporáneos.",
          ],
        },
      ],
    },
    gallery: [
      projectAsset("spira", "renders/Render-aspiradora.jpg"),
      projectAsset("spira", "renders/Render-aspiradora-de-lao.jpg"),
      projectAsset("spira", "renders/Motor-Explosionado.mp4"),
      projectAsset("spira", "renders/Puertas-abriendo.mp4"),
      projectAsset("spira", "renders/Render-motor.jpg"),
      projectAsset("spira", "renders/Render-escoba.jpg"),
      projectAsset("spira", "renders/de-frente-aspiradora.jpg"),
      projectAsset("spira", "renders/cartel-1.png"),
      projectAsset("spira", "renders/cartel-2.png"),
    ],
    document: null,
    presentation: null,
    plans: planImages("spira", 5),
  },
  {
    id: "lumarc",
    title: "LumArc",
    year: "2026",
    discipline: {
      en: "Sustainable and Smart Urban Furniture",
      es: "Mobiliario urbano sostenible e inteligente",
    },
    cover: projectAsset("lumarc", "renders/render-entero.png"),
    modalImage: projectAsset("lumarc", "renders/render-entero.png"),
    logo: projectAsset("lumarc", "logos/logo.png"),
    logoHover: projectAsset("lumarc", "logos/logo-hoover.png"),
    brand: projectAsset("lumarc", "logos/logo-completo.png"),
    summary: {
      en: "Self-sufficient urban furniture that combines rest, shade, lighting and clean energy for connected public spaces.",
      es: "Mobiliario urbano autosuficiente que combina descanso, sombra, iluminación y energía limpia para espacios públicos conectados.",
    },
    modalDetails: {
      en: [
        { label: "Project 03", value: "LumArc" },
        { label: "Typology", value: "Sustainable and Smart Urban Furniture" },
        { label: "Course", value: "Industrial Design Projects (March-May 2026)" },
        { label: "Authors", value: ["Alejandro Biedma", "Jaime Millán", "Lucía Pérez", "Tomás Soler"] },
      ],
      es: [
        { label: "Proyecto 03", value: "LumArc" },
        { label: "Tipología", value: "Mobiliario urbano sostenible e inteligente" },
        { label: "Curso", value: "Proyectos de Diseño Industrial (marzo-mayo 2026)" },
        { label: "Autores", value: ["Alejandro Biedma", "Jaime Millán", "Lucía Pérez", "Tomás Soler"] },
      ],
    },
    detailSections: {
      en: [
        {
          title: "Project Description",
          paragraphs: [
            "LumArc is a self-sufficient urban infrastructure designed for both public and rural spaces. Moving beyond the traditional seating concept, it functions as a technological micro-node that provides rest, shade, low-consumption night lighting and a fully clean energy supply for users and their devices.",
          ],
        },
        {
          title: "Problem Statement",
          paragraphs: [
            "Conventional urban furniture has become outdated in the face of Smart City requirements. There is a growing demand for public spaces that do not merely offer a place to sit, but also integrate connectivity and charging solutions for mobile devices and Personal Mobility Vehicles. These environments also demand anti-vandal, low-maintenance solutions with zero operational environmental impact.",
          ],
        },
        {
          title: "Solution Provided",
          items: [
            {
              label: "Modular set",
              text: "An independent set was developed, comprising a bench, pergola, side table, bike rack and litter bin. This allows flexible layout configurations without requiring a shared foundation.",
            },
            {
              label: "Ergonomics",
              text: "The seat features an organic, double-curvature geometry with no sharp edges, naturally facilitating water drainage.",
            },
            {
              label: "Technology",
              text: "The pergola integrates 240 W solar panels that route power underground with IP65 protection to USB ports, Qi wireless charging spots and Schuko sockets on the bike rack.",
            },
          ],
        },
        {
          title: "Materials Selection",
          intro: "Materials were chosen based on circular economy criteria and maximum outdoor resilience:",
          items: [
            {
              label: "Structural Steel S275 JR",
              text: "Hot-dip galvanized and electrostatically powder-coated to form the main frame and pergola structure.",
            },
            {
              label: "FSC-Certified Scots Pine",
              text: "Autoclave-treated for Use Class IV and finished with lasur to resist moisture, fungi and termites on the seat slats and upper cladding.",
            },
            {
              label: "Reinforced Concrete HA-30",
              text: "Formulated with recycled aggregates and a water-repellent surface treatment for the bike rack and foundation.",
            },
            {
              label: "A4 Stainless Steel AISI 316",
              text: "Used for all fasteners and hardware to prevent galvanic corrosion between different materials.",
            },
          ],
        },
        {
          title: "Conclusions",
          paragraphs: [
            "LumArc demonstrates that technological integration in urban furniture can be resolved through clean, functional design. Its modular architecture optimizes manufacturing and assembly while allowing cities to scale installations according to their spatial needs. The result is a durable, aesthetically cohesive product aligned with modern sustainability standards.",
          ],
        },
      ],
      es: [
        {
          title: "Descripción del proyecto",
          paragraphs: [
            "LumArc es una infraestructura urbana autosuficiente diseñada para espacios públicos y rurales. Más allá del concepto tradicional de asiento, funciona como un micronodo tecnológico que proporciona descanso, sombra, iluminación nocturna de bajo consumo y suministro de energía limpia para usuarios y dispositivos.",
          ],
        },
        {
          title: "Planteamiento del problema",
          paragraphs: [
            "El mobiliario urbano convencional ha quedado desactualizado frente a los requisitos de las Smart Cities. Existe una demanda creciente de espacios públicos que no solo ofrezcan un lugar para sentarse, sino que integren conectividad y soluciones de carga para dispositivos móviles y vehículos de movilidad personal. Además, estos entornos requieren soluciones antivandálicas, de bajo mantenimiento y con impacto ambiental operativo nulo.",
          ],
        },
        {
          title: "Solución propuesta",
          items: [
            {
              label: "Conjunto modular",
              text: "Se desarrolló un conjunto independiente formado por banco, pérgola, mesa lateral, aparcabicis y papelera, permitiendo configuraciones flexibles sin necesidad de una cimentación común.",
            },
            {
              label: "Ergonomía",
              text: "El asiento presenta una geometría orgánica de doble curvatura y sin aristas vivas, lo que facilita de forma natural el drenaje del agua.",
            },
            {
              label: "Tecnología",
              text: "La pérgola integra paneles solares de 240 W que conducen la energía bajo tierra, con protección IP65, hacia puertos USB, puntos de carga inalámbrica Qi y enchufes Schuko en el aparcabicis.",
            },
          ],
        },
        {
          title: "Selección de materiales",
          intro: "Los materiales se eligieron siguiendo criterios de economía circular y máxima resistencia exterior:",
          items: [
            {
              label: "Acero estructural S275 JR",
              text: "Galvanizado en caliente y recubierto con pintura electrostática en polvo para formar el bastidor principal y la estructura de la pérgola.",
            },
            {
              label: "Madera de pino silvestre certificada FSC",
              text: "Tratada en autoclave para clase de uso IV y acabada con lasur para resistir humedad, hongos y termitas en las lamas del asiento y el revestimiento superior.",
            },
            {
              label: "Hormigón armado HA-30",
              text: "Formulado con áridos reciclados y tratamiento superficial hidrófugo para el aparcabicis y la cimentación.",
            },
            {
              label: "Acero inoxidable A4 AISI 316",
              text: "Utilizado en toda la tornillería y herrajes para evitar corrosión galvánica entre materiales diferentes.",
            },
          ],
        },
        {
          title: "Conclusiones",
          paragraphs: [
            "LumArc demuestra que la integración tecnológica en el mobiliario urbano puede resolverse mediante un diseño limpio y funcional. Su arquitectura modular optimiza fabricación y montaje, y permite que las ciudades escalen las instalaciones según sus necesidades espaciales. El resultado es un producto duradero, estéticamente coherente y alineado con los estándares actuales de sostenibilidad.",
          ],
        },
      ],
    },
    gallery: [
      projectAsset("lumarc", "images/portada.png"),
      projectAsset("lumarc", "renders/render-vistas.png"),
    ],
    document: projectAsset("lumarc", "documents/LumArc-memoria.pdf"),
    presentation: projectAsset("lumarc", "documents/LumArc-presenacion.pdf"),
    plans: planImages("lumarc", 13),
  },
  {
    id: "g-orb",
    title: "G-Orb",
    year: "2026",
    discipline: {
      en: "Conceptual Product Design and Historical Reinterpretation",
      es: "Diseño conceptual de producto y reinterpretación histórica",
    },
    cover: projectAsset("g-orb", "images/portada.jpg"),
    coverHover: projectAsset("g-orb", "images/g-orb-encendido.png"),
    logo: projectAsset("g-orb", "logos/logo.png"),
    logoHover: projectAsset("g-orb", "logos/logo-hoover.png"),
    brand: projectAsset("g-orb", "logos/logo-completo.png"),
    summary: {
      en: "A retractable V16 emergency beacon integrated into the vehicle bodywork to improve roadside safety.",
      es: "Baliza V16 retráctil integrada en la carrocería del vehículo para mejorar la seguridad en carretera.",
    },
    modalDetails: {
      en: [
        { label: "Project 04", value: "G-Orb" },
        { label: "Typology", value: "Conceptual Product Design and Historical Reinterpretation" },
        { label: "Course", value: "Historical Development (March-May 2026)" },
        { label: "Authors", value: ["Alejandro Biedma", "Rocío Lujano", "Ángela Luque", "Sergio Jiménez"] },
      ],
      es: [
        { label: "Proyecto 04", value: "G-Orb" },
        { label: "Tipología", value: "Diseño conceptual de producto y reinterpretación histórica" },
        { label: "Curso", value: "Desarrollo histórico (marzo-mayo 2026)" },
        { label: "Autores", value: ["Alejandro Biedma", "Rocío Lujano", "Ángela Luque", "Sergio Jiménez"] },
      ],
    },
    detailSections: {
      en: [
        {
          title: "Project Description",
          paragraphs: [
            "G-ORB is an integrated, fully automated and retractable emergency pre-signaling system for vehicles. Developed under automotive engineering criteria, the device is permanently housed within the upper bodywork and deploys through an electromechanical mechanism only in hazardous situations.",
          ],
        },
        {
          title: "Problem Statement",
          paragraphs: [
            "In the event of a roadside breakdown or accident, exiting the cabin to place traditional signaling systems exposes occupants to a critical risk of oncoming traffic collisions. Current portable V16 beacons avoid that need, but still rely on manual deployment under high-stress conditions, do not guarantee optimal attachment during severe weather and may present accessibility issues from inside the vehicle.",
          ],
        },
        {
          title: "Solution Provided",
          intro: "G-ORB evolves the emergency beacon from an external accessory into a structural, intelligent component of the automobile.",
          items: [
            {
              label: "Aerodynamic Analysis and Optimization",
              text: "The module is housed in a sealed receptacle on the vehicle roof and remains flush with the bodywork line when stowed. This geometry keeps the original drag coefficient unaffected and eliminates turbulence, parasitic cabin noise and fuel-consumption increases at high speeds.",
            },
            {
              label: "Material Selection and Mechanical Design",
              text: "High-impact polycarbonate with UV stabilization was selected for the optical dome, ensuring 360-degree light transmission and IK08 impact protection. The inner chassis and electromechanical lift use engineering polymers and lightweight alloys, guaranteeing IP67 weatherproofing and reliable operation across a critical thermal range.",
            },
            {
              label: "Automatic Deployment",
              text: "Deployment is triggered through a redundant dashboard button or passively through collision sensors, connecting the system to the DGT 3.0 platform via NB-IoT connectivity.",
            },
          ],
        },
        {
          title: "Conclusions",
          paragraphs: [
            "This project validates the feasibility of solving complex road safety challenges through the convergence of industrial design and product engineering. By addressing aerodynamic drag, material durability and kinematic automation, G-ORB eliminates risk factors and human error in critical situations, aligning with the highway goal of zero casualties.",
          ],
        },
      ],
      es: [
        {
          title: "Descripción del proyecto",
          paragraphs: [
            "G-ORB es un sistema integrado, completamente automatizado y retráctil de preseñalización de emergencia V16 para vehículos. Desarrollado bajo criterios de ingeniería automotriz, el dispositivo se aloja permanentemente en la carrocería superior y se despliega mediante un mecanismo electromecánico solo en situaciones de peligro.",
          ],
        },
        {
          title: "Planteamiento del problema",
          paragraphs: [
            "En caso de avería o accidente en carretera, la necesidad de salir del habitáculo para colocar sistemas tradicionales de señalización expone a los ocupantes a un riesgo crítico de atropello. Aunque las balizas V16 portátiles evitan salir del vehículo, siguen dependiendo de una colocación manual en situaciones de estrés, no garantizan una fijación óptima con climatología adversa y pueden presentar problemas de accesibilidad desde el interior.",
          ],
        },
        {
          title: "Solución propuesta",
          intro: "G-ORB transforma la baliza de emergencia de un accesorio externo en un componente estructural e inteligente del automóvil.",
          items: [
            {
              label: "Análisis y optimización aerodinámica",
              text: "El módulo queda alojado en un receptáculo sellado sobre el techo del vehículo y permanece enrasado con la línea de carrocería cuando está retraído. Esta configuración mantiene intacto el coeficiente aerodinámico original y elimina turbulencias, ruido parasitario en cabina e incrementos de consumo a alta velocidad.",
            },
            {
              label: "Selección de materiales y diseño mecánico",
              text: "Se seleccionó policarbonato de alto impacto con estabilización UV para la cúpula óptica, garantizando transmisión luminosa de 360 grados y protección IK08. El chasis interior y el sistema de elevación emplean polímeros técnicos y aleaciones ligeras, asegurando estanqueidad IP67 y funcionamiento fiable en un rango térmico crítico.",
            },
            {
              label: "Despliegue automático",
              text: "El despliegue se activa mediante un botón redundante en el salpicadero o de forma pasiva a través de los sensores de colisión, conectando el sistema con la plataforma DGT 3.0 mediante conectividad NB-IoT.",
            },
          ],
        },
        {
          title: "Conclusiones",
          paragraphs: [
            "Este proyecto valida la viabilidad de resolver retos complejos de seguridad vial mediante la convergencia entre diseño industrial e ingeniería de producto. Al abordar la resistencia aerodinámica, la durabilidad frente a la intemperie y la automatización cinemática, G-ORB elimina factores de riesgo y error humano en situaciones críticas, alineándose con el objetivo de cero víctimas en carretera.",
          ],
        },
      ],
    },
    gallery: [
      projectAsset("g-orb", "renders/render-1.jpg"),
      projectAsset("g-orb", "renders/render-2.jpg"),
      projectAsset("g-orb", "renders/render-3.jpg"),
      projectAsset("g-orb", "renders/render-4.jpg"),
      projectAsset("g-orb", "renders/render-5.jpg"),
    ],
    document: projectAsset("g-orb", "documents/G-ORB-memoria.pdf"),
    presentation: projectAsset("g-orb", "documents/G-ORB-presentacion.pdf"),
    plans: planImages("g-orb", 7),
  },
];
