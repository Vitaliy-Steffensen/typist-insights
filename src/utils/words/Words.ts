import { language } from "../../context/contexts/GameDataContext/types";
import { DANISH_WORDS } from "./danish";
import { ENGLISH_WORDS } from "./english";
import { defaultWordType } from "./types";

export default class Words {
  static getRandomText(language: language, amount: number = 40) {
    const words: defaultWordType[] = this.getWords(language);
    let text: defaultWordType[] = [];

    for (let i = 0; i < amount; i++) {
      const latestWord = text.length > 0 ? text[text.length - 1].syntax : "";

      text.push(
        words[this.getRandomUniqueWordId(words, latestWord, words.length - 1)]
      );
    }

    return text;
  }

  static getWords(languge: language): defaultWordType[] {
    switch (languge) {
      case "danish":
        return DANISH_WORDS;
      default:
        return ENGLISH_WORDS;
    }
  }

  static getRandomUniqueWordId(
    words: defaultWordType[],
    exeption: string,
    max: number,
    min: number = 0
  ): number {
    const randomWordIndex = Math.round(Math.random() * (max - min) + min);

    return words[randomWordIndex].syntax === exeption
      ? this.getRandomUniqueWordId(words, exeption, max)
      : randomWordIndex;
  }
}
