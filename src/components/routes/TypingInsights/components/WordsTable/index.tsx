import React, { useState } from "react";
import { useGameDataContext } from "../../../../../context/contexts/GameDataContext/GameDataContext";
import { isNumber } from "../../../../../utils/utilFunctions";
import { Table } from "../../../../shared/Table";
import InsightFormat from "../../insightsFormat/insightFormat";
import { InsightSecion } from "../InsightSecion";
import { tableFormattedWord } from "./types";

export const WordsTable: React.FC = () => {
  const { gameStats } = useGameDataContext();
  const { correctWords, wrongWords } = gameStats;

  const { tableFormatWords } = InsightFormat;
  const [unsortedWords] = useState([
    ...tableFormatWords(gameStats.wrongWords, true),
    ...tableFormatWords(gameStats.correctWords, false),
  ]);
  const [sorting, setSorting] = useState<string>("");
  const [sortedWords, setSortedWords] =
    useState<tableFormattedWord[]>(unsortedWords);

  const sort = (column: string) => {
    if (column === sorting) {
      setSorting("");
      setSortedWords([
        ...tableFormatWords(gameStats.wrongWords, true),
        ...tableFormatWords(gameStats.correctWords, false),
      ]);
      return;
    }

    setSorting(column);
    setSortedWords(() =>
      unsortedWords.sort((a: any, b: any) => {
        if (isNumber(a[column]) && isNumber(b[column]))
          return a[column] - b[column];

        return a[column].toString().localeCompare(b[column].toString());
      })
    );
  };

  if (correctWords.length + wrongWords.length === 0)
    return (
      <InsightSecion title="No words encountered">
        <></>
      </InsightSecion>
    );

  const headers: string[] = Object.keys(unsortedWords[0]);

  return (
    <InsightSecion title="words encountered">
      <Table
        headers={headers}
        data={sortedWords}
        sorting={sorting}
        sort={sort}
      />
    </InsightSecion>
  );
};
