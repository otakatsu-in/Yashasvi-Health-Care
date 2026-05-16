import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-bold text-white leading-tight">Yashasvi</span>
              <span className="font-sans text-sm font-medium text-white/70 tracking-widest uppercase">Health Care</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              A professional multi-specialty clinic providing compassionate, academically excellent care in Davanagere.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white relative inline-block after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom--2 after:left-0">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-secondary-foreground/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-secondary-foreground/80 hover:text-white transition-colors">About Clinic</Link></li>
              <li><Link href="/treatments" className="text-secondary-foreground/80 hover:text-white transition-colors">Treatments & Lab</Link></li>
              <li><Link href="/education" className="text-secondary-foreground/80 hover:text-white transition-colors">Patient Education</Link></li>
              <li><Link href="/contact" className="text-secondary-foreground/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">Our Specialists</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/dr-yeshavanth" className="text-secondary-foreground/80 hover:text-white transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white transition-colors"></span>
                  Dr. Yeshavanth G
                </Link>
              </li>
              <li>
                <Link href="/dr-shilpa" className="text-secondary-foreground/80 hover:text-white transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white transition-colors"></span>
                  Dr. Shilpa Nabapure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Vibha Residency, 7th Main Road, MCC A Block, Davanagere - 577004, Karnataka</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>99722 57307</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>contact@yashasvihealthcare.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Yashasvi Health Care. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-secondary-foreground/60">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
