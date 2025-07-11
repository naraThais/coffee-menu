export interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  rating: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface ScrollNavigationHook {
  currentIndex: number;
  isScrolling: boolean;
  setCurrentIndex: (index: number) => void;
}
