import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./index.css"; // Or './App.css' depending on your setup

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
