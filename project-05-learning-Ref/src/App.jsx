import { useRef } from "react";

const App = () => {

  const inputRef = useRef(null);

  function handleClick () {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" placeholder="Enter text" ref={inputRef}>
      </input>
      <button style={{cursor: "pointer"}} onClick={handleClick}>Focus the Input Field</button>
    </div>
  );
}

export default App;