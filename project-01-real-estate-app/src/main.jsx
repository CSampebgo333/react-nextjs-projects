import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Creating a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component to the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);