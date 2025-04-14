import { useState } from 'react';
import { PlusCircle, Edit, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Import Gayathri's profile photo
import gayathriAvatarPath from "@assets/1743007796405.jpg";

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
    avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="150" height="150" fill="%23444"/><text x="75" y="85" font-family="Arial" font-size="50" text-anchor="middle" fill="white">R</text></svg>',
    isMain: false
  },
  {
    id: 'guest',
    name: 'Guest',
    avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="150" height="150" fill="%23333"/><text x="75" y="85" font-family="Arial" font-size="50" text-anchor="middle" fill="white">G</text></svg>',
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
  const { toast } = useToast();
  
  const handleProfileHover = (profileId: string | null) => {
    setHoverProfile(profileId);
  };
  
  const handleProfileClick = (profileId: string) => {
    // If it's the Add Profile button, show a message
    const profile = profiles.find(p => p.id === profileId);
    if (profile?.isAdd) {
      toast({
        title: "Add Profile",
        description: "This would allow adding a new profile in a real Netflix app.",
      });
      return;
    }
    
    // Otherwise select profile
    setSelectedProfile(profileId);
    
    // Slight delay to show selection before navigating
    setTimeout(() => {
      onProfileSelect(profileId);
    }, 800);
  };
  
  return (
    <div className="fixed inset-0 bg-[#141414] flex flex-col items-center justify-center z-50">
      <header className="absolute top-0 left-0 right-0 p-6">
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
      
      <div className="text-center">
        <h1 className="text-white text-4xl font-medium mb-8">Who's browsing?</h1>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {profiles.map((profile) => (
            <div 
              key={profile.id}
              className="relative cursor-pointer group"
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