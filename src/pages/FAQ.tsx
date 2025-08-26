import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { HelpCircle, Clock, Shield, Heart, Phone } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Lash Extensions",
      icon: Heart,
      questions: [
        {
          question: "How long do lash extensions last?",
          answer: "Classic lashes typically last 2-3 weeks, Hybrid lashes 3-4 weeks, and Volume lashes 4-5 weeks. The longevity depends on your natural lash growth cycle, aftercare, and lifestyle factors."
        },
        {
          question: "Is the lash extension process painful?",
          answer: "Not at all! The process is completely painless and most clients find it relaxing enough to fall asleep. Your eyes remain closed throughout the entire application process."
        },
        {
          question: "Can I wear makeup with lash extensions?",
          answer: "Yes, but avoid oil-based makeup and removers as they can break down the adhesive. Use water-based or specifically formulated lash extension-safe products. Avoid mascara on the extensions themselves."
        },
        {
          question: "How do I care for my lash extensions?",
          answer: "Keep them dry for the first 24-48 hours, cleanse gently with a lash cleanser, avoid oil-based products, don't rub or pull on them, and sleep on your back when possible. We provide detailed aftercare instructions."
        },
        {
          question: "Can I swim or shower with lash extensions?",
          answer: "Yes! After the initial 24-48 hour period, lash extensions are water-resistant. You can swim, shower, and exercise normally. Just gently pat them dry and brush them with a clean spoolie."
        }
      ]
    },
    {
      category: "Brow Services",
      icon: Shield,
      questions: [
        {
          question: "What's the difference between brow tinting and lamination?",
          answer: "Brow tinting adds color to your existing brow hairs and skin underneath for fuller appearance. Lamination restructures the hair to create a fuller, more uniform shape by setting the hairs in an upward direction."
        },
        {
          question: "How long does brow lamination last?",
          answer: "Brow lamination typically lasts 6-8 weeks, while tinting lasts 2-4 weeks. The lamination effect gradually relaxes as your brow hairs naturally renew, and tinting fades as your skin cells turnover."
        },
        {
          question: "Do I need a patch test?",
          answer: "Yes, we require a patch test 24-48 hours before any tinting service for first-time clients or if you haven't had the service in over 6 months. This ensures you don't have any allergic reactions."
        },
        {
          question: "Can I get my brows wet after lamination?",
          answer: "Avoid getting your brows wet for 24-48 hours after lamination to allow the treatment to fully set. After this period, you can wash your face and get your brows wet normally."
        },
        {
          question: "Will brow lamination damage my natural brows?",
          answer: "No, when performed by a trained professional using quality products, brow lamination is safe and doesn't damage your natural brow hairs. We use gentle, professional-grade products."
        }
      ]
    },
    {
      category: "Facial Services",
      icon: Heart,
      questions: [
        {
          question: "How often should I get a facial?",
          answer: "For most skin types, we recommend monthly facials to maintain optimal skin health. For specific concerns like acne or anti-aging, you might benefit from more frequent treatments initially."
        },
        {
          question: "Which facial is right for my skin type?",
          answer: "We offer complimentary consultations to determine the best facial for your specific skin concerns. Our Signature Glow works for all skin types, while we have specialized treatments for acne, aging, and sensitive skin."
        },
        {
          question: "Will I experience any downtime after a facial?",
          answer: "Most of our facials have no downtime. You might experience mild redness for 1-2 hours after treatment, which is completely normal. For more intensive treatments, we'll discuss any potential side effects beforehand."
        },
        {
          question: "Can I wear makeup after a facial?",
          answer: "We recommend avoiding makeup for at least 6-12 hours after a facial to let your skin breathe and fully absorb the treatment benefits. Your skin will have a natural glow that won't need makeup!"
        },
        {
          question: "What should I do before my facial appointment?",
          answer: "Arrive with a clean face (no makeup), avoid sun exposure and harsh treatments for 24 hours prior, and let us know about any new skincare products you're using or skin sensitivities."
        }
      ]
    },
    {
      category: "Booking & Policies",
      icon: Clock,
      questions: [
        {
          question: "What's your cancellation policy?",
          answer: "We require 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may incur a fee equal to 50% of the service cost. We understand emergencies happen and handle them case by case."
        },
        {
          question: "Do you require a deposit?",
          answer: "Yes, we require a 50% deposit for new clients and for appointments over $100. The deposit is applied to your service cost and is non-refundable but can be transferred to another appointment with proper notice."
        },
        {
          question: "What if I'm running late?",
          answer: "Please call us if you're running late. We'll do our best to accommodate you, but if you're more than 15 minutes late, we may need to reschedule to avoid affecting other clients' appointments."
        },
        {
          question: "What forms of payment do you accept?",
          answer: "We accept cash, all major credit cards, and e-transfer. Payment is due at the time of service. We also offer package deals and loyalty programs for regular clients."
        },
        {
          question: "Can I bring a friend to my appointment?",
          answer: "Due to space limitations and to maintain a peaceful environment for all clients, we ask that you come alone to your appointment. Support persons are welcome for minors or clients with special needs."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Find answers to common questions about our services, policies, and procedures. 
            Can't find what you're looking for? We're here to help!
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={categoryIndex} className="mb-12 last:mb-0">
                  <Card className="shadow-soft">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 font-playfair text-2xl">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <CategoryIcon className="w-5 h-5 text-white" />
                        </div>
                        {category.category}
                        <Badge variant="outline" className="ml-auto">
                          {category.questions.length} Questions
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, questionIndex) => (
                          <AccordionItem 
                            key={questionIndex} 
                            value={`${categoryIndex}-${questionIndex}`}
                            className="border-secondary"
                          >
                            <AccordionTrigger className="font-inter font-medium text-left hover:text-primary">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="font-inter text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">
              Quick Tips for Your Visit
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-playfair font-semibold mb-2">Arrive Early</h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    Arrive 10-15 minutes early to complete any paperwork and relax before your service.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-playfair font-semibold mb-2">Come Clean</h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    Arrive with clean, makeup-free lashes and brows for the best application results.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-playfair font-semibold mb-2">Communicate</h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    Let us know about any allergies, concerns, or preferences you have.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-playfair font-semibold mb-2">Stay Connected</h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    Call us with any questions before or after your appointment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help! Contact us directly and we'll be happy 
            to answer any questions about our services, policies, or procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-inter font-semibold"
            >
              <a href="tel:6045550199">Call (604) 555-0199</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;