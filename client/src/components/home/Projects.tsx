import { useState } from "react";
import { ExternalLink, Github, Play, Code, Info } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

type FilterCategory = "All" | "Web3" | "AI/ML" | "Full Stack";

// Project modal component
interface ProjectModalProps {
  project: typeof PROJECTS[0];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
      <div 
        className="bg-[#181818] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl animate-in fade-in duration-300" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-72 md:h-80">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent"></div>
          
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center"
            onClick={onClose}
          >
            <span className="text-white text-xl font-bold">✕</span>
          </button>
          
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center mb-2">
              <span className="text-green-500 mr-2 font-bold">98% Match</span>
              <span className="bg-[#333] px-2 text-sm mr-2">2023</span>
              <span className="border border-gray-600 px-1 text-xs">{project.category}</span>
            </div>
            
            <p className="text-white text-lg mb-4">
              {project.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-400 text-sm mb-1">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 text-xs font-medium bg-[#333] text-white rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-4">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="netflix-btn flex-1"
            >
              <Code size={18} className="mr-2" />
              View Code
            </a>
            <a 
              href="#" 
              className="netflix-btn-outline flex-1"
            >
              <Info size={18} className="mr-2" />
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  
  const categories = Array.from(new Set(PROJECTS.map(p => p.category)));
  
  // Group projects by category
  const projectsByCategory = PROJECTS.reduce((acc, project) => {
    const category = project.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as Record<string, typeof PROJECTS>);
  
  const handlePlayClick = (project: typeof PROJECTS[0]) => {
    setSelectedProject(project);
  };
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="netflix-heading mb-8">
            Featured Projects
          </h2>
          
          {/* Categories as Netflix rows */}
          <div className="space-y-12">
            {/* Featured / Popular row */}
            <div className="netflix-row">
              <h3 className="netflix-row-title">Popular on My Portfolio</h3>
              <div className="netflix-carousel">
                {PROJECTS.slice(0, 6).map((project) => (
                  <div key={project.id} className="netflix-tile">
                    <div className="relative h-40 md:h-44 w-full group">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-md" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                      
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button 
                          className="w-12 h-12 rounded-full bg-[#e50914]/80 hover:bg-[#e50914] text-white flex items-center justify-center transition-all"
                          onClick={() => handlePlayClick(project)}
                        >
                          <Play size={20} className="ml-1" />
                        </button>
                      </div>
                      
                      {/* Category badge */}
                      <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                        {project.category}
                      </div>
                      
                      {/* Title overlay on hover */}
                      <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h4 className="text-white font-bold truncate">{project.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Category based rows */}
            {categories.map(category => (
              <div key={category} className="netflix-row">
                <h3 className="netflix-row-title">{category} Projects</h3>
                <div className="netflix-carousel">
                  {projectsByCategory[category].map((project) => (
                    <div key={project.id} className="netflix-tile">
                      <div className="relative h-40 md:h-44 w-full group">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover rounded-md" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                        
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <button 
                            className="w-12 h-12 rounded-full bg-[#e50914]/80 hover:bg-[#e50914] text-white flex items-center justify-center transition-all"
                            onClick={() => handlePlayClick(project)}
                          >
                            <Play size={20} className="ml-1" />
                          </button>
                        </div>
                        
                        {/* Title overlay on hover */}
                        <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <h4 className="text-white font-bold truncate">{project.title}</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {project.technologies.slice(0, 2).map((tech, i) => (
                              <span key={i} className="px-1 text-xs bg-[#333] text-white rounded">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span className="px-1 text-xs text-gray-300">+{project.technologies.length - 2}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/GayathriPCh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="netflix-btn-outline px-6 py-3 inline-flex items-center"
          >
            View All Projects on GitHub
            <Github size={18} className="ml-2" />
          </a>
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
