# React To-Do List

A React + Vite to-do list application with task priorities, filtering, sorting, and persistent storage via the browser's `localStorage`.

## Features

- Add, edit, complete, and delete tasks
- Assign a priority level to each task
- Sort tasks by priority
- Filter view to show only incomplete tasks
- Tasks persist across page reloads using `localStorage`
- State managed with `useReducer` for predictable updates

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [immer](https://immerjs.github.io/immer/) — simplified immutable state updates
- [lucide-react](https://lucide.dev/) — icons (e.g. sort icon)
- ESLint for code linting

## Project Structure

```
src/
├── App.jsx                     # Root component; holds task state via useReducer
├── reducers/
│   └── taskReducer.js          # Reducer handling ADD, DELETE, TOGGLE_DONE, UPDATE_TASK, SORT
├── utils/
│   └── localStorageUtils.js    # Read/write tasks to localStorage, seeds default tasks
└── components/
    ├── TaskForm.jsx             # Form for adding a new task
    ├── TaskOrganizer.jsx        # Filter toggle + sort button
    ├── TaskList.jsx             # Renders the list of tasks
    ├── TaskItem.jsx             # A single task row (toggle/edit/delete)
    └── TaskEditForm.jsx         # Inline form for editing an existing task
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

- Task state is a list of `{ id, text, priority, done }` objects, managed by `taskReducer`.
- On first load, if no tasks exist in `localStorage`, a set of default sample tasks is created automatically.
- Every state change (add, delete, toggle, update, sort) is immediately persisted back to `localStorage`.
- The "Show only incomplete tasks" checkbox filters the rendered list without mutating the underlying task data.
- Clicking the sort icon reorders tasks by ascending priority.

## Notes

Since data is stored in `localStorage`, tasks are local to a single browser and will be lost if browser storage is cleared.
