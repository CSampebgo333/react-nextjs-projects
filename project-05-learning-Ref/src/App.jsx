import { useState, useRef } from "react";

const App = () => {

  const handleClicks = () => {
    clicks.current ++;
    console.log("Clicked: ", clicks)
  }

  const clicks = useRef(0);
  
  return (
    <div>
      <button onClick={handleClicks}>
        <p>Click Me</p>
      </button>
      <h3>Check console!</h3>
    </div>
  );
}

export default App;