import React from "react";
import { useScrollNavigation } from "../hooks/useScrollNavigation";
import { CoffeeImageSection } from "./CoffeeImageSection";
import { CoffeeContentSection } from "./CoffeeContentSection";
import { ProgressBar } from "./ProgressBar";
import { coffeeItems } from "../data/coffeeData";

export const CoffeeMenu: React.FC = () => {
  const { currentIndex, isScrolling, setCurrentIndex } = useScrollNavigation(
    coffeeItems.length
  );
  const currentItem = coffeeItems[currentIndex];

  return (
    <div className="min-h-screen flex no-select">
      <CoffeeImageSection currentItem={currentItem} isScrolling={isScrolling} />

      <CoffeeContentSection
        currentItem={currentItem}
        isScrolling={isScrolling}
        totalItems={coffeeItems.length}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />

      <ProgressBar
        currentIndex={currentIndex}
        totalItems={coffeeItems.length}
        currentItem={currentItem}
      />
    </div>
  );
};
