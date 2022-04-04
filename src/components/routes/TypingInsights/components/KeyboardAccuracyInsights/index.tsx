import React from "react";
import InsightFormat from "../../insightsFormat/insightFormat";
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

  const key = (content: string, uniqueClass?: string) =>
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
        {key("~")}
        <div className="key">1</div>
        <div className="key">2</div>
        <div className="key">3</div>
        <div className="key">4</div>
        <div className="key">5</div>
        <div className="key">6</div>
        <div className="key">7</div>
        <div className="key">8</div>
        <div className="key">9</div>
        <div className="key">0</div>
        <div className="key">-</div>
        <div className="key">+</div>
        {key("Delete", "delete")}
        <div className="key tab">Tab</div>
        <div className="key">Q</div>
        <div className="key">w</div>
        {key("E")}
        {key("R")}
        {key("T")}
        {key("Y")}
        {key("U")}
        {key("I")}
        {key("O")}
        {key("P")}
        <div className="key">[</div>
        <div className="key">]</div>
        <div className="key backslash">\</div>
        <div className="key capslock">CapsLock</div>
        {key("A")}
        {key("S")}
        {key("D")}
        {key("F")}
        {key("G")}
        {key("H")}
        {key("J")}
        {key("K")}
        {key("L")}
        <div className="key">;</div>
        <div className="key">'</div>
        <div className="key return">Return</div>
        <div className="key leftshift">Shift</div>
        {key("Z")}
        {key("X")}
        {key("C")}
        {key("V")}
        {key("B")}
        {key("N")}
        {key("M")}
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
