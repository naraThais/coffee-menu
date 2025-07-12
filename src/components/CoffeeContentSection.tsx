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
    <div className={"w-1/2 min-h-screen relative"}>
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div
          className={`max-w-md w-full transition-opacity transition-transform duration-700 ease-out ${
            isScrolling
              ? "opacity-30 translate-y-8"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Conteúdo permanece igual */}
          <h1 className="text-6xl font-bold text-[#3d2b1f] mb-8 leading-tight">
            {currentItem.name}
          </h1>

          <div className="inline-block px-3 py-1 bg-[#d8a673] rounded-full text-sm text-[#3d2b1f] mb-6">
            {currentItem.category === "cafes"
              ? "Especial"
              : currentItem.category === "salgados"
              ? "Salgado"
              : currentItem.category === "doces"
              ? "Doce"
              : "Biscoito"}
          </div>

          <p className="text-[#5c3b28] text-lg leading-relaxed mb-6">
            {currentItem.description}
          </p>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(currentItem.rating)
                      ? "text-[#8b5e3c] fill-current"
                      : "text-[#d3bba5]"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-[#5c3b28]">
              ({currentItem.rating})
            </span>
          </div>

          <div className="text-3xl font-bold text-[#3d2b1f] mb-6">
            {currentItem.price}
          </div>

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
