import React from 'react';
import { View, Text, Image } from 'react-native';
import { Svg, Path, Line, Circle } from 'react-native-svg';
import OnboardingLayout from './OnboardingLayout';
import CharacterPlaceholder from '../../assets/character.png.js';

interface TrackingScreenProps {
  onNext: () => void;
  currentPage: number;
  totalPages: number;
}

const TrackingScreen: React.FC<TrackingScreenProps> = ({ 
  onNext, 
  currentPage = 2, 
  totalPages = 4 
}) => {
  return (
    <OnboardingLayout 
      buttonText="NEXT" 
      onButtonPress={onNext}
      showButton={true}
      showPagination={true}
      currentPage={currentPage}
      totalPages={totalPages}
    >
      <View className="items-center justify-center w-full flex-1">
        <View className="w-full h-64 mb-8">
          {/* Graph visualization */}
          <View className="relative w-full h-full">
            {/* Graph line */}
            <Svg height="100%" width="100%" viewBox="0 0 300 200">
              <Path
                d="M 20,100 L 80,80 L 140,120 L 200,60 L 260,40"
                stroke="#4CAF50"
                strokeWidth="3"
                fill="none"
              />
              
              {/* Data points */}
              <Circle cx="20" cy="100" r="6" fill="#E0E0E0" />
              <Circle cx="80" cy="80" r="6" fill="#E0E0E0" />
              <Circle cx="140" cy="120" r="6" fill="#E0E0E0" />
              <Circle cx="200" cy="60" r="6" fill="#E0E0E0" />
              <Circle cx="260" cy="40" r="6" fill="#E0E0E0" />
            </Svg>
            
            {/* Data tooltip */}
            <View className="absolute top-10 right-20 bg-orange-100 rounded-xl px-4 py-2">
              <Text className="text-lg font-bold">51 Puffs</Text>
              <Text className="text-green-600 font-bold">-45.56% ↘</Text>
            </View>
            
            {/* Quick action buttons */}
            <View className="absolute bottom-0 left-0 flex-row space-x-4">
              <View className="bg-blue-400 rounded-md px-4 py-2">
                <Text className="text-white font-medium">5 puffs</Text>
              </View>
              <View className="bg-blue-400 rounded-md px-4 py-2">
                <Text className="text-white font-medium">15 puffs</Text>
              </View>
            </View>
            
            {/* Character illustration */}
            <View className="absolute bottom-0 right-0">
              <CharacterPlaceholder width={120} height={150} />
            </View>
          </View>
        </View>
        
        <Text className="text-white text-3xl font-bold text-center mb-4">
          Puff Tracking
        </Text>
        
        <Text className="text-white text-lg text-center px-6">
          Track your puffs and nicotine consumption.
          Visualize your progress over time.
        </Text>
      </View>
    </OnboardingLayout>
  );
};

export default TrackingScreen; 