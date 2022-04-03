import React, { useState, memo } from "react";
import {
  GameManagerType,
  useGameDataContext,
} from "../../../../contexts/GameDataContext";

import "./TypingInput.css";

interface indexProps {}

const TypingInput: React.FC<indexProps> = ({}) => {
  const gameManager: GameManagerType = useGameDataContext();
  const { currentWord, setCurrentWord } = useGameDataContext();
  const [input, setInput] = useState<string>("");

  const inputChanged = (e: any) => {
    const value = e.target.value.replaceAll(" ", "");

    if (e.nativeEvent.data === " ") {
      gameManager.submitInput(value);
      return;
    }

    const currentLetter = currentWord.syntax.charAt(
      currentWord.currentCharIndex
    );

    const latestChar = value.length > 0 ? value.charAt(value.length - 1) : "";

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      if (value.length - 1 < currentWord.currentCharIndex) {
        setCurrentWord((prev: any) => {
          return {
            ...prev,
            currentCharIndex: value.length > 0 ? value.length - 1 : 0,
          };
        });

        return setInput(value);
      }
    }

    if (!currentWord.syntax.includes(value)) {
      //add wrong letter
      //higlight wrong
      currentWord.typo !== true && gameManager.setTypoInCurrentWord(true);

      gameManager.addCharactor(currentLetter, true);
    } else {
      currentWord.typo !== false && gameManager.setTypoInCurrentWord(false);
      gameManager.addCharactor(e.nativeEvent.data);

      //correct word
    }

    if (e.nativeEvent.data !== " ") return setInput(value);

    gameManager.submitInput(value);
    setInput("");
  };

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
