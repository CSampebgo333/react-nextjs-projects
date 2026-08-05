import ControlledInput from "./components/advanced-react-patterns/ControlledInput";
import UnControlledInput from "./components/advanced-react-patterns/UnControlledInput";

const App = () => {

    return (
        <div 
            style={{
                padding: "2rem",
                fontFamily: "sans-serif"
            }}
        >
            <h1>Controlled vs. Uncontrolled Inputs</h1>

            <ControlledInput />
            End!
            <UnControlledInput />

            <p>
                <strong>Key Concepts:</strong>
                <br />
                Controlled Input are managed by React state, 
                while Uncontrolled Inputs manage their state with they own DOM.
            </p>
        </div>
    )
}

export default App;