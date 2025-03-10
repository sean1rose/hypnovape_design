import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface SurveyScreenProps {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function SurveyScreen11({ onNext, onBack, onSkip }: SurveyScreenProps) {
  // Remove the automatic navigation that was causing issues
  
  return (
    <View className="flex-1 justify-center items-center px-8">
      {/* Background */}
      <LinearGradient
        colors={['#3b82f6', '#2563eb']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute inset-0"
      />
      
      {/* Cloud decorations */}
      <View className="absolute inset-0 opacity-20">
        <View className="absolute w-40 h-40 bg-white rounded-full top-20 left-0 opacity-30" />
        <View className="absolute w-60 h-60 bg-white rounded-full top-10 right-0 opacity-20" />
        <View className="absolute w-40 h-40 bg-white rounded-full bottom-20 left-10 opacity-30" />
        <View className="absolute w-60 h-60 bg-white rounded-full bottom-0 right-0 opacity-20" />
      </View>
      
      {/* Logo */}
      <View className="w-32 h-32 bg-white rounded-full items-center justify-center mb-8">
        <Text className="text-blue-500 text-6xl font-bold">P</Text>
      </View>
      
      {/* Loading text */}
      <Text className="text-white text-2xl font-bold text-center mb-4">
        Creating your Custom
      </Text>
      <Text className="text-white text-2xl font-bold text-center mb-8">
        Puff Tracking Plan
      </Text>
      
      {/* Loading indicator */}
      <ActivityIndicator size="large" color="white" className="mb-8" />
      
      {/* Success rate */}
      <Text className="text-white/80 text-center text-lg mb-4">
        People who track their puffs are 200%
      </Text>
      <Text className="text-white/80 text-center text-lg">
        more likely to quit vaping
      </Text>
      
      {/* Progress bar */}
      <View className="w-full h-2 bg-white/20 rounded-full mt-8">
        <View className="h-full w-[40%] bg-white rounded-full" />
      </View>
      
      {/* Added a button to manually continue */}
      <TouchableOpacity 
        className="w-full bg-white py-4 rounded-full items-center justify-center mt-12"
        onPress={onNext}
      >
        <Text className="text-blue-500 font-bold text-lg">Continue</Text>
      </TouchableOpacity>
    </View>
  );
} 