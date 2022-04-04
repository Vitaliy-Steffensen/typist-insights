export type GameState = "readyToPlay" | "initiated" | "completed";

export interface GameManagerType {
  gameState: any;
  startGame: () => void;
  text: textType;
  submitInput: any;
  gameStats: any;
  currentWord: CurrentWordType;
  setTypoInCurrentWord: (typo: boolean) => void;
  setGameState: any;
  addCharactor: (charactor: string, typo?: boolean) => void;
  restart: () => void;
  removeCharInCurrentWord: (value: string) => void;
}

export interface CurrentWordType {
  syntax: string;
  index: number;
  typo: boolean;
  currentCharIndex: number;
}

export type textType = wordType[];

export interface GameStatsType {
  correctWords: [wordType];
  wrongWords: [wordType];
  charactors: { [key: string]: string };
}

export interface wordType {
  syntax: string;
  popularity: number;
  typo?: boolean;
}

export type language = "english" | "danish";
