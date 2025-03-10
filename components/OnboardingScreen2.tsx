import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export default function OnboardingScreen2() {
  return (
    <View className="flex-1 justify-center items-center px-8">
      {/* Illustration */}
      <View className="w-64 h-64 mb-10 items-center justify-center">
        <View className="absolute w-full h-full rounded-full bg-blue-500/10" />
        <Svg width="180" height="180" viewBox="0 0 24 24" fill="none">
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
              <Stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
          <Path 
            d="M12 6V12L16 14" 
            stroke="url(#grad)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </Svg>
      </View>

      {/* Title */}
      <Text className="text-white text-3xl font-bold text-center mb-4">
        Your 3-Step Process
      </Text>

      {/* Description */}
      <Text className="text-white/80 text-center text-lg mb-8">
        Our program is designed as a three-part journey to help you break free from vaping dependency.
      </Text>

      {/* Steps */}
      <View className="w-full">
        <View className="flex-row items-start mb-4">
          <View className="w-10 h-10 rounded-full bg-green-500/20 items-center justify-center mr-4 mt-1">
            <Text className="text-green-300 font-bold">A</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white/90 font-bold mb-1">Beginning of the End</Text>
            <Text className="text-white/70">Prepare your mind and body for the journey ahead</Text>
          </View>
        </View>
        
        <View className="flex-row items-start mb-4">
          <View className="w-10 h-10 rounded-full bg-blue-500/20 items-center justify-center mr-4 mt-1">
            <Text className="text-blue-300 font-bold">B</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white/90 font-bold mb-1">Quit Vaping Now</Text>
            <Text className="text-white/70">Break the physical and psychological dependencies</Text>
          </View>
        </View>
        
        <View className="flex-row items-start">
          <View className="w-10 h-10 rounded-full bg-purple-500/20 items-center justify-center mr-4 mt-1">
            <Text className="text-purple-300 font-bold">C</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white/90 font-bold mb-1">Quit Vaping Forever</Text>
            <Text className="text-white/70">Reinforce your new habits and prevent relapse</Text>
          </View>
        </View>
      </View>
    </View>
  );
}