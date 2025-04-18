import { useState, useRef } from 'react';
import { PlusCircle, Edit, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Import Gayathri's profile photo
import gayathriAvatarPath from "@assets/1743007796405.jpg";
import redavatar from "@assets/red.png";
import yellowavatar from "@assets/yellow.png";

// Define profiles
const profiles = [
  {
    id: 'gayathri',
    name: 'Gayathri',
    avatar: gayathriAvatarPath,
    isMain: true
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    avatar: redavatar,
    isMain: false
  },
  {
    id: 'guest',
    name: 'Guest',
    avatar: yellowavatar,
    isMain: false
  },
  {
    id: 'add',
    name: 'Add Profile',
    avatar: '',
    isMain: false,
    isAdd: true
  }
];

interface ProfileSelectionProps {
  onProfileSelect: (profileId: string) => void;
}

export default function ProfileSelection({ onProfileSelect }: ProfileSelectionProps) {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [hoverProfile, setHoverProfile] = useState<string | null>(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const selectedProfileRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const handleProfileHover = (profileId: string | null) => {
    setHoverProfile(profileId);
  };
  
  const handleProfileClick = (profileId: string) => {
    const profile = profiles.find(p => p.id === profileId);
    if (profile?.isAdd) {
      toast({
        title: "Add Profile",
        description: "This would allow adding a new profile in a real Netflix app.",
      });
      return;
    }
    
    setSelectedProfile(profileId);
    setIsExpanding(true);
    
    const profileElement = selectedProfileRef.current;
    if (profileElement) {
      const rect = profileElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      profileElement.style.transformOrigin = `${centerX}px ${centerY}px`;
    }
    
    // Wait for the expansion animation before showing main content
    setTimeout(() => {
      onProfileSelect(profileId);
    }, 1000);
  };
  
  return (
    <div className={`fixed inset-0 bg-[#141414] flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${isExpanding ? 'opacity-0' : 'opacity-100'}`}>
      {/* Netflix intro background - shown during transition */}
      {selectedProfile && isExpanding && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 animate-pulse" />
      )}
      
      <header className="absolute top-0 left-0 right-0 p-6 z-10">
        <div className="flex justify-between items-center">
          <div className="netflix-logo text-3xl">GAYATHRI</div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <Bell size={24} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Edit size={24} />
            </button>
          </div>
        </div>
      </header>
      
      <div className="text-center z-10">
        <h1 className="text-white text-4xl font-medium mb-8">Who's browsing?</h1>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {profiles.map((profile) => (
            <div 
              key={profile.id}
              ref={selectedProfile === profile.id ? selectedProfileRef : null}
              className={`relative cursor-pointer group ${
                selectedProfile === profile.id && isExpanding 
                  ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] transition-all duration-1000 ease-out scale-[20] opacity-0' 
                  : ''
              }`}
              onMouseEnter={() => handleProfileHover(profile.id)}
              onMouseLeave={() => handleProfileHover(null)}
              onClick={() => handleProfileClick(profile.id)}
            >
              {/* Profile Avatar */}
              <div 
                className={`w-32 h-32 md:w-40 md:h-40 rounded-md overflow-hidden border-2 ${
                  selectedProfile === profile.id ? 'border-white' : 
                  hoverProfile === profile.id ? 'border-white' : 'border-transparent'
                } transition-all duration-300`}
              >
                {profile.isAdd ? (
                  <div className="w-full h-full bg-[#2d2d2d] flex items-center justify-center">
                    <PlusCircle size={60} className="text-gray-400" />
                  </div>
                ) : (
                  <img 
                    src={profile.avatar} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Profile Name */}
              <p className={`mt-3 text-center ${
                selectedProfile === profile.id ? 'text-white' : 
                hoverProfile === profile.id ? 'text-white' : 'text-gray-400'
              } transition-colors duration-300`}>
                {profile.name}
              </p>
              
              {/* Selection overlay animation */}
              {selectedProfile === profile.id && (
                <div className="absolute inset-0 border-2 border-white animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
        
        <button className="mt-12 border border-gray-600 text-gray-400 px-6 py-2 hover:text-white hover:border-white transition-colors">
          Manage Profiles
        </button>
      </div>
    </div>
  );
}