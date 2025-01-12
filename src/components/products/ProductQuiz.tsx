import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Question {
  id: number;
  text: string;
  options: string[];
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
    return (
      <Card className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Thank you for completing the quiz!</h3>
        <p className="text-gray-600 mb-4">Based on your answers, we recommend:</p>
        <Button className="bg-primary hover:bg-primary/90">
          View Recommendations
        </Button>
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