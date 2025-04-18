import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import NetflixIntro from "@/components/netflix/NetflixIntro";
import ProfileSelection from "@/components/netflix/ProfileSelection";

// Netflix intro stages
type IntroStage = "intro" | "profiles" | "main" | "transition";

function Router() {
  const [location, setLocation] = useLocation();
  const [introStage, setIntroStage] = useState<IntroStage>("intro");
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [isDebug, setIsDebug] = useState(false);

  // For testing purposes - add ?debug=true to URL to skip intro
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const debug = urlParams.get('debug') === 'true';
    
    if (debug) {
      console.log("Debug mode active - skipping to main content");
      setIntroStage("main");
      setIsDebug(true);
    }
    
    // Skip intro if there's a hash/fragment in the URL (indicates a section on the page)
    const hasFragment = window.location.hash !== "";
    
    // Or if it's stored in session storage (for page refreshes)
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro") === "true";
    
    if (hasFragment || hasSeenIntro) {
      setIntroStage("main");
    }
  }, []);

  // Handle the TUDUM intro animation ending
  const handleIntroEnd = () => {
    console.log("Intro animation ended, showing profiles");
    setIntroStage("profiles");
  };

  // Handle profile selection
  const handleProfileSelect = (profileId: string) => {
    console.log("Profile selected:", profileId);
    setSelectedProfile(profileId);
    
    // Start transition
    setIntroStage("transition");
    
    // After transition, move to main content
    setTimeout(() => {
      setIntroStage("main");
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 50); // Reduced from 1200ms to 200ms to show content right after profile expansion starts
  };

  // Skip button handler
  const handleSkipIntro = () => {
    console.log("Skipping intro");
    if (introStage === "intro") {
      setIntroStage("profiles");
    } else {
      setIntroStage("main");
    }
  };

  console.log("Current intro stage:", introStage);

  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Netflix TUDUM intro */}
      {introStage === "intro" && !isDebug && (
        <div className="relative">
          <NetflixIntro letter="N" onAnimationComplete={handleIntroEnd} />
          <button 
            onClick={handleSkipIntro} 
            className="absolute top-6 right-6 text-gray-400 hover:text-white text-sm py-1 px-4 border border-gray-600 rounded"
          >
            Skip
          </button>
        </div>
      )}
      
      {/* Who's watching? Profile selection */}
      {introStage === "profiles" && !isDebug && (
        <ProfileSelection onProfileSelect={handleProfileSelect} />
      )}
      
      {/* Main content - shown after the transition */}
      {introStage === "main" && (
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      )}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
