export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Review {
  id: string;
  name: string;
  date: string;
  stars: number;
  text: string;
  treatment: string;
}

export const CLINIC_INFO = {
  name: 'Salud y Bienestar Kinesiología',
  shortName: 'Dr. Jhon Barrios',
  director: 'Lic. Diego Ponce & Lic. Julieta Castellano',
  directorTitle: 'Especialista en Estética Dental, Implantes & Rehabilitación Oral',
  phoneDisplay: '11 5765-7273',
  phoneRaw: '1157657273',
  whatsappRaw: '5491157657273',
  whatsappUrl: 'https://wa.me/5491157657273?text=Hola%20Dr.%20Jhon%20Barrios,%20quisiera%20solicitar%20un%20turno%20de%20consulta%20en%20el%20consultorio%20de%20Chacarita.',
  instagramUrl: 'https://www.instagram.com/drjhonbarrios/',
  instagramHandle: '@drjhonbarrios',
  instagramFollowers: '+22.000',
  address: 'Loyola 228, Villa Crespo, CABA',
  neighborhood: 'Chacarita, Ciudad Autónoma de Buenos Aires',
  rating: '4.9',
  reviewCount: '391',
  yearsExperience: '12+',
  hours: 'Lunes a Viernes de 09:00 a 20:00 hs • Sábados con turno previo',
  mapsUrl: 'https://maps.google.com/?q=Jorge+Newbery+3466,+CABA,+Argentina'
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'diseno-de-sonrisa',
    title: 'Diseño de Sonrisa & Carillas',
    subtitle: 'Planificación digital milimétrica y máxima naturalidad',
    description: 'Transformación estética de la sonrisa con carillas cerámicas de disilicato de litio y resinas estratificadas. Armonía facial, color luminoso y texturas anatómicas idénticas al esmalte natural.',
    image: '/images/dr_jhon_barrios.jpg',
    tags: ['Carillas Cerámicas', 'Lentes de Contacto Dental', 'DSD Digital', 'Mínima Invasión']
  },
  {
    id: 'implantes-cirugia',
    title: 'Implantología & Cirugía Guiada',
    subtitle: 'Reposición fija definitiva con máxima predictibilidad',
    description: 'Recuperación de piezas ausentes mediante implantes de titanio biocompatible de primeras marcas mundiales. Cirugía guiada por tomografía computarizada 3D para una recuperación rápida y sin dolor.',
    image: '/images/dr_jhon_barrios.jpg',
    tags: ['Carga Inmediata', 'Cirugía 3D Guiada', 'Titanio Biocompatible', 'Sin Dolor']
  },
  {
    id: 'rehabilitacion-oral',
    title: 'Rehabilitación Oral de Alta Complejidad',
    subtitle: 'Restitución biológica, funcional y estética masticatoria',
    description: 'Tratamiento integral de desgastes severos, bruxismo y pérdida de dimensión vertical. Coronas de circonio puro, incrustaciones estéticas inlay/onlay y prótesis fija de alta durabilidad.',
    image: '/images/dr_jhon_barrios.jpg',
    tags: ['Coronas de Circonio', 'Incrustaciones Cerámicas', 'Bruxismo', 'Oclusión Funcional']
  },
  {
    id: 'ortodoncia-invisible',
    title: 'Ortodoncia Invisible & Alineadores',
    subtitle: 'Alineación dental de alta precisión sin brackets visibles',
    description: 'Placas alineadoras transparentes y removibles diseñadas digitalmente. Corrigen apiñamientos, separaciones y mordidas de forma discreta, cómoda e higiénica para tu estilo de vida.',
    image: '/images/dr_jhon_barrios.jpg',
    tags: ['Alineadores Transparentes', 'Escaneo Intraoral 3D', 'Removibles', 'Estética Total']
  },
  {
    id: 'blanqueamiento-premium',
    title: 'Blanqueamiento Dental Clínico',
    subtitle: 'Luminosidad y aclaramiento sin sensibilidad dental',
    description: 'Protocolos combinados en consultorio y ambulatorio con geles de última generación activados de forma segura. Aclarado profundo y uniforme cuidando la integridad del esmalte dental.',
    image: '/images/dr_jhon_barrios.jpg',
    tags: ['Aclaramiento en Consultorio', 'Cero Sensibilidad', 'Brillo Natural', 'Seguridad del Esmalte']
  },
  {
    id: 'salud-periodontal',
    title: 'Prevención, Profilaxis & Armonización',
    subtitle: 'Cuidado continuo de la salud gingival y estética perioral',
    description: 'Limpieza ultrasónica profunda con aeropulidor, control periodontal y armonización de márgenes gingivales para enmarcar una sonrisa saludable, fresca y duradera.',
    image: '/images/dr_jhon_barrios.jpg',
    tags: ['Ultrasonido Piezoeléctrico', 'Gingivoplastía', 'Profilaxis de Precisión', 'Cuidado Preventivo']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Martín V.',
    date: 'Hace 1 semana',
    stars: 4.0,
    text: 'El Dr. Jhon Barrios es un artista. Me hizo carillas en el sector anterior y el cambio en mi rostro y seguridad es impresionante. El consultorio en Chacarita es de película: todo de mármol blanco, prolijo y con la mejor tecnología.',
    treatment: 'Diseño de Sonrisa & Carillas'
  },
  {
    id: '2',
    name: 'Camila S.',
    date: 'Hace 3 semanas',
    stars: 5,
    text: 'Tenía pánico al dentista y la experiencia con Jhon fue fabulosa. Me colocó dos implantes y no sentí absolutamente nada de dolor ni durante ni después de la cirugía. Súper detallista, profesional y puntual.',
    treatment: 'Implantes Dentales Guiados'
  },
  {
    id: '3',
    name: 'Facundo G.',
    date: 'Hace 1 mes',
    stars: 5,
    text: 'Excelente atención de todo el staff. Los 4.9 puntos en Google son más que merecidos. Te explican todo con escáner en pantalla antes de tocarte un diente. Recomiendo a ojos cerrados el consultorio de Jorge Newbery.',
    treatment: 'Rehabilitación Oral & Circonio'
  },
  {
    id: '4',
    name: 'Solange B.',
    date: 'Hace 2 meses',
    stars: 5,
    text: 'Hice el tratamiento de alineadores invisibles con el Dr. Barrios y quedé fascinada. Súper rápido, cómodo y el seguimiento en cada control fue impecable. Además el lugar transmite una paz y elegancia única.',
    treatment: 'Ortodoncia Invisible'
  }
];

export const TRUST_POINTS = [
  { value: '4.9 ★', label: 'Google Maps (391 reseñas)' },
  { value: '+22k', label: 'Seguidores en Instagram' },
  { value: '12+', label: 'Años de Experiencia Clínica' },
  { value: '100%', label: 'Tecnología & Diagnóstico Digital' }
];

export function getWhatsAppUrl(reason?: string): string {
  let text = 'Hola Dr. Jhon Barrios! ';
  if (reason) {
    text += `Quisiera consultar información y coordinar una cita para *${reason}*.`;
  } else {
    text += 'Quisiera solicitar un turno de consulta en el consultorio de Jorge Newbery 3466, Chacarita.';
  }
  return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}
