import useNetworkStatus from "../hooks/useNetworkStatus";
import { useState } from "react";

const HelpForm = () => {

    const isOnline = useNetworkStatus();

    const [message, setMessage] = useState("");

    return (
        <form>
            <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                style={{ width: "100%", marginBottom: "0.5rem"}}
                placeholder="Message..."
            />
            <button
                type="submit"
                disabled={!isOnline}
                style={{
                    padding: "0.5rem 1rem",
                    background: isOnline ? "#4CAF50" : "#ccc" ,
                    color: isOnline? "#fff" : "#666",
                    border: "none",
                    cursor: isOnline? "pointer" : "not-allowed",
                }}
            >
                {isOnline? "Send Message" : "You must be online to proceed."}
            </button>
        </form>
    );

}

export default HelpForm;