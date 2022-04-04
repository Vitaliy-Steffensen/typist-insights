import React from "react";
import { useGameDataContext } from "../../../context/contexts/GameDataContext/GameDataContext";
import KeyboardAccuracyInsights from "./components/KeyboardAccuracyInsights";
import { WordsTable } from "./components/WordsTable";
import WpmRange from "./components/WpmRange";
import InsightFormat from "./insightsFormat/insightFormat";
import "./TypingInsights.css";
import { VscDebugRestart } from "react-icons/vsc";
import { ScoreDiplay } from "../../shared/ScoreDisplay";

interface indexProps {}

export const TypingInsights: React.FC<indexProps> = ({}) => {
  const { gameStats, restart } = useGameDataContext();
  const wpm = gameStats.correctWords.length;
  const wordAccuracy =
    (gameStats.correctWords.length /
      (gameStats.correctWords.length + gameStats.wrongWords.length)) *
    100;

  const {
    charsWithAccuracy,
    charcactorAccuracy,
    correctChars,
    wrongChars,
    totalChars,
  } = InsightFormat.charactorAccuracy(gameStats.charactors);

  return (
    <div className="typing-insights">
      <VscDebugRestart className="typing-insights__restart" onClick={restart} />

      <div className="typing-insights__sidebar">
        <div className="typing-insights__sidebar-content">
          <ScoreDiplay title="wpm" score={wpm} />
          <ScoreDiplay title="word acc" score={`${wordAccuracy.toFixed(0)}%`} />
          <ScoreDiplay title="cpm" score={correctChars} />
        </div>
      </div>
      <div className="typing-insights__data-container">
        <h1 className="typing-insights__title-title">
          {InsightFormat.getTestTitle(wpm)}
        </h1>
        <h1 className="typing-insights__title">words per minute</h1>

        <div className="typing-insights__data-section">
          <WpmRange wpm={wpm} />
        </div>
        <h1 className="typing-insights__title">charactor accuracy</h1>
        <div className="typing-insights__data-section">
          <div className="typing-insights__key-acc">
            <ScoreDiplay
              title="you"
              score={`${charcactorAccuracy.toFixed(0)}%`}
              style={{
                color: InsightFormat.percentageToColor(
                  InsightFormat.topFragmentPercentage(charcactorAccuracy / 100)
                ),
              }}
            />
            <div className="typing-insights__line" />
            <ScoreDiplay
              title="average"
              score={"92%"}
              style={{ color: "#58A6FF" }}
            />
          </div>
          <div className="typing-insights__key-acc">
            <ScoreDiplay
              title="correct charactors"
              score={correctChars}
              small
            />
            <ScoreDiplay
              title="wrong charactors"
              style={{ color: "#FC0200" }}
              score={wrongChars}
              small
            />
            <ScoreDiplay title="total charactors" score={totalChars} small />
          </div>
          <p className="score-display__title">key accuracy</p>
          <KeyboardAccuracyInsights charactors={charsWithAccuracy} />
        </div>
        <h1 className="typing-insights__title">words encountered</h1>
        <div className="typing-insights__data-section">
          <WordsTable />
        </div>
      </div>
    </div>
  );
};
