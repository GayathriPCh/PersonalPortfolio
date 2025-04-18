import { MapPin, Mail, Link, Github, Linkedin, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header styled like Netflix */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Gain access to unlimited opportunities. Let's connect and collaborate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column - Contact info */}
          <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <MapPin className="text-[#e50914] mr-2" />
              How to Reach Me
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#333] flex items-center justify-center text-[#e50914]">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-[#e50914] transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#333] flex items-center justify-center text-[#e50914]">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-400">{CONTACT_INFO.location}</p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#333] flex items-center justify-center text-[#e50914]">
                  <Link size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Connect</h4>
                  <div className="mt-3 flex space-x-5">
                    {CONTACT_INFO.socials.map((social, index) => {
                      const Icon = social.icon === "github" ? Github : 
                                   social.icon === "linkedin" ? Linkedin : Link;

                      return (
                        <a 
                          key={index}
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#e50914] transition-colors"
                          aria-label={social.platform}
                        >
                          <Icon size={24} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Netflix-style CTA */}
          <div
            style={{
              backgroundImage: "url('/path-to-netflix-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-lg shadow-lg p-8 flex flex-col justify-center items-center"
          >
            <h3 className="text-white text-xl font-bold mb-6 text-center">
              Gain Access to Unlimited Opportunities
            </h3>
            <p className="text-gray-400 text-lg text-center mb-6 max-w-md">
              Let's connect and discuss your ideas. Whether it's a project or collaboration, I'm here to help.
            </p>
            {/* CTA Button */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#e50914] text-white font-bold rounded-md hover:bg-red-dark transition-all flex items-center"
            >
              Contact Me
              <ArrowRight size={16} className="ml-2" />
            </a>

            {/* Optional LinkedIn Button */}
            <a
              href={CONTACT_INFO.socials.find(social => social.platform === "LinkedIn")?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-black border border-[#e50914] text-white font-bold rounded-md hover:bg-[#e50914] hover:text-black transition-all flex items-center"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
