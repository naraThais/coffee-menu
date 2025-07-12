import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";
import Image from "next/image";
import type { CoffeeItem } from "../types/coffee";

interface CoffeeImageSectionProps {
  currentItem: CoffeeItem;
  isScrolling: boolean;
  onBack?: () => void;
}

export const CoffeeImageSection: React.FC<CoffeeImageSectionProps> = ({
  currentItem,
  onBack,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={"w-1/2 min-h-screen relative transition-smooth"}>
      {/* Botão Voltar */}
      <div className="absolute top-6 left-6 z-10">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full transition-colors text-gray-700 font-medium shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </button>
        )}
      </div>

      {/* Imagem */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className={`w-full h-full relative transition-transform transition-opacity duration-1500 ease-in-out ${
            isLoaded
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={currentItem.imageUrl || "/placeholder.svg"}
              alt={currentItem.name}
              className="w-full h-full object-cover"
              width={800}
              height={800}
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm font-medium">Role para navegar</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeImageSection;
