import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CONTACT_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="pt-20 md:pt-0 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-transparent z-0"></div>
      <div className="absolute -right-32 top-12 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-32 bottom-12 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-screen py-12 md:py-24">
          {/* Hero content */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Software Engineer
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I'm <br/>
              <span className="text-gradient-primary">Gayathri P</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Pre-final year Computer Science student skilled in building scalable, secure software. Experienced in distributed systems, information retrieval, and AI-powered applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="font-montserrat inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-md shadow-md hover:shadow-lg transition-all"
              >
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="font-montserrat inline-flex items-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary-50 transition-all"
              >
                Contact Me
              </a>
            </div>
            <div className="pt-6 flex items-center space-x-4">
              <a 
                href={CONTACT_INFO.socials[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Github"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href={CONTACT_INFO.socials[1].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-primary blur opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80" 
                  alt="Abstract gradient design" 
                  className="w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <blockquote className="text-white font-playfair italic">
                    "Building next-gen technologies"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
