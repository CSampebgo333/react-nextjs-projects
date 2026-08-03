import { StrictMode } from 'react'
import ReactDome from "react-dom/client"
import './index.css'
import App from './App.jsx'

const root = ReactDome.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
