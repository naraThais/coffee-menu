"use client";

import type React from "react";
import { Star, Menu } from "lucide-react";
import type { Category } from "../types/coffee";
import { CakeSlice, Coffee, Cookie, Sandwich } from "lucide-react";
interface CategoryMenuProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  onBack?: () => void;
}

export const CategoryMenu: React.FC<CategoryMenuProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
      {/* Category Pills */}
      <div className="flex items-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${
              activeCategory === category.id
                ? "bg-[#9b6b49] text-white"
                : "bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white"
            }`}
          >
            <span className="text-sm">{getCategoryIcon(category.id)}</span>
            <span className="text-sm">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm">
          <Star className="w-4 h-4 text-gray-600" />
        </button>
        <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm">
          <Menu className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

// Helper function to get category icons
function getCategoryIcon(categoryId: string): React.ReactElement | null {
  switch (categoryId) {
    case "cafes":
      return <Coffee />;
    case "salgados":
      return <Sandwich />;
    case "doces":
      return <CakeSlice />;
    case "biscoitos":
      return <Cookie />;
    default:
      return null;
  }
}
