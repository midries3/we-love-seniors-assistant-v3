import { Header } from "@/components/layout/Header";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About WeLoveToHelpSeniors</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            We're dedicated to helping seniors find the right products to enhance their daily lives,
            making independent living easier and more enjoyable.
          </p>
        </section>

        <Separator className="my-8" />
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Product Roadmap</h2>
          <div className="grid gap-4">
            <Card className="p-6">
              <h3 className="text-xl font-medium mb-2">Q2 2024</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Launch kitchen appliances category</li>
                <li>Add product comparison tool</li>
                <li>Implement user reviews system</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-medium mb-2">Q3 2024</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Introduce mobility aids section</li>
                <li>Add personalized recommendations</li>
                <li>Launch community forum</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-medium mb-2">Q4 2024</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Expand to home safety products</li>
                <li>Add video product demonstrations</li>
                <li>Launch mobile app</li>
              </ul>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Changelog</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-800">Version 1.2.0 (April 2024)</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Added air fryers product category</li>
                <li>Implemented product quiz feature</li>
                <li>Enhanced mobile responsiveness</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800">Version 1.1.0 (March 2024)</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Launched blog section</li>
                <li>Improved accessibility features</li>
                <li>Added product filtering options</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800">Version 1.0.0 (February 2024)</h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                <li>Initial website launch</li>
                <li>Basic product recommendations</li>
                <li>Homepage and navigation setup</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;