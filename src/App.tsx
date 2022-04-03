import React from "react";
import { useGameDataContext } from "./contexts/GameDataContext";
import TypingPage from "./routes/TypingPage";
import LandingPage from "./routes/LandingPage";
import { TypingInsights } from "./routes/TypingInsights";

function App() {
  const { gameState } = useGameDataContext();

  const content = () => {
    switch (gameState) {
      case "readyToPlay":
        return <LandingPage />;
      case "initiated":
        return <TypingPage />;
      case "completed":
        return <TypingInsights />;
      default:
        return "404 page doesn't exsist";
    }
  };

  return <>{content()}</>;
}
export default App;
