import type React from "react";
import { Star } from "lucide-react";
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
    <div className={"w-1/2 min-h-screen relative transition-smooth"}>
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
          <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight transition-smooth">
            {currentItem.name}
          </h1>

          {/* Category */}
          <div className="inline-block px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-600 mb-6">
            {currentItem.category === "cafes"
              ? "Especial"
              : currentItem.category === "salgados"
              ? "Salgado"
              : currentItem.category === "doces"
              ? "Doce"
              : "Biscoito"}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6 transition-smooth">
            {currentItem.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(currentItem.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({currentItem.rating})
            </span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-gray-800 mb-6 transition-smooth">
            {currentItem.price}
          </div>

          {/* Order Button */}
          <button
            className={`inline-flex items-center px-8 py-4 rounded-xl text-white font-semibold text-lg transition-smooth hover:scale-105 hover:shadow-lg mb-8 ${currentItem.accent}`}
          >
            PEDIR AGORA
          </button>
        </div>
      </div>
    </div>
  );
};
