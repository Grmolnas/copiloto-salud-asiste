export interface Pregunta {
  id: number;
  categoria: "RPMS" | "CCU" | "Rutas de atención" | "Valoración integral" | "Intervenciones" | "Normativa general";
  cursoDeVida: "Primera Infancia" | "Infancia" | "Adolescencia" | "Juventud" | "Adultez" | "Vejez" | "General";
  pregunta: string;
  opciones: [string, string, string, string];
  respuestaCorrecta: 0 | 1 | 2 | 3;
  explicacion: string;
  referencia?: string;
}

export const preguntasRPMS: Pregunta[] = [
  {
    id: 1,
    categoria: "RPMS",
    cursoDeVida: "Adolescencia",
    pregunta: "¿Cuál es el rango de edad para la adolescencia según las RPMS?",
    opciones: [
      "10 a 18 años",
      "12 a 17 años",
      "10 a 14 años y 15 a 17 años",
      "13 a 19 años"
    ],
    respuestaCorrecta: 2,
    explicacion: "La adolescencia se divide en dos grupos etarios: adolescencia temprana (10-14 años) y adolescencia tardía (15-17 años) según las RPMS.",
    referencia: "Resolución 3280/2018, Anexo Técnico RPMS"
  },
  {
    id: 2,
    categoria: "RPMS",
    cursoDeVida: "Primera Infancia",
    pregunta: "¿Con qué periodicidad se realiza la consulta de crecimiento y desarrollo en el primer año de vida?",
    opciones: [
      "Mensual",
      "Cada dos meses",
      "Mensual hasta los 6 meses, luego cada 2 meses",
      "Trimestral"
    ],
    respuestaCorrecta: 2,
    explicacion: "Durante el primer año de vida, las consultas de crecimiento y desarrollo se realizan mensualmente hasta los 6 meses de edad, y posteriormente cada 2 meses hasta completar el primer año.",
    referencia: "Resolución 3280/2018, Anexo Técnico RPMS - Primera Infancia"
  },
  {
    id: 3,
    categoria: "CCU",
    cursoDeVida: "Adultez",
    pregunta: "¿A partir de qué edad se inicia el tamizaje para cáncer cérvico-uterino?",
    opciones: [
      "18 años",
      "21 años",
      "25 años",
      "30 años"
    ],
    respuestaCorrecta: 2,
    explicacion: "El tamizaje para cáncer cérvico-uterino se inicia a los 25 años en mujeres que han iniciado vida sexual, según las guías de práctica clínica colombianas.",
    referencia: "Resolución 3280/2018, Ruta de CCU"
  },
  {
    id: 4,
    categoria: "CCU",
    cursoDeVida: "Adultez",
    pregunta: "¿Cuál es el método de tamizaje preferido para CCU en mujeres de 30-65 años?",
    opciones: [
      "Citología cervical anual",
      "Prueba de ADN-VPH cada 5 años",
      "Colposcopia cada 3 años",
      "Biopsia cervical cada 2 años"
    ],
    respuestaCorrecta: 1,
    explicacion: "En mujeres de 30 a 65 años, la prueba de detección de ADN del VPH cada 5 años es el método de tamizaje preferido, aunque la citología cervical cada 3 años es una alternativa aceptable.",
    referencia: "Resolución 3280/2018, Ruta de CCU"
  },
  {
    id: 5,
    categoria: "Rutas de atención",
    cursoDeVida: "General",
    pregunta: "¿Qué componente es el punto de entrada a las Rutas Integrales de Atención en Salud?",
    opciones: [
      "Atención de urgencias",
      "Consulta especializada",
      "Valoración integral",
      "Hospitalización"
    ],
    respuestaCorrecta: 2,
    explicacion: "La valoración integral es el punto de entrada y eje articulador de las RIAS, permitiendo identificar los riesgos, necesidades y oportunidades de atención de cada persona.",
    referencia: "Resolución 3280/2018, Modelo de Acción Integral Territorial"
  },
  {
    id: 6,
    categoria: "RPMS",
    cursoDeVida: "Juventud",
    pregunta: "¿Cuál es el rango de edad para el curso de vida juventud?",
    opciones: [
      "15 a 24 años",
      "18 a 28 años",
      "14 a 26 años",
      "16 a 25 años"
    ],
    respuestaCorrecta: 1,
    explicacion: "El curso de vida juventud comprende desde los 18 hasta los 28 años de edad según la Política Pública de Juventud y las RPMS.",
    referencia: "Resolución 3280/2018, Anexo Técnico RPMS - Juventud"
  },
  {
    id: 7,
    categoria: "Valoración integral",
    cursoDeVida: "General",
    pregunta: "¿Cuáles son los componentes principales de la valoración integral?",
    opciones: [
      "Solo anamnesis y examen físico",
      "Integral, bucal, visual y auditiva",
      "Clínico, paraclínico y psicológico",
      "Físico, mental y social"
    ],
    respuestaCorrecta: 1,
    explicacion: "La valoración integral incluye cuatro componentes: valoración integral general, valoración integral bucal, valoración visual y valoración auditiva, según corresponda al curso de vida.",
    referencia: "Resolución 3280/2018, Componentes de Valoración Integral"
  },
  {
    id: 8,
    categoria: "Rutas de atención",
    cursoDeVida: "General",
    pregunta: "¿Qué determina la activación de una Ruta Integral de Atención específica?",
    opciones: [
      "La edad del paciente únicamente",
      "La decisión del médico tratante",
      "La identificación de riesgos, eventos o condiciones específicas",
      "La disponibilidad de servicios especializados"
    ],
    respuestaCorrecta: 2,
    explicacion: "Las Rutas Integrales de Atención específicas se activan cuando se identifican riesgos, eventos o condiciones de salud específicas durante la valoración integral o en cualquier momento del proceso de atención.",
    referencia: "Resolución 3280/2018, Activación de Rutas Específicas"
  },
  {
    id: 9,
    categoria: "RPMS",
    cursoDeVida: "Vejez",
    pregunta: "¿A partir de qué edad se considera el curso de vida vejez?",
    opciones: [
      "55 años",
      "60 años",
      "65 años",
      "70 años"
    ],
    respuestaCorrecta: 1,
    explicacion: "El curso de vida vejez inicia a partir de los 60 años de edad según las RPMS y la normatividad colombiana.",
    referencia: "Resolución 3280/2018, Anexo Técnico RPMS - Vejez"
  },
  {
    id: 10,
    categoria: "Intervenciones",
    cursoDeVida: "Primera Infancia",
    pregunta: "¿Cuál es el esquema completo de vacunación para BCG en el recién nacido?",
    opciones: [
      "Dos dosis con refuerzo al año",
      "Una sola dosis al nacer",
      "Tres dosis en el primer año",
      "Dosis al nacer y refuerzo a los 6 meses"
    ],
    respuestaCorrecta: 1,
    explicacion: "La vacuna BCG se aplica en dosis única al recién nacido, idealmente antes del egreso hospitalario, para prevenir formas graves de tuberculosis.",
    referencia: "PAI - Programa Ampliado de Inmunizaciones, Resolución 3280/2018"
  },
  {
    id: 11,
    categoria: "Intervenciones",
    cursoDeVida: "Infancia",
    pregunta: "¿A qué edad se realiza la consulta de valoración integral en el curso de vida infancia?",
    opciones: [
      "Anualmente desde los 6 hasta los 11 años",
      "Cada 2 años desde los 5 hasta los 12 años",
      "A los 5, 7, 9 y 11 años",
      "Cada 6 meses de los 6 a los 12 años"
    ],
    respuestaCorrecta: 2,
    explicacion: "En el curso de vida infancia (6 a 11 años), las consultas de valoración integral se programan a los 5, 7, 9 y 11 años de edad.",
    referencia: "Resolución 3280/2018, Anexo Técnico RPMS - Infancia"
  },
  {
    id: 12,
    categoria: "Normativa general",
    cursoDeVida: "General",
    pregunta: "¿Qué resolución adopta las Rutas Integrales de Atención en Salud (RIAS)?",
    opciones: [
      "Resolución 412 de 2000",
      "Resolución 3280 de 2018",
      "Resolución 2626 de 2019",
      "Resolución 518 de 2015"
    ],
    respuestaCorrecta: 1,
    explicacion: "La Resolución 3280 de 2018 es la norma que adopta los lineamientos técnicos y operativos de las Rutas Integrales de Atención en Salud (RIAS) en Colombia.",
    referencia: "Resolución 3280/2018"
  },
  {
    id: 13,
    categoria: "Valoración integral",
    cursoDeVida: "Adultez",
    pregunta: "¿Con qué periodicidad se debe realizar la valoración integral en el curso de vida adultez?",
    opciones: [
      "Anual",
      "Cada 2 años",
      "Cada 5 años",
      "Solo cuando el paciente lo solicite"
    ],
    respuestaCorrecta: 0,
    explicacion: "En el curso de vida adultez (29-59 años), la valoración integral debe realizarse anualmente para detectar oportunamente riesgos y condiciones de salud.",
    referencia: "Resolución 3280/2018, Anexo Técnico RPMS - Adultez"
  },
  {
    id: 14,
    categoria: "Rutas de atención",
    cursoDeVida: "Adolescencia",
    pregunta: "¿Qué aspectos incluye la atención integral en salud sexual y reproductiva para adolescentes?",
    opciones: [
      "Solo consejería en anticoncepción",
      "Educación, asesoría, anticoncepción y detección de ITS",
      "Únicamente detección de embarazo",
      "Solo vacunación contra VPH"
    ],
    respuestaCorrecta: 1,
    explicacion: "La atención integral en salud sexual y reproductiva para adolescentes incluye educación, asesoría, suministro de métodos anticonceptivos, detección y tratamiento de ITS, y vacunación contra VPH.",
    referencia: "Resolución 3280/2018, Ruta de SSR - Adolescencia"
  },
  {
    id: 15,
    categoria: "Intervenciones",
    cursoDeVida: "Vejez",
    pregunta: "¿Qué tamizaje es prioritario en el curso de vida vejez?",
    opciones: [
      "Tamizaje de depresión únicamente",
      "Valoración funcional y riesgo de caídas",
      "Solo control de presión arterial",
      "Únicamente tamizaje de cáncer"
    ],
    respuestaCorrecta: 1,
    explicacion: "En el curso de vida vejez, la valoración funcional y el tamizaje de riesgo de caídas son prioritarios, junto con la detección de fragilidad y deterioro cognitivo.",
    referencia: "Resolución 3280/2018, Anexo Técnico RPMS - Vejez"
  },
  {
    id: 16,
    categoria: "CCU",
    cursoDeVida: "Adultez",
    pregunta: "¿Hasta qué edad se recomienda continuar el tamizaje de CCU?",
    opciones: [
      "50 años",
      "60 años",
      "65 años",
      "70 años"
    ],
    respuestaCorrecta: 2,
    explicacion: "El tamizaje de cáncer cérvico-uterino se recomienda hasta los 65 años en mujeres con tamizajes previos adecuados y negativos.",
    referencia: "Resolución 3280/2018, Ruta de CCU"
  },
  {
    id: 17,
    categoria: "RPMS",
    cursoDeVida: "Primera Infancia",
    pregunta: "¿Qué curso de vida comprende la Primera Infancia?",
    opciones: [
      "0 a 3 años",
      "0 a 5 años",
      "1 a 5 años",
      "0 a 6 años"
    ],
    respuestaCorrecta: 1,
    explicacion: "La Primera Infancia comprende desde el nacimiento hasta los 5 años de edad, período crítico para el desarrollo físico, cognitivo y emocional.",
    referencia: "Resolución 3280/2018, Anexo Técnico RPMS - Primera Infancia"
  },
  {
    id: 18,
    categoria: "Valoración integral",
    cursoDeVida: "General",
    pregunta: "¿Quién puede realizar la valoración integral?",
    opciones: [
      "Solo médicos generales",
      "Únicamente médicos especialistas",
      "Médico, enfermero u otro profesional de la salud capacitado",
      "Solo pediatras y geriatras"
    ],
    respuestaCorrecta: 2,
    explicacion: "La valoración integral puede ser realizada por médicos, enfermeros u otros profesionales de la salud debidamente capacitados, según el curso de vida y la complejidad.",
    referencia: "Resolución 3280/2018, Talento Humano en RIAS"
  }
];

// Función para filtrar preguntas
export const filtrarPreguntas = (
  preguntas: Pregunta[],
  categoria?: string,
  cursoDeVida?: string
): Pregunta[] => {
  return preguntas.filter((p) => {
    const matchCategoria = !categoria || categoria === "Todas" || p.categoria === categoria;
    const matchCurso = !cursoDeVida || cursoDeVida === "Todos" || p.cursoDeVida === cursoDeVida;
    return matchCategoria && matchCurso;
  });
};

// Función para mezclar preguntas aleatoriamente
export const mezclarPreguntas = (preguntas: Pregunta[]): Pregunta[] => {
  const preguntasCopia = [...preguntas];
  for (let i = preguntasCopia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [preguntasCopia[i], preguntasCopia[j]] = [preguntasCopia[j], preguntasCopia[i]];
  }
  return preguntasCopia;
};
