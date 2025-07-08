"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useScrollNavigation } from "../hooks/useScrollNavigation";
import { CoffeeImageSection } from "./CoffeeImageSection";
import { CoffeeContentSection } from "./CoffeeContentSection";
import { ProgressBar } from "./ProgressBar";
import { CategoryMenu } from "./CategoryMenu";
import { coffeeItems, categories } from "../data/coffeeData";

const CoffeeMenu: React.FC = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("cafes");

  const filteredItems = useMemo(() => {
    return coffeeItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const { currentIndex, isScrolling, setCurrentIndex } = useScrollNavigation(
    filteredItems.length
  );
  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  if (!currentItem) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex no-select">
      <CategoryMenu
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <CoffeeImageSection
        currentItem={currentItem}
        isScrolling={isScrolling}
        onBack={() => router.push("/")} // Botão voltar para a home
      />

      <CoffeeContentSection
        currentItem={currentItem}
        isScrolling={isScrolling}
        totalItems={filteredItems.length}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />

      <ProgressBar
        currentIndex={currentIndex}
        totalItems={filteredItems.length}
        currentItem={currentItem}
      />
    </div>
  );
};

export default CoffeeMenu;
