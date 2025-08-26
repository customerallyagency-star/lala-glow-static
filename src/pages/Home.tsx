import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Eye, Sparkles, Heart, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const services = [
    {
      title: "Lash Extensions",
      description: "Classic, Hybrid & Volume lashes for every eye shape",
      icon: Eye,
      link: "/services#lashes",
      image: "/placeholder.svg"
    },
    {
      title: "Brow Artistry",
      description: "Shaping, tinting, and lamination for perfect brows",
      icon: Sparkles,
      link: "/services#brows",
      image: "/placeholder.svg"
    },
    {
      title: "Luxury Facials",
      description: "Rejuvenating treatments for glowing, healthy skin",
      icon: Heart,
      link: "/services#facials",
      image: "/placeholder.svg"
    },
    {
      title: "Nail Perfection",
      description: "Manicures, pedicures, and stunning nail art",
      icon: Sparkles,
      link: "/services#nails",
      image: "/placeholder.svg"
    }
  ];

  const whyLala = [
    {
      title: "Licensed Technicians",
      description: "Certified professionals with years of expertise"
    },
    {
      title: "Hygienic Standards",
      description: "Hospital-grade sanitation for your safety"
    },
    {
      title: "Gentle Application",
      description: "Comfortable, relaxing treatment experience"
    },
    {
      title: "Results That Last",
      description: "Premium products for beautiful, lasting results"
    }
  ];

  const reviews = [
    {
      name: "Sarah M.",
      service: "Volume Lashes",
      rating: 5,
      text: "Absolutely stunning results! My lashes look so natural yet glamorous. The studio is so clean and relaxing."
    },
    {
      name: "Jennifer L.",
      service: "Brow Lamination",
      rating: 5,
      text: "Best brows of my life! The team is so skilled and the results exceeded my expectations. Highly recommend!"
    },
    {
      name: "Michelle K.",
      service: "Facial Treatment",
      rating: 5,
      text: "My skin has never looked better. The facial was so relaxing and the results are amazing. Coming back for sure!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 font-inter">
              ✨ Premier Beauty Studio in Richmond
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
              Unveil Your
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Natural Beauty
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-inter max-w-2xl mx-auto">
              Expert lash extensions, brow artistry, luxury facials, and nail perfection 
              in Richmond's most elegant beauty studio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-inter font-semibold text-lg px-8 py-4"
              >
                <Link to="/booking">Book Your Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold text-lg px-8 py-4"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" 
             style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'}}></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Discover our range of premium beauty treatments, each designed to enhance 
              your natural beauty with expert care and attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-playfair font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground font-inter">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      to={service.link}
                      className="text-primary hover:text-primary-hover font-inter font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why LALA Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Why Choose LALA Beauty
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              We're committed to providing the highest quality beauty services 
              in a safe, comfortable, and luxurious environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyLala.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Strip */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Beautiful Transformations
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              See the stunning results our clients achieve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-accent aspect-square">
                  <img
                    src="/placeholder.svg"
                    alt={`Transformation ${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/0 group-hover:bg-gradient-primary/20 transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 font-inter font-semibold">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Client Love Stories
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Don't just take our word for it - hear from our beautiful clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-inter text-foreground mb-6 leading-relaxed">
                  "{reviews[currentReview].text}"
                </blockquote>
                
                <div className="font-playfair">
                  <div className="font-semibold text-lg">{reviews[currentReview].name}</div>
                  <div className="text-muted-foreground">{reviews[currentReview].service}</div>
                </div>
              </CardContent>
            </Card>

            {/* Review Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentReview === index ? 'bg-primary' : 'bg-secondary'
                  }`}
                  aria-label={`View review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First-Time Client Promo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-accent shadow-medium">
            <CardContent className="p-8 md:p-12 text-center">
              <Badge className="mb-6 bg-primary text-primary-foreground font-inter text-sm">
                ✨ FIRST-TIME CLIENT SPECIAL
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Welcome to LALA Beauty
              </h2>
              
              <p className="text-lg font-inter text-muted-foreground mb-8 max-w-2xl mx-auto">
                New clients receive 15% off their first service! Perfect time to experience 
                our premium beauty treatments and discover why clients love LALA Beauty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
                >
                  <Link to="/booking">Claim Your Discount</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-inter font-semibold"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;