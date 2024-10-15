import React from 'react';
import { Image, Type } from 'lucide-react';

interface ManualModeProps {
  achievementData: {
    image: string;
    title: string;
    description: string;
  };
  setAchievementData: React.Dispatch<
    React.SetStateAction<{
      image: string;
      title: string;
      description: string;
    }>
  >;
}

const ManualMode: React.FC<ManualModeProps> = ({
  achievementData,
  setAchievementData,
}) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAchievementData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Manual Mode</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm sm:text-base">
            <Image className="inline-block mr-2" size={16} />
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 bg-gray-700 rounded text-sm sm:text-base"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm sm:text-base">
            <Type className="inline-block mr-2" size={16} />
            Title
          </label>
          <input
            type="text"
            value={achievementData.title}
            onChange={(e) =>
              setAchievementData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full p-2 bg-gray-700 rounded text-sm sm:text-base"
            placeholder="Enter achievement title"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm sm:text-base">
            <Type className="inline-block mr-2" size={16} />
            Description
          </label>
          <textarea
            value={achievementData.description}
            onChange={(e) =>
              setAchievementData((prev) => ({ ...prev, description: e.target.value }))
            }
            className="w-full p-2 bg-gray-700 rounded text-sm sm:text-base"
            placeholder="Enter achievement description"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
};

export default ManualMode;