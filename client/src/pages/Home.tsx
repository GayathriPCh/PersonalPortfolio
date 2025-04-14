import { useEffect } from "react";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Achievements from "@/components/home/Achievements";
import Publications from "@/components/home/Publications";
import Contact from "@/components/home/Contact";
import Footer from "@/components/shared/Footer";

export default function Home() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        
        const targetId = target.getAttribute("href");
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 100,
            behavior: "smooth"
          });
        }
      }
    };
    
    document.addEventListener("click", smoothScroll);
    
    return () => {
      document.removeEventListener("click", smoothScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
