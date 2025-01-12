import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="bg-secondary py-16 md:py-24 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Making Life Easier for Seniors
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover products that enhance comfort, safety, and independence in daily life.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/products/air-fryers">
              Explore Products
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};