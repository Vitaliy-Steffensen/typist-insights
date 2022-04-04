import {
  CurrentWordType,
  textType,
  wordType,
} from "../../../../../context/contexts/GameDataContext/types";
import { LiensData, LineType } from "./types";

export const getLinesData: (
  currentWord: CurrentWordType,
  text: textType
) => LiensData = (currentWord: CurrentWordType, text: textType) => {
  let result: LiensData = {
    lines: [],
    currentWordLineIndex: 0,
    currentWordIndex: 0,
  };

  const MAX_CHAR_IN_LINE = 65;

  let currentLineCharLength = 0;
  let currentLine = 0;
  let allLines: LineType[] = [];
  let currentLineWords: LineType = [];

  let savedWord: any = null;

  text.forEach((word: wordType, i: number) => {
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
