import { useEffect, useState } from 'react';

interface NetflixIntroProps {
  onIntroEnd: () => void;
}

export default function NetflixIntro({ onIntroEnd }: NetflixIntroProps) {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    // Timeline for the Netflix intro animation
    const timeline = [
      { stage: 1, delay: 500 },    // Show N logo
      { stage: 2, delay: 1500 },   // Animation grows
      { stage: 3, delay: 2500 },   // Begin fade out
      { stage: 4, delay: 3000 },   // Complete animation and notify parent
    ];
    
    let timeoutId: number;
    
    const runTimeline = (index: number) => {
      if (index >= timeline.length) {
        onIntroEnd();
        return;
      }
      
      const step = timeline[index];
      timeoutId = window.setTimeout(() => {
        setAnimationStage(step.stage);
        runTimeline(index + 1);
      }, step.delay);
    };
    
    // Start the animation sequence
    runTimeline(0);
    
    // Play TUDUM sound (simulated with CSS animation since actual sound would need user interaction)
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [animationStage, onIntroEnd]);
  
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Netflix logo animation */}
      <div 
        className={`transition-all duration-[2000ms] ease-in-out ${
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