import { useState, useEffect } from "react";

const App = () => {
  
  const [weather, setWeather] = useState();

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {

    setError(null);
    setWeather(null);

    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=12.37&longitude=-1.53&current_weather=true"
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
    setTimeout(fetchWeather, 3000);
  }, [])

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", textAlign: "center" }}>
      <h1>🌤️ Current Weather in Ouagadougou.</h1>
      {weather && (
      <div>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Wind Speed: {weather.windspeed} km/h</p>
      </div>
      )}
      {loading && <p>Loading...</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  );
};

export default App;