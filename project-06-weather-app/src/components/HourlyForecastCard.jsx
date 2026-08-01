const HourlyForecastCard = ({ hourData, icon }) => {
    return (
        <div className={
            "shrink-0 bg-white/10 rounded-xl p-4 shadow-lg" + 
            " text-center min-width: 120px hover:bg-white/20 transition-colors duration-300"
        }>
            <div className="text-blue-100 text-sm mb-3">{hourData.time}</div>
            <div className="text-2xl mb-3">{icon}</div>
            <div className="text-lg text-white font-bold mb-3">{hourData.temperature}°C</div>
            <div className="text-blue-100 text-xs mb-2">💧 {hourData.humidity}%</div>
            <div className="text-blue-100 text-xs mb-2">💨 {hourData.windspeed} km/h</div>
        </div>
    )
}

export default HourlyForecastCard;