import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div
            style={{
                padding: "2rem",
                fontFamily: "sans-serif",
            }}
        >
            <h1>React Avoids Unecessary Re-rendering.</h1>
            <TodoList />
            <p>Open the console to see which TodoItem re-render onToggle.</p>
        </div>
    )
}

export default App;