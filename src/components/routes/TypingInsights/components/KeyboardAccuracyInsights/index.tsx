import React, { useState } from "react";
import { useGameDataContext } from "../../../../../context/contexts/GameDataContext/GameDataContext";
import InsightFormat from "../../insightsFormat/insightFormat";
import { InsightSecion } from "../InsightSecion";
import { getKeyboardLayout } from "./keyboard-layouts";
import { keyboardKeyType } from "./keyboard-layouts/types";
import "./KeybordAccuracy.css";
import { KeyboardAccuracyInsightsProps } from "./types";

const KeyboardAccuracyInsights: React.FC<KeyboardAccuracyInsightsProps> = ({
  charactors,
}) => {
  const { language } = useGameDataContext();
  const keyboard: keyboardKeyType[] = getKeyboardLayout(language);

  const getBackgroundColor = (content: string) => {
    if (!charactors[content]) return {};

    const accuracyTopInterval = InsightFormat.topFragmentPercentage(
      charactors[content].accuracy
    );

    return {
      backgroundColor: InsightFormat.percentageToColor(accuracyTopInterval),
      color: "#000",
    };
  };

  const keyElement = (content: string, uniqueClass?: string) =>
    React.createElement(
      "div",
      {
        className: `keyboard-key  ${
          uniqueClass ? `keyboard-key--${uniqueClass}` : ""
        }`,
        style: getBackgroundColor(content),
      },
      content
    );

  return (
    <InsightSecion title="key accuracy">
      <div className="keyboard-accuracy">
        <div className="keyboard-base">
          {keyboard.map((key: keyboardKeyType, i: number) => (
            <React.Fragment key={i}>
              {keyElement(key.name, key.unique)}
            </React.Fragment>
          ))}
        </div>

        <div className="keyboard-accuracy__range" />
        <div className="keyboard-accuracy__range-text">
          <p>100%</p>
          <p>70%</p>
        </div>
      </div>
    </InsightSecion>
  );
};

export default KeyboardAccuracyInsights;
