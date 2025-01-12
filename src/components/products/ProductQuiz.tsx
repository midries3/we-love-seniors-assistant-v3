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
  return {
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
    affiliateLink: "#" // Replace with actual affiliate link
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

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = getRecommendation(answers);
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