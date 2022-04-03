import { useEffect, useState } from "react";

export const useCountDown = (seconds = 8) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);
  const [interval, setLocalInterval] = useState<any>(null);

  const startCountDown = () => {
    setTimeLeft(seconds);
    setLocalInterval(setInterval(countTime, 1000));
  };

  function countTime() {
    if (timeLeft >= 0) return setTimeLeft((prevState) => prevState - 1);
    clearInterval(interval);
  }

  // useEffect(() => {
  //   if (timeLeft >= 0) return;
  //   clearInterval(interval);
  // }, [timeLeft]);

  return {
    startCountDown,
    timeLeft,
  };
};
