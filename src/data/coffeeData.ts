import type { CoffeeItem, Category } from "../types/coffee";

export const categories: Category[] = [
  { id: "cafes", name: "Cafés", icon: "☕" },
  { id: "salgados", name: "Salgados", icon: "🥐" },
  { id: "doces", name: "Doces", icon: "🧁" },
  { id: "biscoitos", name: "Biscoitos", icon: "🍪" },
];

export const coffeeItems: CoffeeItem[] = [
  // Cafés
  {
    id: 1,
    name: "Macchiato",
    description:
      "Café espresso cremoso com leite vaporizado e uma pitada de espuma de leite delicada para um sabor equilibrado e suave",
    price: "R$ 12,90",
    imageUrl: "/cafe/machiato.jpg",
    rating: 4.9,
    category: "cafes",
  },
  {
    id: 2,
    name: "Cappuccino",
    description:
      "Mistura perfeita de espresso forte com leite cremoso e espuma aveludada polvilhada com canela aromática",
    price: "R$ 14,90",
    imageUrl: "/cafe/cappucino.jpg",
    rating: 4.8,
    category: "cafes",
  },
  {
    id: 3,
    name: "Latte",
    description:
      "Espresso suave combinado com leite vaporizado sedoso e uma fina camada de espuma cremosa",
    price: "R$ 13,90",
    imageUrl: "/cafe/latte.jpg",
    rating: 4.7,
    category: "cafes",
  },
  {
    id: 4,
    name: "Americano",
    description:
      "Espresso puro diluído com água quente, mantendo todo o sabor intenso e marcante do café",
    price: "R$ 9,90",
    imageUrl: "/cafe/americano.jpg",
    rating: 4.6,
    category: "cafes",
  },
  {
    id: 5,
    name: "Mocha",
    description:
      "Combinação irresistível de espresso, chocolate quente e leite cremoso coberto com chantilly",
    price: "R$ 16,90",
    imageUrl: "/cafe/mocha.jpg",
    rating: 4.9,
    category: "cafes",
  },

  // Salgados
  {
    id: 6,
    name: "Croissant de Peru",
    description:
      "Croissant artesanal crocante recheado com peru defumado e queijo ricota cremoso",
    price: "R$ 8,90",
    imageUrl: "/salgado/cra1.jpg",
    rating: 4.5,
    category: "salgados",
  },
  {
    id: 7,
    name: "Pão de Queijo",
    description:
      "Tradicional pão de queijo mineiro quentinho com queijo minas frescal",
    price: "R$ 6,90",
    imageUrl: "/salgado/pq.jpg",
    rating: 4.8,
    category: "salgados",
  },
  {
    id: 8,
    name: "Croissant Frango com Catupiry",
    description:
      "Croissant artesanal crocante recheado com presunto defumado e queijo derretido",
    price: "R$ 8,90",
    imageUrl: "/salgado/cb.jpg",
    rating: 4.5,
    category: "salgados",
  },
  // Doces
  {
    id: 9,
    name: "Cupcake Chocolate",
    description:
      "Cupcake de chocolate com cobertura cremosa de buttercream e raspas de chocolate",
    price: "R$ 7,90",
    imageUrl: "/doce/cc.jpg",
    rating: 4.7,
    category: "doces",
  },
  {
    id: 10,
    name: "Brownie",
    description:
      "Brownie artesanal com chocolate belga, nozes e cobertura de ganache",
    price: "R$ 9,90",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=800&fit=crop",
    rating: 4.9,
    category: "doces",
  },

  // Biscoitos
  {
    id: 11,
    name: "Cookie Chocolate",
    description:
      "Cookie artesanal com gotas de chocolate meio amargo e massa crocante",
    price: "R$ 4,90",
    imageUrl: "/doce/cb.jpg",
    rating: 4.6,
    category: "biscoitos",
  },
  {
    id: 12,
    name: "Biscoito Aveia",
    description:
      "Biscoito integral de aveia com passas e canela, perfeito para acompanhar o café",
    price: "R$ 3,90",
    imageUrl: "/doce/cn.jpg",
    rating: 4.4,
    category: "biscoitos",
  },
];
