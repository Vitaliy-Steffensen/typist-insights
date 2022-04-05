import React, { useEffect } from "react";
import TypeTextDisplay from "./components/TypeTextDisplay";
import { useGameDataContext } from "../../../context/contexts/GameDataContext/GameDataContext";
import "./TypingPage.css";
import { memo } from "react";
import TypingInput from "./components/TypingInput";
import { useCountdown } from "../../../hooks/useCountdown";

const TypingPage: React.FC = () => {
  const { startCountdown, timeLeft, onTimerEnds } = useCountdown(59);
  const { setGameState, currentWord, text } = useGameDataContext();

  onTimerEnds(() => setGameState("completed"));

  useEffect(() => {
    startCountdown();
  }, []);

  return (
    <div className="typing-page">
      <h1 className="typing-page__timer">{timeLeft}</h1>
      <TypeTextDisplay currentWord={currentWord} text={text} />
      <TypingInput />
    </div>
  );
};

export default memo(TypingPage);
