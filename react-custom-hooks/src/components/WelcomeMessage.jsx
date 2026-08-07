const WelcomeMessage = ({ username }) => {

    console.log("Welcome Message Rendered!");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2rem",
            }}
        >
            <h3>{username && ", "} {username}</h3>
        </div>
    );

}

export default WelcomeMessage;