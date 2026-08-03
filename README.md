# React & Next.js Projects

A collection of small React and Next.js practice projects, each exploring different UI patterns and state management approaches.

## Projects

| Project | Description |
|---|---|
| [project-01-real-estate-app](./project-01-real-estate-app/README.md) | A rental property listings app — displays property cards with type, price, availability, and key attributes. |
| [project-02-todo-app](./project-02-todo-app/README.md) | A to-do list app with task priorities, sorting, filtering, and persistent storage via `localStorage`. |
| [project-03-driving-test-app](./project-03-driving-test-app/README.md) | A driving theory quiz app supporting text/image/video questions, a countdown timer, and answer feedback. |
| [project-04-portfolio-website](./project-04-portfolio-website/README.md) | A personal portfolio site with a filterable project gallery, testimonials carousel, and light/dark theme toggle. |
| [project-05-card-flip-game](./project-05-card-flip-game/README.md) | A memory-matching card flip game with adjustable grid sizes, move/match tracking, and sound effects. |
| [project-06-weather-app](./project-06-weather-app/README.md) | A weather app with city search, current conditions, hourly forecast, and a 6-day outlook, powered by the Open-Meteo API. |
| [project-07-story-collection-app](./project-07-story-collection-app/README.md) | A bilingual (EN/FR) children's story collection app with a story list and detail view, backed by Supabase. |

Each project has its own README with setup instructions, project structure, and implementation notes.

## Stack

- [React 19](https://react.dev/) — all projects
- [Vite](https://vitejs.dev/) — build tool and dev server for all projects
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling, used from project-04 onward (projects 01–03 use plain CSS)
- [React Router](https://reactrouter.com/) — client-side routing (project-07)
- [Supabase](https://supabase.com/) — backend/database (project-07)
- ESLint — linting across all projects

Next.js projects may be added to this repo over time.

## Getting Started

Each project is self-contained. To run one locally:

```bash
cd <project-folder>
npm install
npm run dev
```

See the individual project README for details specific to that app.