import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    const handleKeyDown = (keyPressed) => {
      if (keyPressed.key === " "){
        console.log("Spacebar Key Pressed!");
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }

  }, [])
  return (
    <div>
      Press the "Spacebar" key to trigger an event!
    </div>
  )
}

export default App;