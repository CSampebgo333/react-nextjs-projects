import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const GrandChild = () => {
    const user = useContext(UserContext);
    
    return (
        <div style={{
            padding: "20px",
            backgroundColor: "#ffe0e0"
        }}>
            <h2>Hello, {user.name}!</h2>
        </div>
    );
}

export default GrandChild;