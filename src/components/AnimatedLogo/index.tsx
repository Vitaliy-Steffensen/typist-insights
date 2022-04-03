import React, { useEffect, useState } from "react";
import "./AnimatedLogo.css";

interface indexProps {}

export const AnimatedLogo: React.FC<indexProps> = ({}) => {
  const [indicatorInterval, setIndicatorInterval] = useState<any>();
  const [isLogoIndicatorVisible, setIsLogoIndicatorVisible] =
    useState<boolean>(false);

  useEffect(() => {
    setIndicatorInterval(
      setInterval(() => setIsLogoIndicatorVisible((prev) => !prev), 500)
    );
    return () => {
      clearInterval(indicatorInterval);
    };
  }, []);

  return (
    <h1 className="animated-logo">
      typist-insights{isLogoIndicatorVisible ? "|" : ""}
    </h1>
  );
};
