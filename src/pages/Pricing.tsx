import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Star, AlertCircle } from "lucide-react";

const Pricing = () => {
  const pricingData = {
    lashes: {
      title: "Lash Extensions",
      packages: [
        {
          name: "Classic",
          price: "$120",
          duration: "2-2.5 hours",
          retention: "2-3 weeks",
          description: "Perfect for a natural enhancement",
          features: [
            "One extension per natural lash",
            "Natural, lightweight feel",
            "Customized curl and length",
            "Complimentary aftercare kit"
          ],
          popular: false
        },
        {
          name: "Hybrid",
          price: "$150",
          duration: "2.5-3 hours",
          retention: "3-4 weeks",
          description: "Best of both classic and volume",
          features: [
            "Mix of classic and volume techniques",
            "Added texture and dimension",
            "Fuller appearance than classic",
            "Complimentary aftercare kit"
          ],
          popular: true
        },
        {
          name: "Volume",
          price: "$180",
          duration: "3-3.5 hours",
          retention: "4-5 weeks",
          description: "Maximum fullness and drama",
          features: [
            "Multiple lightweight extensions per lash",
            "Dramatic, glamorous look",
            "Longest retention time",
            "Premium aftercare package"
          ],
          popular: false
        }
      ],
      addOns: [
        { name: "Lash Removal (external)", price: "$25" },
        { name: "Bottom Lash Extensions", price: "$35" },
        { name: "Colored Lashes (per color)", price: "$15" },
        { name: "Express Refill (under 1 hour)", price: "$65" }
      ]
    },
    brows: {
      title: "Brow Services",
      packages: [
        {
          name: "Shape & Tint",
          price: "$65",
          duration: "45-60 min",
          retention: "2-4 weeks",
          description: "Professional shaping with custom tinting",
          features: [
            "Custom brow mapping",
            "Professional shaping",
            "Color-matched tinting",
            "Aftercare instructions"
          ],
          popular: false
        },
        {
          name: "Brow Lamination",
          price: "$85",
          duration: "60-75 min",
          retention: "6-8 weeks",
          description: "Fuller, more uniform brow appearance",
          features: [
            "Brow hair restructuring",
            "Fuller appearance",
            "Low maintenance results",
            "Includes brow styling"
          ],
          popular: true
        },
        {
          name: "Full Brow Design",
          price: "$120",
          duration: "75-90 min",
          retention: "6-8 weeks",
          description: "Complete brow transformation package",
          features: [
            "Lamination + shaping + tinting",
            "Complete transformation",
            "Premium aftercare kit",
            "Touch-up within 2 weeks"
          ],
          popular: false
        }
      ],
      addOns: [
        { name: "Brow Tinting Only", price: "$30" },
        { name: "Brow Shaping Only", price: "$40" },
        { name: "Patch Test", price: "$10" },
        { name: "Touch-up (within 2 weeks)", price: "$25" }
      ]
    },
    facials: {
      title: "Facial Treatments",
      packages: [
        {
          name: "Signature Glow",
          price: "$95",
          duration: "60 minutes",
          retention: "Instant glow",
          description: "Customized facial for all skin types",
          features: [
            "Deep cleansing treatment",
            "Custom mask application",
            "Relaxing facial massage",
            "Take-home skincare sample"
          ],
          popular: false
        },
        {
          name: "Anti-Aging Treatment",
          price: "$125",
          duration: "75 minutes",
          retention: "Long-term benefits",
          description: "Advanced treatment for mature skin",
          features: [
            "Peptide and collagen treatment",
            "Fine line targeting",
            "Firming massage techniques",
            "Premium serum application"
          ],
          popular: true
        },
        {
          name: "Acne Clearing",
          price: "$110",
          duration: "60 minutes",
          retention: "Ongoing improvement",
          description: "Specialized treatment for problem skin",
          features: [
            "Deep pore cleansing",
            "Professional extractions",
            "Anti-inflammatory treatment",
            "Customized home care plan"
          ],
          popular: false
        }
      ],
      addOns: [
        { name: "LED Light Therapy", price: "$25" },
        { name: "Dermaplaning Add-on", price: "$35" },
        { name: "Eye Treatment", price: "$20" },
        { name: "Take-home Mask Set", price: "$45" }
      ]
    },
    nails: {
      title: "Nail Services",
      packages: [
        {
          name: "Classic Manicure",
          price: "$45",
          duration: "45-60 min",
          retention: "1-2 weeks",
          description: "Traditional nail care and polish",
          features: [
            "Nail shaping and filing",
            "Cuticle care and massage",
            "Base coat, color, and top coat",
            "Hand massage and moisturizer"
          ],
          popular: false
        },
        {
          name: "Gel Manicure",
          price: "$65",
          duration: "60-75 min",
          retention: "2-3 weeks",
          description: "Long-lasting gel polish application",
          features: [
            "Professional nail preparation",
            "Chip-resistant gel polish",
            "High-gloss, durable finish",
            "Quick cure under LED light"
          ],
          popular: true
        },
        {
          name: "Luxury Pedicure",
          price: "$75",
          duration: "60-75 min",
          retention: "3-4 weeks",
          description: "Complete foot care treatment",
          features: [
            "Relaxing foot soak",
            "Exfoliation and callus removal",
            "Massage and moisturizing",
            "Perfect polish application"
          ],
          popular: false
        }
      ],
      addOns: [
        { name: "Nail Art (per nail)", price: "$5" },
        { name: "French Tips", price: "$10" },
        { name: "Gel Removal", price: "$15" },
        { name: "Paraffin Treatment", price: "$20" }
      ]
    }
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Premium beauty services at fair prices. No hidden fees, no surprises - 
            just exceptional value for professional treatments.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {Object.entries(pricingData).map(([key, category]) => (
            <div key={key} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  {category.title}
                </h2>
              </div>

              {/* Main Services */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {category.packages.map((pkg, index) => (
                  <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary shadow-medium' : 'hover:shadow-soft'} transition-all`}>
                    {pkg.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-inter">
                        Most Popular
                      </Badge>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="font-playfair text-2xl mb-2">{pkg.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-inter">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {pkg.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {pkg.retention}
                        </div>
                      </div>
                      <p className="text-muted-foreground font-inter mt-2">{pkg.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 font-inter text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        asChild 
                        className={`w-full font-inter font-semibold ${
                          pkg.popular 
                            ? 'bg-gradient-primary hover:opacity-90' 
                            : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                        }`}
                      >
                        <Link to="/booking">Book {pkg.name}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Add-ons */}
              <Card className="bg-accent/20">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl">Add-On Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.addOns.map((addon, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-secondary last:border-b-0">
                        <span className="font-inter">{addon.name}</span>
                        <span className="font-semibold text-primary">{addon.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-center flex items-center justify-center gap-2">
                <AlertCircle className="w-6 h-6 text-primary" />
                Important Pricing Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-inter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Refill Policy</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Lash refills: Within 3 weeks (50% off)</li>
                    <li>• Brow touch-ups: Within 2 weeks (included)</li>
                    <li>• After refill window: New service pricing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Booking Notes</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 24-hour cancellation policy</li>
                    <li>• Late arrivals may result in shortened service</li>
                    <li>• Patch test required for first-time tinting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Payment & Deposits</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 50% deposit required for new clients</li>
                    <li>• Credit card, cash, or e-transfer accepted</li>
                    <li>• Gratuity appreciated but not required</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Special Offers</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• First-time clients: 15% off any service</li>
                    <li>• Loyalty program: Every 10th service 50% off</li>
                    <li>• Referral bonus: $25 credit for each referral</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-secondary">
                <p className="text-muted-foreground text-sm mb-4">
                  Questions about pricing or packages? We're here to help you choose the perfect service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-gradient-primary hover:opacity-90 font-inter font-semibold">
                    <Link to="/booking">Book Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" className="font-inter font-semibold">
                    <Link to="/contact">Ask Questions</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Pricing;