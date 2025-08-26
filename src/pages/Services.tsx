import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Sparkles, Heart, Clock, Users, Shield, Star } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("lashes");

  const services = {
    lashes: {
      title: "Lash Extensions",
      icon: Eye,
      description: "Transform your look with our premium lash extension services",
      treatments: [
        {
          name: "Classic Lashes",
          duration: "2-2.5 hours",
          description: "One extension per natural lash for a natural, enhanced look that's perfect for everyday wear.",
          features: ["Natural enhancement", "Lightweight feel", "2-3 week retention", "Perfect for beginners"]
        },
        {
          name: "Hybrid Lashes",
          duration: "2.5-3 hours",
          description: "A blend of classic and volume techniques for added texture and fullness while maintaining a natural appearance.",
          features: ["Mixed textures", "Fuller appearance", "Customizable volume", "3-4 week retention"]
        },
        {
          name: "Volume Lashes",
          duration: "3-3.5 hours",
          description: "Multiple lightweight extensions per natural lash for dramatic fullness and glamorous results.",
          features: ["Maximum fullness", "Dramatic effect", "Long-lasting", "4-5 week retention"]
        }
      ],
      details: {
        "Who it's for": "Anyone looking to enhance their natural lashes without daily mascara application",
        "Maintenance": "Refills recommended every 2-4 weeks depending on style and natural lash growth",
        "Aftercare": "Avoid oil-based products, gentle cleansing, and sleep on your back when possible"
      }
    },
    brows: {
      title: "Brow Artistry",
      icon: Sparkles,
      description: "Perfectly shaped and styled brows to frame your face beautifully",
      treatments: [
        {
          name: "Brow Shaping & Tinting",
          duration: "45-60 minutes",
          description: "Professional shaping with tweezers and wax, plus custom tinting for fuller-looking brows.",
          features: ["Custom shape design", "Color matching", "2-4 week tint duration", "Immediate results"]
        },
        {
          name: "Brow Lamination",
          duration: "60-75 minutes",
          description: "A treatment that relaxes and reshapes brow hairs for a fuller, more uniform appearance.",
          features: ["Fuller appearance", "6-8 week results", "Low maintenance", "Works with sparse brows"]
        },
        {
          name: "Brow Design Package",
          duration: "75-90 minutes",
          description: "Complete brow transformation including shaping, lamination, and tinting for optimal results.",
          features: ["Complete transformation", "Long-lasting results", "Custom color", "Professional mapping"]
        }
      ],
      details: {
        "Who it's for": "Perfect for those with sparse, unruly, or over-plucked brows wanting a polished look",
        "Maintenance": "Lamination lasts 6-8 weeks, tinting 2-4 weeks, shaping maintenance every 3-4 weeks",
        "Aftercare": "Keep brows dry for 24-48 hours post-treatment, avoid rubbing or applying makeup to the area"
      }
    },
    facials: {
      title: "Luxury Facials",
      icon: Heart,
      description: "Rejuvenating facial treatments for healthy, glowing skin",
      treatments: [
        {
          name: "Signature Glow Facial",
          duration: "60 minutes",
          description: "A customized facial treatment addressing your specific skin concerns with professional-grade products.",
          features: ["Deep cleansing", "Custom mask", "Relaxing massage", "Immediate glow"]
        },
        {
          name: "Anti-Aging Treatment",
          duration: "75 minutes",
          description: "Advanced facial targeting fine lines, firmness, and overall skin texture for a more youthful appearance.",
          features: ["Peptide therapy", "Collagen boost", "Fine line reduction", "Firming treatment"]
        },
        {
          name: "Acne Clearing Facial",
          duration: "60 minutes",
          description: "Specialized treatment for acne-prone skin with deep pore cleansing and targeted breakout prevention.",
          features: ["Deep pore cleansing", "Extraction", "Anti-inflammatory", "Oil control"]
        }
      ],
      details: {
        "Who it's for": "All skin types looking to improve skin health, address specific concerns, or maintain optimal skin condition",
        "Maintenance": "Monthly facials recommended for optimal skin health and addressing ongoing concerns",
        "Aftercare": "Avoid sun exposure, use gentle products, and maintain a good skincare routine at home"
      }
    },
    nails: {
      title: "Nail Perfection",
      icon: Sparkles,
      description: "Beautiful manicures, pedicures, and stunning nail art",
      treatments: [
        {
          name: "Luxury Manicure",
          duration: "45-60 minutes",
          description: "Complete nail care including shaping, cuticle care, and premium polish application.",
          features: ["Nail shaping", "Cuticle care", "Hand massage", "Long-lasting polish"]
        },
        {
          name: "Gel Manicure",
          duration: "60-75 minutes",
          description: "Durable gel polish application that lasts 2-3 weeks with chip-resistant, high-gloss finish.",
          features: ["2-3 week wear", "Chip resistant", "High gloss finish", "Quick dry"]
        },
        {
          name: "Luxury Pedicure",
          duration: "60-75 minutes",
          description: "Complete foot care treatment with exfoliation, massage, and beautiful polish application.",
          features: ["Foot soak", "Exfoliation", "Massage", "Callus removal"]
        }
      ],
      details: {
        "Who it's for": "Anyone wanting beautiful, well-maintained nails for special occasions or regular upkeep",
        "Maintenance": "Regular polish: 1-2 weeks, Gel polish: 2-3 weeks, Cuticle care: every 2-4 weeks",
        "Aftercare": "Use cuticle oil daily, wear gloves for cleaning, avoid using nails as tools"
      }
    }
  };

  const currentService = services[activeTab as keyof typeof services];
  const ServiceIcon = currentService.icon;

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Our Premium Services
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Experience the artistry of beauty with our comprehensive range of services. 
            Each treatment is customized to enhance your natural beauty and boost your confidence.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="lashes" className="font-inter">Lashes</TabsTrigger>
              <TabsTrigger value="brows" className="font-inter">Brows</TabsTrigger>
              <TabsTrigger value="facials" className="font-inter">Facials</TabsTrigger>
              <TabsTrigger value="nails" className="font-inter">Nails</TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([key, service]) => (
              <TabsContent key={key} value={key}>
                <div className="max-w-6xl mx-auto">
                  {/* Service Header */}
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                      <ServiceIcon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
                      {service.description}
                    </p>
                  </div>

                  {/* Treatment Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {service.treatments.map((treatment, index) => (
                      <Card key={index} className="hover:shadow-medium transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="font-playfair text-xl">
                              {treatment.name}
                            </CardTitle>
                            <Badge variant="outline" className="font-inter">
                              <Clock className="w-3 h-3 mr-1" />
                              {treatment.duration}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground font-inter mb-4">
                            {treatment.description}
                          </p>
                          <ul className="space-y-2">
                            {treatment.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm font-inter">
                                <Star className="w-4 h-4 text-primary fill-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Service Details */}
                  <Card className="bg-accent/20">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.entries(service.details).map(([title, content]) => (
                          <div key={title}>
                            <h3 className="font-playfair font-semibold text-lg mb-3 flex items-center gap-2">
                              {title === "Who it's for" && <Users className="w-5 h-5 text-primary" />}
                              {title === "Maintenance" && <Clock className="w-5 h-5 text-primary" />}
                              {title === "Aftercare" && <Shield className="w-5 h-5 text-primary" />}
                              {title}
                            </h3>
                            <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                              {content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA Section */}
                  <div className="text-center mt-12">
                    <div className="bg-gradient-primary rounded-lg p-8 text-white">
                      <h3 className="text-2xl font-playfair font-bold mb-4">
                        Ready to Book Your {service.title}?
                      </h3>
                      <p className="font-inter mb-6 opacity-90">
                        Experience the difference of professional beauty treatments in our luxurious studio.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          asChild
                          size="lg"
                          className="bg-white text-primary hover:bg-white/90 font-inter font-semibold"
                        >
                          <Link to="/booking">Book Now</Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold"
                        >
                          <Link to="/pricing">View Pricing</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Services;