import React, { useEffect } from "react";
import { FaMousePointer } from "react-icons/fa";
import "./LandingPage.css";
import { useGameDataContext } from "../../context/contexts/GameDataContext/GameDataContext";
import AnimatedLogo from "../../components/shared/AnimatedLogo";
import { BACKGROUND_TEXT } from "../../components/routes/LandingPage/backgroundText";

const LandingPage: React.FC = () => {
  const { startGame } = useGameDataContext();

  useEffect(() => {
    document.addEventListener("keyup", startGame);

    return () => {
      document.removeEventListener("keyup", startGame);
    };
  });

  return (
    <div className="typing-insights" onClick={startGame}>
      <div className="typing-insights__overlay">
        <AnimatedLogo />
        <p className="typing-insights__instructions">
          <FaMousePointer />
          &nbsp; Click or press any key to start
        </p>
      </div>
      <p className="typing-insights__typing-text">{BACKGROUND_TEXT}</p>
    </div>
  );
};

export default LandingPage;
