import React, { useEffect, useState } from 'react';
import './netflixIntro.css';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      netflixintro: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { letter: string }, HTMLElement>;
    }
  }
}

interface NetflixIntroProps {
  letter: string;
  onAnimationComplete?: () => void;
}

const NetflixIntro: React.FC<NetflixIntroProps> = ({ letter, onAnimationComplete }) => {
  useEffect(() => {
    // Trigger callback when animation completes
    const timer = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 4500); // Adjusted to match animation duration

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div id="container">
      <netflixintro letter={letter}>
        <div className="helper-1">
          <div className="effect-brush">
            {[...Array(31)].map((_, i) => (
              <span key={i} className={`fur-${31 - i}`}></span>
            ))}
          </div>
          <div className="effect-lumieres">
            {[...Array(28)].map((_, i) => (
              <span key={i} className={`lamp-${i + 1}`}></span>
            ))}
          </div>
        </div>
        <div className="helper-2">
          <div className="effect-brush">
            {[...Array(31)].map((_, i) => (
              <span key={i} className={`fur-${31 - i}`}></span>
            ))}
          </div>
        </div>
        <div className="helper-3">
          <div className="effect-brush">
            {[...Array(31)].map((_, i) => (
              <span key={i} className={`fur-${31 - i}`}></span>
            ))}
          </div>
        </div>
        <div className="helper-4">
          <div className="effect-brush">
            {[...Array(31)].map((_, i) => (
              <span key={i} className={`fur-${31 - i}`}></span>
            ))}
          </div>
        </div>
      </netflixintro>
    </div>
  );
};

export default NetflixIntro;
