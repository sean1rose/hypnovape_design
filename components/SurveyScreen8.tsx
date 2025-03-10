import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg';

interface SurveyScreenProps {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function SurveyScreen8({ onNext, onBack, onSkip }: SurveyScreenProps) {
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
        <View className="h-full w-[98%] bg-blue-500 rounded-full" />
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
          <Path 
            d="M12 7V13M12 17V17.01" 
            stroke="#60a5fa" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </Svg>
      </View>

      {/* Question */}
      <Text className="text-white text-2xl font-bold text-center mb-12">
        Do you continue vaping even though you're aware of the health risks?
      </Text>

      {/* Options */}
      <View className="w-full">
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent mb-6"
          onPress={onNext}
        >
          <Text className="text-white text-lg">Yes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full bg-white/10 py-4 px-6 rounded-full items-center justify-center border border-transparent"
          onPress={onNext}
        >
          <Text className="text-white text-lg">No</Text>
        </TouchableOpacity>
      </View>
      
      {/* Skip button */}
      <TouchableOpacity className="absolute top-4 right-16" onPress={onNext}>
        <Text className="text-blue-400 text-lg">Skip</Text>
      </TouchableOpacity>
    </View>
  );
} 