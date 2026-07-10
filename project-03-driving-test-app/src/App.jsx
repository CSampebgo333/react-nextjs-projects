import React from "react";
import { useReducer } from "react";
import "./App.css";
import questions from "./data/questions.js";
import { quizReducer } from "./state/quizReducer.js";
import TempComponent from "./components/tempComponent.jsx";
import QuestionView from "./components/QuestionView.jsx";
import ProgressBar from "./components/ProgressBar.jsx";


const initialState = {
  currentQuestionIndex: 0,
  answers: Array(questions.length).fill(null),
  submitted: false,
  timeRemaining: 60 * 60, // 60 minutes in seconds
};


const App = () => {

  const [state, dispatch] = useReducer((state, action) => quizReducer(state, action, questions.length), initialState);

  const q = questions[state.currentQuestionIndex];

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

  const resultView = (<></>);
  
  return (
    <div className="app-container">
      <TempComponent state={state} dispatch={dispatch}/>
      <ProgressBar current={state.currentQuestionIndex} total={questions.length}/>
      <div className="quiz-container">
        {state.submitted ? resultView : questionView}
      </div>
    </div> 
  )
}

export default App;