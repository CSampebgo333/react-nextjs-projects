import React from "react";

const Child = ({ name, clickFunction }) => {
    console.log(`Rendering Child ${name}`);

    return (
        <div
            style={{
                padding: "1rem",
                border: "2px solid red",
                margin: "1rem",
            }}
            onClick={clickFunction}
        >
            <h3>{name}</h3>
        </div>
    );
}

export default React.memo(Child);