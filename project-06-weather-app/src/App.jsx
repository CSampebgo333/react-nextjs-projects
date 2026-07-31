import { useState, useEffect } from "react";

const App = () => {
  
  const [weather, setWeather] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("New York");

  const cityCoordinates = {
    "New York": { lat: 40.71, lon: -74.01 },
    London: { lat: 51.51, lon: -0.13 },
    Tokyo: { lat: 35.68, lon: 139.69 },
  };

  const fetchWeather = async (cityName) => {

    setError(null);
    setWeather(null);

    try {

      const {lat, lon} = cityCoordinates[cityName];

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      )

      if(!response.ok){
        throw new Error(`HTTP error status: ${response.status}`);
      }

      const data = await response.json();

      setWeather(data.current_weather);

    } catch (error) {
      console.log(error.message);
      setError("Failed to load weather details of given location!")
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather(city);
  }, [city])

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", textAlign: "center" }}>
      <h1>🌤️ Current Weather in {city}.</h1>
      {loading && <p>Loading...</p>}
      <select 
        value={city}
        onChange={(element) => setCity(element.target.value)}
        style={{fontSize: "16px", padding: "8px", marginBottom: "1rem"}}
      >
        <option>New York</option>
        <option>London</option>
        <option>Tokyo</option>
      </select>
      {weather && (
      <div>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Wind Speed: {weather.windspeed} km/h</p>
      </div>
      )}
      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  );
};

export default App;