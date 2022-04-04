import React from "react";
import "./ScoreDisplay.css";
import { ScoreDiplayProps } from "./types";

export const ScoreDiplay: React.FC<ScoreDiplayProps> = ({
  title,
  score,
  style,
  small = false,
}) => {
  return (
    <div className="score-display">
      <p
        className={`score-display__title ${
          small ? "score-display__title--small" : ""
        }`}
      >
        {title}
      </p>
      <h3
        className={`score-display__score ${
          small ? "score-display__score--small" : ""
        }`}
        style={style}
      >
        {score}
      </h3>
    </div>
  );
};
