const LoadingScreen = ({ message }) => {
    return (
        <div className={
            "min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-orange-50" +
            " flex items-center justify-center"
        }>
            <div className="text-center">
                <div className={
                    "animate-spin rounded-full w-16 h-16 border-b-2" + 
                    " border-purple-500 mx-auto mb-3"
                }/>
                <p className="text-gray-600 text-lg">{message}</p>
            </div>
        </div>
    )
}

export default LoadingScreen;

