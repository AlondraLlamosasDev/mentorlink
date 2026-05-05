export type Review = {
  menteeName: string;
  rating: number;
  comment: string;
  date: string;
};

export type PastJob = {
  role: string;
  company: string;
  years: string;
};

export type Mentor = {
  id: string;
  slug: string;
  name: string;
  location: string;
  languages: string[];
  headline: string;
  bio: string;
  specialties: string[];
  yearsExperience: number;
  university: string;
  degree: string;
  graduationYear: number;
  currentRole: string;
  currentCompany: string;
  pastExperience: PastJob[];
  linkedin: string;
  rate: number;
  rating: number;
  totalSessions: number;
  reviews: Review[];
};

export const SPECIALTIES = [
  "Frontend",
  "Backend",
  "Mobile",
  "DevOps / Cloud",
  "Data Science / ML",
  "UX / UI Design",
  "Product Management",
  "Marketing Digital",
  "Liderazgo",
  "Carrera profesional",
];

export const LANGUAGES = ["Español", "Inglés", "Portugués", "Francés"];

export const mentors: Mentor[] = [
  {
    id: "1",
    slug: "ana-rodriguez",
    name: "Ana Rodríguez",
    location: "Ciudad de México, México",
    languages: ["Español", "Inglés"],
    headline: "Senior Frontend Developer en Mercado Libre",
    bio: "Llevo más de 8 años construyendo interfaces que millones de personas usan a diario. Me especializo en React, performance y design systems. Disfruto enseñar a quienes están empezando y ayudar a perfiles mid a dar el salto a senior. En mis sesiones combino teoría con código real, así que sales de cada una con algo concreto que puedes aplicar.",
    specialties: ["Frontend", "Carrera profesional"],
    yearsExperience: 8,
    university: "UNAM",
    degree: "Ingeniería en Computación",
    graduationYear: 2017,
    currentRole: "Senior Frontend Developer",
    currentCompany: "Mercado Libre",
    pastExperience: [
      { role: "Frontend Developer", company: "Rappi", years: "2019-2022" },
      { role: "Junior Developer", company: "Globant", years: "2017-2019" },
    ],
    linkedin: "https://linkedin.com/in/ana-rodriguez",
    rate: 200,
    rating: 4.9,
    totalSessions: 87,
    reviews: [
      {
        menteeName: "Carlos M.",
        rating: 5,
        comment: "Excelente mentora. Me ayudó a entender React en profundidad y a estructurar mi portafolio para entrevistas.",
        date: "2026-04-15",
      },
      {
        menteeName: "Laura P.",
        rating: 5,
        comment: "Muy clara explicando conceptos avanzados. Salí con tarea concreta y referencias para profundizar.",
        date: "2026-04-10",
      },
      {
        menteeName: "Diego R.",
        rating: 4,
        comment: "Buena sesión, paciente y profesional. Recomendada.",
        date: "2026-04-05",
      },
    ],
  },
  {
    id: "2",
    slug: "carlos-mendoza",
    name: "Carlos Mendoza",
    location: "Guadalajara, México",
    languages: ["Español", "Inglés"],
    headline: "Tech Lead Backend en Kueski",
    bio: "12 años diseñando sistemas distribuidos en Node.js, Go y Python. Especializado en arquitectura de microservicios, bases de datos y pipelines de datos. Me gusta enseñar fundamentos sólidos y casos reales que te van a tocar en producción.",
    specialties: ["Backend", "DevOps / Cloud"],
    yearsExperience: 12,
    university: "ITESO",
    degree: "Ingeniería en Sistemas Computacionales",
    graduationYear: 2013,
    currentRole: "Tech Lead Backend",
    currentCompany: "Kueski",
    pastExperience: [
      { role: "Senior Backend Developer", company: "Konfío", years: "2018-2022" },
      { role: "Backend Developer", company: "Wizeline", years: "2013-2018" },
    ],
    linkedin: "https://linkedin.com/in/carlos-mendoza",
    rate: 250,
    rating: 4.8,
    totalSessions: 142,
    reviews: [
      {
        menteeName: "Pablo S.",
        rating: 5,
        comment: "Conocimiento brutal. Me explicó arquitectura de microservicios mejor que cualquier libro.",
        date: "2026-04-20",
      },
      {
        menteeName: "María G.",
        rating: 5,
        comment: "Carlos resolvió todas mis dudas sobre escalabilidad. 100% recomendado.",
        date: "2026-04-12",
      },
    ],
  },
  {
    id: "3",
    slug: "sofia-ortega",
    name: "Sofía Ortega",
    location: "Monterrey, México",
    languages: ["Español", "Inglés", "Portugués"],
    headline: "Lead UX Designer en Banregio",
    bio: "Diseñadora de producto con 7 años de experiencia. He liderado equipos de diseño en banca, fintech y e-commerce. Me apasiona compartir frameworks de research, diseño de sistemas y cómo presentar tu trabajo para conseguir el siguiente nivel.",
    specialties: ["UX / UI Design", "Carrera profesional"],
    yearsExperience: 7,
    university: "Tec de Monterrey",
    degree: "Lic. en Diseño Industrial",
    graduationYear: 2018,
    currentRole: "Lead UX Designer",
    currentCompany: "Banregio",
    pastExperience: [
      { role: "Senior UX Designer", company: "OXXO", years: "2020-2023" },
      { role: "UX Designer", company: "Cemex", years: "2018-2020" },
    ],
    linkedin: "https://linkedin.com/in/sofia-ortega",
    rate: 180,
    rating: 5.0,
    totalSessions: 64,
    reviews: [
      {
        menteeName: "Ana V.",
        rating: 5,
        comment: "Una sesión con Sofía vale por 10 cursos online. Me dio feedback concreto sobre mi portafolio.",
        date: "2026-04-22",
      },
      {
        menteeName: "Juan C.",
        rating: 5,
        comment: "Le entendí más a Figma en una hora con ella que en 3 meses solo.",
        date: "2026-04-18",
      },
    ],
  },
  {
    id: "4",
    slug: "diego-hernandez",
    name: "Diego Hernández",
    location: "Ciudad de México, México",
    languages: ["Español", "Inglés"],
    headline: "Principal Engineer DevOps en Bitso",
    bio: "Construyo infraestructura que aguanta picos de millones de transacciones. Especialista en Kubernetes, AWS y observabilidad. Si estás migrando a cloud o quieres entender SRE de verdad, te puedo ayudar.",
    specialties: ["DevOps / Cloud", "Backend"],
    yearsExperience: 10,
    university: "UAM",
    degree: "Ingeniería Electrónica",
    graduationYear: 2015,
    currentRole: "Principal Engineer",
    currentCompany: "Bitso",
    pastExperience: [
      { role: "DevOps Engineer", company: "Clip", years: "2019-2022" },
      { role: "SysAdmin", company: "Linio", years: "2015-2019" },
    ],
    linkedin: "https://linkedin.com/in/diego-hernandez",
    rate: 280,
    rating: 4.7,
    totalSessions: 103,
    reviews: [
      {
        menteeName: "Roberto F.",
        rating: 5,
        comment: "Un crack de la infra. Me ayudó a debuggear un problema que llevaba semanas.",
        date: "2026-04-19",
      },
      {
        menteeName: "Sandra M.",
        rating: 4,
        comment: "Muy técnico, a veces va rápido pero responde muy bien todas las dudas.",
        date: "2026-04-08",
      },
    ],
  },
  {
    id: "5",
    slug: "lucia-vargas",
    name: "Lucía Vargas",
    location: "Puebla, México",
    languages: ["Español", "Inglés"],
    headline: "Data Scientist en Walmart México",
    bio: "Construyo modelos de ML en producción para retail. Mi sweet spot es ayudar a quienes vienen de programación tradicional a transicionar a data. He acompañado a más de 30 personas a su primer trabajo en data.",
    specialties: ["Data Science / ML", "Carrera profesional"],
    yearsExperience: 5,
    university: "BUAP",
    degree: "Maestría en Ciencias Computacionales",
    graduationYear: 2020,
    currentRole: "Senior Data Scientist",
    currentCompany: "Walmart México",
    pastExperience: [
      { role: "Data Analyst", company: "Coppel", years: "2018-2020" },
    ],
    linkedin: "https://linkedin.com/in/lucia-vargas",
    rate: 150,
    rating: 4.8,
    totalSessions: 56,
    reviews: [
      {
        menteeName: "Tomás P.",
        rating: 5,
        comment: "Lucía me ayudó a estructurar un proyecto de portafolio con datos reales. Conseguí entrevista en 2 semanas.",
        date: "2026-04-21",
      },
      {
        menteeName: "Verónica L.",
        rating: 5,
        comment: "Súper clara y empática. Me aterricé qué cosas debo aprender primero.",
        date: "2026-04-14",
      },
    ],
  },
  {
    id: "6",
    slug: "roberto-perez",
    name: "Roberto Pérez",
    location: "Querétaro, México",
    languages: ["Español", "Inglés"],
    headline: "Mobile Developer Senior — iOS & Android",
    bio: "8 años haciendo apps nativas y cross-platform. He publicado más de 20 apps en stores. Te puedo ayudar con Swift, Kotlin, React Native o Flutter — y sobre todo a decidir cuál te conviene para tu proyecto.",
    specialties: ["Mobile"],
    yearsExperience: 8,
    university: "UAQ",
    degree: "Ingeniería en Software",
    graduationYear: 2017,
    currentRole: "Senior Mobile Developer",
    currentCompany: "Justo",
    pastExperience: [
      { role: "Mobile Developer", company: "Cornershop", years: "2019-2022" },
      { role: "Junior iOS Developer", company: "Naranja X", years: "2017-2019" },
    ],
    linkedin: "https://linkedin.com/in/roberto-perez",
    rate: 170,
    rating: 4.6,
    totalSessions: 71,
    reviews: [
      {
        menteeName: "Daniela R.",
        rating: 5,
        comment: "Muy bueno explicando arquitectura mobile. Recomendado para quienes vienen del web.",
        date: "2026-04-17",
      },
      {
        menteeName: "Iván H.",
        rating: 4,
        comment: "Buena experiencia, conocimientos sólidos.",
        date: "2026-04-11",
      },
    ],
  },
  {
    id: "7",
    slug: "mariana-silva",
    name: "Mariana Silva",
    location: "Ciudad de México, México",
    languages: ["Español", "Inglés", "Portugués"],
    headline: "Senior Product Manager en Kavak",
    bio: "Soy PM con background técnico. He lanzado productos B2C en automotriz y fintech. Te ayudo a estructurar discovery, definir roadmap y comunicarte con tu equipo de ingeniería sin volverte loca.",
    specialties: ["Product Management", "Liderazgo"],
    yearsExperience: 9,
    university: "ITAM",
    degree: "Ingeniería Industrial",
    graduationYear: 2016,
    currentRole: "Senior Product Manager",
    currentCompany: "Kavak",
    pastExperience: [
      { role: "Product Manager", company: "Nu", years: "2020-2023" },
      { role: "Associate PM", company: "Mercado Libre", years: "2017-2020" },
    ],
    linkedin: "https://linkedin.com/in/mariana-silva",
    rate: 230,
    rating: 4.9,
    totalSessions: 95,
    reviews: [
      {
        menteeName: "Camila T.",
        rating: 5,
        comment: "Mariana es la mentora que necesitaba. Estructurada, directa y con muchas referencias prácticas.",
        date: "2026-04-23",
      },
      {
        menteeName: "Sebastián R.",
        rating: 5,
        comment: "Me ayudó a preparar mi entrevista de PM en una scaleup. Pasé.",
        date: "2026-04-16",
      },
    ],
  },
  {
    id: "8",
    slug: "andres-lopez",
    name: "Andrés López",
    location: "Mérida, México",
    languages: ["Español", "Inglés"],
    headline: "Engineering Manager — Scaleups",
    bio: "Lideré equipos de hasta 25 ingenieros en startups Series B y C. Mi enfoque está en transición técnica → managerial, comunicación con stakeholders y construcción de cultura. Si vas a tu primer rol de líder, te puedo ahorrar muchos errores.",
    specialties: ["Liderazgo", "Carrera profesional"],
    yearsExperience: 13,
    university: "UADY",
    degree: "Lic. en Computación",
    graduationYear: 2012,
    currentRole: "Engineering Manager",
    currentCompany: "Stori",
    pastExperience: [
      { role: "Tech Lead", company: "Tarjeta Plata", years: "2018-2022" },
      { role: "Senior Developer", company: "Softtek", years: "2012-2018" },
    ],
    linkedin: "https://linkedin.com/in/andres-lopez",
    rate: 300,
    rating: 4.9,
    totalSessions: 118,
    reviews: [
      {
        menteeName: "Ricardo D.",
        rating: 5,
        comment: "Andrés me dio frameworks concretos para mi primer rol como TL. Vale cada peso.",
        date: "2026-04-24",
      },
      {
        menteeName: "Patricia E.",
        rating: 5,
        comment: "Excelente para conversaciones difíciles con tu equipo. Habilidades blandas reales.",
        date: "2026-04-13",
      },
    ],
  },
  {
    id: "9",
    slug: "valeria-castro",
    name: "Valeria Castro",
    location: "Tijuana, México",
    languages: ["Español", "Inglés"],
    headline: "Head of Growth en startup B2B",
    bio: "He llevado dos productos B2B de $0 a $1M ARR. Especialidad: SEO técnico, content marketing y growth loops. Te ayudo a montar tu primer funnel medible aunque no tengas equipo grande.",
    specialties: ["Marketing Digital", "Carrera profesional"],
    yearsExperience: 6,
    university: "UABC",
    degree: "Mercadotecnia",
    graduationYear: 2019,
    currentRole: "Head of Growth",
    currentCompany: "Truora",
    pastExperience: [
      { role: "Growth Marketing Manager", company: "Frubana", years: "2021-2023" },
      { role: "Marketing Specialist", company: "Beek", years: "2019-2021" },
    ],
    linkedin: "https://linkedin.com/in/valeria-castro",
    rate: 130,
    rating: 4.7,
    totalSessions: 48,
    reviews: [
      {
        menteeName: "Mauricio C.",
        rating: 5,
        comment: "Muy práctica, me ayudó a definir KPIs concretos para mi startup.",
        date: "2026-04-20",
      },
      {
        menteeName: "Renata J.",
        rating: 4,
        comment: "Buena sesión. Quizás un poco rápida pero muy completa.",
        date: "2026-04-09",
      },
    ],
  },
  {
    id: "10",
    slug: "jose-luis-ramirez",
    name: "José Luis Ramírez",
    location: "Guadalajara, México",
    languages: ["Español", "Inglés"],
    headline: "Cloud Architect — AWS & GCP",
    bio: "Arquitecto cloud con 11 años de experiencia. Certificado AWS Solutions Architect Pro y Google Cloud Professional. Diseño infraestructura para empresas que escalan rápido. Te ayudo si estás preparándote para certificaciones o liderando una migración.",
    specialties: ["DevOps / Cloud", "Backend"],
    yearsExperience: 11,
    university: "UdeG",
    degree: "Ingeniería en Telemática",
    graduationYear: 2014,
    currentRole: "Cloud Architect",
    currentCompany: "Tata Consultancy Services",
    pastExperience: [
      { role: "DevOps Lead", company: "Wizeline", years: "2018-2022" },
      { role: "Cloud Engineer", company: "IBM", years: "2014-2018" },
    ],
    linkedin: "https://linkedin.com/in/jose-luis-ramirez",
    rate: 260,
    rating: 4.8,
    totalSessions: 82,
    reviews: [
      {
        menteeName: "Erick V.",
        rating: 5,
        comment: "Pasé mi certificación AWS gracias a las sesiones con José Luis. Es el mejor.",
        date: "2026-04-22",
      },
      {
        menteeName: "Fernanda B.",
        rating: 5,
        comment: "Conoce cloud al derecho y al revés. Muy claro explicando conceptos abstractos.",
        date: "2026-04-15",
      },
    ],
  },
];

