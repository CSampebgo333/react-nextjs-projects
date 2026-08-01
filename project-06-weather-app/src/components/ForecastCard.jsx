import { getConditionLabel, getWeatherIcon } from "../utils/weather";

const ForecastCard = ({ dailyData }) => {
    return (
        <div className={
            "bg-white/10 rounded-xl p-4 border border-white/30" + 
            " shadow-lg hover:bg-white/25 hover:scale-103 transition-all duration-300"
        }>
            <div className="text-center">

                {/*Day of the week */}
                <h3 className="text-white font-semibold mb-3">{dailyData.day}</h3>
                
                {/* Weather icon for the day */}
                <div>
                    <span className="text-2xl">
                        {getWeatherIcon(dailyData.weathercode)}
                    </span>
                </div>

                {/* Max and min temperatures */}
                <div className="text-white mb-3">
                    <span className="text-lg font-bold">{dailyData.maxTemperature}°C</span>
                    <span className="text-blue-100 ml-3">{dailyData.minTemperature}°C</span>
                </div>

                {/* Weather condition label (e.g., Rainy, Sunny) */}
                <p className="text-blue-100 text-sm">{getConditionLabel(dailyData.weathercode)}</p>

            </div>
        </div>
    )
}

export default ForecastCard;