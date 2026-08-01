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

    const defaultCity = {
      name: "Ouagadougu",
      country: "Burkina Faso",
      latitude: 12.3714,
      longitude: -1.5197,
    };

    setSelectedCity(defaultCity);
  }, [])

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

      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchWeatherData();
  }, [selectedCity]);


  useEffect(() => {

    if (!data || !data.location) return;

        console.log("Raw weather data:", data);
    
    const { location, current_weather, daily, hourly } = data;
    
    const currentWeather = {
      city: location.name,
      country: location.country,
      temperature: current_weather.temperature,
      feels_like: hourly.temperature_2m ? hourly.temperature_2m[0] : current_weather.temperature, // Use hourly data or fallback to temperature
      humidity: hourly.relative_humidity_2m ? hourly.relative_humidity_2m[0] : 0, // Get from hourly data
      windspeed: current_weather.windspeed,
      weathercode: current_weather.weathercode,
      minTemperature: daily.temperature_2m_min[0],
      maxTemperature: daily.temperature_2m_max[0],
    }
    setWeatherData(currentWeather);

    const forecast = daily.time.slice(1, 7).map((date, index) => ({
      day: new Date(date).toLocaleDateString(undefined, { weekday: 'long' }),
      minTemperature: daily.temperature_2m_min[index + 1],
      maxTemperature: daily.temperature_2m_max[index + 1],
      weathercode: daily.weathercode[index + 1],
    }));
    setForecastData(forecast);

    const hourlyForecast = hourly.time.slice(1, 24).map((time, index) => ({
      time: new Date(time).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
      temperature: hourly.temperature_2m[index + 1],
      humidity: hourly.relative_humidity_2m[index + 1],
      windspeed: hourly.wind_speed_10m[index + 1],
      weathercode: hourly.weathercode[index + 1],
    }))
    setHourlyData(hourlyForecast);

  }, [data]);
 
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