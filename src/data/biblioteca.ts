export interface FichaTecnica {
  id: number;
  titulo: string;
  cursoDeVida: string;
  intervencion: string;
  tema: string;
  pdfUrl: string;
}

export const fichasTecnicas: FichaTecnica[] = [
  {
    id: 1,
    titulo: "Detección temprana de alteraciones del crecimiento y desarrollo",
    cursoDeVida: "Primera Infancia",
    intervencion: "Valoración integral",
    tema: "Crecimiento y Desarrollo",
    pdfUrl: "#",
  },
  {
    id: 2,
    titulo: "Atención en salud bucal para la primera infancia",
    cursoDeVida: "Primera Infancia",
    intervencion: "Salud Bucal",
    tema: "Odontología Preventiva",
    pdfUrl: "#",
  },
  {
    id: 3,
    titulo: "Detección temprana de alteraciones del embarazo",
    cursoDeVida: "Adultez",
    intervencion: "Control Prenatal",
    tema: "Salud Materna",
    pdfUrl: "#",
  },
  {
    id: 4,
    titulo: "Atención del parto y puerperio",
    cursoDeVida: "Adultez",
    intervencion: "Atención Materna",
    tema: "Salud Materna",
    pdfUrl: "#",
  },
  {
    id: 5,
    titulo: "Detección temprana de alteraciones en el joven",
    cursoDeVida: "Juventud",
    intervencion: "Valoración integral",
    tema: "Salud del Adolescente",
    pdfUrl: "#",
  },
  {
    id: 6,
    titulo: "Detección temprana de alteraciones en el adulto",
    cursoDeVida: "Adultez",
    intervencion: "Valoración integral",
    tema: "Enfermedades Crónicas",
    pdfUrl: "#",
  },
  {
    id: 7,
    titulo: "Vacunación según esquema nacional",
    cursoDeVida: "Todos",
    intervencion: "Vacunación",
    tema: "Inmunización",
    pdfUrl: "#",
  },
  {
    id: 8,
    titulo: "Atención integral al adulto mayor",
    cursoDeVida: "Vejez",
    intervencion: "Valoración integral",
    tema: "Envejecimiento Saludable",
    pdfUrl: "#",
  },
];

export const cursosDeVida = [
  "Todos",
  "Primera Infancia",
  "Infancia",
  "Juventud",
  "Adultez",
  "Vejez",
];

export const intervenciones = [
  "Todas",
  "Valoración integral",
  "Control Prenatal",
  "Atención Materna",
  "Salud Bucal",
  "Vacunación",
];
