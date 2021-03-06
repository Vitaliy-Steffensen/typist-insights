import React from "react";
import { InsightSecion } from "../InsightSecion";
import { WpmRangeProps } from "./types";
import "./WpmRange.css";

const WpmRange: React.FC<WpmRangeProps> = ({ wpm }) => {
  const AVARAGE_WPM = 41;

  return (
    <InsightSecion title="words per minute">
      <div className="container">
        <div className="range-slider">
          <span
            className="rs-label"
            style={{ marginLeft: `${(wpm / 216) * 1000}px` }}
          >
            {wpm}
          </span>
          <input
            className="rs-range"
            type="range"
            style={{
              backgroundSize: `${(wpm / 216) * 100}% 100%`,
              zIndex: wpm >= AVARAGE_WPM ? 1 : 20,
            }}
            defaultValue={wpm}
            min="0"
            max="216"
          />
          <div
            className="handle"
            style={{ marginLeft: `${(wpm / 216) * 1000}px` }}
          />
          <div className="average-wpm" />
        </div>

        <div className="box-minmax">0</div>
        <span className="wpm-range__record-title">
          216 <br />
          👑 World Record
        </span>
      </div>
    </InsightSecion>
  );
};

export default WpmRange;
