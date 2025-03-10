import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle, Path } from 'react-native-svg';

interface SurveyScreenProps {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function SurveyScreen1({ onNext, onSkip }: SurveyScreenProps) {
  return (
    <View className="flex-1 justify-center items-center px-8">
      {/* Info button */}
      <TouchableOpacity 
        className="absolute top-4 right-4 z-50 bg-white/20 rounded-full p-2"
        onPress={onSkip}
      >
        <Ionicons name="information-circle-outline" size={24} color="white" />
      </TouchableOpacity>

      {/* Illustration */}
      <View className="w-64 h-64 mb-10 items-center justify-center">
        <View className="absolute w-full h-full rounded-full bg-blue-500/10" />
        <Svg width="180" height="180" viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
          <Path 
            d="M12 6V12L16 14" 
            stroke="#60a5fa" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </Svg>
      </View>

      {/* Title */}
      <Text className="text-white text-3xl font-bold text-center mb-4">
        Take this survey to get started
      </Text>
      <Text className="text-white text-3xl font-bold text-center mb-8">
        with your Vapenosis Plan
      </Text>

      {/* Description */}
      <Text className="text-white/80 text-center text-lg mb-8">
        Let's start by learning more about your habit
      </Text>

      {/* Time indicator */}
      <View className="flex-row items-center mb-12">
        <Ionicons name="time-outline" size={24} color="#60a5fa" />
        <Text className="text-blue-400 ml-2 text-lg">Takes 2 Minutes</Text>
      </View>

      {/* Button */}
      <TouchableOpacity 
        className="w-full bg-blue-500 py-4 rounded-full items-center justify-center mb-6"
        onPress={onNext}
      >
        <Text className="text-white font-bold text-lg">Take the Survey</Text>
      </TouchableOpacity>
    </View>
  );
} 