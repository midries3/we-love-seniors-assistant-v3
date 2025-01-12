import { HeroSection } from "@/components/home/HeroSection";
import { BlogCard } from "@/components/home/BlogCard";
import { Header } from "@/components/layout/Header";

const Index = () => {
  const blogPosts = [
    {
      title: "Staying Connected in the Digital Age",
      description: "Tips and tricks for seniors to stay connected with loved ones using modern technology.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      link: "#",
    },
    {
      title: "The Joy of Learning New Technologies",
      description: "How seniors can embrace and benefit from learning to use new devices and applications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "#",
    },
    {
      title: "Making Your Home Senior-Friendly",
      description: "Simple modifications and tips to make your living space more comfortable and accessible.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "#",
    },
  ];

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
        <HeroSection />
        
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-xl md:text-2xl text-gray-600">
                At WeLoveToHelpSeniors, we're dedicated to enhancing the lives of seniors through carefully curated product recommendations and helpful guides. Our mission is to make daily tasks easier, more enjoyable, and safer for our senior community.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Product Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productGuides.map((guide, index) => (
                <BlogCard key={index} {...guide} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;