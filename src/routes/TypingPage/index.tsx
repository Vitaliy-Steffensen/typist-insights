import React, {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useReducer,
  useState,
} from "react";
import TypeTextDisplay from "../../components/TypeTextDisplay";
import { TypingInput } from "../../components/TypingSection";
import {
  GameManagerType,
  useGameDataContext,
} from "../../contexts/GameDataContext";
import { useCountDown } from "../../hooks/useCountDown";
import "./TypingPage.css";
import { memo } from "react";

interface TypingPageProps {}

const TypingPage: React.FC<TypingPageProps> = ({}) => {
  const { startCountDown, timeLeft } = useCountDown();

  const gameManager: GameManagerType = useGameDataContext();

  useEffect(() => {
    startCountDown();
  }, []);

  useEffect(() => {
    if (timeLeft < 0) gameManager.setGameState("completed");
  }, [timeLeft]);

  return (
    <div className="typing-page">
      <h1 className="typing-page__timer">{timeLeft}</h1>
      <TypeTextDisplay />
      <TypingInput />
    </div>
  );
};

export default memo(TypingPage);
