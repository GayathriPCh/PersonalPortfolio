import { EXPERIENCE } from "@/lib/constants";
import { Play, Calendar, Briefcase, Clock } from "lucide-react";
import { useState } from "react";

interface ExperienceCardProps {
  experience: typeof EXPERIENCE[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}

function ExperienceCard({ experience: exp, index, isActive, onClick }: ExperienceCardProps) {
  return (
    <div 
      className={`netflix-card mb-4 transition-all duration-300 overflow-hidden ${isActive ? 'border-l-4 border-[#e50914]' : ''}`}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
            <p className="text-[#e50914] font-medium mt-1">{exp.company}</p>
          </div>
          <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-[#333] text-white`}>
            {exp.period}
          </span>
        </div>
        
        {isActive && (
          <div className="mt-4 animate-in fade-in duration-300">
            <div className="text-gray-300 mb-4">
              <p>{exp.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 text-xs font-medium bg-[#333] text-gray-300 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
            
            <button className="netflix-btn flex items-center">
              <Play size={16} className="mr-2" />
              More Details
            </button>
          </div>
        )}
      </div>
      
      {/* Netflix progress indicator */}
      {isActive && (
        <div className="h-1 w-full bg-[#333]">
          <div className="h-full bg-[#e50914] w-3/4"></div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const [activeExpIndex, setActiveExpIndex] = useState<number | null>(null);
  
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:w-1/3">
            <h2 className="section-heading">
              Work Experience
            </h2>
            <p className="mt-4 netflix-subheading">
              Professional experiences that have shaped my technical skills and industry knowledge.
            </p>
            
            {/* Netflix style categories */}
            <div className="mt-8 space-y-3 hidden md:block">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors p-2 cursor-pointer">
                <Briefcase size={18} className="mr-3" />
                <span>All Experiences</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors p-2 cursor-pointer">
                <Calendar size={18} className="mr-3" />
                <span>By Year</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors p-2 cursor-pointer">
                <Clock size={18} className="mr-3" />
                <span>Duration</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 mt-8 md:mt-0">
            {/* Netflix top banner */}
            <div className="relative h-48 mb-8 rounded-lg overflow-hidden hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
                alt="Experience banner" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-4xl font-bold text-white">My Career</h3>
                <p className="text-gray-300 mt-2">A collection of professional milestones</p>
              </div>
            </div>
          
            {/* Netflix-style cards */}
            <div className="space-y-2">
              {EXPERIENCE.map((exp, index) => (
                <ExperienceCard 
                  key={index}
                  experience={exp}
                  index={index}
                  isActive={activeExpIndex === index}
                  onClick={() => setActiveExpIndex(index === activeExpIndex ? null : index)}
                />
              ))}
            </div>
            
            {/* Netflix-style category titles */}
            <div className="mt-12">
              <h3 className="netflix-row-title">Recommended Experiences</h3>
              <div className="netflix-carousel">
                {EXPERIENCE.map((exp, index) => (
                  <div key={index} className="flex-none w-72 mr-4">
                    <div 
                      className="netflix-card p-4 h-40 flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setActiveExpIndex(index)}
                    >
                      <div>
                        <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                        <p className="text-[#e50914] text-sm">{exp.company}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                        <Play size={16} className="text-white opacity-60" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
