import React from "react";
import { ScoreDiplay } from "../../../../shared/ScoreDisplay";
import { InsightsSidebarProps } from "./types";
import "./InsightsSidebar.css";

export const InsightsSidebar: React.FC<InsightsSidebarProps> = ({
  wpm,
  cpm,
  wordAccuracy,
}) => {
  return (
    <div className="insights-sidebar">
      <div className="insights-sidebar__content">
        <ScoreDiplay title="wpm" score={wpm} />
        <ScoreDiplay title="cpm" score={cpm} />
        <ScoreDiplay title="word acc" score={`${wordAccuracy.toFixed(0)}%`} />
      </div>
    </div>
  );
};
