import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

interface SurveyScreenProps {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function SurveyScreen5({ onNext, onBack, onSkip }: SurveyScreenProps) {
  return (
    <View className="flex-1 justify-start items-center px-8 pt-16">
      {/* Info button */}
      <TouchableOpacity 
        className="absolute top-4 right-4 z-50 bg-white/20 rounded-full p-2"
        onPress={onSkip}
      >
        <Ionicons name="information-circle-outline" size={24} color="white" />
      </TouchableOpacity>
      
      {/* Progress bar */}
      <View className="w-full h-2 bg-white/20 rounded-full mb-12">
        <View className="h-full w-[80%] bg-blue-500 rounded-full" />
      </View>
      
      {/* Back button */}
      <TouchableOpacity className="absolute top-16 left-4" onPress={onBack}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path 
            d="M15 18L9 12L15 6" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </Svg>
      </TouchableOpacity>
      
      {/* Icon */}
      <View className="w-24 h-24 mb-10 items-center justify-center bg-blue-500/20 rounded-full">
        <Svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <Path 
            d="M13 3L18 8M18 8L13 13M18 8H6M11 21L6 16M6 16L11 11M6 16H18" 
            stroke="#60a5fa" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </Svg>
      </View>

      {/* Question */}
      <Text className="text-white text-2xl font-bold text-center mb-12">
        How often do you feel the urge to vape?
      </Text>

      {/* Options */}
      <View className="w-full">
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent mb-6"
          onPress={onNext}
        >
          <Text className="text-white text-lg">All Day Every Day, as soon as I wake up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent mb-6"
          onPress={onNext}
        >
          <Text className="text-white text-lg">Once every 10-15 minutes, thoughout the day</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent mb-6"
          onPress={onNext}
        >
          <Text className="text-white text-lg">A few times an hour</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent"
          onPress={onNext}
        >
          <Text className="text-white text-lg">A few times throughout the course of the day</Text>
        </TouchableOpacity>
      </View>
      
      {/* Skip button */}
      <TouchableOpacity className="absolute top-4 right-16" onPress={onNext}>
        <Text className="text-blue-400 text-lg">Skip</Text>
      </TouchableOpacity>
    </View>
  );
} 