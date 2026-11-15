# Starfleet — Diario de exploración

Aplicación individual desarrollada en React para el TP2 de Desarrollo Front End (IFTS 29). Retoma la estructura de portada, perfil y bitácora del TP1 y la transforma en una interfaz inspirada en los paneles de navegación de Star Trek.

## Índice
- [Demo](#demo)
- [Secciones](#secciones)
- [Tecnologías](#tecnologías)
- [Ejecución local](#ejecución-local)
- [Integrante](#integrante)
- [Uso de IA](#uso-de-ia)
- [Estructura](#estructura)

## Demo
[Deploy](https://api.le-systeme-solaire.net/)

## Secciones
- Puente: presentación del proyecto y accesos internos.
- Oficial: perfil individual con paneles interactivos.
- Archivo estelar: 24 registros en JSON local, búsqueda, filtro por facción y fichas desplegables.
- Exploración: consulta a la API pública del sistema solar, con estados de carga, error y reintento.
- Sistema: árbol interactivo de componentes React.
- Bitácora: registros desplegables y filtro por categoría.

## Tecnologías
React, Vite, React Router, JavaScript, CSS, JSON local y API pública [Le Système Solaire](https://api.le-systeme-solaire.net/).

## Ejecución local
Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Para comprobar la compilación:

```bash
npm run build
npm run preview
```

## Integrante
| Nombre | GitHub | Responsabilidad |
|---|---|---|
| Sol Diessler | [@soldiessler](https://github.com/soldiessler) | Diseño visual, estructura React, componentes, datos, navegación, integración de API, pruebas y documentación. |

Repositorio TP1 de referencia: https://front-tp1-tau.vercel.app/

## Uso de IA
| Integrante | Aplicación | Modelo | Uso |
|---|---|---|---|
| Sol Diessler | ChatGPT | GPT-6 | Generación inicial de componentes React y organización del JSON. |

La implementación y los datos deben revisarse y probarse antes de la entrega final. La declaración describe la asistencia utilizada para crear esta versión; actualizar si se incorporan otras herramientas o modelos.

## Estructura
```text
src/
├── components/
│   ├── Layout.jsx
│   ├── SectionTitle.jsx
│   └── Sidebar.jsx
├── data/
│   ├── logbook.js
│   └── ships.json
├── pages/
│   ├── Archive.jsx
│   ├── Exploration.jsx
│   ├── Home.jsx
│   ├── Logbook.jsx
│   ├── Profile.jsx
│   └── Tree.jsx
├── App.jsx
├── main.jsx
└── styles.css
```
