import React, { createContext, useContext, useReducer, useState } from "react";
import Words from "../../../utils/words/Words";
import { ACTIONS } from "../../actions/gameStatsActions";
import gameStatsReducer from "../../reducers/gameStatsReducer";
import {
  CurrentWordType,
  GameManagerType,
  GameState,
  language,
  textType,
} from "./types";

export const GameDataContext = createContext<any>(null);

export const GameDataProvider = ({ children }: any) => {
  const [language] = useState<language>("english");
  const [gameState, setGameState] = useState<GameState>("readyToPlay");
  const [text, setText] = useState<textType>([]);
  const [currentWord, setCurrentWord] = useState<CurrentWordType>({
    syntax: "",
    index: 0,
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
    const initialText: textType = Words.getRandomText("english");
    setText([...initialText]);
    setCurrentWord((prev: any) => {
      return {
        ...prev,
        index: 0,
        syntax: initialText[0].syntax,
      };
    });
  };

  const restart = () => {
    setGameState("readyToPlay");
    dispatch({
      type: ACTIONS.RESET,
      payload: {},
    });
  };

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
      setText((prevText) => [...prevText, ...Words.getRandomText(language)]);

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
        i !== currentWordIndex ? word : { ...word, typo: !typo }
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

  const removeCharInCurrentWord = (value: string) => {
    setCurrentWord((prev: CurrentWordType) => {
      return {
        ...prev,
        typo: !currentWord.syntax.includes(value),
        currentCharIndex: value.length > 0 ? value.length - 1 : 0,
      };
    });
  };

  const endGame = () => {
    setGameState("completed");
  };

  const value: GameManagerType = {
    gameState,
    startGame,
    text,
    submitInput,
    gameStats,
    currentWord,
    setTypoInCurrentWord,
    endGame,
    addCharactor,
    restart,
    removeCharInCurrentWord,
  };

  return (
    <GameDataContext.Provider value={value}>
      {children}
    </GameDataContext.Provider>
  );
};

export const useGameDataContext = () => useContext(GameDataContext);
