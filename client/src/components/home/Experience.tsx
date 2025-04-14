import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:w-1/3">
            <h2 className="section-heading">
              Work Experience
            </h2>
            <p className="mt-4 text-gray-600">
              Professional experiences that have shaped my technical skills and industry knowledge.
            </p>
          </div>
          
          <div className="md:w-2/3 mt-8 md:mt-0">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative border-l-2 border-primary-200 pl-8 pb-6 last:pb-0">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">{exp.title}</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${exp.badgeColor}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-primary-600 font-medium mt-1">{exp.company}</p>
                  <div className="mt-4 text-gray-600">
                    <p>{exp.description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
