import { useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import Forecast from './components/Forecast';

const App = () => {

  //State to store raw weather data fetched from the API
  const [data, setData] = useState(null);

  // State to store the currently selected city
  const [selectedCity, setSelectedCity] = useState(null);

  // State to store transformed current weather data
  const [weatherData, setWeatherData] = useState(null);

  // State to store transformed 6-day forecast data
  const [forecastData, setForecastData] = useState([]);

  // State to store transformed hourly forecast data
  const [hourlyData, setHourlyData] = useState([]);

  const handleCitySelected = (city) => {
    setSelectedCity(city);
  };
 
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <SearchBar onCitySelect={handleCitySelected} />

        {weatherData && <CurrentWeather weatherData={weatherData} />}

        {hourlyData.length > 0 && <HourlyForecast hourlyData={hourlyData} />}
        
        {forecastData.length > 0 && <Forecast forecastData={forecastData} />}
      </div>
    </div>
  )
}

export default App;