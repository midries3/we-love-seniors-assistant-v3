import { ProductQuiz } from "@/components/products/ProductQuiz";
import { Card } from "@/components/ui/card";
import { ProductFooter } from "@/components/layout/ProductFooter";

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
            <div className="space-y-4 text-xl text-gray-600">
              <p>
                Air fryers are the perfect kitchen companion for seniors, offering a safer and healthier way to enjoy your favorite foods. Here's why they're an excellent choice:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Safer than traditional deep fryers - no hot oil to handle</li>
                <li>Easy-to-use controls with clear, readable buttons</li>
                <li>Healthier cooking with up to 75% less fat</li>
                <li>Quick cooking times - perfect for small portions</li>
                <li>Less cleaning required compared to traditional cooking methods</li>
                <li>Compact size that won't take up too much counter space</li>
              </ul>
              <p className="mt-6 font-medium text-primary">
                Ready to find your perfect air fryer? Take our quick quiz below to get a personalized recommendation!
              </p>
            </div>
          </Card>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Take Our Quiz</h2>
            <ProductQuiz productType="airFryer" />
          </div>

          <Card className="mb-10 p-8">
            <h2 className="text-3xl font-semibold mb-6">After You Get Your Air Fryer</h2>
            <div className="space-y-4 text-xl text-gray-600">
              <p>
                Once you receive your air fryer, here are some tips to get started:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Read the manual thoroughly before first use</li>
                <li>Start with simple recipes like french fries or chicken wings</li>
                <li>Always preheat your air fryer for best results</li>
                <li>Don't overcrowd the basket - air needs to circulate</li>
                <li>Clean after each use to maintain performance</li>
              </ul>
              <p className="mt-6">
                Remember to keep the manual in an easy-to-reach place for quick reference, and don't hesitate to start with the preset programs if your model includes them.
              </p>
            </div>
          </Card>
        </div>
      </main>
      <ProductFooter />
    </div>
  );
};

export default AirFryers;