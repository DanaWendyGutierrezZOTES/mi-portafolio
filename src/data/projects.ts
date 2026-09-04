import type { Project } from '../types/project';

export const projects: Project[] = [
  // ==========================================
  // PROYECTOS DE MATERIAS (3 PROYECTOS ACADÉMICOS)
  // ==========================================
  {
    id: "materia-db-hospital",
    title: "Sistema Hospitalario Transaccional con ACID",
    shortDescription: "Diseño e implementación de un sistema de historias clínicas y turnos con alta concurrencia y aislamiento transaccional.",
    fullDescription: "Proyecto desarrollado para la asignatura de Bases de Datos en UNIFRANZ. Se diseñó el esquema relacional normalizado hasta 3FN, implementando procedimientos almacenados, triggers de auditoría y control de transacciones concurrentes con bloqueos para evitar sobreturnos.",
    category: "materia",
    featured: true,
    academicMeta: {
      subject: "Bases de Datos",
      code: "SIS-301",
      semester: "5to Semestre",
      professorOrTeam: "UNIFRANZ / Equipo de 3 integrantes",
      institution: "Universidad Privada Franz Tamayo (UNIFRANZ)",
      grade: "100 / 100",
      reportUrl: "#"
    },
    tags: ["PostgreSQL", "Node.js", "Express", "Docker", "SQL Transaccional", "TypeScript"],
    highlights: [
      "Diseño de esquema relacional con más de 20 tablas normalizadas en 3FN.",
      "Control de transacciones ACID y niveles de aislamiento para integridad de datos.",
      "Optimización de consultas complejas con índices B-Tree."
    ],
    learningOutcomes: [
      "Dominio de planes de ejecución SQL y diseño de bases de datos robustas.",
      "Trabajo colaborativo y metodologías ágiles en proyectos universitarios."
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2026-05"
  },
  {
    id: "materia-so-cpu-scheduler",
    title: "Simulador Visual de Planificación de CPU",
    shortDescription: "Simulador interactivo de algoritmos de scheduling de procesos de sistemas operativos con diagrama de Gantt en tiempo real.",
    fullDescription: "Proyecto desarrollado para la materia de Sistemas Operativos en UNIFRANZ. Implementa y compara de forma gráfica los algoritmos de planificación de CPU: FCFS, SJF, Round Robin y Prioridades con prevención de inanición.",
    category: "materia",
    featured: true,
    academicMeta: {
      subject: "Sistemas Operativos",
      code: "SIS-204",
      semester: "4to Semestre",
      professorOrTeam: "UNIFRANZ / Proyecto Individual",
      institution: "Universidad Privada Franz Tamayo (UNIFRANZ)",
      grade: "98 / 100",
      reportUrl: "#"
    },
    tags: ["JavaScript", "HTML5 Canvas", "Algoritmos", "Sistemas Operativos", "CSS Grid"],
    highlights: [
      "Simulación visual de ráfagas de CPU e I/O de procesos en tiempo real.",
      "Cálculo automático de tiempo de espera medio, tiempo de retorno y throughput.",
      "Generación interactiva de diagramas de Gantt."
    ],
    learningOutcomes: [
      "Comprensión de colas de procesos (Ready, Running, Blocked) y gestión de recursos.",
      "Modelado de algoritmos de concurrencia y prevención de bloqueos."
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2025-11"
  },
  {
    id: "materia-eda-dijkstra-router",
    title: "Optimizador de Rutas y Redes con Grafos",
    shortDescription: "Motor de cálculo de rutas óptimas y flujo en redes de transporte usando algoritmos de Dijkstra y Bellman-Ford.",
    fullDescription: "Proyecto desarrollado para Estructuras de Datos y Algoritmos en UNIFRANZ. Implementación de representaciones de grafos con listas de adyacencia, colas de prioridad y caminos mínimos ponderados.",
    category: "materia",
    featured: false,
    academicMeta: {
      subject: "Estructuras de Datos & Algoritmos",
      code: "SIS-201",
      semester: "3er Semestre",
      professorOrTeam: "UNIFRANZ / Parejas",
      institution: "Universidad Privada Franz Tamayo (UNIFRANZ)",
      grade: "100 / 100",
      reportUrl: "#"
    },
    tags: ["Java", "Algoritmos", "Grafos", "Estructuras de Datos", "POO"],
    highlights: [
      "Implementación de grafo dirigido ponderado con lista de adyacencia genérica.",
      "Dijkstra optimizado con colas de prioridad para menor complejidad temporal.",
      "Pruebas unitarias para validar casos con grafos disconexos y cíclicos."
    ],
    learningOutcomes: [
      "Análisis de complejidad asintótica Big-O.",
      "Programación orientada a objetos avanzada y tipos genéricos en Java."
    ],
    githubUrl: "https://github.com",
    liveUrl: "#",
    date: "2025-05"
  },

  // ==========================================
  // APLICACIÓN CREADA (1 PROYECTO PERSONAL)
  // ==========================================
  {
    id: "personal-devnotes-ai",
    title: "DevNotes AI - Gestor Inteligente de Notas & Código",
    shortDescription: "Aplicación web moderna con editor Markdown en vivo, resaltado de sintaxis y búsqueda semántica de fragmentos de código.",
    fullDescription: "Aplicación web creada de forma autónoma para organizar apuntes de clases, fragmentos de código reutilizables y consultas rápidas con IA integrada.",
    category: "personal",
    featured: true,
    personalMeta: {
      status: "Completado",
      motivation: "Centralizar todos mis apuntes de estudio y código de las materias en una plataforma rápida y accesible."
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "Astro", "Supabase", "REST API"],
    highlights: [
      "Editor Markdown con vista previa en tiempo real y soporte para bloques de código.",
      "Búsqueda instantánea y organización por materias y categorías.",
      "Diseño responsivo optimizado para móviles y computadoras."
    ],
    learningOutcomes: [
      "Desarrollo frontend moderno con componentes reutilizables en React y Astro.",
      "Manejo de estado, APIs REST e integración de bases de datos en la nube."
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    date: "2026-02"
  }
];
