import { Link } from "wouter";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link href="/">
              <a className="font-playfair font-bold text-2xl">
                Gayathri P<span className="text-teal-500">.</span>
              </a>
            </Link>
            <p className="mt-2 text-gray-400">Software Engineer | Web3 Enthusiast | AI Developer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex space-x-6">
              <a 
                href={CONTACT_INFO.socials[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Github"
              >
                <Github size={24} />
              </a>
              <a 
                href={CONTACT_INFO.socials[1].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Gayathri P. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
