import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import OnboardingLayout from './OnboardingLayout';

interface NotificationsScreenProps {
  onNext: () => void;
  currentPage: number;
  totalPages: number;
}

const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ 
  onNext, 
  currentPage = 4, 
  totalPages = 4 
}) => {
  return (
    <OnboardingLayout 
      buttonText="Enable Notifications" 
      onButtonPress={onNext}
      showButton={true}
      showPagination={true}
      currentPage={currentPage}
      totalPages={totalPages}
    >
      <View className="items-center justify-center w-full flex-1">
        <View className="w-20 h-20 bg-white/20 rounded-full items-center justify-center mb-8">
          <Ionicons name="notifications" size={40} color="white" />
        </View>
        
        <Text className="text-white text-3xl font-bold text-center mb-6">
          Stay on Track
        </Text>
        
        <Text className="text-white text-lg text-center mb-10 px-6">
          Enable notifications to receive timely reminders, encouragement, and track your progress towards quitting.
        </Text>
        
        <View className="w-full space-y-4 px-4">
          <View className="bg-white/10 rounded-xl p-5">
            <View className="flex-row items-center mb-3">
              <Ionicons name="time-outline" size={24} color="white" />
              <Text className="text-white font-bold text-lg ml-3">Daily Check-ins</Text>
            </View>
            <Text className="text-white/80">
              Get reminders to log your daily vaping activity and track your progress
            </Text>
          </View>
          
          <View className="bg-white/10 rounded-xl p-5">
            <View className="flex-row items-center mb-3">
              <Ionicons name="trophy-outline" size={24} color="white" />
              <Text className="text-white font-bold text-lg ml-3">Milestone Celebrations</Text>
            </View>
            <Text className="text-white/80">
              Celebrate your achievements as you reach important milestones in your journey
            </Text>
          </View>
        </View>
      </View>
    </OnboardingLayout>
  );
};

export default NotificationsScreen; 