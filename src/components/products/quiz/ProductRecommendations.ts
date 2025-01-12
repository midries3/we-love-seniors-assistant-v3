export interface ProductRecommendation {
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  affiliateLink: string;
}

export const productRecommendations: Record<string, Record<string, ProductRecommendation>> = {
  airFryer: {
    budget: {
      name: "Dash Compact Air Fryer",
      description: "Perfect for seniors living alone, with simple dial controls and compact size.",
      features: [
        "Simple dial controls",
        "Compact 2-quart capacity",
        "Auto shut-off feature",
        "Non-stick basket",
        "Cool-touch housing",
        "Lightweight design"
      ],
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      affiliateLink: "https://amzn.to/3DNtmhQ"
    },
    midRange: {
      name: "Ninja AF101 Air Fryer",
      description: "Perfect for seniors with easy-to-use controls and compact design. This model offers the perfect balance of simplicity and functionality.",
      features: [
        "Simple, intuitive controls",
        "Dishwasher-safe parts",
        "4-quart capacity - perfect for 1-2 people",
        "Wide temperature range",
        "Clear, easy-to-read digital display",
        "Lightweight and easy to clean"
      ],
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      affiliateLink: "https://amzn.to/4gOukZz"
    },
    premium: {
      name: "Philips Premium XXL Air Fryer",
      description: "A premium air fryer with advanced features but maintaining ease of use for seniors.",
      features: [
        "Extra-large capacity",
        "Digital touchscreen",
        "Multiple preset programs",
        "Keep warm function",
        "Dishwasher safe parts",
        "Fat removal technology"
      ],
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      affiliateLink: "https://amzn.to/428Xi1S"
    }
  },
    mobilityScooter: {
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
        imageUrl: "https://images.unsplash.com/photo-1576877258326-45ddc8571f80",
        affiliateLink: "#"
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
        imageUrl: "https://images.unsplash.com/photo-1576877258326-45ddc8571f80",
        affiliateLink: "#"
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
        imageUrl: "https://images.unsplash.com/photo-1576877258326-45ddc8571f80",
        affiliateLink: "#"
      }
    },
    pillDispenser: {
      basic: {
        name: "LiveFine Automatic Pill Dispenser",
        description: "Simple and reliable automatic pill dispenser with basic features.",
        features: [
          "6 daily alarms",
          "28 compartments",
          "Tamper-proof lock",
          "Battery backup",
          "Clear instructions",
          "Loud alarm"
        ],
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
        affiliateLink: "#"
      },
      advanced: {
        name: "Hero Health Smart Dispenser",
        description: "Advanced smart dispenser with mobile app connectivity.",
        features: [
          "Mobile app monitoring",
          "Multiple medication sorting",
          "Automatic dispensing",
          "Refill alerts",
          "Missed dose notifications",
          "Caregiver updates"
        ],
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
        affiliateLink: "#"
      },
      premium: {
        name: "MedaCube Pro",
        description: "Professional-grade automatic pill dispenser with advanced features.",
        features: [
          "90-day capacity",
          "Multiple user profiles",
          "Cloud connectivity",
          "Biometric security",
          "Emergency backup power",
          "24/7 support"
        ],
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
        affiliateLink: "#"
      }
    },
    smartCane: {
      basic: {
        name: "iWalker Basic Smart Cane",
        description: "Entry-level smart cane with essential safety features.",
        features: [
          "LED lighting",
          "Ergonomic grip",
          "Height adjustable",
          "Non-slip base",
          "Fall alert",
          "Lightweight design"
        ],
        imageUrl: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d",
        affiliateLink: "#"
      },
      advanced: {
        name: "Step Smart Cane",
        description: "Advanced smart cane with fall prevention technology.",
        features: [
          "Fall prevention system",
          "GPS tracking",
          "Emergency alerts",
          "Mobile app",
          "Heart rate monitor",
          "Weather alerts"
        ],
        imageUrl: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d",
        affiliateLink: "#"
      },
      premium: {
        name: "CareWalk Pro",
        description: "Premium smart cane with comprehensive health monitoring.",
        features: [
          "Health vitals monitoring",
          "Advanced fall detection",
          "GPS navigation",
          "Emergency SOS",
          "Family monitoring app",
          "Weather resistance"
        ],
        imageUrl: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d",
        affiliateLink: "#"
      }
    },
    securityCamera: {
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
        imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb",
        affiliateLink: "#"
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
        imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb",
        affiliateLink: "#"
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
        imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb",
        affiliateLink: "#"
      }
    }
  };
};
