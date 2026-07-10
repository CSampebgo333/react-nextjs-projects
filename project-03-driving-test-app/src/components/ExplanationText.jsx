const ExplanationText = ({ text }) => {
    return (
        <p style={
            {
                marginTop: "1rem",
                fontStyle: "italic",
                color: "#555",
            }
        }>
            Explanation: {text}
        </p>
    );
}

export default ExplanationText;