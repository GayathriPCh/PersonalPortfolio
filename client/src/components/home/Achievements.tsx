import { Trophy, Award, Medal, Star } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/constants";

export default function Achievements() {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="h-6 w-6 text-yellow-600" />;
      case "award":
        return <Award className="h-6 w-6 text-blue-600" />;
      case "medal":
        return <Medal className="h-6 w-6 text-red-600" />;
      case "star":
        return <Star className="h-6 w-6 text-green-600" />;
      default:
        return <Trophy className="h-6 w-6 text-yellow-600" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 inline-block relative section-heading-center">
            Achievements
          </h2>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  {renderIcon(achievement.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{achievement.title}</h3>
                  <p className="text-primary-600 font-medium">{achievement.badge}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
