# React Story Collection App (StoryTime)

A bilingual (English/French) children's story collection app built with React, React Router, and Supabase — browse classic fables and fairy tales and read them in either language.

## Features

- Story list page showing cards for each story (title, author, content preview) fetched live from Supabase
- Story detail page with a full-width themed background, drop-cap first letter, and story text, keyed by URL slug (`/story/:slug`)
- Language toggle (English / French) that re-fetches story content in the selected language and translates all UI text
- Color-coded story cards/detail pages — each story slug maps to its own gradient theme
- Loading screen shown while story data is being fetched
- Custom 404 page for unmatched routes
- Client-side routing via React Router (list, detail, catch-all)

## Tech Stack

- [React 19](https://react.dev/)
- [React Router 7](https://reactrouter.com/) — client-side routing
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [Supabase](https://supabase.com/) — Postgres database and JS client for story storage/retrieval
- [lucide-react](https://lucide.dev/) — icons
- ESLint for code linting

## Project Structure

```
src/
├── App.jsx                              # Router setup: list, detail, and catch-all routes; wraps app in LanguageProvider
├── context/
│   └── LanguageContext.jsx               # Language state + translation strings (en/fr) and translate() helper
├── services/
│   └── supabase.js                       # Supabase client, initialized from env vars
├── components/
│   ├── Header.jsx                        # Site title/logo and language toggle
│   ├── Footer.jsx                        # Footer with copyright and tagline
│   ├── LanguageToggle.jsx                 # EN/FR switch buttons
│   ├── LoadingScreen.jsx                  # Spinner + message shown while data loads
│   └── StoryCard.jsx                     # Story preview card (used on the list page)
├── pages/
│   ├── StoryList.jsx                     # Fetches and displays all stories for the current language
│   ├── StoryDetail.jsx                   # Fetches and displays a single story by slug + language
│   └── NotFound.jsx                       # 404 page
├── tests/
│   └── LanguageTest.jsx                   # Manual test component for LanguageContext (not currently rendered)
└── sql/
    ├── create_table/
    │   └── stories.sql                    # Seed insert: creates a row per story/language with placeholder content
    └── story_content/
        └── *.sql                          # One file per story, updating the placeholder content with the real text
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm
- A [Supabase](https://supabase.com/) project with a `stories` table (see **Database Setup** below)

### Environment Variables

Create a `.env` file in the project root with your Supabase project credentials:

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

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

## Database Setup

The `stories` table expects at least these columns: `slug`, `language`, `title`, `author`, `content`. To seed it:

1. Run `src/sql/create_table/stories.sql` to insert one placeholder row per story per language.
2. Run each file in `src/sql/story_content/` to fill in the real story text for that title.

> **Heads up:** the seed insert in `stories.sql` currently creates `en`/`es` rows, but the content-update scripts in `story_content/` target `en`/`fr` rows. Since the app's `LanguageContext` only supports `en` and `fr`, you'll want to align these — either insert `fr` placeholder rows instead of `es`, or update the content scripts to match whichever language codes you seed.

## How It Works

- `LanguageContext` holds the current language (`en` or `fr`) and a `translate(key)` function that looks up UI strings from an in-memory dictionary; switching languages also changes which rows are queried from Supabase.
- `StoryList` queries `stories` filtered by the current `language`, ordered by `id`, and renders a `StoryCard` per result.
- `StoryDetail` reads the `slug` from the URL, queries `stories` filtered by both `slug` and `language`, and shows a "not found" state if no matching row exists.
- Both pages show `LoadingScreen` while their Supabase query is in flight.

## Notes

- The `.env` file isn't listed in `.gitignore` — worth adding `.env` there before pushing to a public repo, even though the anon key is meant to be exposed client-side (Supabase access should still be locked down with Row Level Security policies on the `stories` table).
- `src/services/supabase.js` has an unused `import { meta } from "@eslint/js"` left over from earlier editing — safe to remove.
- `LanguageTest.jsx` is imported in `App.jsx` but never rendered — either wire it up somewhere for manual testing or remove the import.
- A couple of leftover `console.log` calls remain in `StoryDetail.jsx` (logging the slug and loaded data) — fine for development, worth trimming before a production build.