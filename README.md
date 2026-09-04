# 🚀 Portafolio en Astro (Proyectos de Materias & Proyectos Personales)

Un sitio web de portafolio moderno, modular y ultrarrápido creado con **Astro**, **Tailwind CSS** y **TypeScript**, diseñado específicamente para estudiantes y profesionales que desean exhibir tanto su formación y proyectos de asignaturas universitarias como sus desarrollos personales y open source.

---

## ✨ Características Principales

- **Diferenciación Visual & Metadatos**:
  - 📚 **Proyectos de Materias**: Asignatura, semestre, docente/equipo, retos técnicos y aprendizajes adquiridos.
  - 🚀 **Proyectos Personales**: Motivación, estado, stack y enlaces directos a código/demo.
- **Filtrado Dinámico en Tiempo Real**:
  - Pestañas por categoría (*Todos*, *Materias Universitarias*, *Proyectos Personales*).
  - Buscador instantáneo por título, materia o tecnología.
  - Filtro interactivo por etiquetas de stack tecnológico (*PostgreSQL, React, Python, Java, Docker, Astro, etc.*).
- **Ficha Técnica / Modal Detallado**:
  - Vista ampliada interactiva para cada proyecto con objetivos, arquitectura y lecciones aprendidas.
- **Secciones Integradas**:
  - Hero profesional con métricas de carrera.
  - Estadísticas de materias y proyectos.
  - Grid de habilidades (*Lenguajes, Frontend, Backend, Fundamentos CS, Herramientas*).
  - Línea de tiempo académica.
  - Sobre mí y formulario de contacto / redes.
- **Rendimiento Máximo**:
  - Generación estática con Astro y modo oscuro elegante (*Dark-first*).

---

## 🛠️ Cómo Ejecutar el Proyecto

### 1. Iniciar el Servidor de Desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL: `http://localhost:4321`

### 2. Compilar para Producción
```bash
npm run build
```

### 3. Previsualizar la Compilación de Producción
```bash
npm run preview
```

---

## 📝 Cómo Personalizar tus Datos y Agregar Proyectos

Toda la información del portafolio se encuentra centralizada en la carpeta `src/data/`:

### 1. Editar Perfil Personal (`src/data/profile.ts`)
Modifica tu nombre, carrera, institución, biografía, redes sociales (GitHub, LinkedIn, Email) y la línea de tiempo académica.

### 2. Agregar o Modificar Proyectos (`src/data/projects.ts`)
Para agregar un nuevo proyecto de materia o personal, simplemente agrega un objeto a la lista `projects`:

```typescript
// Ejemplo de Proyecto de Materia:
{
  id: "materia-mi-asignatura",
  title: "Nombre del Proyecto",
  shortDescription: "Resumen breve para la tarjeta",
  fullDescription: "Explicación detallada de la solución...",
  category: "materia", // 'materia' o 'personal'
  academicMeta: {
    subject: "Inteligencia Artificial",
    code: "IA-501",
    semester: "6to Semestre (2025)",
    professorOrTeam: "Dra. Ramos / Parejas",
    grade: "10 / 10"
  },
  tags: ["Python", "PyTorch", "FastAPI"],
  highlights: [
    "Logro técnico 1",
    "Logro técnico 2"
  ],
  learningOutcomes: [
    "Aprendizaje clave de la materia 1"
  ],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  date: "2025-10"
}
```

### 3. Habilidades Técnicas (`src/data/skills.ts`)
Agrega o reorganiza tus tecnologías dominadas por categorías (Lenguajes, Frontend, Backend, CS Fundamentals, DevOps).
