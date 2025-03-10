import React, { useState } from 'react';
import { View } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import TrackingScreen from './TrackingScreen';
import GoalSettingScreen from './GoalSettingScreen';
import NotificationsScreen from './NotificationsScreen';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const totalScreens = 4;

  const handleNext = () => {
    if (currentScreen < totalScreens) {
      setCurrentScreen(currentScreen + 1);
    } else {
      onComplete();
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <WelcomeScreen onNext={handleNext} />;
      case 2:
        return (
          <TrackingScreen 
            onNext={handleNext} 
            currentPage={currentScreen} 
            totalPages={totalScreens} 
          />
        );
      case 3:
        return (
          <GoalSettingScreen 
            onNext={handleNext} 
            currentPage={currentScreen} 
            totalPages={totalScreens} 
          />
        );
      case 4:
        return (
          <NotificationsScreen 
            onNext={handleNext} 
            currentPage={currentScreen} 
            totalPages={totalScreens} 
          />
        );
      default:
        return <WelcomeScreen onNext={handleNext} />;
    }
  };

  return (
    <View className="flex-1">
      {renderScreen()}
    </View>
  );
};

export default Onboarding; 