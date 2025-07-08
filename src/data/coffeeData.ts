import { CoffeeItem } from "../types/coffee";

export const coffeeItems: CoffeeItem[] = [
  {
    id: 1,
    name: "Macchiato",
    description:
      "Café espresso cremoso com leite vaporizado e uma pitada de espuma de leite delicada para um sabor equilibrado e suave",
    price: "R$ 12,90",
    imageUrl: "/Gallery/MOCCHIATO.jpg",
    accent: "bg-[#9b6b49]",
    rating: 4.9,
    category: "Especial",
  },
  {
    id: 2,
    name: "Cappuccino",
    description:
      "Mistura perfeita de espresso forte com leite cremoso e espuma aveludada polvilhada com canela aromática",
    price: "R$ 14,90",
    imageUrl: "/Gallery/CAPUCCIONO.jpg",
    accent: "bg-[#9b6b49]",
    rating: 4.8,
    category: "Clássico",
  },
  {
    id: 3,
    name: "Latte",
    description:
      "Espresso suave combinado com leite vaporizado sedoso e uma fina camada de espuma cremosa",
    price: "R$ 13,90",
    imageUrl: "/Gallery/LATTE.jpg",
    accent: "bg-[#9b6b49]",
    rating: 4.7,
    category: "Suave",
  },
  {
    id: 4,
    name: "Americano",
    description:
      "Espresso puro diluído com água quente, mantendo todo o sabor intenso e marcante do café",
    price: "R$ 9,90",
    imageUrl: "/Gallery/AMERICANO.jpg",
    accent: "bg-[#9b6b49]",
    rating: 4.6,
    category: "Tradicional",
  },
  {
    id: 5,
    name: "Mocha",
    description:
      "Combinação irresistível de espresso, chocolate quente e leite cremoso coberto com chantilly",
    price: "R$ 16,90",
    imageUrl: "/Gallery/MOCHA.jpg",
    accent: "bg-[#9b6b49]",
    rating: 4.9,
    category: "Doce",
  },
];
