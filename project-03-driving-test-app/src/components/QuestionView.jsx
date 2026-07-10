import QuestionHeader from "./QuestionHeader.jsx";
import { Card } from "./ui/Card.jsx";
import QuestionText from "./QuestionText.jsx";
import AnswerOptions from "./AnswerOptions.jsx";
import MediaDisplay from "./MediaDisplay.jsx";
import NavigationControls from "./NavigationControls.jsx";


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
                { (q.type === "image" || q.type === "video") && (
                    <MediaDisplay key={q.id} type={q.type} image={q.image} video={q.video} /> 
                )}
            </div>
            <NavigationControls currentQuestionIndex={currentQuestionIndex} 
            totalQuestions={totalQuestions} 
            dispatch={dispatch} 
            />
        </Card>
    );
}

export default QuestionView;