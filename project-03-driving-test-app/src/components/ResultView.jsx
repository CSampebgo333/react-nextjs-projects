import ScoreSummary from "./ScoreSummary";
import { Card } from "./ui/Card";
import QuestionText from "./QuestionText";
import AnswerFeedback from "./AnswerFeedback";
import ExplanationText from "./ExplanationText";
import MediaDisplay from "./MediaDisplay";

const ResultView = ({ score, questions, answers }) => {
    return (
        <div>
            <ScoreSummary score={score} total={questions.length} />
            {questions.map((q, index) =>
                <Card key={q.id}>
                    <div style={{display: "flex", flexDirection: "row", gap: "1rem"}}>
                        <div style={{flex: 1}}>
                            <QuestionText text={q.question} as="h3"/>
                            <AnswerFeedback options={q.options} 
                            correctAnswer={q.correctAnswer} 
                            userAnswer={answers[index]}/>
                            <ExplanationText text={q.explanation}/>
                        </div>
                        {(q.type === "image" || q.type === "video") && (
                            <MediaDisplay key={q.key}
                            type={q.type}
                            image={q.image}
                            video={q.video}
                            autoPlayVideo={false}/>
                        )}
                    </div>
                </Card>
            )}
        </div>
    );
}

export default ResultView;