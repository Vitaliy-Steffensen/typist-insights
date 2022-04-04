import {
  CurrentWordType,
  textType,
} from "../../../../../../context/contexts/GameDataContext/types";
import { getLinesData } from "../formatLine";

test("getTestTitle at 200", () => {
  const text: textType = [
    { syntax: "hej", popularity: 5 },
    { syntax: "tdgfgfd", popularity: 5 },
    { syntax: "gfdgf", popularity: 5 },
    { syntax: "gfd", popularity: 5 },
    { syntax: "gfdgfdshk", popularity: 5 },
    { syntax: "hgfdgej", popularity: 5 },
    { syntax: "kjhkglgkjvf", popularity: 5 },
    { syntax: "jbvgh", popularity: 5 },
    { syntax: "c jyh", popularity: 5 },
    { syntax: "lbnig", popularity: 5 },
    { syntax: "xbyt", popularity: 5 },
    { syntax: "nbkyfi", popularity: 5 },
    { syntax: "nbftju", popularity: 5 },
    { syntax: "æmnpio", popularity: 5 },
  ];

  const currentWord: CurrentWordType = {
    syntax: "hej",
    index: 0,
    typo: false,
    currentCharIndex: 0,
  };

  expect(getLinesData(currentWord, text)).toEqual(
    expect.objectContaining({
      currentWordIndex: expect.any(Number),
      lines: expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            syntax: expect.any(String),
            popularity: expect.any(Number),
          }),
        ]),
      ]),
    })
  );
});
