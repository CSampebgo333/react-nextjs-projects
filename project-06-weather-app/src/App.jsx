import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      console.log("Timer Fired!")
    }, 2000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <div>
      <h1>Waiting for 2 seconds...</h1>
    </div>
  )
}

export default App;