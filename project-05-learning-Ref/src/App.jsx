import { useState, useRef } from "react";


const buttonStyle = {
  padding: "10px 16px",
  margin: "0 8px",
  borderRadius: "4px",
  border: "none",
  color: "white",
  cursor: "pointer",
};

const App = () => {

  const listRef = useRef(null);

  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);

  function removeLastWithSetSate () {
    setFruits ((prevFruit) => (
      prevFruit.slice(0, -1)
    ));
  }

  function removeWithDOM () {
    const list = listRef.current;
    if (list && list.lastChild) {
      list.removeChild(list.lastChild);
    }
  }

  return (
    <div>
      <div>
        <h1 style={{ marginBottom: "16px", fontSize: "24", fontWeight: "bold"}}>
          Fruit List
        </h1>
        <ul style={{padding: 0, marginBottom: "16px", listStyle: "none"}} ref={listRef}>
          {fruits.map((fruit, index) => (
            <li key={index}
              style={{
                padding: "8px", borderRadius: "4px", marginBottom: "8px", border: "1px solid #ccc"
              }}
            >
              {fruit}
            </li>
          ))}
        </ul>
        <button 
          style={{ ...buttonStyle, backgroundColor: "#007bff"}}
          onClick={removeLastWithSetSate}
        >
          Remove with setState
        </button>
        <button 
          style={{ ...buttonStyle, backgroundColor: "#dc3545"}}
          onClick={removeWithDOM}
        >
          Remove with DOM API
        </button>
      </div>
    </div>
  );
}

export default App;