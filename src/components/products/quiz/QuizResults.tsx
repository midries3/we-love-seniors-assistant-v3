import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProductRecommendation } from "./ProductRecommendations";
import { useEffect, useRef } from "react";

interface QuizResultsProps {
  recommendation: ProductRecommendation;
  onRetake: () => void;
}

export const QuizResults = ({ recommendation, onRetake }: QuizResultsProps) => {
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Card className="p-8" ref={resultsRef}>
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
            {recommendation.features.slice(0, 3).map((feature, index) => (
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
            onClick={onRetake}
          >
            Retake Quiz
          </Button>
        </div>
      </div>
    </Card>
  );
};