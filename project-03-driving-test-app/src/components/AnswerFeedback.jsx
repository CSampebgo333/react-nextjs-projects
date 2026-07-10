const AnswerFeedback = ({ options, correctAnswer, userAnswer }) => {
    return (
        <div>
            {options.map((option, index) => {
                const isUserAnswer = userAnswer === index;
                const isCorrectAnswer = correctAnswer === index;
                const isWrongAnswer = isUserAnswer && !isCorrectAnswer;
                
                return (
                    <div 
                        key={index}
                        style={{
                            backgroundColor: isCorrectAnswer
                            ? "#d4edda" 
                            : isWrongAnswer
                            ? "#f8d7da"
                            : "transparent",
                            color: isWrongAnswer? "#721c24" : "inherit",
                            padding: "0.5rem 1rem",
                            marginBottom: "0.5rem",
                            border: isUserAnswer? "1px solid #007bff" : "1px solid #ccc",
                            borderRadius: "8px",
                            whiteSpace: "pre-wrap",

                        }}
                    >
                        {option}
                        {isWrongAnswer && '✗'}
                        {isCorrectAnswer && ' ✓'}
                    </div>
                );
            })}
        </div>
    );
}

export default AnswerFeedback;