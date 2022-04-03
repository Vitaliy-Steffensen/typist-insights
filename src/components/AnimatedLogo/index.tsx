import React, { useEffect, useState } from "react";
import { useIsMounted } from "../../hooks/useIsMounted";
import "./AnimatedLogo.css";

const AnimatedLogo: React.FC<unknown> = () => {
  const [isLogoIndicatorVisible, setIsLogoIndicatorVisible] =
    useState<boolean>(false);
  let interval: any;

  useEffect(() => {
    interval = setInterval(
      () => setIsLogoIndicatorVisible((prev) => !prev),
      500
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1 className="animated-logo">
      typist-insights{isLogoIndicatorVisible ? "|" : ""}
    </h1>
  );
};
export default AnimatedLogo;
