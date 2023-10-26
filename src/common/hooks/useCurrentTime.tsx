import { useState, useEffect } from "react";

/* eslint-disable */
export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  /* Updates the reminder every 15 seconds */
  useEffect(() => {
    const checker = setInterval(() => {
      setCurrentTime(new Date());
    }, 15000);
    return () => clearInterval(checker);
  }, []);

  return currentTime;
};
