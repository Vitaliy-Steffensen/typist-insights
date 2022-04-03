import React, { useState } from "react";
import {
  GameManagerType,
  useGameDataContext,
} from "../../contexts/GameDataContext";
import "./TypingInput.css";

interface indexProps {}

export const TypingInput: React.FC<indexProps> = ({}) => {
  const gameManager: GameManagerType = useGameDataContext();
  const { currentWord, setCurrentWord } = useGameDataContext();
  const [input, setInput] = useState<string>("");

  const inputChanged = (e: any) => {
    const value = e.target.value.replaceAll(" ", "");

    if (e.nativeEvent.data === " ") {
      gameManager.submitInput(value);
      setInput("");
      console.log("gameManager ", gameManager);
      return;
    }

    const currentLetter = currentWord.syntax.charAt(
      currentWord.currentCharIndex
    );

    const latestChar = value.length > 0 ? value.charAt(value.length - 1) : "";

    console.log("latestChar ", latestChar);

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      if (value.length - 1 < currentWord.currentCharIndex) {
        setCurrentWord((prev: any) => {
          return {
            ...prev,
            currentCharIndex: value.length > 0 ? value.length - 1 : 0,
          };
        });

        // if (latestChar !== currentLetter) {
        //   //add wrong letter
        //   //higlight wrong

        //   currentWord.typo !== true && gameManager.setTypoInCurrentWord(true);
        // }

        // if (value.length === 0)
        //   currentWord.typo !== false && gameManager.setTypoInCurrentWord(false);

        return setInput(value);
      }
    }

    console.log(
      "value.charAt(-1) ",
      value.charAt(-1),
      " currentLetter ",
      currentLetter
    );

    //latest

    //!currentWord.syntax.includes(value)

    if (!currentWord.syntax.includes(value)) {
      //add wrong letter
      //higlight wrong
      console.log("value ", value, "currentWord ", currentWord, " correct");
      currentWord.typo !== true && gameManager.setTypoInCurrentWord(true);

      gameManager.addCharactor(currentLetter, true);
    } else {
      console.log("value ", value, "currentWord ", currentWord, " false");

      currentWord.typo !== false && gameManager.setTypoInCurrentWord(false);
      gameManager.addCharactor(e.nativeEvent.data);

      //correct word
    }

    if (e.nativeEvent.data !== " ") return setInput(value);

    gameManager.submitInput(value);
    setInput("");

    console.log("gameManager ", gameManager);
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
