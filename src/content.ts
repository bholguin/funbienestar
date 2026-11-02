export const PHONE_DISPLAY = "+57 311 827 0406"
export const PHONE_TEL = "+573118270406"
export const EMAIL = "funbienestar@outlook.com"
export const PDF = "/aviso-importante.pdf"

export function wa(text: string) {
  return `https://wa.me/573118270406?text=${encodeURIComponent(text)}`
}

export type Shot = {
  src: string
  alt: string
  width: number
  height: number
}

export const shots = {
  podio: {
    src: "/assets/paralimpicos-1.jpeg",
    alt: "Deportistas de powerlifting en silla de ruedas, con medallas, en el podio del Campeonato Reino de Toledo.",
    width: 1170,
    height: 980,
  },
  jamundi: {
    src: "/assets/formacion-smat.jpg",
    alt: "Personal del INPEC formado en el patio del establecimiento de Jamundí.",
    width: 1600,
    height: 1200,
  },
  popayan: {
    src: "/assets/inpec-helps.jpg",
    alt: "Entrega de una silla de ruedas y muletas frente al INPEC de Popayán.",
    width: 1600,
    height: 1200,
  },
  medalla: {
    src: "/assets/paralimpicos-2.jpeg",
    alt: "Deportista en silla de ruedas muestra la medalla de oro del Campeonato de Powerlifting Reino de Toledo.",
    width: 1035,
    height: 1600,
  },
  bandera: {
    src: "/assets/formacion.jpeg",
    alt: "Personal del Ejército y civiles frente a una cruz y la bandera de Colombia.",
    width: 1280,
    height: 960,
  },
  colombia: {
    src: "/assets/juegos-olimpicos.jpeg",
    alt: "Deportista de para powerlifting con la chaqueta de Colombia muestra sus medallas junto a su entrenadora.",
    width: 589,
    height: 741,
  },
  reconocimiento: {
    src: "/assets/paralimpicos-3.jpeg",
    alt: "Uniformado del INPEC y un civil muestran un reconocimiento frente a la cerca del establecimiento.",
    width: 1200,
    height: 1600,
  },
  bonoOficina: {
    src: "/assets/imagen-1.jpeg",
    alt: "Entrega de un termo y del Bono Solidario Nacional a un uniformado del INPEC.",
    width: 960,
    height: 1280,
  },
  bonoCasa: {
    src: "/assets/img-web-5.jpg",
    alt: "Dos beneficiarios sostienen el reconocimiento del Bono Solidario Nacional.",
    width: 1600,
    height: 1200,
  },
  bonoComedor: {
    src: "/assets/paralimpicos-4.jpeg",
    alt: "Uniformado del INPEC recibe el Bono Solidario Nacional de Funbienestar.",
    width: 1200,
    height: 1600,
  },
} satisfies Record<string, Shot>

export const motivos = [
  {
    id: "orientacion",
    label: "Necesito orientación para mí o mi familia",
    text: "Hola, Funbienestar. Necesito orientación sobre los programas de la fundación.",
  },
  {
    id: "donacion",
    label: "Quiero donar tiempo, trabajo o recursos",
    text: "Hola, Funbienestar. Quiero donar y saber cómo puedo aportar.",
  },
  {
    id: "alianza",
    label: "Mi empresa quiere abrir un cupo de trabajo",
    text: "Hola, Funbienestar. Represento una empresa y quiero hablar de una alianza laboral.",
  },
  {
    id: "deporte",
    label: "Quiero apoyar a un deportista",
    text: "Hola, Funbienestar. Quiero información sobre el patrocinio a deportistas.",
  },
]

export type Program = {
  id: string
  lines: [string, string]
  summary: string
  body: string
  terms: [string, string, string]
  image?: Shot
  note?: string
}

