import ForecastCard from "./ForecastCard";

const Forecaast = ({ forecastData }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-4">Weekly Forecast</h2>
            <div className={
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" + 
                " bg-white/20 rounded-2xl p-7 mb-8 border border-white/30 backdrop-blur-md shadow-lg"
            }
                >
                    {forecastData.map((dayData, index) => (
                        <ForecastCard 
                            key={index} 
                            dailyData={dayData} 
                        />
                    ))}
            </div>
        </div>
    )
}

export default Forecaast;