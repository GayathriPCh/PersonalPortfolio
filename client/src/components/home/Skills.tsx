import { Code, Cpu, Layers, Brain, Cloud, Database, Link, Check } from "lucide-react";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:w-1/3">
            <h2 className="section-heading">
              Technical Skills
            </h2>
            <p className="mt-4 text-gray-600">
              A comprehensive toolkit built through academic projects, internships, and self-guided learning.
            </p>
          </div>
          
          <div className="md:w-2/3 mt-8 md:mt-0">
            <div className="grid grid-cols-1 gap-6">
              {/* Programming Languages */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                    <Code />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900 font-playfair">Programming Languages</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {SKILLS.programmingLanguages.map((language, index) => (
                    <span 
                      key={index} 
                      className={`skill-badge px-3 py-1 ${index % 2 === 0 ? 'bg-gradient-to-r from-primary to-primary-600' : 'bg-gradient-to-r from-primary-600 to-primary-700'} text-white rounded-full text-sm font-medium`}
                    >
                      {language.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Systems & Core CS */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                    <Cpu />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900 font-playfair">Systems & Core CS</h3>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {SKILLS.systemsAndCore.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-teal-500 mr-2" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Full Stack & AI/ML */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Stack */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                      <Layers />
                    </div>
                    <h3 className="ml-3 text-xl font-semibold text-gray-900 font-playfair">Full Stack</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SKILLS.fullStack.map((skill, index) => (
                      <span key={index} className="skill-badge px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* AI/ML */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                      <Brain />
                    </div>
                    <h3 className="ml-3 text-xl font-semibold text-gray-900 font-playfair">AI & ML</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SKILLS.ai.map((skill, index) => (
                      <span key={index} className="skill-badge px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Additional Skills */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Cloud & DevOps */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                      <Cloud />
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-900 font-playfair">Cloud & DevOps</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SKILLS.cloudDevOps.map((skill, index) => (
                      <span key={index} className="skill-badge px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Databases */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                      <Database />
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-900 font-playfair">Databases</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SKILLS.databases.map((skill, index) => (
                      <span key={index} className="skill-badge px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Blockchain & Web3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                      <Link />
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-900 font-playfair">Blockchain</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SKILLS.blockchain.map((skill, index) => (
                      <span key={index} className="skill-badge px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
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
