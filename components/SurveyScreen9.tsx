import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle, Path } from 'react-native-svg';

interface SurveyScreenProps {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function SurveyScreen9({ onNext, onBack, onSkip }: SurveyScreenProps) {
  return (
    <View className="flex-1 items-center justify-start px-8 pt-16">
      {/* Info button */}
      <TouchableOpacity
        className="absolute right-4 top-4 z-50 rounded-full bg-white/20 p-2"
        onPress={onSkip}>
        <Ionicons name="information-circle-outline" size={24} color="white" />
      </TouchableOpacity>

      {/* Back button */}
      <TouchableOpacity className="absolute left-4 top-16" onPress={onBack}>
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

      {/* Results icon */}
      <View className="mb-8 h-32 w-32 items-center justify-center">
        <View className="absolute h-full w-full rounded-full bg-red-500/10" />
        <Svg width="80" height="80" viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="10" stroke="#f87171" strokeWidth="1.5" strokeOpacity="0.8" />
          <Path
            d="M12 8V12M12 16V16.01"
            stroke="#f87171"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>

      {/* Yearly spend */}
      <Text className="mb-2 text-center text-xl text-white">
        Your average yearly spend on vaping is
      </Text>
      <Text className="mb-12 text-center text-4xl font-bold text-red-500">$3,000.00</Text>

      {/* Results button */}
      {/* <TouchableOpacity
        className="mb-12 w-full flex-row items-center justify-center rounded-full bg-blue-500 py-4"
        onPress={onNext}>
        <Text className="mr-2 text-lg font-bold text-white">Results Here</Text>
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <Path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity> */}

      {/* Addiction indicators */}
      <Text className="mb-6 text-center text-xl font-bold text-white">
        Based on your answers, you have a <Text className="text-blue-400">strong</Text> addiction to
        vaping
      </Text>
      {/* <Text className="mb-8 text-center text-xl font-bold text-white"></Text> */}

      {/* Indicator circles */}
      <View className="mb-8 flex-row flex-wrap items-center justify-center">
        <View className="m-2 h-20 w-20 items-center">
          <View className="mb-2 h-16 w-16 items-center justify-center rounded-full border border-red-500 bg-red-500/20">
            <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <Path
                d="M12 6V12L16 14"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-xs text-white">Time Period</Text>
        </View>

        <View className="m-2 h-20 w-20 items-center">
          <View className="mb-2 h-16 w-16 items-center justify-center rounded-full border border-red-500 bg-red-500/20">
            <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <Circle cx="12" cy="12" r="9" stroke="#60a5fa" strokeWidth="2" />
              <Path
                d="M9 12H15"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-xs text-white">Frequency</Text>
        </View>

        <View className="m-2 h-20 w-20 items-center">
          <View className="mb-2 h-16 w-16 items-center justify-center rounded-full border border-red-500 bg-red-500/20">
            <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <Path
                d="M13 3L18 8M18 8L13 13M18 8H6"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-xs text-white">Urge</Text>
        </View>

        <View className="m-2 h-20 w-20 items-center">
          <View className="mb-2 h-16 w-16 items-center justify-center rounded-full border border-red-500 bg-red-500/20">
            <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <Path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-xs text-white">Life impact</Text>
        </View>

        <View className="m-2 h-20 w-20 items-center">
          <View className="mb-2 h-16 w-16 items-center justify-center rounded-full border border-red-500 bg-red-500/20">
            <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <Circle cx="12" cy="12" r="9" stroke="#60a5fa" strokeWidth="2" />
              <Path
                d="M12 8V12M12 16V16.01"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-xs text-white">Side effects</Text>
        </View>

        <View className="m-2 h-20 w-20 items-center">
          <View className="mb-2 h-16 w-16 items-center justify-center rounded-full border border-blue-500 bg-blue-500/20">
            <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <Path
                d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-xs text-white">Money</Text>
        </View>
      </View>

      {/* Legend */}
      <View className="flex-row items-center justify-center">
        <View className="mr-4 flex-row items-center">
          <View className="mr-1 h-3 w-3 rounded-full bg-blue-500" />
          <Text className="text-xs text-white/60">Average</Text>
        </View>
        <View className="mr-4 flex-row items-center">
          <View className="mr-1 h-3 w-3 rounded-full bg-green-500" />
          <Text className="text-xs text-white/60">Safe</Text>
        </View>
        <View className="flex-row items-center">
          <View className="mr-1 h-3 w-3 rounded-full bg-red-500" />
          <Text className="text-xs text-white/60">Danger</Text>
        </View>
      </View>

      {/* Action button */}
      <TouchableOpacity
        className="mt-8 w-full flex-row items-center justify-center rounded-full bg-blue-500 py-4"
        onPress={onNext}>
        <Text className="mr-2 text-lg font-bold text-white">I'm Ready to Quit Vaping Forever</Text>
        <Text className="text-lg text-white">🙌</Text>
      </TouchableOpacity>
    </View>
  );
} 