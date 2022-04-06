import React from "react";
import { ScoreDiplay } from "../../../../shared/ScoreDisplay";
import InsightFormat from "../../insightsFormat/insightFormat";
import { CharactorAccuracyInsightsProps } from "./types";
import "./CharactorAccuracyInsights.css";
import { InsightSecion } from "../InsightSecion";

export const CharactorAccuracyInsights: React.FC<
  CharactorAccuracyInsightsProps
> = ({ charcactorAccuracy, correctChars, wrongChars }) => {
  const totalChars = correctChars + wrongChars;

  return (
    <InsightSecion title="charactor accuracy">
      <div className="charactor-accuracy-insights">
        <ScoreDiplay
          title="you"
          score={`${charcactorAccuracy.toFixed(0)}%`}
          style={{
            color: InsightFormat.percentageToColor(
              InsightFormat.topFragmentPercentage(charcactorAccuracy / 100)
            ),
          }}
        />
        <div className="charactor-accuracy-insights__section-split" />
        <ScoreDiplay
          title="average"
          score={"92%"}
          style={{ color: "#58A6FF" }}
        />
      </div>
      <div className="charactor-accuracy-insights">
        <ScoreDiplay title="correct charactors" score={correctChars} small />
        <ScoreDiplay
          title="wrong charactors"
          style={{ color: "#FC0200" }}
          score={wrongChars}
          small
        />
        <ScoreDiplay title="total charactors" score={totalChars} small />
      </div>
    </InsightSecion>
  );
};
