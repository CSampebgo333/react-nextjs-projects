import React from "react";
import { useReducer } from "react";
import "./App.css";
import questions from "./data/questions.js";
import { quizReducer } from "./state/quizReducer.js";
import QuestionView from "./components/QuestionView.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import AppBanner from "./components/AppBanner.jsx";
import ResultView from "./components/ResultView.jsx";


const initialState = {
  currentQuestionIndex: 0,
  answers: Array(questions.length).fill(null),
  submitted: false,
  timeRemaining: 60 * 60, // 60 minutes in seconds
};


const App = () => {

  const [state, dispatch] = useReducer((state, action) => quizReducer(state, action, questions.length), initialState);

  const q = questions[state.currentQuestionIndex];

  const score = state.answers.reduce((acc, answer, index) => {
    return answer === questions[index].correctAnswer? acc + 1 : acc;
  }, 0)

  const handleAnswer = (index) => {
    dispatch({type: "ANSWER", payload: index});
  }

  const questionView = (
    <QuestionView 
    q={q}
    currentQuestionIndex={state.currentQuestionIndex}
    totalQuestions={questions.length}
    selectedAnswer={state.answers[state.currentQuestionIndex]}
    onAnswer={handleAnswer}
    timeRemaining={state.timeRemaining}
    dispatch={dispatch}
    />
  );

  const resultView = (
  <div>
    <ResultView score={score} questions={questions} answers={state.answers} />
  </div>
  );
  
  return (
    <div className="app-container">
      <ProgressBar current={state.currentQuestionIndex} total={questions.length}/>
      <AppBanner />
      <div className="quiz-container">
        {state.submitted ? resultView : questionView}
      </div>
    </div> 
  )
}

export default App;