import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-gray-900">WeLoveToHelpSeniors</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products/air-fryers" className="text-gray-600 hover:text-primary transition-colors">
            Air Fryers
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};