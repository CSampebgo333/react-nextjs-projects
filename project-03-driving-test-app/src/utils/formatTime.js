export default function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = secondsLeft.toString().padStart(2, '0');
    const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
    return formattedTime;
};