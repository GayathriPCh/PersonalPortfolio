import { useEffect, useState } from 'react';

interface NetflixIntroProps {
  onIntroEnd: () => void;
}

export default function NetflixIntro({ onIntroEnd }: NetflixIntroProps) {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    // Define an async function to control our animation sequence
    const playIntroSequence = async () => {
      try {
        // Show N logo
        await new Promise(resolve => setTimeout(resolve, 500));
        setAnimationStage(1);
        
        // Animation grows
        await new Promise(resolve => setTimeout(resolve, 1500));
        setAnimationStage(2);
        
        // Display TUDUM animation
        await new Promise(resolve => setTimeout(resolve, 1500));
        setAnimationStage(3);
        
        // Fade out and complete animation
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Notify parent component that intro is done
        console.log("Intro animation complete, switching to profiles");
        onIntroEnd();
      } catch (error) {
        console.error("Error in intro animation:", error);
        // Fallback in case of error
        onIntroEnd();
      }
    };
    
    // Start the animation sequence
    playIntroSequence();
    
    // No cleanup needed for this approach
  }, [onIntroEnd]);
  
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Netflix logo animation */}
      <div 
        className={`transition-all duration-1000 ease-in-out ${
          animationStage === 0 ? 'opacity-0 scale-[0.2]' : 
          animationStage === 1 ? 'opacity-100 scale-[0.8]' : 
          animationStage === 2 ? 'opacity-100 scale-100' : 
          'opacity-0 scale-[1.2]'
        }`}
      >
        {/* Netflix N logo */}
        <div className="w-40 h-40 relative">
          <div className="absolute inset-0 bg-[#e50914]" style={{
            clipPath: "polygon(0% 0%, 20% 0%, 20% 65%, 50% 0%, 70% 0%, 35% 70%, 35% 100%, 15% 100%, 15% 35%, 0% 49%)"
          }}></div>
          <div className="absolute inset-0 bg-[#e50914]" style={{
            clipPath: "polygon(80% 0%, 100% 0%, 100% 90%, 85% 100%, 85% 20%, 80% 15%)"
          }}></div>
          
          {/* Tudum text animation - appears when the logo is fully scaled */}
          {animationStage >= 2 && (
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <p className="text-white text-2xl font-bold animate-pulse">TUDUM</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}