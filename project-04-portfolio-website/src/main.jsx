import ReactDom from "react-dom/client"
import { StrictMode } from "react"
import App from "./App.jsx"

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)