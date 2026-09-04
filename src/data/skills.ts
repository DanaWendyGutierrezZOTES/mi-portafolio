import type { SkillCategory } from '../types/project';

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes de Programación",
    icon: "code",
    skills: [
      { name: "TypeScript", level: "Avanzado", featured: true },
      { name: "JavaScript (ES6+)", level: "Avanzado", featured: true },
      { name: "Python", level: "Avanzado", featured: true },
      { name: "Java", level: "Intermedio", featured: true },
      { name: "C / C++", level: "Intermedio", featured: false },
      { name: "SQL (PostgreSQL / MySQL)", level: "Avanzado", featured: true }
    ]
  },
  {
    title: "Frontend & UI",
    icon: "layout",
    skills: [
      { name: "Astro", level: "Avanzado", featured: true },
      { name: "React / Next.js", level: "Avanzado", featured: true },
      { name: "Tailwind CSS", level: "Avanzado", featured: true },
      { name: "HTML5 / Semantic Web", level: "Avanzado", featured: false },
      { name: "CSS3 / Flex & Grid", level: "Avanzado", featured: false },
      { name: "Vite", level: "Intermedio", featured: false }
    ]
  },
  {
    title: "Backend & Bases de Datos",
    icon: "server",
    skills: [
      { name: "Node.js / Express", level: "Avanzado", featured: true },
      { name: "FastAPI (Python)", level: "Intermedio", featured: true },
      { name: "PostgreSQL", level: "Avanzado", featured: true },
      { name: "MongoDB", level: "Intermedio", featured: false },
      { name: "Redis", level: "Intermedio", featured: false },
      { name: "REST APIs & JSON", level: "Avanzado", featured: true }
    ]
  },
  {
    title: "Fundamentos de Ciencias de la Computación (Materias)",
    icon: "book-open",
    skills: [
      { name: "Estructuras de Datos & Algoritmos", level: "Avanzado", featured: true },
      { name: "Patrones de Diseño (GoF)", level: "Avanzado", featured: true },
      { name: "Modelado Relacional & Normalización (3FN)", level: "Avanzado", featured: true },
      { name: "Análisis de Complejidad (Big O)", level: "Avanzado", featured: false },
      { name: "Arquitectura en Capas / Clean Architecture", level: "Intermedio", featured: true },
      { name: "Sistemas Operativos & Concurrencia", level: "Intermedio", featured: false }
    ]
  },
  {
    title: "Herramientas & DevOps",
    icon: "terminal",
    skills: [
      { name: "Git & GitHub", level: "Avanzado", featured: true },
      { name: "Docker", level: "Intermedio", featured: true },
      { name: "Linux / Bash", level: "Intermedio", featured: false },
      { name: "Postman", level: "Avanzado", featured: false },
      { name: "Figma (UI Design)", level: "Intermedio", featured: false },
      { name: "VS Code", level: "Avanzado", featured: false }
    ]
  }
];
