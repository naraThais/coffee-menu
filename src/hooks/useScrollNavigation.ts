import { useState, useEffect } from "react";
import { ScrollNavigationHook } from "../types/coffee";

export const useScrollNavigation = (
  totalItems: number
): ScrollNavigationHook => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime < 800) return;

      setIsScrolling(true);
      setLastScrollTime(now);

      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
      } else {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
      }

      setTimeout(() => setIsScrolling(false), 600);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [lastScrollTime, totalItems]);

  return {
    currentIndex,
    isScrolling,
    setCurrentIndex,
  };
};