export function getMentorBySlug(slug: string): Mentor | undefined {
  return mentors.find((m) => m.slug === slug);
}

// ==========================
// Mentee actual (mock)
// ==========================

export type Session = {
  id: string;
  mentorSlug: string;
  menteeName: string;
  date: string; // ISO
  duration: number; // minutos
  topic: string;
  status: "scheduled" | "completed" | "cancelled" | "no_show";
  menteeRating?: number;
  mentorRating?: number;
};

export type CurrentMentee = {
  name: string;
  email: string;
  plan: "free" | "subscription";
  walletBalance: number; // si plan free
  sessionsRemaining: number; // si plan subscription
  sessionsTotal: number;
  rating: number;
  totalSessions: number;
  cancellationsThisMonth: number;
  upcomingSessions: Session[];
  pastSessions: Session[];
};

export const currentMentee: CurrentMentee = {
  name: "Carolina Hernández",
  email: "carolina.h@example.com",
  plan: "subscription",
  walletBalance: 0,
  sessionsRemaining: 7,
  sessionsTotal: 10,
  rating: 4.8,
  totalSessions: 12,
  cancellationsThisMonth: 1,
  upcomingSessions: [
    {
      id: "s1",
      mentorSlug: "ana-rodriguez",
      menteeName: "Carolina Hernández",
      date: "2026-05-06T16:00:00",
      duration: 60,
      topic: "Code review de mi portafolio React",
      status: "scheduled",
    },
    {
      id: "s2",
      mentorSlug: "sofia-ortega",
      menteeName: "Carolina Hernández",
      date: "2026-05-09T10:30:00",
      duration: 60,
      topic: "Feedback de mi case study UX",
      status: "scheduled",
    },
  ],
  pastSessions: [
    {
      id: "p1",
      mentorSlug: "carlos-mendoza",
      menteeName: "Carolina Hernández",
      date: "2026-04-28T18:00:00",
      duration: 60,
      topic: "Arquitectura de API REST con Node",
      status: "completed",
      menteeRating: 5,
      mentorRating: 5,
    },
    {
      id: "p2",
      mentorSlug: "lucia-vargas",
      menteeName: "Carolina Hernández",
      date: "2026-04-22T17:00:00",
      duration: 60,
      topic: "Primer modelo de ML — fundamentos",
      status: "completed",
      menteeRating: 5,
      mentorRating: 4,
    },
    {
      id: "p3",
      mentorSlug: "ana-rodriguez",
      menteeName: "Carolina Hernández",
      date: "2026-04-15T16:00:00",
      duration: 60,
      topic: "Mejores prácticas de hooks en React",
      status: "completed",
      menteeRating: 5,
      mentorRating: 5,
    },
    {
      id: "p4",
      mentorSlug: "valeria-castro",
      menteeName: "Carolina Hernández",
      date: "2026-04-08T15:30:00",
      duration: 60,
      topic: "Estrategia de growth para mi proyecto",
      status: "completed",
      menteeRating: 4,
      mentorRating: 5,
    },
  ],
};

