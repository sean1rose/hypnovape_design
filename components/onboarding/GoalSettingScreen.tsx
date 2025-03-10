import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import OnboardingLayout from './OnboardingLayout';

interface GoalSettingScreenProps {
  onNext: () => void;
  currentPage: number;
  totalPages: number;
}

const GoalSettingScreen: React.FC<GoalSettingScreenProps> = ({ 
  onNext, 
  currentPage = 3, 
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
        <View className="w-16 h-16 bg-white/20 rounded-full items-center justify-center mb-8">
          <Ionicons name="flag" size={32} color="white" />
        </View>
        
        <Text className="text-white text-3xl font-bold text-center mb-6">
          Set Your Goals
        </Text>
        
        <Text className="text-white text-lg text-center mb-10 px-6">
          Define your vaping reduction targets and track your progress towards a healthier lifestyle.
        </Text>
        
        <View className="w-full space-y-4 px-4">
          <TouchableOpacity className="bg-white/20 rounded-xl p-4 flex-row items-center">
            <View className="bg-white/20 rounded-full p-2 mr-4">
              <Ionicons name="calendar" size={24} color="white" />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">Quit Date</Text>
              <Text className="text-white/80">Set a target date to be vape-free</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="white" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-white/20 rounded-xl p-4 flex-row items-center">
            <View className="bg-white/20 rounded-full p-2 mr-4">
              <Ionicons name="trending-down" size={24} color="white" />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">Reduction Plan</Text>
              <Text className="text-white/80">Gradually reduce your daily puffs</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="white" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        </View>
      </View>
    </OnboardingLayout>
  );
};

export default GoalSettingScreen; 