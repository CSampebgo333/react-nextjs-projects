const TempComponent = ( {state, dispatch} ) => {
    return (
        <div>
            <h2>Driving Test!</h2>
            <div style={{ marginBottom: "1rem" }}>
                <button onClick = {() => console.log(state)}>
                Log State
                </button>
                <button onClick = {() => console.log(state.answers)}>
                Log Answers
                </button>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <button onClick={() => dispatch({type: "ANSWER", payload: 1})}>
                    Answer 1
                </button>
                <button onClick={() => dispatch({type: "ANSWER", payload: 2})}>
                    Answer 2
                </button>
                <button onClick={() => dispatch({type: "ANSWER", payload: 3})}>
                    Answer 3
                </button>
                <button onClick={() => dispatch({type: "NEXT"})}>
                    Next
                </button>
                <button onClick={() => dispatch({type: "PREV"})}>
                    Prev
                </button>
                <button onClick={() => dispatch({type: "SUBMIT"})}>
                    Submit
                </button>
                </div>
            </div>
        </div>
    );
}

export default TempComponent;