import React, { useState } from 'react';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { LibraryScreen } from './screens/LibraryScreen';
import { SessionScreen } from './screens/SessionScreen';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.ONBOARDING);

  // Simple animation wrapper could be added here, but direct switching is fine for now
  return (
    <div className="w-full h-full flex justify-center bg-black">
      {/* 
        Container to simulate mobile viewport on desktop 
        Max-width-md roughly equates to a large phone 
      */}
      <div className="w-full max-w-md h-full bg-background-light dark:bg-background-dark overflow-hidden shadow-2xl relative">
        {currentScreen === Screen.ONBOARDING && (
          <OnboardingScreen navigate={setCurrentScreen} />
        )}
        {currentScreen === Screen.DASHBOARD && (
          <DashboardScreen navigate={setCurrentScreen} />
        )}
        {currentScreen === Screen.LIBRARY && (
          <LibraryScreen navigate={setCurrentScreen} />
        )}
        {currentScreen === Screen.SESSION && (
          <SessionScreen navigate={setCurrentScreen} />
        )}
      </div>
    </div>
  );
};

export default App;