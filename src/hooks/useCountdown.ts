import { useState } from "react";
import { useIsMounted } from "./useIsMounted";

interface useCountdownType {
  startCountdown: () => void;
  timeLeft: number;
  onTimerEnds: (callBackFunction: () => void) => void;
}

export const useCountdown = (seconds: number = 10): useCountdownType => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);
  const isMounted = useIsMounted();

  let interval: any = null;
  let intervalCounter = seconds;
  let callback: () => void;

  const startCountdown = () => {
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
    startCountdown,
    timeLeft,
    onTimerEnds,
  };
};
