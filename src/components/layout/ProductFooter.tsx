import { Link } from "react-router-dom";

export const ProductFooter = () => {
  return (
    <footer className="mt-16 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600">
          <p className="mb-4">
            As an Amazon Associate, we earn from qualifying purchases. This means we may receive a commission if you purchase products through our links.
          </p>
          <Link to="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};