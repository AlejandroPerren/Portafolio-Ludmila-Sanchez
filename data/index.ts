export const projectsData = [
  {
    id: 1,
    type: "dashboard",
    images: ["/proyectos/proyecto1/proyecto1_imagen1.jpeg", "/proyectos/proyecto1/proyecto1_imagen2.jpeg", "/proyectos/proyecto1/proyecto1_imagen3.jpeg", "/proyectos/proyecto1/proyecto1_imagen4.jpeg"],
    title: "Análisis sobre Hechos y Víctimas de Suicidio en Argentina",
    objectives:
      "En el siguiente proyecto se busca identificar y comprender los factores de riesgo asociados con los suicidios en Argentina. Esto podría incluir variables como la edad, género, ubicación geográfica, métodos utilizados, entre otros. Identificar patrones en el comportamiento de personas en riesgo de suicidio puede ser crucial para implementar estrategias efectivas de prevención. Aunque cada caso es único, con el presente proyecto se desea revelar modelos y factores clave que están asociados con la incidencia de estos sucesos.",
    results:
    "Reporte para promover e intensificar la concientización y educación sobre la salud mental.",
    duration: "2 meses",
     embedUrl:
      "https://app.powerbi.com/reportEmbed?reportId=2eaaff90-9db0-4d85-a128-36cf5ab3bc13&autoAuth=true&ctid=e97f28b0-9f25-4c26-a8e9-8bb80eeefd3f",
    dataset: "https://datos.gob.ar/dataset/seguridad-suicidios-sistema-alerta-temprana-estadisticas-criminales-republica-argentina",
    technologies: ["Excel", "Power BI", "MySQL", "DAX", "Power Query"],
    conclusions:
      "Se puede concluir que realizando un analisis sobre los datos proporcionados, la franja etaria de las victimas son personas entre 20 y 24 años de edad que cometieron mayor cantidad de suicidio, siguiendo en segundo lugar las personas entre 25 y 29 años, ademas se concluye que los hombres son mas propensos a suicidarse con un porcentaje mayor al 70%. En relacion al lugar de acontecimiento, la mayoria de las personas cometen suicidio en su domicilio particular, y por detras se encuentra la vía pública como segundo lugar mas elegido.",
    link: "https://drive.google.com/drive/folders/1JtzObJhEdcwfQDXPEmtsABdvcKf1LZJ_?usp=sharing",
    summary:
      "Se expone informacón desde 2017 hasta 2022.",
  },
  {
    id: 2,
    type: "dashboard",
    images: ["/proyectos/proyecto2/proyecto2_imagen1.jpeg", "/proyectos/proyecto2/proyecto2_imagen2.jpeg", "/proyectos/proyecto2/proyecto2_imagen3.jpeg", "/proyectos/proyecto2/proyecto2_imagen4.jpeg", "/proyectos/proyecto2/proyecto2_imagen5.jpeg", "/proyectos/proyecto2/proyecto2_imagen6.jpeg", "/proyectos/proyecto2/proyecto2_imagen7.jpeg"],
    title: "Informe sobre ingresos y egresos de Potenciar Solidario",
    objectives:
      "Realizar un análisis sobre los ingresos y egresos entre los años 2019 y 2024 de la organización 'Potenciar Solidario'.",
    results:
      "Ayudar a los directivos a tomar decisiones estratégicas sobre la ONG.",
    duration: "1 mes",
    dataset: "https://drive.google.com/drive/folders/186p9kKKgZucbJ_X0PXZucJkYNpZEPwPg?usp=sharing",
    technologies: ["Google Sheets", "Looker Studio", "MySQL"],
    conclusions:
      "El presente informe presenta un  balance detallado de los ingresos y egresos de la organización entre 2019 y 2024, destacando un sólido flujo de donaciones e inversiones en varias áreas clave. Sin embargo, también revela una alta concentración de gastos en sectores como los servicios y la construcción. En términos de sostenibilidad financiera, la organización parece estar manejando bien sus recursos, con una diferencia considerable entre los ingresos y los egresos que indica un posible superávit para reinversión o crecimiento. El enfoque en áreas como tecnología y energía renovable sugiere que 'Potenciar Solidario' está invirtiendo en sectores modernos y de impacto social, lo cual es positivo para su estrategia de desarrollo a largo plazo.",
    link: "https://lookerstudio.google.com/reporting/7992e600-7c7d-41b6-9e1f-07590a7d7b5d",
    summary:
      "Reporte entre los años 2019 y 2024",
  },
  {
    id: 3,
    type: "github",
    images: ["/proyectos/proyecto3/proyecto3_imagen1.jpeg", "/proyectos/proyecto3/proyecto3_imagen2.jpeg", "/proyectos/proyecto3/proyecto3_imagen3.jpeg"],
    title: "Análisis de Construction Materials Megacorp",
    objectives:
      "Realizar un análisis general de Construction Materials Megacorp, una empresa multinacional dedicada a la fabricación y distribución de materiales de construcción. La compañía comenzó sus operaciones en la región LATAM, que abarca Argentina y países limítrofes, en el primer cuatrimestre de 2024.",
    results:
      "Como parte de este proyecto, se llevó a cabo una auditoría específica para Paraguay, motivada por un análisis previo que reveló una discrepancia significativa entre el capital invertido y la ganancia neta obtenida en el país.",
    duration: "2 meses",
    dataset: "https://drive.google.com/drive/folders/1ygGVyKTHd1LmCpaGSSJmwDOwHw8RZYoG",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Looker Studio", "Google Sheets"],
    conclusions:
      "Las exportaciones de productos como Brick y Steel superan ampliamente sus ventas locales, lo que indica baja demanda interna y poca rentabilidad. Plexiglass, en cambio, destaca por su alta participación tanto en exportaciones como en ventas. En general, las ventas superan a las exportaciones en la mayoría de los productos, salvo excepciones como Brick. La baja venta de ciertos productos afectó el retorno de inversión, en parte porque los distribuidores locales no operan en sectores que demanden esos materiales.",
    link: "https://github.com/Ludmi0611/Analisis-CMM",
    summary:
      "Proyecto para la empresa CMM de sus operaciones recientes en Latam, primer cuatrimestre de 2024.",
  },
  {
    id: 4,
    type: "github",
    images: ["/proyectos/proyecto4/proyecto4_imagen1.png", "/proyectos/proyecto4/proyecto4_imagen2.jpeg"],
    title: "Web Scraping de los celulares de Mercadolibre",
    objectives:
      "Identificar las marcas de celulares que se muestran en la primer página de busqueda en Mercadolibre.",
    results:
      "Se llevó a cabo la recolección de datos de la página de Mercado Libre mediante la técnica de web scraping. La información recopilada corresponde a la primera página de resultados al buscar celulares de todas las gamas.",
    duration: "2 semanas",
    dataset: "https://github.com/usuario/analisis-ventas",
    technologies: ["Python", "BeautifulSoap", "Power BI"],
    conclusions:
      "El análisis de los datos revela que los celulares más costosos son ofrecidos por la marca Samsung, seguida por Motorola, según los resultados de la primera página. Cabe destacar que algunas marcas no pudieron ser identificadas y aparecen representadas como N/A.",
    link: "https://github.com/Ludmi0611/web-scraping-mercadolibre",
    summary:
      "Proyecto utilizando la técnica de Web Scraping con Python.",
  },
  {
    id: 5,
    type: "github",
    images: ["/proyectos/proyecto5/proyecto5_imagen1.png", "/proyectos/proyecto5/proyecto5_imagen2.jpeg", "/proyectos/proyecto5/proyecto5_imagen3.jpeg", "/proyectos/proyecto5/proyecto5_imagen4.jpeg"],
    title: "Análisis predictivo para Tienda Minorista",
    objectives:
      "El objetivo es predecir las ventas del próximo mes en una tienda minorista utilizando Maching Learning.",
    results:
      "El modelo predictivo permite optimizar inventario y personal, especialmente en fechas festivas. También ayuda a enfocar el marketing en los períodos de mayor venta. Se recomienda analizar desviaciones entre ventas reales y predichas, e incorporar más variables externas para mejorar la precisión del modelo.",
    duration: "1 mes",
    dataset:
      "https://drive.google.com/file/d/1lCpWjJXvZpuB-AxeUBwna_1WSwe5jD54/view?usp=sharing",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    conclusions:
      "Los gráficos muestran que el modelo de regresión lineal predice bien las ventas, con una fuerte relación entre valores reales y predichos. Aunque en algunos momentos hay diferencias, estas podrían explicarse por eventos no considerados en el modelo o variaciones naturales del negocio.",
    link: "https://github.com/Ludmi0611/Analisis-Predictivo-Tienda-Minorista",
    summary:
      "Modelo predictivo para analizar las ventas del próximo mes de una Tienda Minorista.",
  },
  
];

