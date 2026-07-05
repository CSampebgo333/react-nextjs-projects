import ReactDom from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)