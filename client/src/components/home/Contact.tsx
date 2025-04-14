import { useState } from "react";
import { Mail, MapPin, Link, Github, Linkedin, Send, ArrowRight } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_INFO } from "@/lib/constants";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/contact", formData);
      
      // Success notification
      setShowSuccessMessage(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with Netflix style */}
        <div className="text-center mb-12">
          <h2 className="netflix-heading mb-4">Contact</h2>
          <p className="netflix-subheading max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column - Contact info */}
          <div className="netflix-card p-6">
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
            
            {/* Netflix-style CTA */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold">Looking for a project partner?</h4>
                  <p className="text-gray-400 text-sm mt-1">Let's discuss your ideas</p>
                </div>
                <a 
                  href="#"
                  className="netflix-btn-outline flex items-center"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Contact form with Netflix style */}
          <div>
            <div className="netflix-card overflow-hidden">
              {/* Form header */}
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-gray-400 text-sm mt-1">I'll respond as soon as possible</p>
              </div>
              
              {/* Success message (Netflix notification style) */}
              {showSuccessMessage && (
                <div className="bg-[#2e8b57]/20 border-l-4 border-[#2e8b57] p-4 animate-in fade-in duration-300">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-[#2e8b57]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-[#2e8b57]">
                        Message sent successfully!
                      </p>
                      <p className="mt-1 text-xs text-gray-300">
                        Thank you for your message. I'll get back to you soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Form body */}
              <div className="p-6">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 bg-[#333] border-0 text-white rounded-md focus:ring-[#e50914] focus:bg-[#444]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 bg-[#333] border-0 text-white rounded-md focus:ring-[#e50914] focus:bg-[#444]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 bg-[#333] border-0 text-white rounded-md focus:ring-[#e50914] focus:bg-[#444]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 bg-[#333] border-0 text-white rounded-md focus:ring-[#e50914] focus:bg-[#444]"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="netflix-btn w-full py-3 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
                
                {/* Netflix privacy note */}
                <div className="mt-6 text-gray-500 text-xs text-center">
                  By submitting this form, you agree to my privacy policy. Your information will not be shared with any third party.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
