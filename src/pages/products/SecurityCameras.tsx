import { ProductQuiz } from "@/components/products/ProductQuiz";
import { Card } from "@/components/ui/card";

const SecurityCameras = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Find Your Perfect Home Security Camera</h1>
          <p className="text-2xl text-gray-600 mb-10">
            Take our quick quiz to get personalized recommendations based on your needs.
          </p>
          
          <Card className="mb-10 p-8">
            <h2 className="text-3xl font-semibold mb-6">Why Home Security Cameras?</h2>
            <div className="space-y-4 text-xl text-gray-600">
              <p>
                Home security cameras provide peace of mind and enhanced safety for seniors living independently. Here's why they're essential:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>24/7 monitoring capabilities</li>
                <li>Easy smartphone integration</li>
                <li>Motion detection alerts</li>
                <li>Two-way communication</li>
                <li>Night vision capabilities</li>
                <li>Weather-resistant options</li>
              </ul>
              <p className="mt-6 font-medium text-primary">
                Ready to find your perfect security camera system? Take our quick quiz below to get a personalized recommendation!
              </p>
            </div>
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

export default SecurityCameras;