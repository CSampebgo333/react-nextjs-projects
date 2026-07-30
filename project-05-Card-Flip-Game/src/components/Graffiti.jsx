const Graffiti = () => {
    return (
        <div className={
            "fixed inset-0 " +
            "flex items-center justify-center " +
            "z-50 pointer-events-none"
        }>
            <div
                className={
                    "text-6xl sm:text-8xl font-black " +
                    "bg-clip-text text-transparent " +
                    "bg-linear-to-r from-yellow-300 via-pink-400 to-red-500 " +
                    "drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] " +
                    "animate-bounce"
                }
            >
                🎉 You Win 🎉
            </div>
        </div>
    )
}

export default Graffiti;