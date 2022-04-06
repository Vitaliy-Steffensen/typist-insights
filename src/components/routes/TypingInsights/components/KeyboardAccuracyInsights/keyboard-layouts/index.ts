import { language } from "../../../../../../context/contexts/GameDataContext/types";
import { DANISH_KEYBOARD } from "./danish";
import { ENGLISH_KEYBOARD } from "./english";

export const getKeyboardLayout = (language: language) => {
  switch (language) {
    case "danish":
      return DANISH_KEYBOARD;
    default:
      return ENGLISH_KEYBOARD;
  }
};
