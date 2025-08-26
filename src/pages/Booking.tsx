import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, CheckCircle, ExternalLink, HelpCircle } from "lucide-react";

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    { id: "classic-lashes", name: "Classic Lashes", duration: "2-2.5 hours", price: "$120" },
    { id: "hybrid-lashes", name: "Hybrid Lashes", duration: "2.5-3 hours", price: "$150" },
    { id: "volume-lashes", name: "Volume Lashes", duration: "3-3.5 hours", price: "$180" },
    { id: "brow-shape-tint", name: "Brow Shape & Tint", duration: "45-60 min", price: "$65" },
    { id: "brow-lamination", name: "Brow Lamination", duration: "60-75 min", price: "$85" },
    { id: "full-brow-design", name: "Full Brow Design", duration: "75-90 min", price: "$120" },
    { id: "signature-facial", name: "Signature Glow Facial", duration: "60 min", price: "$95" },
    { id: "anti-aging-facial", name: "Anti-Aging Treatment", duration: "75 min", price: "$125" },
    { id: "classic-manicure", name: "Classic Manicure", duration: "45-60 min", price: "$45" },
    { id: "gel-manicure", name: "Gel Manicure", duration: "60-75 min", price: "$65" },
    { id: "luxury-pedicure", name: "Luxury Pedicure", duration: "60-75 min", price: "$75" }
  ];

  const bookingSteps = [
    {
      step: 1,
      title: "Choose Your Service",
      description: "Select from our range of premium beauty treatments",
      icon: CheckCircle
    },
    {
      step: 2,
      title: "Pick Your Time",
      description: "Choose a convenient appointment time that works for you",
      icon: Calendar
    },
    {
      step: 3,
      title: "Confirm Details",
      description: "Review your booking and provide contact information",
      icon: Clock
    }
  ];

  const quickFAQs = [
    {
      question: "Do I need a patch test?",
      answer: "Yes, first-time clients requiring tinting services need a patch test 24-48 hours before their appointment."
    },
    {
      question: "What's your cancellation policy?",
      answer: "We require 24 hours notice for cancellations. Late cancellations may incur a fee."
    },
    {
      question: "How long do lash extensions last?",
      answer: "Classic lashes last 2-3 weeks, Hybrid 3-4 weeks, and Volume 4-5 weeks with proper care."
    },
    {
      question: "What should I avoid before my appointment?",
      answer: "Avoid caffeine, arrive with clean lashes/brows, and remove contact lenses for lash services."
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Book Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Ready to experience the luxury of LALA Beauty? Book your appointment today 
            and let our expert technicians enhance your natural beauty.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Primary Booking Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Online Booking */}
              <Card className="shadow-medium hover:shadow-strong transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-playfair text-2xl">Online Booking</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground font-inter mb-6">
                    Book instantly with our online booking system. Choose your service, 
                    time, and technician in just a few clicks.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-primary hover:opacity-90 font-inter font-semibold"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Book Online Now
                  </Button>
                  <p className="text-sm text-muted-foreground font-inter mt-2">
                    Available 24/7 • Instant confirmation
                  </p>
                </CardContent>
              </Card>

              {/* Phone Booking */}
              <Card className="shadow-medium hover:shadow-strong transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-playfair text-2xl">Call to Book</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground font-inter mb-6">
                    Prefer to speak with someone? Call us directly to book your appointment 
                    and ask any questions you may have.
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full font-inter font-semibold"
                    onClick={() => window.open('tel:6045550199')}
                  >
                    Call (604) 555-0199
                  </Button>
                  <p className="text-sm text-muted-foreground font-inter mt-2">
                    Mon-Fri 10-7, Sat 10-6, Sun 11-5
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Booking Steps */}
            <div className="mb-16">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {bookingSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="text-center">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto relative">
                        <StepIcon className="w-10 h-10 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-playfair font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-inter">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Service Selection Preview */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-center">
                  Popular Services
                </CardTitle>
                <p className="text-center text-muted-foreground font-inter">
                  Quick access to our most requested treatments
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.slice(0, 6).map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-soft ${
                        selectedService === service.id
                          ? 'border-primary bg-primary/5'
                          : 'border-secondary hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-playfair font-semibold">{service.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {service.price}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-inter">
                        Duration: {service.duration}
                      </p>
                    </div>
                  ))}
                </div>
                {selectedService && (
                  <div className="text-center mt-6">
                    <Button
                      size="lg"
                      className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
                      onClick={() => window.open('#', '_blank')}
                    >
                      Book {services.find(s => s.id === selectedService)?.name}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-center flex items-center justify-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Quick Questions
                </CardTitle>
                <p className="text-center text-muted-foreground font-inter">
                  Common questions about booking and appointments
                </p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {quickFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="font-inter font-medium text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-inter text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">
            Need to Reschedule or Cancel?
          </h2>
          <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
            We understand plans change. Please give us at least 24 hours notice 
            to avoid any cancellation fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="font-inter font-semibold"
              onClick={() => window.open('tel:6045550199')}
            >
              Call Studio
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-inter font-semibold"
              onClick={() => window.open('#', '_blank')}
            >
              Manage Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;