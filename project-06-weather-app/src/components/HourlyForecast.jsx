import HourlyForecastCard from "./HourlyForecastCard";
import { getWeatherIcon } from "../utils/weather";


const HourlyForecast = ({ hourlyData }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-4">Today's Weather</h2>
            <div className="bg-white/20 rounded-2xl p-7 mb-8 border border-white/30 backdrop-blur-md shadow-lg">
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    {hourlyData.map((hourData, index) => (
                        <HourlyForecastCard key={index} hourData={hourData} icon={getWeatherIcon(hourData.weathercode)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast; 