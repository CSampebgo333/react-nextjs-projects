# React Driving Theory Quiz

A React + Vite quiz application for practicing UK driving theory test questions, supporting text, image, and video-based questions with answer feedback and explanations.

## Features

- Multiple-choice questions with support for image and video media
- Navigation between questions (next/previous)
- Tracks selected answers per question across the session
- Countdown timer (defaults to 60 minutes, mirroring real test conditions)
- Answer feedback and explanations for each question
- Progress bar showing quiz completion status
- State managed with `useReducer` for predictable updates

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- ESLint for code linting

## Project Structure

```
src/
├── App.jsx                      # Root component; holds quiz state via useReducer
├── state/
│   └── quizReducer.js           # Reducer handling ANSWER, NEXT, PREV, SUBMIT
├── data/
│   └── questions.js             # Quiz questions, options, correct answers, explanations
├── utils/
│   └── formatTime.js            # Formats countdown timer seconds as mm:ss
└── components/
    ├── QuestionView.jsx          # Composes a full question screen
    ├── QuestionHeader.jsx        # Question number / header info
    ├── QuestionText.jsx          # Renders the question prompt
    ├── MediaDisplay.jsx          # Renders question image or video
    ├── AnswerOptions.jsx         # Multiple-choice answer buttons
    ├── AnswerFeedback.jsx        # Correct/incorrect feedback after answering
    ├── ExplanationText.jsx       # Explanation shown after answering
    ├── NavigationControls.jsx    # Next/previous/submit controls
    ├── ProgressBar.jsx           # Visual quiz progress indicator
    ├── ScoreSummary.jsx          # Final score display
    ├── ResultView.jsx            # End-of-quiz results screen
    ├── AppBanner.jsx             # App title/banner
    ├── tempComponent.jsx         # Temporary dev/debug panel (see Notes)
    └── ui/
        ├── Button.jsx            # Reusable button component
        └── Card.jsx              # Reusable card container
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

- Quiz state (`currentQuestionIndex`, `answers`, `submitted`, `timeRemaining`) is managed centrally in `App.jsx` via `quizReducer`.
- Each question in `src/data/questions.js` can be of type `"text"`, `"image"`, or `"video"`, and includes its own options, correct answer index, and explanation.
- Selecting an answer dispatches `ANSWER`; navigation dispatches `NEXT`/`PREV`; finishing the quiz dispatches `SUBMIT`.
- Media assets (images/videos) are referenced under `public/images/`.

## Notes

- This project is a work in progress: `tempComponent.jsx` is a temporary debug panel used during development (logging state, manually dispatching actions) and should be removed before a production release.
- The result/score view (`ResultView.jsx`, `ScoreSummary.jsx`) exists as a component but is not yet wired up in `App.jsx` (currently an empty placeholder).
