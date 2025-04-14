import { Code, Cpu, Layers, Brain, Cloud, Database, Link, Check, Star } from "lucide-react";
import { SKILLS } from "@/lib/constants";
import { useState } from "react";

// Skill interfaces for type-checking
interface SkillWithStringLevel {
  name: string;
  level?: string;
}

interface SkillWithNumberLevel {
  name: string;
  level?: number;
}

type Skill = string | SkillWithStringLevel | SkillWithNumberLevel;

// Skill category component
interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  className?: string;
}

function SkillCategory({ title, icon, skills, className }: SkillCategoryProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderSkill = (skill: Skill, index: number) => {
    const skillName = typeof skill === 'string' ? skill : skill.name;
    let skillLevel = 3; // Default level
    
    if (typeof skill === 'object' && skill.level !== undefined) {
      if (typeof skill.level === 'number') {
        skillLevel = skill.level;
      } else if (typeof skill.level === 'string') {
        // Convert string levels to numbers
        skillLevel = skill.level === 'Advanced' ? 5 : 
                    skill.level === 'Intermediate' ? 3 : 2;
      }
    } else {
      // Random level between 3-5 if not provided
      skillLevel = Math.floor(Math.random() * 3) + 3; 
    }
    
    return (
      <div key={index} className="netflix-card p-3 transition-transform hover:scale-105">
        <div className="flex justify-between items-center">
          <span className="text-white">{skillName}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < skillLevel ? "text-[#e50914]" : "text-gray-600"} 
                fill={i < skillLevel ? "#e50914" : "none"} 
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`netflix-card relative overflow-hidden ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-[#333] flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-[#e50914]/20 flex items-center justify-center text-[#e50914]">
            {icon}
          </div>
          <h3 className="ml-3 text-xl font-bold text-white">{title}</h3>
        </div>
        <button 
          onClick={toggleExpanded}
          className="text-white px-3 py-1 rounded border border-[#333] hover:bg-[#333] transition-colors"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Content */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-2 p-4 ${expanded ? 'max-h-[1000px]' : 'max-h-[200px]'} overflow-hidden transition-all duration-500`}>
        {Array.isArray(skills) && skills.map((skill, index) => renderSkill(skill, index))}
      </div>

      {/* Gradient fade for collapsed state */}
      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1f1f1f] to-transparent pointer-events-none"></div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="netflix-heading mb-4">
            Technical Skills
          </h2>
          <p className="netflix-subheading mb-8">
            A comprehensive toolkit built through academic projects, internships, and self-guided learning.
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Programming Languages */}
            <SkillCategory 
              title="Programming Languages"
              icon={<Code />}
              skills={SKILLS.programmingLanguages}
              className="border-l-4 border-red-600"
            />
            
            {/* Core Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Stack */}
              <SkillCategory 
                title="Full Stack"
                icon={<Layers />}
                skills={SKILLS.fullStack}
                className="border-l-4 border-blue-600"
              />
              
              {/* AI & ML */}
              <SkillCategory 
                title="AI & ML"
                icon={<Brain />}
                skills={SKILLS.ai}
                className="border-l-4 border-green-600"
              />
            </div>
            
            {/* Featured Skills - styled like Netflix Top 10 */}
            <div className="mt-8">
              <h3 className="netflix-row-title flex items-center mb-4">
                <span className="text-[#e50914] font-bold mr-2">TOP</span> Most Proficient Skills
              </h3>
              
              <div className="netflix-carousel pb-4">
                {[
                  ...SKILLS.programmingLanguages.slice(0, 3).map(lang => typeof lang === 'string' ? lang : lang.name),
                  ...SKILLS.fullStack.slice(0, 3),
                  ...SKILLS.ai.slice(0, 2),
                  ...SKILLS.cloudDevOps.slice(0, 2)
                ].map((skill, index) => (
                  <div key={index} className="flex-none w-64 mr-4 relative">
                    <div className="relative h-32 rounded-md overflow-hidden netflix-card group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#e50914]/20 to-transparent"></div>
                      
                      {/* Rank number */}
                      <div className="absolute bottom-0 right-0 w-24 h-full flex items-center justify-center">
                        <span className="text-6xl font-bold text-[#e50914]/30 group-hover:text-[#e50914]/60 transition-colors">
                          {index + 1}
                        </span>
                      </div>
                      
                      <div className="absolute inset-0 flex items-center p-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">{skill}</h4>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < 5 - (index % 2) ? "text-[#e50914]" : "text-gray-600"} 
                                fill={i < 5 - (index % 2) ? "#e50914" : "none"} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cloud & DevOps */}
              <div className="netflix-card p-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-[#e50914]/20 flex items-center justify-center text-[#e50914]">
                    <Cloud />
                  </div>
                  <h3 className="ml-3 text-lg font-bold text-white">Cloud & DevOps</h3>
                </div>
                <div className="space-y-2">
                  {SKILLS.cloudDevOps.map((skill, index) => (
                    <div key={index} className="flex items-center p-2 border-b border-[#333] last:border-0">
                      <Check className="h-4 w-4 text-[#e50914] mr-2" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Databases */}
              <div className="netflix-card p-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-[#e50914]/20 flex items-center justify-center text-[#e50914]">
                    <Database />
                  </div>
                  <h3 className="ml-3 text-lg font-bold text-white">Databases</h3>
                </div>
                <div className="space-y-2">
                  {SKILLS.databases.map((skill, index) => (
                    <div key={index} className="flex items-center p-2 border-b border-[#333] last:border-0">
                      <Check className="h-4 w-4 text-[#e50914] mr-2" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Blockchain */}
              <div className="netflix-card p-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-lg bg-[#e50914]/20 flex items-center justify-center text-[#e50914]">
                    <Link />
                  </div>
                  <h3 className="ml-3 text-lg font-bold text-white">Blockchain</h3>
                </div>
                <div className="space-y-2">
                  {SKILLS.blockchain.map((skill, index) => (
                    <div key={index} className="flex items-center p-2 border-b border-[#333] last:border-0">
                      <Check className="h-4 w-4 text-[#e50914] mr-2" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
