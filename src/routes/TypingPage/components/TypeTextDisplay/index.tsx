import React, { useMemo, memo, useEffect } from "react";
import { useGameDataContext } from "../../../../contexts/GameDataContext";
import Test from "./test";
import "./TypeTextDisplay.css";

const TypeTextDisplay: React.FC = ({}) => {
  const { currentWord, text } = useGameDataContext();

  const getLines = (currentWord: any, text: any) => {
    let result = { lines: [], currentWordLineIndex: 0, currentWordIndex: 0 };

    const MAX_CHAR_IN_LINE = 65;
    let currentLineCharLength = 0;
    let currentLine = 0;

    let allLines: any = [];
    let currentLineWords: any = [];

    let savedWord: any = null;

    text.forEach((word: any, i: number) => {
      currentLineCharLength += word.syntax.length + 1;

      savedWord && currentLineWords.push(savedWord);

      if (currentLineCharLength > MAX_CHAR_IN_LINE) {
        currentLineCharLength = word.syntax.length + 1;
        currentLine++;
        allLines.push(currentLineWords);
        currentLineWords = [];
        savedWord = word;
      } else {
        currentLineWords.push(word);
        savedWord = 0;
      }

      if (i === currentWord.index) {
        allLines = [];
        result = {
          ...result,
          currentWordIndex:
            currentLineWords.length > 0 ? currentLineWords.length - 1 : 0,
        };
      }
    });

    result = { ...result, lines: allLines };
    return result;
  };

  const memoizedLines = useMemo(
    () => getLines(currentWord, text),
    [currentWord, text]
  );

  useEffect(() => {
    console.log("currentWord", currentWord);
  }, [currentWord]);
  useEffect(() => {
    console.log("text", text);
  }, [text]);

  return <Test memoizedLines={memoizedLines} currentWord={currentWord} />;
};

export default memo(TypeTextDisplay);
