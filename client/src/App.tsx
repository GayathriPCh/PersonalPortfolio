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
type IntroStage = "intro" | "profiles" | "main";

function Router() {
  const [location, setLocation] = useLocation();
  const [introStage, setIntroStage] = useState<IntroStage>("intro");
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [skipIntro, setSkipIntro] = useState(false);

  // Check if we should skip intro (e.g., when refreshing inside the app)
  useEffect(() => {
    // Skip intro if there's a hash/fragment in the URL (indicates a section on the page)
    const hasFragment = window.location.hash !== "";
    
    // Or if it's stored in session storage (for page refreshes)
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro") === "true";
    
    if (hasFragment || hasSeenIntro) {
      setIntroStage("main");
      setSkipIntro(true);
    }
  }, []);

  // Handle the TUDUM intro animation ending
  const handleIntroEnd = () => {
    setIntroStage("profiles");
  };

  // Handle profile selection
  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
    setIntroStage("main");
    
    // Store that user has seen the intro in this session
    sessionStorage.setItem("hasSeenIntro", "true");
  };

  // Skip button handler
  const handleSkipIntro = () => {
    setIntroStage("main");
    setSkipIntro(true);
    sessionStorage.setItem("hasSeenIntro", "true");
  };

  return (
    <>
      {/* Netflix TUDUM intro */}
      {introStage === "intro" && !skipIntro && (
        <div className="relative">
          <NetflixIntro onIntroEnd={handleIntroEnd} />
          <button 
            onClick={handleSkipIntro} 
            className="absolute top-6 right-6 text-gray-400 hover:text-white text-sm py-1 px-4 border border-gray-600 rounded"
          >
            Skip
          </button>
        </div>
      )}
      
      {/* Who's watching? Profile selection */}
      {introStage === "profiles" && !skipIntro && (
        <ProfileSelection onProfileSelect={handleProfileSelect} />
      )}
      
      {/* Main content - only shown after intro sequence or if skipped */}
      {introStage === "main" && (
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      )}
    </>
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
