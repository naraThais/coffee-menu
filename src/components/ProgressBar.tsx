import React from "react";
import { CoffeeItem } from "../types/coffee";

interface ProgressBarProps {
  currentIndex: number;
  totalItems: number;
  currentItem: CoffeeItem;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentIndex,
  totalItems,
  currentItem,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-black/10 z-50">
      <div
        className={`h-full transition-smooth ${currentItem.accent}`}
        style={{ width: `${((currentIndex + 1) / totalItems) * 100}%` }}
      />
    </div>
  );
};
