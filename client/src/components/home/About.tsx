import { Download, ArrowRight } from "lucide-react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:w-1/3">
            <h2 className="section-heading">
              About Me
            </h2>
          </div>
          
          <div className="md:w-2/3 mt-8 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-primary blur opacity-20"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                      alt="Modern portfolio background" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">Education</h3>
                  <ul className="mt-3 space-y-3">
                    {EDUCATION.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                          {item.icon === "graduation-cap" ? (
                            <FaGraduationCap className="text-xs" />
                          ) : (
                            <FaSchool className="text-xs" />
                          )}
                        </span>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{item.school}</p>
                          <p className="text-xs text-gray-500">{item.degree} ({item.period})</p>
                          <p className="text-xs font-medium text-primary-600">{item.score}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="md:col-span-7 space-y-6 mt-6 md:mt-0">
                <div className="pull-quote">
                  <p className="text-lg text-gray-600 italic font-playfair">
                    As a pre-final year Computer Science student, I'm passionate about building scalable, secure software solutions that make a difference.
                  </p>
                </div>
                
                <p className="text-gray-600">
                  I'm a CS student graduating in 2026, with a strong foundation in Java, Python, and C. My expertise spans distributed systems, information retrieval, and AI-powered applications. I'm excited to contribute to next-generation technologies in Software Engineering roles.
                </p>

                <div className="bg-gradient-to-r from-primary-50 to-white p-5 rounded-lg border-l-4 border-primary">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">Global Certifications</h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {CERTIFICATIONS.map((cert, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-200 shadow-sm">
                        {cert.icon === "aws" && <FaGraduationCap className="text-orange-500 mr-2" />}
                        {cert.icon === "redhat" && <FaGraduationCap className="text-red-600 mr-2" />}
                        {cert.icon === "database" && <FaGraduationCap className="text-green-600 mr-2" />}
                        {cert.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">Looking Forward</h3>
                  <p className="mt-2 text-gray-600">
                    I'm passionate about leveraging technology to solve complex problems. My goal is to contribute to innovative projects that combine cutting-edge technologies with practical applications, particularly in AI, distributed systems, and cloud computing.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#skills" className="font-montserrat inline-flex items-center px-5 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-all">
                    Explore My Skills
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                  <a 
                    href="/attached_assets/GayathriP_SWE_Resume_Google.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-montserrat inline-flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all"
                  >
                    <Download size={16} className="mr-2" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
