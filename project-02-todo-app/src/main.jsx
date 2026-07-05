import App from "./App";
import ReactDom from "react-dom/client";
import { StrictMode } from "react";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)