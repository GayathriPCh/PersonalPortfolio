import { Download, ArrowRight, Award, Play, Info } from "lucide-react";
import { FaGraduationCap, FaSchool, FaAward } from "react-icons/fa";
import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";
import { useState } from "react";


export default function About() {
  const [showMore, setShowMore] = useState(false);
  
  return (
    <section id="about" className="py-16 md:py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:w-1/3">
            <h2 className="section-heading mb-4">
              About Me
            </h2>
            <p className="netflix-subheading hidden md:block">
              The story so far...
            </p>
          </div>
          
          <div className="md:w-2/3 mt-8 md:mt-0">
            {/* Netflix-style card design */}
            <div className="netflix-card overflow-hidden">
              {/* Hero image with overlay */}
              <div className="relative h-64 md:h-80">
                <img 
                  src="https://i.pinimg.com/originals/85/f1/18/85f11844c6819123e5731504075cf8e7.gif" 
                  alt="Modern portfolio background" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl text-white font-bold">My Journey</h3>
                  <div className="flex items-center space-x-3 mt-2 text-sm">
                    <span className="text-[#e50914] font-bold">CS Student</span>
                    <span className="text-gray-400">|</span>
                    <span>Class of 2026</span>
                    <span className="text-gray-400">|</span>
                    <span className="border border-gray-500 px-1 text-xs">Resume</span>
                  </div>
                </div>
              </div>
              
              {/* Content area */}
              <div className="p-6 space-y-6">
                {/* Introduction */}
                <div className="space-y-4">
                  <div className="text-white text-lg leading-relaxed">
                    <p className="mb-4">
                      As a pre-final year Computer Science student, I'm passionate about building scalable, secure software solutions that make a difference.
                    </p>
                    <p>
                      I have a strong foundation in Java, Python, and C. My expertise spans distributed systems, information retrieval, and AI-powered applications. I'm excited to contribute to next-generation technologies in Software Engineering roles.
                    </p>
                  </div>
                  
                  {showMore && (
                    <div className="text-white text-lg leading-relaxed animate-in fade-in duration-300">
                      <p className="mb-4">
                        I'm passionate about leveraging technology to solve complex problems. My goal is to contribute to innovative projects that combine cutting-edge technologies with practical applications, particularly in AI, distributed systems, and cloud computing.
                      </p>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => setShowMore(!showMore)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    {showMore ? "Show Less" : "Show More"}
                    <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${showMore ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                
                {/* Netflix-style buttons */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/attached_assets/GayathriP_SWE_Resume_Google.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="netflix-btn flex items-center"
                  >
                    <Play size={18} className="mr-2" />
                    View Resume
                  </a>
                  <a 
                    href="#skills" 
                    className="netflix-btn-outline flex items-center"
                  >
                    <Info size={18} className="mr-2" />
                    More Details
                  </a>
                </div>
                
                {/* Education - Netflix style */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Award size={20} className="text-[#e50914] mr-2" />
                    Education
                  </h3>
                  
                  <div className="space-y-4">
                    {EDUCATION.map((item, index) => (
                      <div key={index} className="flex p-3 netflix-card">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#333] flex items-center justify-center text-[#e50914]">
                          {item.icon === "graduation-cap" ? (
                            <FaGraduationCap className="text-lg" />
                          ) : (
                            <FaSchool className="text-lg" />
                          )}
                        </div>
                        <div className="ml-4">
                          <p className="text-white font-bold">{item.school}</p>
                          <p className="text-gray-400 text-sm">{item.degree} ({item.period})</p>
                          <p className="text-[#e50914] text-sm font-medium">{item.score}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Certifications - Top 10 style */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="netflix-row-title flex items-center mb-4">
                    <FaAward className="text-[#e50914] mr-2" />
                    Global Certifications
                  </h3>
                  
                  <div className="netflix-carousel pb-4">
                    {CERTIFICATIONS.map((cert, index) => (
                      <div key={index} className="flex-none w-64 mr-4">
                        <div className="netflix-card p-4 relative h-32 flex flex-col justify-between">
                          <div className="absolute right-3 top-3 text-3xl font-bold text-[#e50914]/30">
                            {index + 1}
                          </div>
                          <div>
                            <div className="flex items-center">
                              {cert.icon === "aws" && <div className="h-6 w-6 bg-orange-500 rounded flex items-center justify-center text-white mr-2"><FaGraduationCap /></div>}
                              {cert.icon === "redhat" && <div className="h-6 w-6 bg-red-600 rounded flex items-center justify-center text-white mr-2"><FaGraduationCap /></div>}
                              {cert.icon === "database" && <div className="h-6 w-6 bg-green-600 rounded flex items-center justify-center text-white mr-2"><FaGraduationCap /></div>}
                              <span className="text-white font-bold">{cert.name}</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-2">
                              Certification
                            </p>
                          </div>
                          <div className="text-[#e50914] text-xs font-bold">
                            VERIFIED
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
