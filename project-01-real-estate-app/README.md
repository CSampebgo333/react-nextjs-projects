# React Property Listings

A React + Vite application that displays a list of rental properties as styled cards, including type, price, availability, and key attributes like bedrooms, bathrooms, and surface area.

## Features

- Property cards showing image, type label (House, Flat, Cottage, etc.), and availability
- Key attributes displayed with icons: bedrooms, bathrooms, and surface area (m²)
- Address, monthly rent, and availability date for each listing
- Visual "unavailable" banner and dimmed styling for properties that are rented out
- Component-based architecture for easy reuse and styling

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [lucide-react](https://lucide.dev/) — icons (bed, bath, size)
- [prop-types](https://www.npmjs.com/package/prop-types) — runtime prop validation
- ESLint for code linting

## Project Structure

```
src/
├── App.jsx                        # Root component, renders layout
├── data/
│   └── properties.js              # Static property listing data
└── components/
    ├── Header/                    # Page header
    ├── Title/                     # Page title/heading
    ├── Footer/                    # Page footer
    └── PropertyList/
        ├── PropertyList.jsx        # Renders the grid of properties
        └── Property/
            ├── Property.jsx        # A single property card
            ├── PropertyAttribute/  # Reusable label/value row (address, rent, date)
            └── PropertyImage/
                ├── PropertyImage.jsx
                ├── PropertyTypeLabel/   # "House" / "Flat" / "Cottage" badge
                ├── PropertyBanner/      # "Not available" banner overlay
                └── IconWithText/        # Icon + text pair (e.g. bed icon + "3")
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

## Data

Property listings currently live in `src/data/properties.js` as a static array. Each property includes:

| Field       | Description                          |
|-------------|---------------------------------------|
| `id`        | Unique identifier                    |
| `type`      | Property type (House, Flat, Cottage) |
| `image`     | Path to property image               |
| `bedrooms`  | Number of bedrooms                   |
| `bathrooms` | Number of bathrooms                  |
| `surface`   | Surface area in m²                   |
| `address`   | Street address                       |
| `rent`      | Monthly rent (£)                     |
| `date`      | Date available from                  |
| `available` | Whether the property is currently available |

## Notes

Property images are referenced under `public/images/` — add new images there and update `src/data/properties.js` to include new listings.
