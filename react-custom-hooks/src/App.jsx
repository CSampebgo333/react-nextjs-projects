import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

const App = () => {

    const [user, setUser] = useState("");
    const [location, setLocation] = useState("");

   return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2rem",
        }}
    >
        <h2>Welcome</h2>
        <label>
            User {" "}
            <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter name..."
            >
                
            </input>
        </label>
        <label>
            Location {" "}
            <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location..."
            >
                
            </input>
        </label>
    </div>
   );
}

export default App;