import HumidityCard from "./HumidityCard";
import WindSpeedCard from "./WindSpeedCard";
import {getWeatherIcon, getConditionLabel} from "../utils/weather";

const CurrentWeather = ({ weatherData }) => {
    
    const weatherIcon = getWeatherIcon(weatherData.weathercode);
    const conditionLabel = getConditionLabel(weatherData.weathercode);

    return (
        <div className={
            "bg-white/20 rounded-xl p-6 mb-8 border border-white/30" + 
            " backdrop-blur-md shadow-lg"
        }>

            {/* Top section: city, country, temperature and range */}
            <div className="flex justify-between items-center mb-7">
                {/* City and country */}
                <div>
                    <h2 className="text-2xl font-bold text-white">{weatherData.city}</h2>
                    <p className="text-blue-100">{weatherData.country}</p>
                </div>
                {/* Temperature */}
                <div className="text-right">
                    {/* Current temperature */}
                    <div className="text-4xl font-bold text-white">
                        {weatherData.temperature}°C
                    </div>
                    {/* Min and max temperature */}
                    <div className="text-blue-100">
                        {weatherData.minTemperature}°C / {weatherData.maxTemperature}°C
                    </div>
                </div>
            </div>

            {/* Middle section: weather icon, condition label, feels like temp */}
            <div className="flex justify-between items-center mb-7">
                {/* Weather icon and condition label */}
                <div className="flex items-center space-x-3">
                    <span className="text-3xl mr-2">{weatherIcon}</span>
                    <span className=" text-white font-medium">{conditionLabel}</span>
                </div>
                <div className="text-blue-100">
                    Feels Like {weatherData.feels_like}°C
                </div>
            </div>

            {/* Bottom section: humidity and wind speed cards */}
            <div className="grid grid-cols-2 gap-4">
                <HumidityCard humidity={weatherData.humidity} />
                <WindSpeedCard windspeed={weatherData.windspeed} />
            </div>

        </div>
    )
}

export default CurrentWeather;