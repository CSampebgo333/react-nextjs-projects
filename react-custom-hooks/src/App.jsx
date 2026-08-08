import { lazy, Suspense, useState } from "react";
const HeavyComponent = lazy(() => import("./components/HeavyComponent"))

const App = () => {

    const [show, setShow] = useState(false);

    return (
        <div
            style={{
                fontFamily: "sans-serif",
                padding: "2rem",
            }}
        >
            <h1>Heavy Component Demo</h1>
            <button
                onClick={() => setShow(!show)}
            >
                {show? "Hide" : "Show"} Heavy Component
            </button>
            {
                show &&
                <Suspense fallback={<div>Loading component...</div>}>
                    <HeavyComponent />
                </Suspense>
            }
        </div>
    );
}

export default App;