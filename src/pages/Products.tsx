import { Header } from "@/components/layout/Header";
import { BlogCard } from "@/components/home/BlogCard";

const Products = () => {
  const productGuides = [
    {
      title: "Best Air Fryers for Seniors",
      description: "Discover the top air fryers that are easy to use and perfect for cooking healthy meals.",
      image: "https://images.unsplash.com/photo-1621317758612-3958e0f07c0f",
      link: "/products/air-fryers",
    },
    {
      title: "Mobility Scooters Guide",
      description: "Find the perfect mobility scooter to maintain your independence and active lifestyle.",
      image: "https://images.unsplash.com/photo-1576877258326-45ddc8571f80",
      link: "/products/mobility-scooters",
    },
    {
      title: "Smart Pill Dispensers",
      description: "Stay on top of your medication schedule with these innovative smart pill dispensers.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      link: "/products/smart-pill-dispensers",
    },
    {
      title: "Smart Walking Canes",
      description: "Explore walking canes with advanced features for enhanced safety and support.",
      image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d",
      link: "/products/smart-canes",
    },
    {
      title: "Home Security Cameras",
      description: "Keep your home safe with easy-to-use security cameras designed for seniors.",
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb",
      link: "/products/security-cameras",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Product Guides</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productGuides.map((guide, index) => (
              <BlogCard key={index} {...guide} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;