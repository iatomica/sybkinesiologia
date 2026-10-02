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
  shortName: 'SBK Kinesiología',
  director: 'Lic. Diego Ponce & Lic. Julieta Castellano',
  directorTitle: 'Kinesiólogos Fisiatras • Acupuntura & Rehabilitación Integral',
  phoneDisplay: '011 3781-0401',
  phoneRaw: '01137810401',
  whatsappRaw: '5491137810401',
  whatsappUrl: 'https://wa.me/5491137810401?text=Hola%20SBK%20Salud%20y%20Bienestar%20Kinesiolog%C3%ADa,%20quisiera%20solicitar%20un%20turno%20de%20consulta%20en%20el%20consultorio%20de%20Loyola%20228.',
  instagramUrl: 'https://www.instagram.com/sybkinesiologia?igshid=YmMyMTA2M2Y%3D',
  instagramHandle: '@sybkinesiologia',
  instagramFollowers: '+15.000',
  address: 'Loyola 228, Villa Crespo, CABA',
  neighborhood: 'Villa Crespo, Ciudad Autónoma de Buenos Aires',
  rating: '4.0',
  reviewCount: '458',
  yearsExperience: '14+',
  hours: 'Lunes a Viernes de 08:30 a 20:30 hs • Consultas con turno previo',
  mapsUrl: 'https://maps.google.com/?q=Loyola+228,+CABA,+Argentina'
};

export const PROFESSIONALS = [
  {
    name: 'Lic. Diego Ponce',
    role: 'Kinesiólogo Fisiatra',
    image: '/images/sbk-diego-ponce.png',
    bio: 'Especialista en rehabilitación kinesiológica, dolor osteomuscular y terapia física integral orientada a la rápida recuperación funcional.'
  },
  {
    name: 'Lic. Julieta Castellano',
    role: 'Kinesióloga Fisiatra',
    image: '/images/sbk-julieta-castellano.png',
    bio: 'Especialista en kinesiología integral, acupuntura bioenergética y reeducación biomecánica adaptada a las necesidades de cada paciente.'
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'acupuntura',
    title: 'Acupuntura Tradicional',
    subtitle: 'Medicina tradicional para equilibrio energético y alivio del dolor',
    description: 'La acupuntura es una técnica milenaria de la medicina tradicional china que consiste en la inserción de agujas muy finas en puntos específicos del cuerpo para estimular el flujo de energía y promover su reorganización.',
    image: '/images/sbk-acupuntura.png',
    tags: ['Medicina Tradicional China', 'Alivio del Dolor', 'Estimulación Energética', 'Terapia Milenaria']
  },
  {
    id: 'kinesiologia-fisiatria',
    title: 'Kinesiología & Fisiatría',
    subtitle: 'Rehabilitación motora y recuperación funcional personalizada',
    description: 'Tratamiento integral enfocado en recuperar la movilidad articular, relajar contracturas crónicas y restaurar el bienestar corporal sin dolor.',
    image: '/images/medical-clinic-consult.jpg',
    tags: ['Rehabilitación Muscular', 'Movilidad Articular', 'Electroterapia', 'Tratamiento Personalizado']
  },
  {
    id: 'reeducacion-postural',
    title: 'Reeducación Postural & Columna',
    subtitle: 'Corrección de hábitos posturales y fortalecimiento vertebral',
    description: 'Evaluación y tratamiento integral de desviaciones de columna, lumbalgias, cervicalgias y patologías posturales mediante ejercicios globales de cadenas musculares.',
    image: '/images/clinic-facilities-modern.webp',
    tags: ['Salud Espinal', 'Cervicalgias & Lumbalgias', 'Cadenas Musculares', 'Equilibrio Corporal']
  },
  {
    id: 'kinesiologia-deportiva',
    title: 'Kinesiología Deportiva & Traumatología',
    subtitle: 'Prevención, readaptación y vuelta segura al entrenamiento',
    description: 'Manejo kinésico de esguinces, desgarros musculares, sobrecargas y recuperación post-quirúrgica articular con enfoque en la función.',
    image: '/images/healthcare-team-medical.webp',
    tags: ['Recuperación de Lesiones', 'Readaptación Deportiva', 'Prevención', 'Kinesioterapia']
  },
  {
    id: 'drenaje-linfatico',
    title: 'Drenaje Linfático Manual & Terapia Manual',
    subtitle: 'Descongestión profunda, circulación y relajación miofascial',
    description: 'Técnicas manuales específicas y rítmicas para estimular la circulación linfática, sumamente indicadas para postoperatorios, edemas y bienestar general.',
    image: '/images/sbk-banner.png',
    tags: ['Postoperatorios', 'Circulación Linfática', 'Terapia Miofascial', 'Desinflamación']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Carolina M.',
    date: 'Hace 2 semanas',
    stars: 4.0,
    text: 'Excelente atención en Loyola 228. Fui por una lumbalgia terrible y la combinación de kinesiología con acupuntura de la Lic. Julieta Castellano me cambió la vida. Muy profesionales y dedicados.',
    treatment: 'Acupuntura & Kinesiología'
  },
  {
    id: '2',
    name: 'Gonzalo R.',
    date: 'Hace 1 mes',
    stars: 4.0,
    text: 'El Lic. Diego Ponce me atendió por una rotura de ligamentos y me acompañó en todo el proceso de recuperación motora. Los 458 testimonios en Google reflejan la seriedad con la que trabajan.',
    treatment: 'Kinesiología & Fisiatría'
  },
  {
    id: '3',
    name: 'Mariana T.',
    date: 'Hace 2 meses',
    stars: 4.0,
    text: 'El consultorio en Villa Crespo es cálido, súper prolijo y la atención es puntual. La sesión de acupuntura me alivió contracturas cervicales que arrastraba hace meses. Muy recomendable.',
    treatment: 'Acupuntura Tradicional'
  }
];

export const TRUST_POINTS = [
  { value: '4.0 ★', label: 'Google Maps (458 opiniones)' },
  { value: '+15k', label: 'Comunidad en Instagram' },
  { value: '14+', label: 'Años de Experiencia en Salud' },
  { value: '100%', label: 'Atención Personalizada Kinesiológica' }
];

export function getWhatsAppUrl(reason?: string): string {
  let text = 'Hola equipo de Salud y Bienestar Kinesiología! ';
  if (reason) {
    text += `Quisiera coordinar un turno para consulta de *${reason}*.`;
  } else {
    text += 'Quisiera solicitar un turno en el consultorio de Loyola 228, Villa Crespo.';
  }
  return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}
