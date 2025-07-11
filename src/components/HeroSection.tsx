import type React from "react";
import type { CoffeeItem } from "../types/coffee";

interface CoffeeContentSectionProps {
  currentItem: CoffeeItem;
  isScrolling: boolean;
  totalItems: number;
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const CoffeeContentSection: React.FC<CoffeeContentSectionProps> = ({
  currentItem,
  isScrolling,
}) => {
  return (
    <div
      className="w-1/2 min-h-screen relative transition-smooth"
      style={{ backgroundColor: "#fef6ef" }}
    >
      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div
          className={`max-w-md w-full transition-smooth ${
            isScrolling
              ? "translate-x-8 opacity-70"
              : "translate-x-0 opacity-100"
          }`}
        >
          {/* Coffee Name */}
          <h1 className="text-6xl font-bold text-[#3d2b1f] mb-8 leading-tight transition-smooth">
            {currentItem.name}
          </h1>

          {/* Category */}
          <div className="inline-block px-3 py-1 bg-[#d8a673] rounded-full text-sm text-[#3d2b1f] mb-6">
            {currentItem.category === "cafes"
              ? "Especial"
              : currentItem.category === "salgados"
              ? "Salgado"
              : currentItem.category === "doces"
              ? "Doce"
              : "Biscoito"}
          </div>

          {/* Description */}
          <p className="text-[#5c3b28] text-lg leading-relaxed mb-6 transition-smooth">
            {currentItem.description}
          </p>

          {/* Price */}
          <div className="text-3xl font-bold text-[#3d2b1f] mb-6 transition-smooth">
            {currentItem.price}
          </div>

          {/* Order Button */}
          <button
            onClick={() => console.log("Order Now")}
            className="px-7 py-3 bg-[#8b5e3c] hover:bg-[#5c3b28] rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out mb-8"
          >
            PEDIR AGORA
          </button>
        </div>
      </div>
    </div>
  );
};
