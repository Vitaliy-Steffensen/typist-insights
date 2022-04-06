import React from "react";
import { useGameDataContext } from "../../../context/contexts/GameDataContext/GameDataContext";
import KeyboardAccuracyInsights from "./components/KeyboardAccuracyInsights";
import { WordsTable } from "./components/WordsTable";
import WpmRange from "./components/WpmRange";
import InsightFormat from "./insightsFormat/insightFormat";
import "./TypingInsights.css";
import { VscDebugRestart } from "react-icons/vsc";
import { InsightsSidebar } from "./components/InsightsSidebar";
import { CharactorAccuracyInsights } from "./components/CharactorAccuracyInsights";
import { ScrollIndicator } from "../../shared/ScrollIndicator";

export const TypingInsights: React.FC = () => {
  const { gameStats, restart } = useGameDataContext();
  const { getWordAccuracy, getTestTitle } = InsightFormat;
  const { correctWords, wrongWords } = gameStats;
  const wpm = correctWords.length;
  const wordAccuracy = getWordAccuracy(correctWords, wrongWords);

  const { charsWithAccuracy, charcactorAccuracy, correctChars, wrongChars } =
    InsightFormat.getCharactorAccuracy(gameStats.charactors);

  return (
    <div className="typing-insights">
      <VscDebugRestart className="typing-insights__restart" onClick={restart} />
      <InsightsSidebar
        wpm={wpm}
        cpm={correctChars}
        wordAccuracy={wordAccuracy}
      />
      <ScrollIndicator />

      <>
        <h1 className="typing-insights__header">{getTestTitle(wpm)}</h1>

        <WpmRange wpm={wpm} />
        <CharactorAccuracyInsights
          charcactorAccuracy={charcactorAccuracy}
          correctChars={correctChars}
          wrongChars={wrongChars}
        />
        <KeyboardAccuracyInsights charactors={charsWithAccuracy} />
        <WordsTable />
      </>
    </div>
  );
};
