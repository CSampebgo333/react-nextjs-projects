const Child = ({ name, count }) => {
    console.log(`Rendering Child ${name}`);

    return (
        <div
            style={{
                padding: "1rem",
                border: "2px solid red",
                margin: "1rem",
            }}
        >
            <h3>{name}</h3>
            <p>Count: {count}</p>
        </div>
    );
}

export default Child;