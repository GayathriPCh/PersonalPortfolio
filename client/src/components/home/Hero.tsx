import { Play, Info, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CONTACT_INFO } from "@/lib/constants";
import { useState } from "react";

export default function Hero() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="home" className="netflix-billboard pt-16">
      {/* Netflix billboard background */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        
        {/* Video/Image Background */}
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-60" 
        />
      </div>
      
      {/* Netflix billboard content */}
      <div className="netflix-billboard-content">
        <div className="max-w-7xl mx-auto">
          {/* Netflix style category tag */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-gray-300 mb-4">
            <span className="w-2 h-2 bg-[#e50914] rounded-full mr-2"></span>
            Software Engineer
          </div>

          {/* Title Section */}
          <div className="space-y-4">
            <h1 className="netflix-billboard-title">
              Gayathri P
            </h1>

            {/* Netflix style short info */}
            <div className="netflix-billboard-info max-w-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-[#e50914] font-bold">CS Student</span>
                <span className="text-gray-400">|</span>
                <span>Web3 Enthusiast</span>
                <span className="text-gray-400">|</span>
                <span>AI Developer</span>
              </div>
              
              <p className="text-lg text-gray-300">
                Pre-final year Computer Science student building scalable, secure software with expertise in distributed systems, information retrieval, and AI-powered applications.
              </p>
            </div>

            {/* Netflix style buttons */}
            <div className="netflix-billboard-buttons">
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="netflix-btn text-lg font-medium px-8 py-3"
              >
                <Play size={24} className="mr-2" />
                {showDetails ? "Hide Details" : "Play"}
              </button>
              
              <a 
                href="#about"
                className="netflix-btn-outline text-lg font-medium px-8 py-3"
              >
                <Info size={24} className="mr-2" />
                More Info
              </a>
            </div>
            
            {/* Social links */}
            <div className="pt-6 flex items-center space-x-6">
              <a 
                href={CONTACT_INFO.socials[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Github"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href={CONTACT_INFO.socials[1].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Play button modal-like content */}
          {showDetails && (
            <div className="mt-8 bg-black/80 p-6 rounded-lg border border-gray-800 max-w-4xl animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold mb-4">About Gayathri P</h2>
              <p className="mb-4">
                I'm a Computer Science student graduating in 2026, passionate about cutting-edge technologies. I specialize in distributed systems, information retrieval, and creating AI-powered applications that make a difference.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-2 py-1 bg-[#333] rounded text-sm">Java</span>
                <span className="px-2 py-1 bg-[#333] rounded text-sm">Python</span>
                <span className="px-2 py-1 bg-[#333] rounded text-sm">React</span>
                <span className="px-2 py-1 bg-[#333] rounded text-sm">Blockchain</span>
                <span className="px-2 py-1 bg-[#333] rounded text-sm">Machine Learning</span>
              </div>
              <a 
                href="#projects" 
                className="netflix-btn inline-flex items-center"
              >
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
