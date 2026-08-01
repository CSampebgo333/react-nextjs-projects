import { useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import Forecast from './components/Forecast';

const App = () => {

  return (
    <div>

      <Header />

      <SearchBar />

      <CurrentWeather />

      <HourlyForecast />

      <Forecast />

    </div>
  )
}

export default App;