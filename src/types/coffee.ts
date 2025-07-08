export interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  accent: string;
  rating: number;
  category: string;
}

export interface ScrollNavigationHook {
  currentIndex: number;
  isScrolling: boolean;
  setCurrentIndex: (index: number) => void;
}
