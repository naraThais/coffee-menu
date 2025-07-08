import React from "react";
import { Coffee, Cake, Sandwich, Cookie } from "lucide-react";

interface NavbarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const categories = [
  { id: "coffees", name: "Cafés", icon: <Coffee className="w-5 h-5" /> },
  { id: "savory", name: "Salgados", icon: <Sandwich className="w-5 h-5" /> },
  { id: "sweets", name: "Doces", icon: <Cake className="w-5 h-5" /> },
  { id: "cookies", name: "Biscoitos", icon: <Cookie className="w-5 h-5" /> },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md px-4 py-3">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">coffee flavours</h1>

        {/* Categories */}
        <div className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
