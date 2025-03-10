import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export default function OnboardingScreen3() {
  return (
    <View className="flex-1 justify-center items-center px-8">
      {/* Illustration */}
      <View className="w-64 h-64 mb-10 items-center justify-center">
        <View className="absolute w-full h-full rounded-full bg-green-500/10" />
        <Svg width="180" height="180" viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
          <Path 
            d="M12 7V12M12 16V16.01" 
            stroke="#4ade80" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </Svg>
      </View>

      {/* Title */}
      <Text className="text-white text-3xl font-bold text-center mb-4">
        Ready to Begin?
      </Text>

      {/* Description */}
      <Text className="text-white/80 text-center text-lg mb-8">
        You're about to take the first step toward a healthier, vape-free life. Let's start this journey together.
      </Text>

      {/* Benefits */}
      <View className="w-full bg-white/10 rounded-2xl p-5 mb-6">
        <Text className="text-white font-bold text-lg mb-3">What to expect:</Text>
        
        <View className="flex-row items-center mb-3">
          <Ionicons name="pulse" size={20} color="#4ade80" className="mr-2" />
          <Text className="text-white/90 ml-2">Improved lung function</Text>
        </View>
        
        <View className="flex-row items-center mb-3">
          <Ionicons name="cash-outline" size={20} color="#4ade80" className="mr-2" />
          <Text className="text-white/90 ml-2">Save money previously spent on vaping</Text>
        </View>
        
        <View className="flex-row items-center mb-3">
          <Ionicons name="happy-outline" size={20} color="#4ade80" className="mr-2" />
          <Text className="text-white/90 ml-2">Better mood and reduced anxiety</Text>
        </View>
        
        <View className="flex-row items-center">
          <Ionicons name="fitness-outline" size={20} color="#4ade80" className="mr-2" />
          <Text className="text-white/90 ml-2">Increased energy and stamina</Text>
        </View>
      </View>

      <Text className="text-white/60 text-center text-sm">
        Swipe to continue to your journey
      </Text>
    </View>
  );
}