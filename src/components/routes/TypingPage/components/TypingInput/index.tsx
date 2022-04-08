import React, { useState, memo } from "react";
import { useGameDataContext } from "../../../../../context/contexts/GameDataContext/GameDataContext";
import {
  GameManagerType,
} from "../../../../../context/contexts/GameDataContext/types";

import "./TypingInput.css";

const TypingInput: React.FC = () => {
  const gameManager: GameManagerType = useGameDataContext();
  const { currentWord, removeCharInCurrentWord } = useGameDataContext();
  const [input, setInput] = useState<string>("");

  const inputChanged = (e: any) => {
    const value = e.target.value.replaceAll(" ", "");

    if (e.nativeEvent.data === " ") {
      gameManager.submitInput(value);
      return setInput("");
    }

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      value.length - 1 < currentWord.currentCharIndex &&
        removeCharInCurrentWord(value);
      return setInput(value);
    }

    const currentLetter = currentWord.syntax.charAt(
      currentWord.currentCharIndex
    );
    const hasTypo = !currentWord.syntax.includes(value);

    updateTypoInCurrentWord(hasTypo);
    gameManager.addCharactor(currentLetter, hasTypo);

    if (e.nativeEvent.data !== " ") return setInput(value);
    gameManager.submitInput(value);
    setInput("");
  };

  const updateTypoInCurrentWord = (typo: boolean) =>
    currentWord.typo !== typo && gameManager.setTypoInCurrentWord(typo);

  return (
    <input
      className="typing-input"
      type="text"
      value={input}
      onChange={inputChanged}
      autoFocus
    />
  );
};

export default memo(TypingInput);