export const programs: Program[] = [
  {
    id: "patrocinio",
    lines: ["Patrocinio", "a deportistas"],
    summary:
      "Apoyo para competir en eventos nacionales e internacionales y buscar la clasificación a mundiales y paralímpicos.",
    body: "Patrocinamos deportistas de alto rendimiento y equipos deportivos. Los apoyamos para participar en eventos nacionales e internacionales de distintas disciplinas, con la meta de clasificar a mundiales y juegos paralímpicos.",
    terms: ["Alto rendimiento", "Eventos", "Paralímpicos"],
    image: shots.colombia,
  },
  {
    id: "retiro",
    lines: ["Apoyo desde", "el retiro"],
    summary:
      "Veteranos, retirados y sus familias comparten experiencias y conocen programas, ayudas y recursos.",
    body: "Ofrecemos apoyo a veteranos, retirados y sus familias. La vida militar no termina al salir. En este grupo se comparten experiencias y se conocen programas, ayudas y recursos para quienes ya no están en servicio activo.",
    terms: ["Veteranos", "Familias", "Recursos"],
    image: shots.bonoCasa,
  },
  {
    id: "rehabilitacion",
    lines: ["Material de", "rehabilitación"],
    summary: "Muletas, caminador, silla de ruedas y bastón para quien los necesite.",
    body: "Entregamos material de rehabilitación física al personal que lo requiera: muletas, caminador, silla de ruedas y bastón.",
    terms: ["Muletas", "Caminadores", "Sillas"],
    image: shots.popayan,
  },
  {
    id: "juridica",
    lines: ["Orientación", "jurídica"],
    summary: "Personal calificado para orientar en procesos jurídicos.",
    body: "Hay personal calificado, atento a orientar en lo relacionado con procesos jurídicos.",
    terms: ["Procesos", "Trámites", "Consulta"],
    image: shots.bonoOficina,
  },
  {
    id: "psicologica",
    lines: ["Orientación", "psicológica"],
    summary: "Acompañamiento profesional en cambios y momentos difíciles.",
    body: "Profesionales calificados prestan orientación y acompañamiento, y procuran alivio a las personas que enfrentan cambios y momentos difíciles.",
    terms: ["Escucha", "Cambios", "Alivio"],
    note: "Cuando el servicio deja una marca, hay con quién hablar.",
  },
  {
    id: "bienestar",
    lines: ["Bienestar", "social"],
    summary:
      "Programas para la calidad de vida de los afiliados, con pertenencia y solidaridad.",
    body: "El programa de bienestar social está pensado para contribuir a un entorno sano y solidario, y para los servidores públicos a nivel nacional: mejorar la calidad de vida, reconocer la labor y fortalecer el sentido de pertenencia. Los programas de Funbienestar hacen parte del desarrollo de sus afiliados.",
    terms: ["Afiliados", "Pertenencia", "Solidaridad"],
    image: shots.jamundi,
  },
]

export const aliados = [
  "Policía Nacional",
  "INPEC",
  "Ejército Nacional",
  "CASUR",
  "Ministerio de Educación",
]

export const seoByPath: Record<
  string,
  { title: string; description: string; image: string; robots?: string }
> = {
  "/": {
    title: "Funbienestar | Fundación Nacional de Bienestar Social",
    description:
      "Funbienestar acompaña en Colombia a militares, policías e INPEC heridos o con discapacidad, y a sus familias, con deporte, rehabilitación y orientación.",
    image: shots.colombia.src,
  },
  "/nosotros": {
    title: "Quiénes somos | Funbienestar",
    description:
      "Misión y visión de la Fundación Nacional de Bienestar Social: protección, inclusión y trabajo digno para sus beneficiarios en Colombia.",
    image: shots.bandera.src,
  },
  "/nuestros-programas": {
    title: "Programas | Funbienestar",
    description:
      "Seis programas de Funbienestar: patrocinio deportivo, apoyo en el retiro, rehabilitación, orientación jurídica, orientación psicológica y bienestar social.",
    image: shots.medalla.src,
  },
  "/donaciones": {
    title: "Donaciones | Funbienestar",
    description:
      "Apoye a Funbienestar por WhatsApp. La fundación acompaña la inclusión laboral de personas con discapacidad y abre alianzas con empresas.",
    image: shots.bonoComedor.src,
  },
}
