import { PUBLICATIONS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

export default function Publications() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <div className="p-8">
            <h2 className="text-3xl font-bold font-playfair text-gray-900 relative inline-block section-heading">
              Publications & Writing
            </h2>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold font-playfair text-gray-900">{PUBLICATIONS.blogs.title}</h3>
                <p className="mt-2 text-gray-600">
                  {PUBLICATIONS.blogs.description}
                </p>
                <div className="mt-4 space-y-3">
                  {PUBLICATIONS.blogs.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      className="block text-primary hover:text-primary-700 font-medium flex items-center"
                    >
                      → {link.text}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold font-playfair text-gray-900">{PUBLICATIONS.conferences.title}</h3>
                <p className="mt-2 text-gray-600">
                  <span className="font-medium">Environmental Impact of Blockchain Computation:</span> {PUBLICATIONS.conferences.description}
                </p>
                <div className="mt-4">
                  {PUBLICATIONS.conferences.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      className="text-primary hover:text-primary-700 font-medium flex items-center"
                    >
                      → {link.text} 
                      <ExternalLink size={14} className="ml-1" />
                    </a>
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
