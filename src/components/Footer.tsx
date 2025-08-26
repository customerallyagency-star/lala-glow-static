import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  const quickLinks = [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/gallery", label: "Gallery" },
    { href: "/booking", label: "Book Now" }
  ];

  const aboutLinks = [
    { href: "/about", label: "About Us" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/policies", label: "Policies" }
  ];

  return (
    <footer className="bg-accent/30 border-t border-secondary">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-secondary">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Stay Beautiful with LALA
            </h3>
            <p className="text-muted-foreground mb-6 font-inter">
              Get beauty tips, special offers, and be the first to know about new services.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 font-inter"
                required
              />
              <Button 
                type="submit"
                className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-playfair font-bold text-primary mb-2">
                LALA
                <span className="text-foreground block text-sm font-inter font-normal tracking-wider">
                  BEAUTY SECRET STUDIO
                </span>
              </div>
              <p className="text-muted-foreground font-inter max-w-md">
                Your premier destination for luxury lash extensions, brow artistry, 
                rejuvenating facials, and nail perfection in Richmond, BC.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-inter">Unit 1270, 8888 Odlin Crescent, Richmond, BC V6X 3Z8</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:6045550199" className="font-inter hover:text-primary transition-colors">
                  (604) 555-0199
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@lalabeauty.ca" className="font-inter hover:text-primary transition-colors">
                  hello@lalabeauty.ca
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <div className="font-inter">
                  <div>Mon-Fri: 10:00 AM - 7:00 PM</div>
                  <div>Sat: 10:00 AM - 6:00 PM</div>
                  <div>Sun: 11:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground font-inter text-sm">
            © {new Date().getFullYear()} LALA Beauty Secret Studio. All rights reserved. 
            <span className="ml-2 italic">Crafted with care</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/lalabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/lalabeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;