import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

type FilterCategory = "All" | "Web3" | "AI/ML" | "Full Stack";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  
  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 inline-block relative section-heading-center">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, AI applications, and blockchain technologies.
          </p>
        </div>
        
        {/* Project Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {["All", "Web3", "AI/ML", "Full Stack"].map((filter) => (
            <button 
              key={filter}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                activeFilter === filter 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter(filter as FilterCategory)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="px-2 py-1 text-xs font-medium bg-primary text-white rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-playfair text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 border-t border-gray-100 pt-4 flex justify-between items-center">
                  <a href="#" className="text-primary hover:text-primary-700 font-medium text-sm flex items-center">
                    View Details
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/GayathriPCh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-montserrat inline-flex items-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary-50 transition-all"
          >
            View All Projects on GitHub
            <Github size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
