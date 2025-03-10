import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle, Path, Line } from 'react-native-svg';

interface SurveyScreenProps {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function SurveyScreen4({ onNext, onBack, onSkip }: SurveyScreenProps) {
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
        <View className="h-full w-[60%] bg-blue-500 rounded-full" />
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
          <Circle cx="12" cy="12" r="9" stroke="#60a5fa" strokeWidth="2" />
          <Line 
            x1="8" 
            y1="12" 
            x2="16" 
            y2="12" 
            stroke="#60a5fa" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </Svg>
      </View>

      {/* Question */}
      <Text className="text-white text-2xl font-bold text-center mb-12">
        How many times have you attempted to quit vaping?
      </Text>

      {/* Options */}
      <View className="w-full">
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent mb-6"
          onPress={onNext}
        >
          <Text className="text-white text-lg">Never tried</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent mb-6"
          onPress={onNext}
        >
          <Text className="text-white text-lg">1 Time</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent mb-6"
          onPress={onNext}
        >
          <Text className="text-white text-lg">2 - 4 Times</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent"
          onPress={onNext}
        >
          <Text className="text-white text-lg">5 Times or More</Text>
        </TouchableOpacity>
      </View>
      
      {/* Skip button */}
      <TouchableOpacity className="absolute top-4 right-16" onPress={onNext}>
        <Text className="text-blue-400 text-lg">Skip</Text>
      </TouchableOpacity>
    </View>
  );
} 