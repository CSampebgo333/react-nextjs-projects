const WelcomeMessage = ({ username }) => {

    console.log("Welcome Message Rendered!");

    return (
        <div>
            <h3>{username && ", "} {username}</h3>
        </div>
    );

}

export default WelcomeMessage;