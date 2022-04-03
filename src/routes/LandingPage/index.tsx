import React, { useEffect } from "react";
import { useGameDataContext } from "../../contexts/GameDataContext";
import { FaMousePointer } from "react-icons/fa";
import "./LandingPage.css";
import { AnimatedLogo } from "../../components/AnimatedLogo";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { text, startGame } = useGameDataContext();

  useEffect(() => {
    document.addEventListener("keyup", startGame);

    return () => {
      document.removeEventListener("keyup", startGame);
    };
  }, []);

  return (
    <div className="typing-insights" onClick={startGame}>
      <div className="typing-insights__overlay">
        <AnimatedLogo />
        <p className="typing-insights__instructions">
          <FaMousePointer />
          &nbsp; Click or press any key to start
        </p>
      </div>
      <p className="typing-insights__typing-text">
        {text.map((word: any) => `${word.syntax} `)}
      </p>
    </div>
  );
};

export default LandingPage;
