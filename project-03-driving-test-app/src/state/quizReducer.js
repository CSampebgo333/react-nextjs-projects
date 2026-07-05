
export function quizReducer(state, action, questionsLength) {

  let updatedState;

  switch (action.type) {
    case "ANSWER": {
      const updatedAnswers = [...state.answers];
      updatedAnswers[state.currentQuestionIndex] = action.payload;
      updatedState = {...state, answers: updatedAnswers};
      return updatedState;
    };

    case "NEXT": {
      updatedState = {...state, currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, questionsLength - 1),};
      return updatedState;
    };

    case "PREV": {
      updatedState = {...state, currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),};
      return updatedState;
    };

    case "SUBMIT": {
      updatedState = {...state, submitted: true};
      return updatedState;
    };

    default: 
      return state;
  }
}