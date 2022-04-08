import React, { useMemo } from "react";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import "./ScrollIndicator.css";

export const ScrollIndicator: React.FC = () => {
  const scrollPosition = useScrollPosition();

  const inVisibleArea = useMemo(() => scrollPosition < 300, [scrollPosition]);

  const fadeStyle = {
    opacity: inVisibleArea ? 1 - scrollPosition / 300 : 0,
    animation: scrollPosition === 0 ? "updown 3s ease infinite" : "none",
  };

  return (
    <BsFillArrowDownCircleFill className="scroll-indicator" style={fadeStyle} />
  );
};
