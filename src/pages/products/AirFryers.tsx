import { ProductQuiz } from "@/components/products/ProductQuiz";
import { Card } from "@/components/ui/card";

const AirFryers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Find Your Perfect Air Fryer</h1>
          <p className="text-2xl text-gray-600 mb-10">
            Take our quick quiz to get personalized recommendations based on your needs.
          </p>
          
          <Card className="mb-10 p-8">
            <h2 className="text-3xl font-semibold mb-6">Why Air Fryers?</h2>
            <p className="text-xl text-gray-600">
              Air fryers are perfect for seniors who want to cook healthy meals with minimal effort.
              They're easy to use, safe, and require little to no oil for cooking delicious meals.
            </p>
          </Card>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-6">Take Our Quiz</h2>
            <ProductQuiz />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AirFryers;