// ==========================
// Mentor actual (mock)
// ==========================

export type CurrentMentor = {
  slug: string; // apunta a uno de los mentores del catálogo
  monthlyEarnings: number;
  monthlySessions: number;
  pendingPayout: number;
  totalEarnings: number;
  upcomingSessions: Session[];
  recentReviews: { menteeName: string; rating: number; comment: string; date: string }[];
};

export const currentMentor: CurrentMentor = {
  slug: "ana-rodriguez", // El mentor logueado es Ana
  monthlyEarnings: 4800,
  monthlySessions: 24,
  pendingPayout: 3840, // 4800 - 20% comisión
  totalEarnings: 17400,
  upcomingSessions: [
    {
      id: "ms1",
      mentorSlug: "ana-rodriguez",
      menteeName: "Carolina Hernández",
      date: "2026-05-06T16:00:00",
      duration: 60,
      topic: "Code review de mi portafolio React",
      status: "scheduled",
    },
    {
      id: "ms2",
      mentorSlug: "ana-rodriguez",
      menteeName: "Pablo Sánchez",
      date: "2026-05-07T11:00:00",
      duration: 60,
      topic: "Migración de class components a hooks",
      status: "scheduled",
    },
    {
      id: "ms3",
      mentorSlug: "ana-rodriguez",
      menteeName: "Sofía Reyes",
      date: "2026-05-08T19:00:00",
      duration: 60,
      topic: "Performance en aplicaciones Next.js",
      status: "scheduled",
    },
  ],
  recentReviews: [
    {
      menteeName: "Carlos M.",
      rating: 5,
      comment: "Excelente mentora. Me ayudó a entender React en profundidad y a estructurar mi portafolio.",
      date: "2026-04-15",
    },
    {
      menteeName: "Laura P.",
      rating: 5,
      comment: "Muy clara explicando conceptos avanzados.",
      date: "2026-04-10",
    },
  ],
};
