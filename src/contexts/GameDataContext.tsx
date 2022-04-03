import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTIONS } from "../actions/gameStatsActions";
import gameStatsReducer from "../reducers/gameStatsReducer";

export const GameDataContext = createContext<any>(null);

type GameState = "readyToPlay" | "initiated" | "completed";
export type GameManagerType = {
  gameState: any;
  timeLeft: number;
  startGame: any;
  text: any;
  submitInput: any;
  gameStats: any;
  currentWord: {
    syntax: any;
    index: any;
    typo: any;
  };
  setTypoInCurrentWord: any;
  setGameState: any;
  addCharactor: any;
  restart: any;
};

interface GameStatsType {
  correctWords: any[];
  wrongWords: string[];
}

export const GameDataProvider = ({ children }: any) => {
  const [gameState, setGameState] = useState<GameState>("readyToPlay");
  const [text, setText] = useState<any[]>([]);
  const [currentWord, setCurrentWord] = useState<any>({
    syntax: "",
    index: -1,
    typo: false,
    currentCharIndex: 0,
  });
  const [gameStats, dispatch] = useReducer(gameStatsReducer, {
    correctWords: [],
    wrongWords: [],
    charactors: {},
  });

  const startGame = () => {
    setGameState("initiated");
  };

  const restart = () => {
    setGameState("readyToPlay");
    dispatch({
      type: ACTIONS.RESET,
      payload: {},
    });
  };

  useEffect(() => {
    const initialText = AddText();
    setText([...initialText]);
    setCurrentWord((prev: any) => {
      return {
        ...prev,
        index: 0,
        syntax: initialText[0].syntax,
      };
    });
  }, []);

  const submitInput = (word: string) => {
    setTypoInCurrentWord(false);
    setTypoInCompletedWord(currentWord.syntax === word, currentWord.index);

    dispatch({
      type: ACTIONS[currentWord.syntax === word ? "ADD_CORRECT" : "ADD_WRONG"],
      payload: {
        ...text[currentWord.index],
        typo: currentWord.syntax !== word ? word : "",
      },
    });

    currentWord.index + 40 > text.length &&
      setText((prevText) => [...prevText, ...AddText()]);

    setNewCurrentWord();
  };

  const setNewCurrentWord = () =>
    setCurrentWord((prev: any) => {
      return {
        ...prev,
        index: prev.index + 1,
        syntax: text[prev.index + 1].syntax,
        currentCharIndex: 0,
      };
    });

  const setTypoInCurrentWord = (typo: boolean) => {
    setCurrentWord((prev: any) => {
      return {
        ...prev,
        typo,
      };
    });
  };

  const setTypoInCompletedWord = (typo: boolean, currentWordIndex: number) => {
    setText((prev: any) =>
      prev.map((word: any, i: number) =>
        i !== currentWordIndex ? word : { ...word, correct: typo }
      )
    );
  };

  const addCharactor = (charactor: string, typo: boolean = false) => {
    charactor &&
      dispatch({
        type: ACTIONS.ADD_CHARACTOR,
        payload: { charactor, typo },
      });

    !typo &&
      setCurrentWord((prev: any) => {
        return {
          ...prev,
          currentCharIndex: prev.currentCharIndex + 1,
        };
      });
  };

  useEffect(() => {
    console.log("currentWord.currentCharIndex ", currentWord.currentCharIndex);
  }, [currentWord.currentCharIndex]);

  const value = {
    gameState,
    startGame,
    text,
    submitInput,
    gameStats,
    currentWord,
    setTypoInCurrentWord,
    setGameState,
    addCharactor,
    setCurrentWord,
    restart,
  };

  return (
    <GameDataContext.Provider value={value}>
      {children}
    </GameDataContext.Provider>
  );
};

export const useGameDataContext = () => useContext(GameDataContext);

const WORDS = [
  { syntax: "the", popularity: 10 },
  { syntax: "of", popularity: 10 },
  { syntax: "and", popularity: 10 },
  { syntax: "you", popularity: 10 },
  { syntax: "have", popularity: 50 },
  { syntax: "number", popularity: 100 },
  { syntax: "would", popularity: 100 },
  { syntax: "make", popularity: 100 },
  { syntax: "back", popularity: 200 },
  { syntax: "work", popularity: 200 },
  { syntax: "something", popularity: 200 },
  { syntax: "woman", popularity: 200 },
  { syntax: "much", popularity: 200 },
  { syntax: "become", popularity: 200 },
  { syntax: "student", popularity: 200 },
  { syntax: "anything", popularity: 300 },
  { syntax: "room", popularity: 300 },
  { syntax: "understand", popularity: 300 },
  { syntax: "young", popularity: 300 },
  { syntax: "mother", popularity: 300 },
  { syntax: "information", popularity: 500 },
];

const AddText = () => {
  let words = [];

  //brug den der array, hvor man kn adde værdi istedet, så man kan tjekke at ordrenede ikke kan gentages lige efter hinanden
  for (let i = 0; i < 40; i++) {
    // console.log(
    //   "index ",
    //   Math.round(Math.random() * (WORDS.length - 1 - 0) + 0)
    // );
    words.push(WORDS[Math.round(Math.random() * (WORDS.length - 1 - 0) + 0)]);
  }

  return words;
};
