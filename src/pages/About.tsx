import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Shield, GraduationCap, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Hygiene",
      description: "Hospital-grade sanitation and safety protocols for every service"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Continuous learning and certification in the latest beauty techniques"
    },
    {
      icon: Heart,
      title: "Care",
      description: "Personalized attention and genuine care for each client's needs"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships and supporting our local community"
    }
  ];

  const team = [
    {
      name: "Lala Chen",
      role: "Founder & Lead Lash Artist",
      specialties: ["Volume Lashes", "Classic Extensions", "Lash Lifts"],
      certifications: ["Advanced Volume Certification", "Lash Lift Specialist", "Safety & Sanitation"],
      image: "/placeholder.svg",
      bio: "With over 5 years of experience, Lala founded the studio with a vision to provide luxury beauty services in a safe, welcoming environment."
    },
    {
      name: "Sarah Kim",
      role: "Senior Brow Artist",
      specialties: ["Brow Lamination", "Microblading", "Brow Design"],
      certifications: ["Brow Lamination Expert", "Microblading Artist", "Color Theory"],
      image: "/placeholder.svg",
      bio: "Sarah specializes in creating the perfect brow shape for every face, combining artistry with technical precision."
    },
    {
      name: "Michelle Wong",
      role: "Esthetician & Nail Technician",
      specialties: ["Anti-Aging Facials", "Gel Manicures", "Nail Art"],
      certifications: ["Licensed Esthetician", "Gel Application Specialist", "Nail Art Designer"],
      image: "/placeholder.svg",
      bio: "Michelle brings expertise in skincare and nail artistry, ensuring clients leave feeling pampered and beautiful."
    }
  ];

  const studioHighlights = [
    "Licensed and insured beauty professionals",
    "Premium, cruelty-free products only",
    "Complimentary consultations for new clients",
    "Flexible scheduling including evenings and weekends",
    "Private treatment rooms for ultimate comfort",
    "Aftercare support and touch-up services"
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            About LALA Beauty Secret Studio
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Founded with passion for beauty and excellence, we're Richmond's premier 
            destination for luxury lash extensions, brow artistry, facials, and nail services.
          </p>
        </div>
      </section>

      {/* Studio Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-inter">
                  ✨ Our Story
                </Badge>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Where Beauty Meets Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                  <p>
                    LALA Beauty Secret Studio was born from a simple belief: every person deserves 
                    to feel beautiful, confident, and pampered. Founded by Lala Chen in 2019, our 
                    studio has grown from a small treatment room to Richmond's most trusted beauty destination.
                  </p>
                  <p>
                    What started as a passion for lash artistry has blossomed into a comprehensive 
                    beauty studio offering premium services in a luxurious, safe environment. We believe 
                    that beauty treatments should be more than just services – they should be experiences 
                    that leave you feeling refreshed, confident, and radiant.
                  </p>
                  <p>
                    Today, our team of licensed professionals serves hundreds of satisfied clients, 
                    each receiving personalized care and exceptional results. We're not just a beauty 
                    studio; we're your partners in looking and feeling your absolute best.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-accent rounded-2xl overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="LALA Beauty Secret Studio interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-medium">
                  <div className="text-2xl font-playfair font-bold text-primary">5+</div>
                  <div className="text-sm font-inter text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-medium">
                  <div className="text-2xl font-playfair font-bold text-primary">1000+</div>
                  <div className="text-sm font-inter text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              These principles guide everything we do, from the moment you book 
              to the lasting results you'll love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                      <ValueIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Our licensed professionals are passionate about beauty and dedicated 
              to delivering exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-shadow">
                <div className="aspect-square bg-gradient-accent">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-inter font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-inter font-semibold text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-inter font-semibold text-sm mb-2">Certifications:</h4>
                    <ul className="text-xs text-muted-foreground font-inter space-y-1">
                      {member.certifications.map((cert, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <Award className="w-3 h-3 text-primary" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-muted-foreground font-inter">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Highlights */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Why Choose LALA Beauty
              </h2>
              <p className="text-lg text-muted-foreground font-inter">
                Experience the difference that sets us apart from other beauty studios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studioHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-inter">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Experience LALA Beauty?
          </h2>
          <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their beauty needs. 
            Book your appointment today and discover why we're Richmond's favorite beauty studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
            >
              <Link to="/booking">Book Your Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-inter font-semibold"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;