import { useState } from "react";

const Toggle = ({ children }) => {

  const [on, setOn] = useState(false);

  return children({
    on,
    toggle: () => setOn(!on)
  });

}


const PropsPattern = () => {
  return (
    <>
      <Toggle>
        {({on, toggle}) => (
          <button onClick={toggle}>
            {on? "Enabled ✅":  "Disabled ❌"}
          </button>
        )}
      </Toggle>
      <Toggle>
        {({on, toggle}) => (
          <div>
            <input type="checkbox" checked={on} onChange={toggle} />
            Dark Mode {on ? "🌙" : "☀️"}
          </div>
        )}
      </Toggle>
    </>
  );
}

export default App;

