import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About WeLoveToHelpSeniors</h1>
        
        <div className="max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At WeLoveToHelpSeniors, we're passionate about enhancing the quality of life for seniors 
              through thoughtfully selected products and genuine, helpful advice. Our mission is to make 
              independent living easier, more enjoyable, and more accessible for seniors.
            </p>
          </section>

          <section className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Expert Product Selection</h3>
              <p className="text-gray-600">
                We carefully evaluate and recommend products that are easy to use, safe, and truly 
                beneficial for seniors' daily lives. Each recommendation comes from thorough research 
                and consideration of seniors' specific needs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Simplified Decision Making</h3>
              <p className="text-gray-600">
                We understand that choosing the right products can be overwhelming. That's why we 
                create simple quizzes and clear guides to help you find exactly what you need, 
                without the confusion.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Commitment to Independence</h3>
              <p className="text-gray-600">
                Our goal is to support seniors in maintaining their independence and confidence 
                through products that make everyday tasks easier and more enjoyable. We believe that 
                the right tools can make a significant difference in daily life.
              </p>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;