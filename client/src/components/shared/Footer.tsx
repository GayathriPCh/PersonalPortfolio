import { Link } from "wouter";
import { Github, Linkedin, Mail, ArrowUp, Globe, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  // Netflix-like footer links
  const footerLinks = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
    { title: "Resume", href: "/attached_assets/GayathriP_SWE_Resume_Google.pdf" },
  ];
  
  const footerGroups = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
      ]
    },
    {
      title: "About",
      links: [
        { label: "My Story", href: "#about" },
        { label: "Education", href: "#about" },
        { label: "Certifications", href: "#about" },
        { label: "Resume", href: "/attached_assets/GayathriP_SWE_Resume_Google.pdf" },
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "Email", href: `mailto:${CONTACT_INFO.email}` },
        { label: "LinkedIn", href: CONTACT_INFO.socials[1].url },
        { label: "GitHub", href: CONTACT_INFO.socials[0].url },
        { label: "Contact Form", href: "#contact" },
      ]
    }
  ];
  
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Netflix logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <Link href="/">
              <div className="netflix-logo text-3xl">
                GAYATHRI
              </div>
            </Link>
            <p className="mt-2 text-gray-400">Software Engineer | Web3 Enthusiast | AI Developer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex space-x-6">
              <a 
                href={CONTACT_INFO.socials[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#e50914] transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href={CONTACT_INFO.socials[1].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#e50914] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="text-gray-400 hover:text-[#e50914] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              {/* Netflix-like social icons */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#e50914] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#e50914] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#e50914] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#e50914] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Netflix-style footer links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {footerGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-sm text-gray-400 mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-[#e50914] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Language selector and back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <button className="flex items-center text-sm text-gray-300 border border-gray-700 rounded px-3 py-1 hover:text-white">
              <Globe size={16} className="mr-2" />
              English
            </button>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-[#e50914] transition-colors flex items-center"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to top
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Gayathri P. All rights reserved. Based on Netflix design.
          </div>
        </div>
      </div>
    </footer>
  );
}
