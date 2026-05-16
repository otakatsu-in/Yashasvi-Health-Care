import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Clinic", href: "/about" },
    { name: "Dr. Yeshavanth G", href: "/dr-yeshavanth" },
    { name: "Dr. Shilpa Nabapure", href: "/dr-shilpa" },
    { name: "Treatments", href: "/treatments" },
    { name: "Patient Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm" 
          : "bg-background"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:flex bg-primary text-primary-foreground py-2 px-6 justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary-foreground/80" />
            <span>Mon - Sat: 1:00 PM - 3:00 PM & 5:00 PM - 9:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-primary-foreground/80" />
            <span className="font-medium">99722 57307</span>
          </div>
          <Link href="/contact" className="hover:underline">
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary leading-tight">Yashasvi</span>
              <span className="font-sans text-sm font-medium text-secondary tracking-widest uppercase">Health Care</span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href 
                    ? "text-primary bg-primary/5" 
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden lg:flex">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              <a href="https://wa.me/919972257307?text=Hi%2C%20I%20want%20to%20book%20a%20consultation" target="_blank" rel="noreferrer">Book Consultation</a>
            </Button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location === link.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-primary text-white rounded-full">
                <a href="https://wa.me/919972257307?text=Hi%2C%20I%20want%20to%20book%20a%20consultation" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
