import Child from "./Child";
import { useState, useCallback } from "react";


const Parent = () => {

    const [count, setCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Child Clicked")
    }, [])


    return (
        <div
            style={{
                padding: "1rem",
                border: "2px solid blue"
            }}
        >
            <h2>Parent Count: {count}</h2>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment ParentCount
            </button>
            <Child name={"Memoized Child"} clickFunction={handleClick}/>
        </div>
    );
}

export default Parent;