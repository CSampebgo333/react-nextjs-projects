import { List } from "react-virtualized";
import "react-virtualized/styles.css";
import VirtualizedList from "./components/VirtualizedList";

const App = () => {

    return (
        <div
            style={{
                fontFamily: "sans-serif",
                padding: "2rem",
            }}
        >
            <h1>React Virtualization</h1>
            <VirtualizedList />
        </div>
    );
}

export default App;