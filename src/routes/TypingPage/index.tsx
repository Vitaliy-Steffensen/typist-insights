import React, { useEffect } from "react";
import TypeTextDisplay from "./components/TypeTextDisplay";

import { useGameDataContext } from "../../contexts/GameDataContext";
import { useCountDown } from "../../hooks/useCountDown";
import "./TypingPage.css";
import { memo } from "react";
import TypingInput from "./components/TypingInput";

const TypingPage: React.FC<unknown> = () => {
  const { startCountDown, timeLeft, onTimerEnds } = useCountDown();
  const { setGameState } = useGameDataContext();

  onTimerEnds(() => setGameState("completed"));

  useEffect(() => {
    startCountDown();
  }, []);

  return (
    <div className="typing-page">
      <h1 className="typing-page__timer">{timeLeft}</h1>
      <TypeTextDisplay />
      <TypingInput />
    </div>
  );
};

export default memo(TypingPage);
