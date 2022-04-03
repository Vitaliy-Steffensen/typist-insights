import React, { useEffect, useMemo, useState } from "react";
import { Table } from "../../../../components/Table";
import { useGameDataContext } from "../../../../contexts/GameDataContext";

interface indexProps {}

type word = {
  syntax: string;
  popularity: number;
  typo?: string;
};

type formattedWord = {
  word: string;
  popularity?: string;
  charactors: number;
  typo?: string;
};

export const WordsTable: React.FC<indexProps> = ({}) => {
  const { gameStats } = useGameDataContext();

  const addTypos = (array: word[], typo: boolean) =>
    array.map((word: word) => {
      return {
        word: word.syntax,
        typo: typo ? word.typo : "No typo",
        charactors: word.syntax.length,
        popularity: `top ${word.popularity}`,
      };
    });

  const [unsortedWords] = useState([
    ...addTypos(gameStats.wrongWords, true),
    ...addTypos(gameStats.correctWords, false),
  ]);
  const [sortedWords, setSortedWords] =
    useState<formattedWord[]>(unsortedWords);
  const [sorting, setSorting] = useState<string>("");

  if (gameStats.wrongWords.length + gameStats.correctWords.length === 0)
    return <h1>No words</h1>;

  const headers: string[] = Object.keys(unsortedWords[0]);

  const sort = (column: string) => {
    if (column === sorting) {
      setSorting("");
      setSortedWords([
        ...addTypos(gameStats.wrongWords, true),
        ...addTypos(gameStats.correctWords, false),
      ]);
      return;
    }

    setSorting(column);
    setSortedWords(() =>
      unsortedWords.sort((a: any, b: any) => {
        //isNumber
        if (!isNaN(parseInt(a[column])) && !isNaN(parseInt(b[column])))
          return a[column] - b[column];

        return a[column].toString().localeCompare(b[column].toString());
      })
    );
  };

  return (
    <Table headers={headers} data={sortedWords} sorting={sorting} sort={sort} />
  );
};
