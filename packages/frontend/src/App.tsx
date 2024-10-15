import React, { useState } from 'react';
import { Image, Upload, Pencil } from 'lucide-react';
import ManualMode from './components/ManualMode';
import AIAutoMode from './components/AIAutoMode';
import AchievementPreview from './components/AchievementPreview';

function App() {
  const [mode, setMode] = useState<'manual' | 'ai'>('manual');
  const [achievementData, setAchievementData] = useState({
    image: '',
    title: '',
    description: '',
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Steam Achievement Generator</h1>
          <div className="flex space-x-2 sm:space-x-4">
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base ${
                mode === 'manual' ? 'bg-blue-600' : 'bg-gray-700'
              }`}
              onClick={() => setMode('manual')}
            >
              <Upload className="inline-block mr-1 sm:mr-2" size={16} />
              Manual
            </button>
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base ${
                mode === 'ai' ? 'bg-blue-600' : 'bg-gray-700'
              }`}
              onClick={() => setMode('ai')}
            >
              <Pencil className="inline-block mr-1 sm:mr-2" size={16} />
              AI Auto
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-4 sm:mt-8 p-4">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          <div className="w-full lg:w-1/2">
            {mode === 'manual' ? (
              <ManualMode
                achievementData={achievementData}
                setAchievementData={setAchievementData}
              />
            ) : (
              <AIAutoMode
                achievementData={achievementData}
                setAchievementData={setAchievementData}
              />
            )}
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <AchievementPreview achievementData={achievementData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;