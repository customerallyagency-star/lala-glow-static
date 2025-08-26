import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-secondary">
      <div className="container mx-auto px-4">
        {/* Top Bar - Contact Info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-secondary/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(604) 555-0199</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Richmond, BC</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon-Fri 10-7, Sat 10-6, Sun 11-5</span>
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>@lalabeauty</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">
              LALA
              <span className="text-foreground block text-sm font-inter font-normal tracking-wider">
                BEAUTY SECRET STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-inter font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-primary hover:opacity-90 font-inter font-semibold"
            >
              <Link to="/booking">Book Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-secondary animate-slide-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-inter font-medium py-2 transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-gradient-primary hover:opacity-90 font-inter font-semibold"
              >
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>

      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Button
          asChild
          size="lg"
          className="rounded-full bg-gradient-primary hover:opacity-90 shadow-strong font-inter font-semibold"
        >
          <Link to="/booking">Book</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;