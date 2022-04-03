import React, { useMemo } from "react";
import {
  GameManagerType,
  useGameDataContext,
} from "../../contexts/GameDataContext";
import "./TypeTextDisplay.css";
import { memo } from "react";

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

  const wordClasses = (word: any, iscurrentWord: boolean) => {
    return iscurrentWord
      ? `type-text-display__text type-text-display__text--current ${
          currentWord.typo ? "type-text-display__text--current-typo" : ""
        }`
      : `type-text-display__text ${
          word?.correct === false
            ? "type-text-display__text--typo"
            : word?.correct === true
            ? "type-text-display__text--correct "
            : ""
        }`;
  };

  return (
    <div className="type-text-display">
      {memoizedLines.lines.map((line: any, lineIndex: number) => (
        <div className="type-text-display__line" key={lineIndex}>
          {line.map((word: any, i: number) => {
            let iscurrentWord =
              lineIndex === 0 && i === memoizedLines.currentWordIndex;
            return (
              <React.Fragment key={i}>
                <span className={wordClasses(word, iscurrentWord)}>
                  {word.syntax}
                </span>{" "}
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );

  //   return (
  //     <>
  //       {" "}
  //       <div className="type-text-display">
  //         {gameManager.text.map((word: any, i: number) => {
  //           let currentWord = i === gameManager.currentWord.index;

  //           currentLine += word.syntax.length;

  //           currentLine > MAX_CHAR_IN_LINE && lineCount++;
  //           console.log("lineCOutn ", lineCount, " fd ", currentLine);

  //           currentLine = currentLine > MAX_CHAR_IN_LINE ? 0 : currentLine;

  //           return currentWord ? (
  //             <>
  //               <span
  //                 className={`type-text-display__text type-text-display__text--current ${
  //                   gameManager.currentWord.typo
  //                     ? "type-text-display__text--current-typo"
  //                     : ""
  //                 }`}
  //                 key={i}
  //               >
  //                 {word.syntax}
  //               </span>
  //               {currentLine > MAX_CHAR_IN_LINE ? "<br/>" : " "}
  //             </>
  //           ) : (
  //             <>
  //               <span
  //                 className={`type-text-display__text ${
  //                   gameManager.text[i]?.correct === false
  //                     ? "type-text-display__text--typo"
  //                     : gameManager.text[i]?.correct === true
  //                     ? "type-text-display__text--correct "
  //                     : ""
  //                 }`}
  //                 key={i}
  //               >
  //                 {word.syntax}
  //               </span>
  //               {currentLine > MAX_CHAR_IN_LINE ? "<br/>" : " "}
  //             </>
  //           );
  //         })}
  //       </div>
  //       {lineCount}
  //     </>
  //   );
};

export default memo(TypeTextDisplay);
