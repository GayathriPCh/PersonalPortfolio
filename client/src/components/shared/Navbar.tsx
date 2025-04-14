import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full ${scrolled ? 'bg-white/90 shadow-sm' : 'bg-white/80'} backdrop-blur-md z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <a className="font-playfair font-bold text-2xl text-primary">
                G<span className="text-teal-500">.</span>
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="nav-link font-montserrat text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#about" className="nav-link font-montserrat text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#skills" className="nav-link font-montserrat text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
                Skills
              </a>
              <a href="#projects" className="nav-link font-montserrat text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
                Projects
              </a>
              <a href="#experience" className="nav-link font-montserrat text-gray-700 hover:text-primary px-2 py-1 rounded-md text-sm font-medium">
                Experience
              </a>
              <a href="#contact" className="font-montserrat bg-gradient-primary text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition-all">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-b-lg transition-all duration-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#home" 
            className="block font-montserrat text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block font-montserrat text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="block font-montserrat text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="block font-montserrat text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className="block font-montserrat text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="block font-montserrat bg-gradient-primary text-white mt-2 px-4 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
