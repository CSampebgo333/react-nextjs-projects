import { useState, useEffect } from 'react';

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

  useEffect(() => {
    
    if (!selectedCity) return;

    const fetchWeatherData = async () => {
      try {

        const {latitude, longitude} = selectedCity;

        const baseUrl = "https://api.open-meteo.com/v1/forecast";
        
        const params = new URLSearchParams({
          latitude: latitude,
          longitude: longitude,
          current_weather: true,
          daily: "temperature_2m_max,temperature_2m_min,weathercode",
          hourly: "temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode",
          timezone: "auto"
        });

        const url = `${baseUrl}?${params.toString()}`;
        
        const response = await fetch(url);

        const weatherJson = await response.json();

        setData({...weatherJson, location: selectedCity});

        console.log("Fetched weather data:", weatherJson);

      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchWeatherData();
  }, [selectedCity]);
 
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