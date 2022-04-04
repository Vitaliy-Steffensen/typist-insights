import React from "react";
import { useGameDataContext } from "./context/contexts/GameDataContext/GameDataContext";
import TypingPage from "./components/routes/TypingPage";
import LandingPage from "./components/routes/LandingPage";
import { TypingInsights } from "./components/routes/TypingInsights";

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