export const certificatesData = [
  {
    id: 1,
    image: "/certificados/dataAnalitycs-coderhouse.png",
    title: "Data Analytics",
    company: "Coderhouse",
    duration: "46 horas",
    technologies: ["Power BI", "Power Query", "DAX", "MySQL", "Excel"],
    summary:
      "Formación en análisis y visualización de datos para tomar decisiones informadas.",
  },
  {
    id: 2,
    image: "/certificados/Analisis_datos_Python.jpeg",
    title: "Análisis de datos con Python",
    company: "Eca Capacitaciones",
    duration: "6 horas",
    technologies: [
      "Python",
      "Pandas",
      "Seaborn"
    ],
    summary:
      "Utilización de Python para analizar, manipular y visualizar datos con Pandas y Seaborn.",
  },
  {
    id: 3,
    image: "/certificados/Big_data_Data_Analytics.jpg",
    title: "Big Data / Data Analytics",
    company: "Agencia de Habilidades para el Futuro",
    duration: "198 horas",
    technologies: [
      "Looker Studio",
      "Modelado de Datos",
      "Google Sheets",
      "Python",
      "MySQL",
      "Seaborn",
      "Matplotlib",
      "Pandas",
      "NumPy"
    ],
    summary:
      "Formación en análisis, manipulación y visualización de datos para tomar decisiones informadas.",
  },
  {
    id: 4,
    image: "/certificados/DataAnalitycs-IBM.png",
    title: "Fundamentos de Data Analytics",
    company: "Guayerd - IBM",
    duration: "255 horas",
    technologies: [
      "Looker Studio",
      "Modelado de Datos",
      "Google Sheets",
      "Excel",
      "MySQL",
      "Power BI",
      "DAX",
      "Power Query",
      "Minería de datos",
      "Business Intelligence"
    ],
    summary:
      "Formación en análisis, manipulación y visualización de datos para tomar decisiones informadas.",
  },
  {
    id: 5,
    image: "/certificados/python_intermedio.jpeg",
    title: "Curso de Python de básico a intermedio",
    company: "Eca Capacitaciones",
    duration: "6 horas",
    technologies: [
      "Python",

    ],
    summary:
      "Programación con Python.",
  },
  {
    id: 6,
    image: "/certificados/aws.jpeg",
    title: "Fundamentos de Nube AWS",
    company: "AWS",
    duration: "2 horas",
    technologies: [
      "AWS",
    ],
    summary:
      "Fundamentos de Nube AWS.",
  },
  {
    id: 7,
    image: "/certificados/sql_server.jpeg",
    title: "SQL Server",
    company: "Unión Informática",
    duration: "32 horas",
    technologies: [
      "SQL Server",
    ],
    summary:
      "Formación completa en bases de datos relacionales utilizando SQL Server.",
  },
  {
    id: 8,
    image: "/certificados/python_profesional.jpeg",
    title: "Curso de Python Profesional",
    company: "Código Facilito",
    duration: "8 horas",
    technologies: [
      "Python",
    ],
    summary:
      "Formación completa en el lenguaje de programación Python.",
  },
  {
    id: 9,
    image: "/certificados/experto_visualizacion_datos.jpeg",
    title: "Experto en Análisis y Visualización de datos",
    company: "Udemy",
    duration: "30.5 horas",
    technologies: [
      "Excel",
      "SQL",
      "MySQL",
      "Looker Studio",
      "Power BI",
      "R"
    ],
    summary:
      "Formación integral en análisis, manipulación y visualización de datos.",
  },
  {
    id: 10,
    image: "/certificados/Google_sheets.jpg",
    title: "Google Sheets Completo",
    company: "Udemy",
    duration: "7.5 horas",
    technologies: [
      "Google Sheets",
    ],
    summary:
      "Formación completa en Google Sheets.",
  },
  {
    id: 11,
    image: "/certificados/java.jpeg",
    title: "Introducción a Java",
    company: "Argentina Programa",
    duration: "3 meses",
    technologies: [
      "Java",
    ],
    summary:
      "Curso introductorio al lenguaje de programación Java.",
  },
  {
    id: 12,
    image: "/certificados/Looker_studio.jpeg",
    title: "Looker Studio 2024",
    company: "Udemy",
    duration: "12.5 horas",
    technologies: [
      "Looker Studio",
    ],
    summary:
      "Formación completa en la herramienta Looker Studio para la creación de dashboards.",
  },
  {
    id: 13,
    image: "/certificados/metodologia_agil.jpeg",
    title: "Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean",
    company: "Fundación Telefónica Movistar",
    duration: "40 horas",
    technologies: [
      "Gestión de Proyectos con Metodologías Ágiles",
    ],
    summary:
      "Formación en la gestion de proyectos con Metodologías Ágiles.",
  },
  {
    id: 14,
    image: "/certificados/mineria_datos.jpeg",
    title: "Introducción al Business Intelligence y la Minería de Datos",
    company: "Udemy",
    duration: "3 horas",
    technologies: [
      "Business Intelligence",
    ],
    summary:
      "Formación introductoria en Business Intelligence y la Minería de Datos.",
  },
  {
    id: 15,
    image: "/certificados/mysql.jpeg",
    title: "Curso completo de Bases de Datos",
    company: "Udemy",
    duration: "34.5 horas",
    technologies: [
      "MySQL",
    ],
    summary:
      "Formación completa en bases de datos relacionales utilizando MySQL.",
  },
  {
    id: 16,
    image: "/certificados/power_bi.jpeg",
    title: "Microsoft Power BI - Curso de Power BI Desktop",
    company: "Udemy",
    duration: "24 horas",
    technologies: [
      "Power BI",
      "Power Query",
      "DAX"
    ],
    summary:
      "Formación completa Power BI Desktop.",
  },
  {
    id: 17,
    image: "/certificados/power_query.jpeg",
    title: "Power Query",
    company: "Udemy",
    duration: "3 horas",
    technologies: [
      "Power Query",
    ],
    summary:
      "Formación completa en transformación de datos con Power Query.",
  },
  {
    id: 18,
    image: "/certificados/Excel_Power_bi.jpeg",
    title: "Excel y Power BI - Análisis y visualización de datos",
    company: "Udemy",
    duration: "12.5 horas",
    technologies: [
      "Excel",
      "Power BI",
      "Power Pivot",
      "DAX",
      "Power Query"
    ],
    summary:
      "Formación en análisis de datos con excel y Power BI.",
  },

  {
    id: 19,
    image: "/certificados/Excel_completo.jpg",
    title: "Excel completo - Desde principiante a avanzado",
    company: "Udemy",
    duration: "20 horas",
    technologies: [
      "Excel",
    ],
    summary:
      "Formación en excel.",
  },

];

export const techs = [
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  { name: "Power BI", img: "https://img.icons8.com/color/96/power-bi.png" },
  {
    name: "Pandas",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "Looker Studio",
    img: "https://www.svgrepo.com/show/354012/looker-icon.svg",
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "SQL Server",
    img: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
  },
  {
    name: "Numpy",
    img: "https://www.svgrepo.com/show/354127/numpy.svg",
  },
  {
    name: "Seaborn",
    img: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
  },
  {
    name: "Matplotlib",
    img: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg",
  },
];
