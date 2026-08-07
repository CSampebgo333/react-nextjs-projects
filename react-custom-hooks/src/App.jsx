import Parent from "./components/Parent";

const App = () => {

    return (
        <div 
            style={{
                padding: "2rem",
                fontFamily: "sans-serif",
            }}
        >
            <h1>React Performance Introduction</h1>
            <Parent />
        </div>
    )
}

export default App;