export interface FichaTecnica {
  id: number;
  titulo: string;
  tipo: "Infografía" | "Ficha" | "Guía";
  cursoDeVida: string;
  intervencion: string;
  tema: string;
  htmlUrl?: string;    // URL para visualización web (opcional)
  pdfUrl?: string;     // Ruta absoluta desde /public (ej: "/recursos/infografia-ccu.pdf")
  fuente?: string;
  version?: string;
}

export const fichasTecnicas: FichaTecnica[] = [
  {
    id: 1,
    titulo: "Detección temprana de alteraciones del crecimiento y desarrollo",
    tipo: "Ficha",
    cursoDeVida: "Primera Infancia",
    intervencion: "Valoración integral",
    tema: "Crecimiento y Desarrollo",
    pdfUrl: "#",
  },
  {
    id: 2,
    titulo: "Atención en salud bucal para la primera infancia",
    tipo: "Guía",
    cursoDeVida: "Primera Infancia",
    intervencion: "Salud Bucal",
    tema: "Odontología Preventiva",
    pdfUrl: "#",
  },
  {
    id: 3,
    titulo: "Detección temprana de alteraciones del embarazo",
    tipo: "Ficha",
    cursoDeVida: "Adultez",
    intervencion: "Control Prenatal",
    tema: "Salud Materna",
    pdfUrl: "#",
  },
  {
    id: 4,
    titulo: "Atención del parto y puerperio",
    tipo: "Guía",
    cursoDeVida: "Adultez",
    intervencion: "Atención Materna",
    tema: "Salud Materna",
    pdfUrl: "#",
  },
  {
    id: 5,
    titulo: "Detección temprana de alteraciones en el joven",
    tipo: "Ficha",
    cursoDeVida: "Juventud",
    intervencion: "Valoración integral",
    tema: "Salud del Adolescente",
    pdfUrl: "/recursos/ficha-adolescencia-rpms.pdf",
    fuente: "Resolución 3280 de 2018 - RPMS",
    version: "1.0",
  },
  {
    id: 6,
    titulo: "Infografía - Cáncer de Cuello Uterino (CCU)",
    tipo: "Infografía",
    cursoDeVida: "Adultez",
    intervencion: "Valoración integral",
    tema: "Prevención de Cáncer",
    pdfUrl: "/recursos/infografia-ccu.pdf",
    fuente: "Ministerio de Salud - Programa CCU",
    version: "2.1",
  },
  {
    id: 7,
    titulo: "Vacunación según esquema nacional",
    tipo: "Guía",
    cursoDeVida: "Todos",
    intervencion: "Vacunación",
    tema: "Inmunización",
    pdfUrl: "#",
  },
  {
    id: 8,
    titulo: "Atención integral al adulto mayor",
    tipo: "Ficha",
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
