import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  ExternalLink,
  Send 
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: [
        "Unit 1270, 8888 Odlin Crescent",
        "Richmond, BC V6X 3Z8",
        "Easy parking available"
      ],
      action: "Get Directions",
      link: "https://maps.google.com/?q=Unit+1270+8888+Odlin+Crescent+Richmond+BC"
    },
    {
      icon: Phone,
      title: "Call or Text",
      details: [
        "(604) 555-0199",
        "Text for quick questions",
        "Calls during business hours"
      ],
      action: "Call Now",
      link: "tel:6045550199"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@lalabeauty.ca",
        "Response within 24 hours",
        "Send photos for consultations"
      ],
      action: "Send Email",
      link: "mailto:hello@lalabeauty.ca"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "10:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 5:00 PM" }
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      icon: Instagram,
      handle: "@lalabeauty",
      link: "https://instagram.com/lalabeauty",
      description: "Daily inspiration, before/afters, and beauty tips"
    },
    {
      platform: "Facebook",
      icon: Facebook,
      handle: "LALA Beauty Secret Studio",
      link: "https://facebook.com/lalabeauty",
      description: "Community updates, events, and client features"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about our services, 
            need to book an appointment, or just want to say hello, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="font-playfair text-2xl flex items-center gap-2">
                      <Send className="w-6 h-6 text-primary" />
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground font-inter">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-inter font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="font-inter"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-inter font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="font-inter"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(604) 555-0199"
                          className="font-inter"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          required
                          className="font-inter resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-primary hover:opacity-90 font-inter font-semibold"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="w-4 h-4 ml-2" />
                      </Button>

                      <p className="text-xs text-muted-foreground font-inter text-center">
                        * Required fields. We respect your privacy and will never share your information.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const InfoIcon = info.icon;
                    return (
                      <Card key={index} className="hover:shadow-soft transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <InfoIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-playfair font-semibold text-lg mb-2">
                                {info.title}
                              </h3>
                              <ul className="space-y-1 text-muted-foreground font-inter text-sm mb-3">
                                {info.details.map((detail, i) => (
                                  <li key={i}>{detail}</li>
                                ))}
                              </ul>
                              <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="font-inter font-semibold"
                              >
                                <a href={info.link} target="_blank" rel="noopener noreferrer">
                                  {info.action}
                                  <ExternalLink className="w-3 h-3 ml-2" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center font-inter">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <Badge variant="outline" className="font-medium">
                            {schedule.hours}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-secondary">
                      <p className="text-sm text-muted-foreground font-inter">
                        <strong>Holiday Hours:</strong> Please check our social media for holiday schedule updates.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl">
                      Follow Us
                    </CardTitle>
                    <p className="text-muted-foreground font-inter text-sm">
                      Stay connected for beauty tips, inspiration, and special offers
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {socialLinks.map((social, index) => {
                        const SocialIcon = social.icon;
                        return (
                          <div key={index} className="flex items-center gap-4 p-3 bg-accent/20 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                              <SocialIcon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-inter font-semibold">{social.handle}</div>
                              <div className="text-sm text-muted-foreground font-inter">
                                {social.description}
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="font-inter"
                            >
                              <a href={social.link} target="_blank" rel="noopener noreferrer">
                                Follow
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Find Our Studio
            </h2>
            <p className="text-muted-foreground font-inter mb-8">
              Located in the heart of Richmond with convenient parking and easy access.
            </p>
            
            {/* Map Placeholder */}
            <Card className="overflow-hidden shadow-medium">
              <div className="aspect-video bg-gradient-accent relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-playfair font-semibold text-xl mb-2">
                      LALA Beauty Secret Studio
                    </h3>
                    <p className="text-muted-foreground font-inter mb-4">
                      Unit 1270, 8888 Odlin Crescent<br />
                      Richmond, BC V6X 3Z8
                    </p>
                    <Button
                      asChild
                      className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
                    >
                      <a 
                        href="https://maps.google.com/?q=Unit+1270+8888+Odlin+Crescent+Richmond+BC"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="mt-6 text-sm text-muted-foreground font-inter">
              <p>Free parking available • Public transit accessible • Wheelchair accessible entrance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;