import { useState, useMemo } from "react";

function expensiveCalculation (num) {
    console.log("Running Expensive Function,...");
    let result = 0;
    for (let i = 0; i <= 1000; i++){
        result += i % num;
    }
    return result;
}

const App = () => {

    const [count, setCount] = useState(0);

    const [input, setInput] = useState(5);

    const result1 = useMemo(() => expensiveCalculation(input), [input]);
    
    return (
        <div>
            <h1>Expensive Calcualtion Demo</h1>
            <p>Input: {input}</p>
            <p>Result: {result1}</p>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment Count ({count})
            </button>
            <br/>
            <button
                onClick={() => setInput(input + 1)}
            >
                Change Input
            </button>
        </div>
    );
}

export default App;