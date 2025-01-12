import { ProductQuiz } from "@/components/products/ProductQuiz";
import { Card } from "@/components/ui/card";
import { ProductFooter } from "@/components/layout/ProductFooter";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const AirFryers = () => {
  const quizRef = useRef<HTMLDivElement>(null);

  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Find Your Perfect Air Fryer</h1>
          <p className="text-2xl text-gray-600 mb-10">
            Take our quick quiz to get personalized recommendations based on your needs.
          </p>
          
          <Card className="mb-10 p-8">
            <h2 className="text-3xl font-semibold mb-6">Why Choose an Air Fryer?</h2>
            <div className="space-y-4 text-xl text-gray-600">
              <p>
                Air fryers provide independence and freedom for seniors who want to maintain an active lifestyle. Here's why they're an excellent choice:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Enhanced independence and mobility</li>
                <li>Comfortable and easy to operate</li>
                <li>Suitable for both indoor and outdoor use</li>
                <li>Helps maintain an active social life</li>
                <li>Various models to suit different needs and preferences</li>
                <li>Safety features for peace of mind</li>
              </ul>
            </div>
          </Card>

          <div className="text-center mb-12">
            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">How the Quiz Works</h3>
              <p className="text-lg text-gray-600 mb-6">
                1. Answer 3 simple questions about your preferences<br />
                2. Get a personalized air fryer recommendation<br />
                3. View detailed features and purchase options
              </p>
            </Card>
            <Button 
              size="lg" 
              className="text-2xl py-8 px-16 rounded-xl shadow-lg hover:scale-105 transition-transform"
              onClick={scrollToQuiz}
            >
              Start Your Quiz
            </Button>
          </div>

          <div ref={quizRef} className="mb-12">
            <ProductQuiz productType="airFryer" />
          </div>
        </div>
      </main>
      <ProductFooter />
    </div>
  );
};

export default AirFryers;