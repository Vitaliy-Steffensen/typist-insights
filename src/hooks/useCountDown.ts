import { useState } from "react";
import { useIsMounted } from "./useIsMounted";

export const useCountDown = (seconds = 1000) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);
  const isMounted = useIsMounted();

  let interval: any = null;
  let intervalCounter = seconds;
  let callback: () => void;

  const startCountDown = () => {
    setTimeLeft(seconds);
    interval = setInterval(countTime, 1000);
  };

  function countTime() {
    if (intervalCounter > 0) {
      intervalCounter--;
      return isMounted && setTimeLeft((prevState) => prevState - 1);
    }

    clearInterval(interval);

    callback();
    callback = () => null;
  }

  const onTimerEnds = (callBackFunction: () => void) => {
    callback = callBackFunction;
  };

  return {
    startCountDown,
    timeLeft,
    onTimerEnds,
  };
};
