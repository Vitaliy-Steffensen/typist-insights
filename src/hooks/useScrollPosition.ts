import { useEffect, useState } from "react";

export const useScrollPosition = (): number => {
  const [scrollPosition, setPosition] = useState<number>(0);

  useEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY);
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
