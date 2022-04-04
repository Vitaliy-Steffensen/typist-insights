import React, { memo } from "react";

interface testProps {
  memoizedLines: any;
  currentWord: any;
}

const Testds: React.FC<testProps> = ({ memoizedLines, currentWord }) => {
  console.log("rerenders");

  const wordClasses = (word: any, iscurrentWord: boolean) => {
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
};
export default memo(Testds);
