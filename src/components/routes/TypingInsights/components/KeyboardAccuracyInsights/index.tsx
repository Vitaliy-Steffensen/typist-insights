import React from "react";
import InsightFormat from "../../insightsFormat/insightFormat";
import { ENGLISH_KEYBOARD } from "./keyboard-layouts/english";
import { keyboardKeyType } from "./keyboard-layouts/types";
import "./KeybordAccuracy.css";

interface indexProps {
  charactors: any;
}

const KeyboardAccuracyInsights: React.FC<indexProps> = ({ charactors }) => {
  const getBackgroundColor = (content: string) => {
    if (!charactors[content]) return {};
    const char = charactors[content];

    const accuracy = charactors[content].accuracy;

    const accuracyTopInterval = InsightFormat.topFragmentPercentage(accuracy);
    return {
      backgroundColor: InsightFormat.percentageToColor(accuracyTopInterval),
      color: "#000",
    };
  };

  const keyElement = (content: string, uniqueClass?: string) =>
    React.createElement(
      "div",
      {
        className: `key ${uniqueClass}`,
        style: getBackgroundColor(content),
      },
      content
    );

  return (
    <div className="keyboard-accuracy">
      <div className="keyboard-base">
        {ENGLISH_KEYBOARD.map((key: keyboardKeyType, i: number) => (
          <React.Fragment key={i}>
            {keyElement(key.name, key.unique)}
          </React.Fragment>
        ))}

        <div className="key">4</div>
        <div className="key">5</div>
        <div className="key">6</div>
        <div className="key">7</div>
        <div className="key">8</div>
        <div className="key">9</div>
        <div className="key">0</div>
        <div className="key">-</div>
        <div className="key">+</div>
        {keyElement("Delete", "delete")}
        <div className="key tab">Tab</div>
        <div className="key">Q</div>
        <div className="key">w</div>
        {keyElement("E")}
        {keyElement("R")}
        {keyElement("T")}
        {keyElement("Y")}
        {keyElement("U")}
        {keyElement("I")}
        {keyElement("O")}
        {keyElement("P")}
        <div className="key">[</div>
        <div className="key">]</div>
        <div className="key backslash">\</div>
        <div className="key capslock">CapsLock</div>
        {keyElement("A")}
        {keyElement("S")}
        {keyElement("D")}
        {keyElement("F")}
        {keyElement("G")}
        {keyElement("H")}
        {keyElement("J")}
        {keyElement("K")}
        {keyElement("L")}
        <div className="key">;</div>
        <div className="key">'</div>
        <div className="key return">Return</div>
        <div className="key leftshift">Shift</div>
        {keyElement("Z")}
        {keyElement("X")}
        {keyElement("C")}
        {keyElement("V")}
        {keyElement("B")}
        {keyElement("N")}
        {keyElement("M")}
        <div className="key">,</div>
        <div className="key">.</div>
        <div className="key">/</div>
        <div className="key rightshift">Shift</div>
        <div className="key leftctrl">Ctrl</div>
        <div className="key">Alt</div>
        <div className="key command">Command</div>
        <div className="key space">Space</div>
        <div className="key command">command</div>
        <div className="key">Alt</div>
        <div className="key">Ctrl</div>
        <div className="key">Fn</div>
      </div>
      <div className="keyboard-accuracy__range"></div>
      <div className="keyboard-accuracy__range-text">
        <p>100%</p>
        <p>70%</p>
      </div>
    </div>
  );
};

export default KeyboardAccuracyInsights;
