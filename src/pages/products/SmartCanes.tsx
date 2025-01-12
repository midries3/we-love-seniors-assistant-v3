import { ProductQuiz } from "@/components/products/ProductQuiz";
import { Card } from "@/components/ui/card";

const SmartCanes = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Find Your Perfect Smart Walking Cane</h1>
          <p className="text-2xl text-gray-600 mb-10">
            Take our quick quiz to get personalized recommendations based on your needs.
          </p>
          
          <Card className="mb-10 p-8">
            <h2 className="text-3xl font-semibold mb-6">Why Smart Walking Canes?</h2>
            <div className="space-y-4 text-xl text-gray-600">
              <p>
                Smart walking canes combine traditional support with modern technology for enhanced safety and independence. Here's why they're revolutionary:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Fall detection and emergency alerts</li>
                <li>GPS tracking capabilities</li>
                <li>LED lighting for visibility</li>
                <li>Weather alerts and forecasts</li>
                <li>Ergonomic design for comfort</li>
                <li>Built-in navigation assistance</li>
              </ul>
              <p className="mt-6 font-medium text-primary">
                Ready to find your perfect smart walking cane? Take our quick quiz below to get a personalized recommendation!
              </p>
            </div>
          </Card>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-6">Take Our Quiz</h2>
            <ProductQuiz productType="smartCane" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SmartCanes;