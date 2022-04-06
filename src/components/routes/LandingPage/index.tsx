import React, { useEffect } from "react";
import { FaMousePointer } from "react-icons/fa";
import "./LandingPage.css";
import { BACKGROUND_TEXT } from "./backgroundText";
import { useGameDataContext } from "../../../context/contexts/GameDataContext/GameDataContext";
import AnimatedLogo from "../../shared/AnimatedLogo";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { startGame } = useGameDataContext();
  useEffect(() => {
    document.addEventListener("keyup", startGame);

    return () => {
      document.removeEventListener("keyup", startGame);
    };
  }, [startGame]);

  return (
    <div className="landing-page" onClick={startGame}>
      <div className="landing-page__overlay">
        <AnimatedLogo />
        <p className="landing-page__instructions">
          <FaMousePointer />
          &nbsp; Click or press any key to start
        </p>
      </div>
      <p className="landing-page__typing-text">{BACKGROUND_TEXT}</p>
    </div>
  );
};

export default LandingPage;
