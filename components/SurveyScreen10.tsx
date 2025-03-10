import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

interface SurveyScreenProps {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function SurveyScreen10({ onNext, onBack, onSkip }: SurveyScreenProps) {
  return (
    <View className="flex-1 justify-start items-center px-8 pt-16">
      {/* Info button */}
      <TouchableOpacity 
        className="absolute top-4 right-4 z-50 bg-white/20 rounded-full p-2"
        onPress={onSkip}
      >
        <Ionicons name="information-circle-outline" size={24} color="white" />
      </TouchableOpacity>
      
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
      
      {/* Question */}
      <Text className="text-white text-2xl font-bold text-center mb-8">
        What specific brand and model of vape do you use?
      </Text>

      {/* Input field */}
      <View className="w-full mb-12">
        <TextInput
          className="w-full bg-white/10 py-4 px-6 rounded-full text-white text-lg"
          placeholder="Geekbar"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
      </View>

      {/* Get plan button */}
      <TouchableOpacity 
        className="w-full bg-blue-500 py-4 rounded-full items-center justify-center mb-6"
        onPress={onNext}
      >
        <Text className="text-white font-bold text-lg">Get my Custom Plan</Text>
      </TouchableOpacity>
    </View>
  );
} 