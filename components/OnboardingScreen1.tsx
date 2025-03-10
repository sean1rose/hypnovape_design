import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle, Path } from 'react-native-svg';

export default function OnboardingScreen1() {
  return (
    <View className="flex-1 justify-center items-center px-8">
      {/* Illustration */}
      <View className="w-64 h-64 mb-10 items-center justify-center">
        <View className="absolute w-full h-full rounded-full bg-purple-500/10" />
        <Svg width="180" height="180" viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
          <Path 
            d="M8 12L11 15L16 9" 
            stroke="#a855f7" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </Svg>
      </View>

      {/* Title */}
      <Text className="text-white text-3xl font-bold text-center mb-4">
        Begin Your Journey
      </Text>

      {/* Description */}
      <Text className="text-white/80 text-center text-lg mb-8">
        Welcome to your personalized program to quit vaping. We'll guide you through every step of the way.
      </Text>

      {/* Features */}
      <View className="w-full">
        <View className="flex-row items-center mb-4">
          <View className="w-10 h-10 rounded-full bg-green-500/20 items-center justify-center mr-4">
            <Ionicons name="checkmark" size={20} color="#4ade80" />
          </View>
          <Text className="text-white/90 flex-1">Scientifically proven approach</Text>
        </View>
        <View className="flex-row items-center mb-4">
          <View className="w-10 h-10 rounded-full bg-blue-500/20 items-center justify-center mr-4">
            <Ionicons name="time-outline" size={20} color="#60a5fa" />
          </View>
          <Text className="text-white/90 flex-1">Just 30 minutes per session</Text>
        </View>
        <View className="flex-row items-center">
          <View className="w-10 h-10 rounded-full bg-purple-500/20 items-center justify-center mr-4">
            <Ionicons name="heart-outline" size={20} color="#c084fc" />
          </View>
          <Text className="text-white/90 flex-1">Personalized to your needs</Text>
        </View>
      </View>
    </View>
  );
}