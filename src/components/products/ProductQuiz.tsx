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
  price: string;
  affiliateLink: string;
}

const questions: Question[] = [
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
];

const getRecommendation = (answers: string[]): ProductRecommendation => {
  // This is a simplified recommendation logic
  // You can expand this based on your actual product database
  return {
    name: "Ninja AF101 Air Fryer",
    description: "Perfect for seniors with easy-to-use controls and compact design",
    features: [
      "Simple, intuitive controls",
      "Dishwasher-safe parts",
      "4-quart capacity",
      "Wide temperature range",
    ],
    price: "$99.99",
    affiliateLink: "#", // Replace with actual affiliate link
  };
};

export const ProductQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    const recommendation = getRecommendation(answers);
    return (
      <Card className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Your Perfect Match!</h3>
        <div className="space-y-4">
          <h4 className="text-xl font-medium text-primary">{recommendation.name}</h4>
          <p className="text-gray-600">{recommendation.description}</p>
          <ul className="list-disc pl-6 space-y-2">
            {recommendation.features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
          <div className="mt-6 space-y-4">
            <p className="text-xl font-semibold">Price: {recommendation.price}</p>
            <Button 
              className="w-full md:w-auto"
              onClick={() => window.open(recommendation.affiliateLink, '_blank')}
            >
              Check Price
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6">{question.text}</h3>
      <div className="space-y-4">
        {question.options.map((option) => (
          <Button
            key={option}
            onClick={() => handleAnswer(option)}
            variant="outline"
            className="w-full justify-start text-left hover:bg-secondary"
          >
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
};