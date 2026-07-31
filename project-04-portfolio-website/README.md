# React Portfolio Website

A personal portfolio site built with React, Vite, and Tailwind CSS, featuring a filterable project gallery, a testimonials carousel, and a light/dark theme toggle.

## Features

- Single-page layout with smooth-scrolling sections: Hero, Projects, Skills & Experience, Recommendations, and Contact
- Light/dark theme toggle backed by React Context and a custom `useTheme` hook, with the choice persisted in `localStorage`
- Responsive navbar with a collapsible mobile menu and in-page anchor links
- Fixed scroll-dots navigation for quickly jumping between sections
- Filterable project gallery — buttons generated from each project's `type`, with an "All" option
- Skills grid (React, Tailwind, Node.js, PostgreSQL, Git, etc.) built with `react-icons`
- Timeline-style experience list with title, company, location, period, and type
- Testimonials carousel with previous/next arrow navigation and a row of company logos
- Contact section with a static form (name, email, message) — not yet wired to a submission handler

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [lucide-react](https://lucide.dev/) — icons (sun/moon, menu, arrows)
- [react-icons](https://react-icons.github.io/react-icons/) — skill and tech logos (`fa`, `si` sets)
- ESLint for code linting

## Project Structure

```
src/
├── App.jsx                                # Root component; wraps the page in ThemeProvider
├── context/
│   ├── ThemeContext.js                    # Theme context definition
│   ├── ThemeProvider.jsx                  # Holds theme state, syncs with localStorage and <html> class
│   └── useTheme.js                        # Hook for consuming ThemeContext
├── data/
│   ├── projects.js                        # Project cards: image, title, description, type
│   ├── experiences.js                     # Work/volunteer experience entries
│   ├── testimonials.js                    # Testimonial quotes, author, position, company
│   └── companyLogos.js                    # Logo image paths for the recommendations section
└── components/
    ├── Navbar/                            # Fixed top navbar with theme toggle and mobile menu
    ├── ScrollDots/                        # Fixed side dots linking to each section
    ├── Hero/                              # Intro section with photo and call-to-action links
    ├── ProjectsSection/
    │   ├── index.jsx                       # Filter buttons + project grid
    │   └── ProjectCard.jsx                 # Single project card
    ├── SkillsExperienceSection/
    │   ├── index.jsx                       # Two-column skills/experience layout
    │   ├── SkillCard.jsx                   # Single skill icon + label
    │   └── ExperienceItem.jsx              # Single timeline entry
    ├── RecommendationSection/
    │   ├── index.jsx                       # Carousel state + layout
    │   ├── TestimonialCard.jsx             # Current testimonial display
    │   ├── ArrowNavigation.jsx             # Prev/next buttons
    │   └── CompanyLogo.jsx                 # Single company logo
    ├── ContactSection/                    # Contact info and static form
    └── Footer/                            # Footer nav links and copyright
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the local dev server with hot module reloading:

```bash
npm run dev
```

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Check code quality with ESLint:

```bash
npm run lint
```

## How It Works

- `ThemeProvider` reads the saved theme from `localStorage` (defaulting to `"light"`), applies it as a class on `<html>`, and exposes `theme`/`toggleTheme` through context. `useTheme` is a thin wrapper around `useContext` for consuming it anywhere.
- The projects grid derives its filter buttons from the unique `type` values in `data/projects.js`, plus an "All" option, and filters the displayed cards based on the selected type.
- The recommendations carousel keeps an index into `data/testimonials.js`; the arrow buttons increment/decrement it (wrapping around at the start/end).

## Data

Content is static and lives under `src/data/`:

| File | Description |
|---|---|
| `projects.js` | Each project's image, title, description, and category (`type`) |
| `experiences.js` | Work/volunteer history: title, company, location, period, type |
| `testimonials.js` | Testimonial text, author name, position, and company |
| `companyLogos.js` | Paths to company logo images shown below the testimonials |

## Notes

- Images referenced by the data files live under `public/images/` (`hero/`, `projects/`, `logos/`, `testimonials/`) — add new assets there and update the corresponding data file.
- The contact form is currently UI-only; hook up a submit handler (e.g. an email service or backend endpoint) before relying on it to capture messages.
