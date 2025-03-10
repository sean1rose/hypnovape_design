import React from 'react';
import { View, Text, Image } from 'react-native';
import OnboardingLayout from './OnboardingLayout';
import LogoPlaceholder from '../../assets/logo.png.js';
import CloudsPlaceholder from '../../assets/clouds.png.js';

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext }) => {
  return (
    <OnboardingLayout 
      buttonText="Get Started" 
      onButtonPress={onNext}
      showButton={true}
      showPagination={false}
    >
      <View className="items-center justify-center flex-1">
        <View className="bg-white rounded-full p-6 mb-8 shadow-lg">
          <LogoPlaceholder width={96} height={96} />
        </View>
        
        <Text className="text-white text-3xl font-bold text-center mb-4">
          Congratulations!
        </Text>
        
        <Text className="text-white text-xl text-center mb-10">
          You're on the way to a healthier lifestyle!
        </Text>
        
        <View className="absolute bottom-0 left-0 right-0">
          <CloudsPlaceholder width="100%" height={160} />
        </View>
      </View>
    </OnboardingLayout>
  );
};

export default WelcomeScreen; 