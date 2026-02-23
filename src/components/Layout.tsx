import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./Button";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-brand-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-navy hidden sm:inline-block">
              PT CENTRE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-teal ${
                  location.pathname === link.path ? "text-brand-teal" : "text-brand-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking">
              <Button size="sm" variant="secondary">
                Book Appointment
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-brand-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-6 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-lg font-semibold text-brand-navy py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="block pt-2" onClick={() => setIsOpen(false)}>
            <Button className="w-full" variant="secondary">
              Book Appointment
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Physical Therapy Centre</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Evidence-based physiotherapy focusing on long-term recovery and surgery avoidance. Lagos Island's leading clinic for clinical excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-brand-teal transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-brand-teal transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-brand-teal transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/services/sports-injury-rehabilitation" className="hover:text-white">Sports Rehab</Link></li>
              <li><Link to="/services/chronic-pain-management" className="hover:text-white">Pain Management</Link></li>
              <li><Link to="/services/post-surgical-rehab" className="hover:text-white">Post-Surgical Care</Link></li>
              <li><Link to="/services/neurological-rehab" className="hover:text-white">Neuro Rehab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-teal shrink-0" />
                <span>12B Admiralty Way, Lagos Island, Lagos</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-teal shrink-0" />
                <a href="tel:+2348001234567" className="hover:text-white">+234 800 123 4567</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-teal shrink-0" />
                <a href="mailto:info@ptcentrelagos.com" className="hover:text-white">info@ptcentrelagos.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Physical Therapy Centre. All rights reserved. Registered Medical Practice in Lagos.</p>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+2348001234567" className="flex-1">
          <Button variant="outline" className="w-full py-3 flex gap-2">
            <Phone size={18} /> Call Now
          </Button>
        </a>
        <Link to="/booking" className="flex-1">
          <Button variant="secondary" className="w-full py-3 flex gap-2">
            <Calendar size={18} /> Book
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
