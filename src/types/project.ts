export type ProjectCategory = 'materia' | 'personal';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  featured?: boolean;
  
  // Metadatos específicos para proyectos de materias
  academicMeta?: {
    subject: string;         // Ej: "Bases de Datos Avanzadas"
    code?: string;           // Ej: "INF-301"
    semester: string;        // Ej: "5to Semestre - 2025"
    professorOrTeam?: string;// Ej: "Prof. Dr. Gómez / Equipo de 3 integrantes"
    institution?: string;    // Ej: "Universidad Nacional"
    grade?: string;          // Ej: "10/10 - Proyecto Destacado"
    reportUrl?: string;      // Enlace a PDF de informe o presentación
  };

  // Metadatos específicos para proyectos personales
  personalMeta?: {
    status: 'Completado' | 'En Desarrollo' | 'Mantenimiento';
    motivation?: string;     // ¿Por qué nació el proyecto?
  };

  tags: string[];            // Ej: ["React", "Node.js", "PostgreSQL"]
  highlights: string[];      // Puntos clave / logros técnicos conseguidos
  learningOutcomes?: string[]; // Aprendizajes obtenidos (muy valorado en proyectos de materias)
  githubUrl?: string;
  liveUrl?: string;
  demoVideoUrl?: string;
  image?: string;
  date: string;              // "2025-06" o "2024"
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: 'Básico' | 'Intermedio' | 'Avanzado';
    iconName?: string;
    featured?: boolean;
  }[];
}

export interface ProfileData {
  name: string;
  title: string;
  academicTitle: string;
  institution: string;
  currentSemester: string;
  location: string;
  bio: string;
  shortBio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  cvUrl?: string;
  availableForWork: boolean;
  stats: {
    academicProjectsCount: number;
    personalProjectsCount: number;
    subjectsPassed: number;
    technologiesCount: number;
  };
}
