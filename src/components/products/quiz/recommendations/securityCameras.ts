import { ProductCategory } from './types';

export const securityCameraRecommendations: ProductCategory = {
  basic: {
    name: "SimpliSafe Indoor Camera",
    description: "Easy-to-use indoor security camera with essential features.",
    features: [
      "1080p HD video",
      "Two-way audio",
      "Night vision",
      "Motion detection",
      "Easy setup",
      "Mobile app viewing"
    ],
    imageUrl: "https://m.media-amazon.com/images/I/61cUNvWxVNL._AC_SL1500_.jpg",
    affiliateLink: "https://amzn.to/example-link"
  },
  midRange: {
    name: "Ring Spotlight Cam",
    description: "Weatherproof outdoor camera with built-in lighting.",
    features: [
      "1080p HD video",
      "Built-in spotlights",
      "Two-way talk",
      "Weather resistant",
      "Night vision",
      "Motion zones"
    ],
    imageUrl: "https://m.media-amazon.com/images/I/51xKl+c2VQL._AC_SL1000_.jpg",
    affiliateLink: "https://amzn.to/example-link"
  },
  premium: {
    name: "Arlo Pro 4",
    description: "Premium wireless security camera system.",
    features: [
      "2K HDR video",
      "Color night vision",
      "6-month battery",
      "Smart notifications",
      "Two-way audio",
      "Weather resistant"
    ],
    imageUrl: "https://m.media-amazon.com/images/I/61Jc9xzUiML._AC_SL1500_.jpg",
    affiliateLink: "https://amzn.to/example-link"
  }
};