import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, Bell, Search } from "lucide-react";
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
    <nav className={`fixed top-0 w-full ${scrolled ? 'bg-black/90 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'} z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="netflix-logo text-3xl">GAYATHRI</div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="nav-link text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">
                Home
              </a>
              <a href="#about" className="nav-link text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">
                About
              </a>
              <a href="#skills" className="nav-link text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">
                Skills
              </a>
              <a href="#projects" className="nav-link text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">
                Projects
              </a>
              <a href="#experience" className="nav-link text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">
                Experience
              </a>
            </div>
          </div>
          
          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-gray-300">
              <Bell size={20} />
            </button>
            <a href="#contact" className="hidden md:block netflix-btn text-sm">
              Contact
            </a>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-black/90 transition-all duration-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#home" 
            className="block text-white hover:text-gray-300 px-3 py-2 text-base"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block text-white hover:text-gray-300 px-3 py-2 text-base"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="block text-white hover:text-gray-300 px-3 py-2 text-base"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="block text-white hover:text-gray-300 px-3 py-2 text-base"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className="block text-white hover:text-gray-300 px-3 py-2 text-base"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="block netflix-btn mt-2 text-base"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
