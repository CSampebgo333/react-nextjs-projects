const HumidityCard = ({ humidity }) => {
    return (
        <div className="bg-white/10 rounded-xl p-4 mb-3">
            <div className="flex items-center space-x-2 mb-3">
                <span className="text-xl">💧</span>
                <span className="text-blue-100 text-sm">Humidity</span>
                <div className="text-white text-lg font-bold">{humidity}%</div>
            </div>
        </div>
    )
}

export default HumidityCard;