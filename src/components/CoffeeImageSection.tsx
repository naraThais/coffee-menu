import React from "react";
import { Coffee, ChevronDown } from "lucide-react";
import { CoffeeItem } from "../types/coffee";
import Image from "next/image";
interface CoffeeImageSectionProps {
  currentItem: CoffeeItem;
  isScrolling: boolean;
}

export const CoffeeImageSection: React.FC<CoffeeImageSectionProps> = ({
  currentItem,
  isScrolling,
}) => {
  return (
    <div
      className={
        "w-1/2 min-h-screen relative transition-smooth ${currentItem.leftBg}"
      }
    >
      {/* Header Left */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 text-white" />
          <span className="text-lg font-bold text-white">coffee flavours</span>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-full h-full relative transition-smooth ${
            isScrolling ? "scale-95 opacity-70" : "scale-100 opacity-100"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={currentItem.imageUrl}
              alt={currentItem.name}
              className="w-full h-full object-cover transition-smooth hover:scale-105"
              width={800}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm font-medium">Role para navegar</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
