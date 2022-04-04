import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GameDataProvider } from "./context/contexts/GameDataContext/GameDataContext";

ReactDOM.render(
  <React.StrictMode>
    <GameDataProvider>
      <App />
    </GameDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
