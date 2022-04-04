import React, { useMemo, memo } from "react";
import { wordType } from "../../../../../context/contexts/GameDataContext/types";
import { getLinesData } from "./formatLine";
import { LineType, TypeTextDisplayProps } from "./types";
import "./TypeTextDisplay.css";

const TypeTextDisplay: React.FC<TypeTextDisplayProps> = ({
  currentWord,
  text,
}) => {
  const memoizedLines = useMemo(
    () => getLinesData(currentWord, text),
    [currentWord, text]
  );

  const wordClasses = (word: wordType, iscurrentWord: boolean) => {
    return iscurrentWord
      ? `type-text-display__text type-text-display__text--current ${
          currentWord.typo ? "type-text-display__text--current-typo" : ""
        }`
      : `type-text-display__text ${
          word?.typo === true
            ? "type-text-display__text--typo"
            : word?.typo === false
            ? "type-text-display__text--correct "
            : ""
        }`;
  };

  return (
    <div className="type-text-display">
      {memoizedLines.lines.map((line: LineType, lineIndex: number) => (
        <div className="type-text-display__line" key={lineIndex}>
          {line.map((word: wordType, i: number) => {
            let iscurrentWord =
              lineIndex === 0 && i === memoizedLines.currentWordIndex;
            return (
              <React.Fragment key={i}>
                <span className={wordClasses(word, iscurrentWord)}>
                  {word.syntax}
                </span>
                &nbsp;
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default memo(TypeTextDisplay);
