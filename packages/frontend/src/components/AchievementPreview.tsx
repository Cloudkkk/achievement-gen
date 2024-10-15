import React from 'react';

interface AchievementPreviewProps {
  achievementData: {
    image: string;
    title: string;
    description: string;
  };
}

const AchievementPreview: React.FC<AchievementPreviewProps> = ({ achievementData }) => {
  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Achievement Preview</h2>
      <div className="bg-gray-900 p-3 sm:p-4 rounded-lg flex items-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 flex-shrink-0">
          {achievementData.image ? (
            <img
              src={achievementData.image}
              alt="Achievement icon"
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 rounded flex items-center justify-center text-gray-500 text-xs sm:text-sm">
              No image
            </div>
          )}
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="font-bold text-base sm:text-lg truncate">
            {achievementData.title || 'Achievement Title'}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base line-clamp-2">
            {achievementData.description || 'Achievement description'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementPreview;