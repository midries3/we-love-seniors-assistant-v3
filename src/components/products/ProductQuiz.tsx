import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { productQuestions } from "./quiz/QuizQuestions";
import { getRecommendation } from "./quiz/RecommendationLogic";
import { QuizResults } from "./quiz/QuizResults";

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
    return <QuizResults recommendation={recommendation} onRetake={handleRetakeQuiz} />;
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