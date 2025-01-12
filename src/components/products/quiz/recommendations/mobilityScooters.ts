import { ProductCategory } from './types';

export const mobilityScooterRecommendations: ProductCategory = {
  basic: {
    name: "Go-Go Ultra X 3-Wheel",
    description: "Compact and maneuverable, perfect for indoor use and tight spaces.",
    features: [
      "Tight turning radius",
      "Lightweight design",
      "Easy disassembly",
      "Up to 8 miles range",
      "Adjustable seat height",
      "Simple controls"
    ],
    imageUrl: "/images/products/mobility-scooters/gogo-ultra.jpg",
    affiliateLink: "https://amzn.to/example-link"
  },
  midRange: {
    name: "Pride Victory 10 4-Wheel",
    description: "Perfect balance of features and value.",
    features: [
      "Long range battery",
      "Comfortable high-back seat",
      "LED lighting package",
      "Large wheels for stability",
      "Storage basket",
      "Delta tiller steering"
    ],
    imageUrl: "/images/products/mobility-scooters/pride-victory.jpg",
    affiliateLink: "https://amzn.to/example-link"
  },
  premium: {
    name: "Pride Pursuit XL",
    description: "Premium scooter with advanced features.",
    features: [
      "400 lb weight capacity",
      "Full suspension",
      "20-mile range",
      "High-back seat",
      "Full lighting package",
      "Large tires"
    ],
    imageUrl: "/images/products/mobility-scooters/pride-pursuit.jpg",
    affiliateLink: "https://amzn.to/example-link"
  }
};