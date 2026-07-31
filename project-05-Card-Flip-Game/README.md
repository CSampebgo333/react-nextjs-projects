# Memory Match Mania (Card Flip Game)

A React + Vite memory-matching game where players flip cards to find matching emoji pairs, with adjustable grid sizes, move/match tracking, and sound effects.

## Features

- Classic memory-match gameplay: flip two cards, keep them if they match, flip them back if they don't
- Adjustable grid size (4x4, 6x6, or 8x8) via a settings dropdown, which regenerates a new shuffled deck
- Emoji icon deck randomly selected from a fixed set and shuffled with a Fisher-Yates shuffle
- Move counter and match counter (e.g. `Matches: 3/8`) displayed on a scoreboard
- Flip and win sound effects, with flip playback throttled so rapid clicks don't overlap
- Animated "You Win" overlay shown once all pairs are matched
- Reset button to restart the current grid size at any time
- Card flip state managed imperatively per card (`forwardRef` + `useImperativeHandle`) instead of lifting every card's flipped state into the parent
- Built-in debug panel for logging the current deck/state and manually bumping moves or matches during development

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- ESLint for code linting

## Project Structure

```
src/
├── App.jsx                      # Root component; owns grid size, deck, moves, and matches state
├── components/
│   ├── Settings.jsx             # Grid size selector (4x4 / 6x6 / 8x8)
│   ├── ScoreBoard.jsx           # Displays move count and matches out of total pairs
│   ├── ResetButton.jsx          # Restarts the game at the current grid size
│   ├── GameBoard.jsx            # Renders the card grid; holds the match-checking logic
│   ├── Card.jsx                 # A single flippable card (front/back, 3D flip animation)
│   ├── Graffiti.jsx             # "You Win" celebration overlay
│   └── TempComponent.jsx        # Dev-only debug panel (log deck/state, manual +1 buttons)
└── utils/
    ├── generateIcons.js         # Picks N random emoji icons from a predefined set
    ├── shuffleDeck.js           # Fisher-Yates shuffle for randomizing the deck
    └── playFlipSoundOnce.js     # Plays the flip sound, throttled via requestAnimationFrame
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

- On mount (and whenever the grid size changes), `App` builds a new deck: it generates `gridSize² / 2` random icons, duplicates the list to create pairs, and shuffles it with `shuffleDeck`.
- `GameBoard` keeps refs to the first and second flipped cards and a `lockBoard` ref to prevent extra clicks while a comparison is in progress.
- Clicking a card flips it via its imperative `flip()` method. Once two cards are flipped, their icons are compared:
  - **Match:** both refs are cleared, the board unlocks immediately, and `matches` increments (playing the win sound once all pairs are found).
  - **No match:** after a short delay, both cards are flipped back and the board unlocks.
- The `Graffiti` win overlay renders once `matches` equals half the deck length (i.e. every pair has been found).

## Notes

- Sound files are expected at `public/sounds/flip.wav` and `public/sounds/win.mp3`. The uploaded `public/sounds/` folder also contains macOS AppleDouble artifacts (`._flip.wav`, `._win.mp3`) that can be safely deleted — they're metadata files, not audio.
- `TempComponent` is a leftover development tool (deck/state logging, manual move/match buttons) rendered directly in `App.jsx`. Remove it before treating this as a finished/production build.
- There's a small naming mismatch between the import in `App.jsx` (`./components/Scoreboard`) and the actual file (`ScoreBoard.jsx`); this only works because most filesystems (and the dev server) resolve it case-insensitively — worth renaming one to match the other for portability (e.g. Linux CI).
