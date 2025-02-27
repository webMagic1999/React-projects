import { useState, useEffect } from "react";

const useCountdown = (dueDate) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    if (!dueDate) {
      setTimeRemaining("No due date");
      return;
    }

    const updateCountdown = () => {
      const now = new Date();
      const end = new Date(dueDate);

      if (end < now) {
        setTimeRemaining("Due time has passed!");
        return;
      }

      let totalSeconds = Math.floor((end - now) / 1000);

      const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
      totalSeconds %= 30 * 24 * 60 * 60;

      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      totalSeconds %= 24 * 60 * 60;

      const hours = Math.floor(totalSeconds / (60 * 60));
      totalSeconds %= 60 * 60;

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      const parts = [];
      if (months) parts.push(`${months}M`);
      if (days || months) parts.push(`${days}D`);
      parts.push(`${String(hours).padStart(2, "0")}H`);
      parts.push(`${String(minutes).padStart(2, "0")}M`);
      parts.push(`${String(seconds).padStart(2, "0")}S`);

      setTimeRemaining(parts.join(" : "));
    };

    updateCountdown(); // Initial call to set the state immediately
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dueDate]);

  return timeRemaining;
};

export default useCountdown;
