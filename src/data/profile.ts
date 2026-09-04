import type { ProfileData } from '../types/project';
import profileJson from './profile.json';

export const profile: ProfileData = profileJson;

export const academicTimeline = [
  {
    year: "2026 - Presente",
    title: "Bases de Datos & Desarrollo Web",
    subtitle: "5to Semestre - Universidad Privada Franz Tamayo (UNIFRANZ)",
    description: "Modelado relacional y consultas SQL complejas, desarrollo de aplicaciones web interactivas y arquitectura cliente-servidor.",
    badge: "En curso",
    type: "academic"
  },
  {
    year: "2025",
    title: "Estructuras de Datos & Sistemas Operativos",
    subtitle: "3er - 4to Semestre - UNIFRANZ",
    description: "Algoritmos de ordenamiento y búsqueda, manejo de memoria, listas, árboles, grafos y gestión de procesos en sistemas operativos.",
    badge: "Completado",
    type: "academic"
  },
  {
    year: "2024",
    title: "Programación Orientada a Objetos & Lógica de Algoritmos",
    subtitle: "1er - 2do Semestre - UNIFRANZ",
    description: "Fundamentos de programación, POO (herencia, polimorfismo, encapsulamiento), lógica algorítmica y estructuras de control.",
    badge: "Completado",
    type: "academic"
  }
];
