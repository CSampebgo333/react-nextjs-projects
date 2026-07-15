import { useState, useRef } from "react";

const App = () => {

  const [time, setTime] = useState(0);

  let intervalId = useRef(null);

  const handleStart = () => {

    if (intervalId.current !== null) return;

    intervalId.current = setInterval (() => {
      setTime ((prevTime) => prevTime + 10);
    }, 10)
  }

  const handleEnd = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;

  }

 const handleReset = () => {
    handleEnd();
    setTime(0);
  }

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formatedMilliseconds = String(milliseconds).padStart(2, "0");
  
  return (
    <div>
      <h1>Timer: {formattedMinutes}:{formattedSeconds}.{formatedMilliseconds}</h1>
      <div style={{marginTop: "50px", display: "flex", gap: "7px"}}>
        <button style={{cursor: "pointer"}} onClick={handleStart}>Start</button>
        <button style={{cursor: "pointer"}} onClick={handleEnd}>End</button>
        <button style={{cursor: "pointer"}} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;