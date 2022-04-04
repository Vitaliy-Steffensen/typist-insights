import {
  CurrentWordType,
  textType,
  wordType,
} from "../../../../../context/contexts/GameDataContext/types";

export interface TypeTextDisplayProps {
  text: textType;
  currentWord: CurrentWordType;
}

export type LineType = wordType[];

export type LiensData = {
  lines: LineType[];
  currentWordLineIndex: number;
  currentWordIndex: number;
};
