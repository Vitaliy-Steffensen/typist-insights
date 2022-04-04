//string | { charactor: string; typo: boolean }

import { ACTIONS } from "../actions/gameStatsActions";

const reducer = (
  state: any,
  action: {
    type: string;
    payload: {
      syntax?: string;
      popularity?: number;
      charactor?: any;
      typo?: any;
    };
  }
) => {
  switch (action.type) {
    case ACTIONS.ADD_CORRECT:
      return {
        ...state,
        correctWords: [...state.correctWords, action.payload],
      };

    case ACTIONS.ADD_WRONG:
      return { ...state, wrongWords: [...state.wrongWords, action.payload] };
    case ACTIONS.RESET:
      return {
        correctWords: [],
        wrongWords: [],
        charactors: {},
      };
    case ACTIONS.ADD_CHARACTOR:
      return {
        ...state,
        charactors: {
          ...state.charactors,
          [action.payload?.charactor.toUpperCase()]: getCharactorValue(
            state.charactors,
            action.payload.charactor.toUpperCase(),
            action.payload.typo
          ),
        },
      };
    default:
      throw new Error();
  }
};

export default reducer;

const getCharactorValue = (
  prevCharactors: any,
  charactor: string,
  typo: boolean
) => {
  const isAlocated = prevCharactors[charactor];

  if (!isAlocated) return { correct: typo ? 0 : 1, wrong: typo ? 1 : 0 };

  const prevState = prevCharactors[charactor];

  return typo
    ? { ...prevState, wrong: prevState.wrong + 1 }
    : { ...prevState, correct: prevState.correct + 1 };
};
