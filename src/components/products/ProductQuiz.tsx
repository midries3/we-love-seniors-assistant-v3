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
  // This is a simplified recommendation logic
  const recommendations: Record<string, ProductRecommendation> = {
    airFryer: {
      name: "Ninja AF101 Air Fryer",
      description: "Perfect for seniors with easy-to-use controls and compact design. This model offers the perfect balance of simplicity and functionality.",
      features: [
        "Simple, intuitive controls",
        "Dishwasher-safe parts",
        "4-quart capacity - perfect for 1-2 people",
        "Wide temperature range for versatile cooking",
        "Clear, easy-to-read digital display",
        "Lightweight and easy to clean"
      ],
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      affiliateLink: "#"
    },
    mobilityScooter: {
      name: "Pride Mobility Victory 10",
      description: "A reliable and comfortable mobility scooter perfect for both indoor and outdoor use.",
      features: [
        "Comfortable high-back seat",
        "Easy-to-use delta tiller",
        "Up to 15.5 miles per charge",
        "LED lighting package",
        "Convenient storage basket",
        "Adjustable armrests"
      ],
      imageUrl: "https://images.unsplash.com/photo-1576877258326-45ddc8571f80",
      affiliateLink: "#"
    },
    pillDispenser: {
      name: "Hero Smart Pill Dispenser",
      description: "An intelligent medication management system with advanced features for peace of mind.",
      features: [
        "Automatic dispensing",
        "Mobile app connectivity",
        "Multiple medication slots",
        "Tamper-proof locking",
        "Medication reminders",
        "Family monitoring"
      ],
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      affiliateLink: "#"
    },
    smartCane: {
      name: "iWalk Smart Cane",
      description: "A revolutionary smart cane combining traditional support with modern technology.",
      features: [
        "Fall detection alerts",
        "GPS tracking",
        "LED lighting",
        "Ergonomic grip",
        "Weather alerts",
        "Emergency SOS button"
      ],
      imageUrl: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d",
      affiliateLink: "#"
    },
    securityCamera: {
      name: "SimpliSafe Security Camera",
      description: "An easy-to-use security camera with advanced features for home protection.",
      features: [
        "1080p HD video",
        "Night vision",
        "Two-way audio",
        "Motion detection",
        "Mobile app control",
        "Weather-resistant"
      ],
      imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb",
      affiliateLink: "#"
    }
  };

  return recommendations[productType] || recommendations.airFryer;
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