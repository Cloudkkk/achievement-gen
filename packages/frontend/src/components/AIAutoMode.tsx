import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';

interface AIAutoModeProps {
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

const AIAutoMode: React.FC<AIAutoModeProps> = ({
  achievementData,
  setAchievementData,
}) => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    // In a real application, this would call an AI service
    // For now, we'll just set some placeholder data
    setAchievementData({
      image: 'https://source.unsplash.com/random/128x128?game',
      title: 'AI Generated Title',
      description: 'This is an AI-generated description based on your prompt.',
    });
  };

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
      <h2 className="text-lg sm:text-xl font-bold mb-4">AI Auto Mode</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm sm:text-base">Enter a descriptive prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-sm sm:text-base"
            placeholder="Describe the achievement you want to generate"
            rows={4}
          />
        </div>
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
        >
          <Wand2 className="inline-block mr-2" size={16} />
          Generate Achievement
        </button>
        <div className="mt-4">
          <h3 className="font-bold mb-2 text-sm sm:text-base">Edit Generated Content:</h3>
          <input
            type="text"
            value={achievementData.title}
            onChange={(e) =>
              setAchievementData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full p-2 mb-2 bg-gray-700 rounded text-sm sm:text-base"
            placeholder="Edit title"
          />
          <textarea
            value={achievementData.description}
            onChange={(e) =>
              setAchievementData((prev) => ({ ...prev, description: e.target.value }))
            }
            className="w-full p-2 bg-gray-700 rounded text-sm sm:text-base"
            placeholder="Edit description"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
};

export default AIAutoMode;