import formatTime from "../utils/formatTime.js";

const QuestionHeader = ({ currentQuestionIndex, totalQuestions, timeRemaining }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
            <h2 style={{fontSize: "1.5rem"}}> Question {currentQuestionIndex + 1} of {totalQuestions}</h2>
            <p style={{fontSize: "1.2rem", fontWeight: "bold"}}> Time Left: {formatTime(timeRemaining)} </p>
        </div>
    )
}

export default QuestionHeader;