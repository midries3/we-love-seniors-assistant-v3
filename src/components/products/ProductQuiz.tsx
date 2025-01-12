import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface ProductRecommendation {
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  affiliateLink: string;
}

const productQuestions: Record<string, Question[]> = {
  airFryer: [
    {
      id: 1,
      text: "What size air fryer are you looking for?",
      options: ["Small (1-2 people)", "Medium (3-4 people)", "Large (5+ people)"],
    },
    {
      id: 2,
      text: "Which features are most important to you?",
      options: ["Easy to use controls", "Multiple cooking functions", "Easy to clean"],
    },
    {
      id: 3,
      text: "What's your budget range?",
      options: ["Under $50", "$50-$100", "Over $100"],
    },
  ],
  mobilityScooter: [
    {
      id: 1,
      text: "Where do you plan to use the mobility scooter most often?",
      options: ["Indoors only", "Outdoors only", "Both indoors and outdoors"],
    },
    {
      id: 2,
      text: "What's your preferred maximum travel distance on a single charge?",
      options: ["Up to 10 miles", "10-20 miles", "Over 20 miles"],
    },
    {
      id: 3,
      text: "Which features are most important to you?",
      options: ["Comfort", "Portability", "Speed and range"],
    },
  ],
  pillDispenser: [
    {
      id: 1,
      text: "How many different medications do you need to manage?",
      options: ["1-3 medications", "4-6 medications", "7+ medications"],
    },
    {
      id: 2,
      text: "Do you need medication reminders?",
      options: ["Yes, with alarms", "Yes, but silent notifications", "No reminders needed"],
    },
    {
      id: 3,
      text: "Would you like family monitoring capabilities?",
      options: ["Yes, with mobile app", "Yes, but basic alerts only", "No monitoring needed"],
    },
  ],
  smartCane: [
    {
      id: 1,
      text: "Which smart features interest you most?",
      options: ["Fall detection", "GPS tracking", "Health monitoring"],
    },
    {
      id: 2,
      text: "What type of handle grip do you prefer?",
      options: ["Traditional curved", "Ergonomic gel grip", "Palm grip"],
    },
    {
      id: 3,
      text: "Do you need LED lighting for visibility?",
      options: ["Yes, bright LED", "Yes, subtle lighting", "No lighting needed"],
    },
  ],
  securityCamera: [
    {
      id: 1,
      text: "Where do you plan to install the security camera?",
      options: ["Indoor only", "Outdoor only", "Both indoor and outdoor"],
    },
    {
      id: 2,
      text: "What features are most important to you?",
      options: ["Two-way audio", "Night vision", "Motion detection"],
    },
    {
      id: 3,
      text: "Do you need mobile app connectivity?",
      options: ["Yes, with live viewing", "Yes, for notifications only", "No app needed"],
    },
  ],
};

const getRecommendation = (productType: string, answers: string[]): ProductRecommendation => {
  const recommendations: Record<string, Record<string, ProductRecommendation>> = {
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
        affiliateLink: "#"
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
        affiliateLink: "#"
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
        affiliateLink: "#"
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

  // Determine category based on answers
  let category: string;
  
  switch(productType) {
    case 'airFryer':
      category = answers[2] === "Under $50" ? "budget" : 
                 answers[2] === "$50-$100" ? "midRange" : "premium";
      break;
    case 'mobilityScooter':
      category = answers[0] === "Indoors only" ? "basic" :
                 answers[0] === "Outdoors only" ? "midRange" : "premium";
      break;
    case 'pillDispenser':
      category = answers[0] === "1-3 medications" ? "basic" :
                 answers[0] === "4-6 medications" ? "midRange" : "premium";
      break;
    case 'smartCane':
      category = answers[0] === "Fall detection" ? "basic" :
                 answers[0] === "GPS tracking" ? "midRange" : "premium";
      break;
    case 'securityCamera':
      category = answers[0] === "Indoor only" ? "basic" :
                 answers[0] === "Outdoor only" ? "midRange" : "premium";
      break;
    default:
      category = "midRange"; // Default fallback
  }

  // Ensure we have recommendations for this product type
  if (!recommendations[productType]) {
    console.error(`No recommendations found for product type: ${productType}`);
    return {
      name: "Product Not Found",
      description: "We're sorry, but we couldn't find a matching product. Please try again.",
      features: ["No features available"],
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      affiliateLink: "#"
    };
  }

  // Return the recommendation or a fallback
  return recommendations[productType][category] || recommendations[productType].midRange;
};

interface ProductQuizProps {
  productType: "airFryer" | "mobilityScooter" | "pillDispenser" | "smartCane" | "securityCamera";
}

export const ProductQuiz = ({ productType }: ProductQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = productQuestions[productType];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = getRecommendation(productType, answers);
    return (
      <Card className="p-8">
        <h3 className="text-3xl font-bold mb-6 text-primary">Your Perfect Match!</h3>
        <div className="space-y-6">
          <h4 className="text-2xl font-semibold">{recommendation.name}</h4>
          
          <a 
            href={recommendation.affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition-opacity"
          >
            <img 
              src={recommendation.imageUrl} 
              alt={recommendation.name}
              className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6 cursor-pointer"
            />
          </a>

          <p className="text-xl text-gray-700">{recommendation.description}</p>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h5 className="text-xl font-semibold mb-4">Key Features:</h5>
            <ul className="list-disc pl-6 space-y-3">
              {recommendation.features.map((feature, index) => (
                <li key={index} className="text-lg text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-4">
            <Button 
              className="w-full md:w-auto text-lg py-6 px-8"
              onClick={() => window.open(recommendation.affiliateLink, '_blank')}
            >
              Check Price & Availability
            </Button>
            <Button
              variant="outline"
              className="w-full md:w-auto text-lg py-6 px-8"
              onClick={handleRetakeQuiz}
            >
              Retake Quiz
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-semibold mb-8">{question.text}</h3>
      <div className="space-y-4">
        {question.options.map((option) => (
          <Button
            key={option}
            onClick={() => handleAnswer(option)}
            variant="outline"
            className="w-full justify-start text-left hover:bg-secondary text-lg py-6"
          >
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
};
