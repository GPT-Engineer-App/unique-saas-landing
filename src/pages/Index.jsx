import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  return (
    <div className="space-y-16">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="flex items-center justify-between p-6 bg-gray-800 text-white">
    <div className="text-xl font-bold">SaaS Startup</div>
    <nav className="space-x-4">
      <a href="#home" className="hover:underline">Home</a>
      <a href="#features" className="hover:underline">Features</a>
      <a href="#pricing" className="hover:underline">Pricing</a>
      <a href="#about" className="hover:underline">About</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </nav>
    <Button variant="primary">Sign Up</Button>
  </header>
);

const HeroSection = () => (
  <section id="home" className="flex items-center justify-between p-12 bg-gray-100">
    <div className="max-w-lg space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Our SaaS Startup</h1>
      <p className="text-lg">We provide the best solutions to help you grow your business.</p>
      <Button variant="primary">Get Started</Button>
    </div>
    <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
  </section>
);

const FeaturesSection = () => (
  <section id="features" className="p-12 bg-white">
    <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard title="Feature One" description="Description for feature one." />
      <FeatureCard title="Feature Two" description="Description for feature two." />
      <FeatureCard title="Feature Three" description="Description for feature three." />
    </div>
  </section>
);

const FeatureCard = ({ title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const PricingSection = () => (
  <section id="pricing" className="p-12 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <PricingCard title="Basic" price="$10/month" features={["Feature A", "Feature B", "Feature C"]} />
      <PricingCard title="Standard" price="$20/month" features={["Feature A", "Feature B", "Feature C", "Feature D"]} />
      <PricingCard title="Premium" price="$30/month" features={["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"]} />
    </div>
  </section>
);

const PricingCard = ({ title, price, features }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">{price}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button variant="primary" className="mt-4">Choose Plan</Button>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="p-12 bg-white">
    <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <TestimonialCard name="User One" text="This is a testimonial from user one." />
      <TestimonialCard name="User Two" text="This is a testimonial from user two." />
      <TestimonialCard name="User Three" text="This is a testimonial from user three." />
    </div>
  </section>
);

const TestimonialCard = ({ name, text }) => (
  <Card>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{text}</p>
    </CardContent>
  </Card>
);

const Footer = () => (
  <footer className="p-6 bg-gray-800 text-white">
    <div className="flex justify-between">
      <div className="space-y-2">
        <a href="https://twitter.com" className="hover:underline">Twitter</a>
        <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
        <a href="https://facebook.com" className="hover:underline">Facebook</a>
      </div>
      <div className="space-y-2">
        <a href="#privacy" className="hover:underline">Privacy Policy</a>
        <a href="#terms" className="hover:underline">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Index;