import QuestionHeader from "./QuestionHeader.jsx";
import { Card } from "./ui/Card.jsx";
import QuestionText from "./QuestionText.jsx";
import AnswerOptions from "./AnswerOptions.jsx";
import MediaDisplay from "./MediaDisplay.jsx";


const QuestionView = (
    {
        q, 
        currentQuestionIndex,
        totalQuestions,
        selectedAnswer,
        onAnswer,
        timeRemaining,
        dispatch,
    }
) => {
    return (
        <Card>
            <QuestionHeader currentQuestionIndex={currentQuestionIndex} totalQuestions={totalQuestions} timeRemaining={timeRemaining} />
            <div style={
                {
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                }
            }>
                <div style={{flex: 1}}>
                    <QuestionText text={q.question} />
                    <AnswerOptions options={q.options} selectedAnswer={selectedAnswer} onSelect={onAnswer} />
                </div>
            </div>
        </Card>
    );
}

export default QuestionView;