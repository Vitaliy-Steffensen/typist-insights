import React, { useEffect } from "react";
import TypeTextDisplay from "./components/TypeTextDisplay";
import { useGameDataContext } from "../../../context/contexts/GameDataContext/GameDataContext";
import "./TypingPage.css";
import { memo } from "react";
import TypingInput from "./components/TypingInput";
import { useCountdown } from "../../../hooks/useCountdown";
import { VscDebugRestart } from "react-icons/vsc";

const TypingPage: React.FC = () => {
  const { startCountdown, timeLeft, onTimerEnds } = useCountdown();
  const { endGame, currentWord, text, restart } = useGameDataContext();

  onTimerEnds(() => endGame());

  useEffect(() => {
    startCountdown();
  }, []);

  const isNotCompleted = timeLeft > 0;

  return (
    <div className="typing-page">
      <h1
        className="typing-page__timer"
        style={{ color: isNotCompleted ? "#5f2ef5" : "#c9d1d9" }}
      >
        {isNotCompleted ? timeLeft : "Completed"}
      </h1>
      <TypeTextDisplay
        currentWord={currentWord}
        text={text}
        isCompleted={!isNotCompleted}
      />
      {isNotCompleted ? (
        <TypingInput />
      ) : (
        <VscDebugRestart className="typing-page__restart" onClick={restart} />
      )}
    </div>
  );
};

export default memo(TypingPage);
