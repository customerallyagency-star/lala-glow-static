import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  CreditCard, 
  Clock, 
  Shield, 
  Heart, 
  Users, 
  AlertTriangle,
  FileText 
} from "lucide-react";

const Policies = () => {
  const policies = [
    {
      title: "Booking & Appointment Policy",
      icon: Calendar,
      color: "primary",
      sections: [
        {
          subtitle: "Scheduling",
          content: [
            "Appointments can be booked online 24/7 or by calling during business hours",
            "We recommend booking at least 1-2 weeks in advance for popular services",
            "Same-day appointments may be available but are not guaranteed",
            "All appointments are confirmed via email or text message"
          ]
        },
        {
          subtitle: "Deposits",
          content: [
            "New clients: 50% deposit required to secure appointment",
            "Existing clients: No deposit required for services under $100",
            "Services over $100: 50% deposit required from all clients",
            "Deposits are non-refundable but transferable with proper notice"
          ]
        }
      ]
    },
    {
      title: "Cancellation & Rescheduling",
      icon: Clock,
      color: "warning",
      sections: [
        {
          subtitle: "Notice Requirements",
          content: [
            "24-hour notice required for all cancellations and reschedules",
            "Cancellations within 24 hours: 50% service fee applies",
            "No-shows: Full service fee charged",
            "Medical emergencies handled on case-by-case basis"
          ]
        },
        {
          subtitle: "Late Arrivals",
          content: [
            "Please arrive 10-15 minutes early for check-in",
            "15+ minutes late: Appointment may need to be rescheduled",
            "Late arrival fees may apply if we can accommodate shortened service",
            "Courtesy call required if running late"
          ]
        }
      ]
    },
    {
      title: "Payment & Pricing",
      icon: CreditCard,
      color: "success",
      sections: [
        {
          subtitle: "Accepted Payments",
          content: [
            "Cash, all major credit cards, and e-transfer accepted",
            "Payment due at time of service completion",
            "Package deals and loyalty discounts available",
            "Gratuity appreciated but not required (15-20% standard)"
          ]
        },
        {
          subtitle: "Pricing Policy",
          content: [
            "Prices subject to change with 30-day notice",
            "Service pricing based on time and complexity",
            "Add-on services priced separately",
            "Special promotions cannot be combined unless specified"
          ]
        }
      ]
    },
    {
      title: "Health & Safety",
      icon: Shield,
      color: "destructive",
      sections: [
        {
          subtitle: "Sanitation Standards",
          content: [
            "All tools sterilized between clients using hospital-grade equipment",
            "Single-use items disposed of after each client",
            "Staff follows strict hygiene protocols",
            "Regular health and safety training for all team members"
          ]
        },
        {
          subtitle: "Client Health Requirements",
          content: [
            "Patch test required 24-48 hours before first tinting service",
            "Clients must disclose allergies and medical conditions",
            "Active eye infections or skin conditions may require rescheduling",
            "Pregnancy and nursing clients: please inform us before booking"
          ]
        }
      ]
    },
    {
      title: "Service Guidelines",
      icon: Heart,
      color: "accent",
      sections: [
        {
          subtitle: "Lash Extension Guidelines",
          content: [
            "Arrive with clean, makeup-free lashes",
            "Remove contact lenses before service",
            "Avoid caffeine 2 hours before appointment to reduce sensitivity",
            "Refills must be within recommended timeframe for safety"
          ]
        },
        {
          subtitle: "Facial & Brow Services",
          content: [
            "Avoid sun exposure 24 hours before treatment",
            "Discontinue use of retinoids 3-5 days prior",
            "Inform us of any new skincare products or treatments",
            "Patch test required for all tinting services"
          ]
        }
      ]
    },
    {
      title: "Minors & Special Circumstances",
      icon: Users,
      color: "secondary",
      sections: [
        {
          subtitle: "Clients Under 18",
          content: [
            "Parent/guardian must be present for all services",
            "Signed consent form required",
            "Age restrictions: Lash extensions 16+, Brow services 14+",
            "Conservative approach taken for younger clients"
          ]
        },
        {
          subtitle: "Special Needs",
          content: [
            "We welcome clients with special needs",
            "Please inform us of any accommodations needed when booking",
            "Support persons welcome when necessary",
            "Extended appointment times available if needed"
          ]
        }
      ]
    },
    {
      title: "Aftercare Responsibility",
      icon: AlertTriangle,
      color: "warning",
      sections: [
        {
          subtitle: "Client Responsibility",
          content: [
            "Follow all provided aftercare instructions",
            "Use only recommended products on treated areas",
            "Contact studio immediately with any concerns",
            "Proper aftercare essential for optimal results and safety"
          ]
        },
        {
          subtitle: "Warranty & Guarantees",
          content: [
            "Touch-up within 48 hours if 20%+ lashes lost (excluding client error)",
            "Satisfaction guarantee - we'll work to make it right",
            "No guarantee if aftercare instructions not followed",
            "Each service includes detailed aftercare instructions"
          ]
        }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'warning': return 'text-warning';
      case 'success': return 'text-success';
      case 'destructive': return 'text-destructive';
      case 'accent': return 'text-accent-foreground';
      case 'secondary': return 'text-secondary-foreground';
      default: return 'text-primary';
    }
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Policies & Guidelines
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Please review our policies to ensure a smooth and enjoyable experience. 
            These guidelines help us provide the best possible service while maintaining 
            safety and quality standards.
          </p>
        </div>
      </section>

      {/* Policy Summary */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 shadow-soft border-primary/20">
              <CardContent className="p-6">
                <h2 className="text-xl font-playfair font-bold mb-4 text-center">
                  Policy Summary - Please Read Before Booking
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-inter">
                  <div className="text-center p-4 bg-accent/20 rounded-lg">
                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">24-Hour Notice</div>
                    <div className="text-muted-foreground">Required for cancellations</div>
                  </div>
                  <div className="text-center p-4 bg-accent/20 rounded-lg">
                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Patch Test</div>
                    <div className="text-muted-foreground">Required for tinting services</div>
                  </div>
                  <div className="text-center p-4 bg-accent/20 rounded-lg">
                    <CreditCard className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">50% Deposit</div>
                    <div className="text-muted-foreground">New clients & services $100+</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {policies.map((policy, index) => {
              const PolicyIcon = policy.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 font-playfair text-2xl">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <PolicyIcon className="w-5 h-5 text-white" />
                      </div>
                      {policy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {policy.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="font-playfair font-semibold text-lg mb-3 text-foreground">
                          {section.subtitle}
                        </h3>
                        <ul className="space-y-2">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 font-inter text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Reminders */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium border-destructive/20">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-center flex items-center justify-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  Important Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-inter font-semibold text-destructive">Before Your Appointment:</h3>
                    <ul className="space-y-1 text-sm font-inter text-muted-foreground">
                      <li>• Complete patch test if required (24-48 hours prior)</li>
                      <li>• Arrive with clean, makeup-free lashes/brows</li>
                      <li>• Avoid caffeine 2+ hours before lash services</li>
                      <li>• Remove contact lenses for eye treatments</li>
                      <li>• Inform us of any allergies or medical conditions</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-inter font-semibold text-destructive">After Your Service:</h3>
                    <ul className="space-y-1 text-sm font-inter text-muted-foreground">
                      <li>• Follow all aftercare instructions carefully</li>
                      <li>• Contact us immediately with any concerns</li>
                      <li>• Use only recommended products</li>
                      <li>• Schedule refills within recommended timeframe</li>
                      <li>• Book your next appointment before leaving</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-secondary pt-4 mt-6">
                  <p className="text-sm font-inter text-muted-foreground text-center">
                    <strong>Agreement:</strong> By booking an appointment, you acknowledge that you have read, 
                    understood, and agree to abide by all studio policies. Failure to follow policies may 
                    result in service refusal or additional fees.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Questions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
            We're happy to clarify any policies or answer questions before your appointment. 
            Understanding our guidelines helps ensure the best experience for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-inter font-semibold"
            >
              <Link to="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;