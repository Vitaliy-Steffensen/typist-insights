import React, { lazy, Suspense } from "react";
import { useGameDataContext } from "./context/contexts/GameDataContext/GameDataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/routes/LandingPage";
import TypingInsights from "./components/routes/TypingInsights";

const TypingPage = lazy(() => import("./components/routes/TypingPage"));

function App() {
  const { gameState } = useGameDataContext();

  return (
    <Suspense fallback={<div className="loader" />}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {gameState === "readyToPlay" && <LandingPage />}
                {gameState !== "readyToPlay" && <TypingPage />}
                {gameState === "completed" && <TypingInsights />}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
