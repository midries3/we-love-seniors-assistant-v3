import { HeroSection } from "@/components/home/HeroSection";
import { BlogCard } from "@/components/home/BlogCard";
import { Header } from "@/components/layout/Header";

const Index = () => {
  const blogPosts = [
    {
      title: "Best Air Fryers for Seniors",
      description: "Discover the top air fryers that are easy to use and perfect for cooking healthy meals.",
      image: "/placeholder.svg",
      link: "/products/air-fryers",
    },
    {
      title: "Kitchen Safety Tips",
      description: "Essential tips to make cooking safer and more enjoyable for seniors.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Healthy Cooking Guide",
      description: "Simple and nutritious recipes perfect for air fryer cooking.",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;