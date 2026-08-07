import Child from "./Child";
import { useState } from "react";


const Parent = () => {

    const [parentCount, setParentCount] = useState(0);
    const [childCount, setChildCount] = useState(0);


    return (
        <div
            style={{
                padding: "1rem",
                border: "2px solid blue"
            }}
        >
            <h2>Parent Component</h2>
            <p>Parent Count: {parentCount}</p>
            <button
                onClick={() => setParentCount((prev) => prev + 1)}
            >
                Increment Parent Count
            </button>

            <p style={{marginTop: "1rem"}}>Child Count: {childCount}</p>
            <button
                onClick={() => setChildCount((prev) => prev + 1)}
            >
                Increment Child Count
            </button>

            <Child name={"Alice"} count={childCount}/> 
            <Child name={"Bob"} count={childCount}/> 
            <Child name={"Charlie"} count={childCount}/> 
        </div>
    );
}

export default Parent;