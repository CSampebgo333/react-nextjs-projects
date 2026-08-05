# React Kanban Board App

A drag-and-drop Kanban board built with React, Tailwind CSS, and `@hello-pangea/dnd`, with fully editable columns/tasks and state persisted to `localStorage`.

## Features

- Multiple columns (default: To Do, In Progress, Done), each addable, deletable, and renamable inline
- Tasks addable, deletable, and editable inline via a textarea (click a task to edit, Ctrl+Enter to save, Escape to discard)
- Drag-and-drop reordering of tasks within a column and between columns, powered by `@hello-pangea/dnd`
- Live task/column counts and drag-over highlighting on the target column
- Light/dark theme toggle, defaulting to the system preference and persisted in `localStorage`
- Board state (columns, tasks, and titles) persisted to `localStorage`, so the board survives a page refresh
- Custom thin-scrollbar styling for column task lists and the horizontally-scrolling board

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) — drag-and-drop (maintained fork of `react-beautiful-dnd`)
- [lucide-react](https://lucide.dev/) — icons
- ESLint for code linting

## Project Structure

```
src/
├── App.jsx                          # Root component; renders the board and the theme toggle
└── components/
    ├── KanbanBoard.jsx               # Owns column/task state, localStorage sync, and drag-end logic
    ├── KanbanColumn.jsx               # A single column: editable title, task list, add/delete controls
    ├── KanbanTask.jsx                 # Draggable task wrapper; toggles between viewer and editor
    ├── KanbanTaskViewer.jsx           # Read-only task display with delete button and created-at date
    ├── KanbanTaskEditor.jsx           # Inline textarea for editing a task's content
    ├── ThemeToggle.jsx                # Fixed light/dark mode toggle button
    └── ui/
        └── Button.jsx                 # Shared button primitive used throughout the board
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

The dev server runs on port `3017` (configured in `vite.config.js`).

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

- `KanbanBoard` initializes `columns` state from `localStorage` (key `clement-kanban-board-columns`) if present, falling back to a set of default columns/tasks; every change to `columns` is written back to `localStorage` via a `useEffect`.
- Drag-and-drop is handled by wrapping the board in `DragDropContext`, each column in a `Droppable`, and each task in a `Draggable`. `handleDragEnd` reads the drag `result` and reorders tasks within a column or moves them between columns by splicing the relevant arrays.
- Column and task edits (title/content) are handled with local component state (`tempTitle` / `tempTaskContent`) that's committed back up to `KanbanBoard` on blur, Enter/Ctrl+Enter, or discarded on Escape.
- `ThemeToggle` reads a stored theme preference (or the OS preference as a fallback), toggles a `dark` class on `<html>`, and Tailwind's `darkMode: "class"` config (in `tailwind.config.js`) drives all the `dark:` variant styling.

## Notes

- Because board state is only in `localStorage`, it's local to one browser and will be lost if storage is cleared — there's no backend/sync yet.
- The `localStorage` key `clement-kanban-board-columns` is hardcoded with a personal prefix; consider making it more generic (e.g. `kanban-board-columns`) if this project is shared or reused as a template.
- `ThemeToggle`'s `aria-label` has a small typo (`"Thoggle Theme"` instead of `"Toggle Theme"`) — worth a quick fix for accessibility tooling.
- One of the default mock tasks references a "focus mode" feature in its placeholder text, but no such feature exists in the current code — likely leftover from planning and safe to reword or remove.