import useNetworkStatus from "../../hooks/useNetworkStatus";

const HelpStatus = () => {

    const isOnline = useNetworkStatus();

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
            }}
        >
            <span
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: isOnline? "green" : "red",
                    marginRight: "0.5rem",
                }}
            >

            </span>
            <span>
                {
                    isOnline 
                    ? "Type your message below to get Help!" 
                    : "It looks like you are offline."    
                }
            </span>
        </div>
    );
}

export default HelpStatus;