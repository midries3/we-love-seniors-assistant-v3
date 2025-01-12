import { ProductQuiz } from "@/components/products/ProductQuiz";
import { Card } from "@/components/ui/card";

const MobilityScooters = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Find Your Perfect Mobility Scooter</h1>
          <p className="text-2xl text-gray-600 mb-10">
            Take our quick quiz to get personalized recommendations based on your needs.
          </p>
          
          <Card className="mb-10 p-8">
            <h2 className="text-3xl font-semibold mb-6">Why Choose a Mobility Scooter?</h2>
            <div className="space-y-4 text-xl text-gray-600">
              <p>
                Mobility scooters provide independence and freedom for seniors who want to maintain an active lifestyle. Here's why they're an excellent choice:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Enhanced independence and mobility</li>
                <li>Comfortable and easy to operate</li>
                <li>Suitable for both indoor and outdoor use</li>
                <li>Helps maintain an active social life</li>
                <li>Various models to suit different needs and preferences</li>
                <li>Safety features for peace of mind</li>
              </ul>
              <p className="mt-6 font-medium text-primary">
                Ready to find your perfect mobility scooter? Take our quick quiz below to get a personalized recommendation!
              </p>
            </div>
          </Card>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-6">Take Our Quiz</h2>
            <ProductQuiz productType="mobilityScooter" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MobilityScooters;