import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path, Circle } from 'react-native-svg';

interface SurveyScreenProps {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function SurveyScreen7({ onNext, onBack, onSkip }: SurveyScreenProps) {
  const [selectedEffects, setSelectedEffects] = useState<string[]>([]);

  const toggleEffect = (effect: string) => {
    if (selectedEffects.includes(effect)) {
      setSelectedEffects(selectedEffects.filter(item => item !== effect));
    } else {
      setSelectedEffects([...selectedEffects, effect]);
    }
  };

  const sideEffects = [
    'Coughing & Throat pain',
    'Shortness of breath',
    'Headaches',
    'Depressed mood',
    'Anxiety',
    'Decreased appetite',
    'Trouble concentrating'
  ];

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
        <View className="h-full w-[95%] bg-blue-500 rounded-full" />
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
            d="M12 8V12M12 16H12.01" 
            stroke="#60a5fa" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </Svg>
      </View>

      {/* Question */}
      <Text className="text-white text-2xl font-bold text-center mb-8">
        Which side effects have you noticed the most since you started vaping?
      </Text>

      {/* Options - Scrollable */}
      <ScrollView className="w-full mb-4" showsVerticalScrollIndicator={false}>
        <View className="w-full pb-4">
          {sideEffects.map((effect, index) => (
            <TouchableOpacity 
              key={index}
              className={`w-full py-4 px-6 rounded-full items-center justify-center border mb-6 ${
                selectedEffects.includes(effect) 
                  ? 'border-blue-500 bg-blue-500/20' 
                  : 'border-transparent bg-white/10'
              }`}
              onPress={() => toggleEffect(effect)}
            >
              <Text className="text-white text-lg">{effect}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      {/* Next button - Only show when at least one option is selected */}
      {selectedEffects.length > 0 && (
        <TouchableOpacity 
          className="w-full bg-blue-500 py-4 rounded-full items-center justify-center mb-6"
          onPress={onNext}
        >
          <Text className="text-white font-bold text-lg">Next</Text>
        </TouchableOpacity>
      )}
      
      {/* Skip button */}
      <TouchableOpacity className="absolute top-4 right-16" onPress={onNext}>
        <Text className="text-blue-400 text-lg">Skip</Text>
      </TouchableOpacity>
    </View>
  );
} 