import {
  CurrentWordType,
  textType,
  wordType,
} from "../../../../../context/contexts/GameDataContext/types";
import { LinesDataType, LineType } from "./types";

export const getLinesData: (
  currentWord: CurrentWordType,
  text: textType
) => LinesDataType = (currentWord: CurrentWordType, text: textType) => {
  const MAX_CHAR_IN_LINE = 65;

  let lines: LineType[] = [];
  let currentWordIndex = 0;

  let currentLineWords: LineType = [];
  let currentLineCharLength = 0;
  let savedWord: wordType | null = null;

  text.forEach((word: wordType, i: number) => {
    currentLineCharLength += word.syntax.length + 1;
    savedWord && currentLineWords.push(savedWord);

    if (currentLineCharLength > MAX_CHAR_IN_LINE) {
      currentLineCharLength = word.syntax.length + 1;
      lines.push(currentLineWords);
      currentLineWords = [];
      savedWord = word;
    } else {
      currentLineWords.push(word);
      savedWord = null;
    }

    if (i === currentWord.index) {
      lines = [];
      currentWordIndex =
        currentLineWords.length > 0 ? currentLineWords.length - 1 : 0;
    }
  });
  return { currentWordIndex, lines };
};
