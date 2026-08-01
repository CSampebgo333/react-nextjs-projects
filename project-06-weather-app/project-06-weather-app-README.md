# React Weather App

A React + Vite weather app that looks up any city and displays current conditions, an hourly forecast, and a 6-day outlook, powered by the free Open-Meteo API.

## Features

- City search with live autocomplete suggestions (name + country) as you type
- Defaults to showing Ouagadougou's weather on first load
- Current conditions card: temperature, daily min/max, "feels like" temperature, weather icon/label, humidity, and wind speed
- Scrollable hourly forecast (next 23 hours) with per-hour temperature, humidity, wind speed, and weather icon
- 6-day forecast grid with daily min/max temperature and condition
- Weather codes mapped to emoji icons and human-readable labels (clear, cloudy, rain, snow, thunderstorm, etc.)
- Glassmorphism-style UI (translucent, blurred cards) over a blue gradient background

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [Open-Meteo](https://open-meteo.com/) — free geocoding and weather forecast APIs (no API key required)
- ESLint for code linting

## Project Structure

```
src/
├── App.jsx                        # Root component; fetches and transforms weather data, holds selected city
├── utils/
│   └── weather.js                  # Maps Open-Meteo weather codes to emoji icons and condition labels
└── components/
    ├── Header.jsx                  # Page title and tagline
    ├── SearchBar.jsx                # City search input with live geocoding suggestions
    ├── CurrentWeather.jsx           # Current conditions card (temp, feels-like, icon, label)
    ├── HumidityCard.jsx             # Humidity sub-card used inside CurrentWeather
    ├── WindSpeedCard.jsx            # Wind speed sub-card used inside CurrentWeather
    ├── HourlyForecast.jsx           # Horizontal scroll list of hourly cards
    ├── HourlyForecastCard.jsx       # A single hour's forecast
    ├── Forecast.jsx                 # 6-day forecast grid
    ├── ForecastCard.jsx             # A single day's forecast
    └── weatherDataDocs.js           # Reference documentation of the Open-Meteo response shapes (not imported/used at runtime)
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

- On first load, `App` sets a default city (Ouagadougou, Burkina Faso) as `selectedCity`.
- Whenever `selectedCity` changes, it fetches current, daily, and hourly data from the Open-Meteo forecast API for that location's coordinates.
- The raw API response is then transformed into three pieces of state:
  - `weatherData` — today's current conditions plus min/max temperature
  - `forecastData` — the next 6 days, each with a weekday name, min/max temp, and weather code
  - `hourlyData` — the next 23 hours, each with a formatted time, temperature, humidity, wind speed, and weather code
- `SearchBar` queries the Open-Meteo geocoding API once the input is 3+ characters, showing up to 5 matching cities; selecting one calls back up to `App` via `onCitySelect`, which updates `selectedCity` and re-triggers the fetch.
- `utils/weather.js` centralizes the mapping from Open-Meteo's numeric weather codes to a display icon (emoji) and label, used by the current, hourly, and daily forecast cards alike.

## Notes

- No API key or environment variables are needed — Open-Meteo's geocoding and forecast endpoints are free and used directly from the browser.
- `@react-google-maps/api` is listed as a dependency but isn't imported or used anywhere in the current code — safe to remove unless there are plans to add a map view.
- `App.jsx` has a leftover `console.log("Raw weather data:", data)` debug statement; fine for development but worth removing before treating this as a finished build.
- The `Forecast` component's internal function is misspelled (`Forecaast`) — purely cosmetic since it's only used via its default export, but worth a quick rename for consistency.
- `weatherDataDocs.js` is a documentation-only file (JSDoc typedefs describing the Open-Meteo response shapes); it isn't imported anywhere and exists purely as a reference for the data structures used in `App.jsx`.
