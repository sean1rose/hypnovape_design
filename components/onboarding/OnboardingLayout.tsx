import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface OnboardingLayoutProps {
  children: React.ReactNode;
  buttonText?: string;
  onButtonPress?: () => void;
  showButton?: boolean;
  showPagination?: boolean;
  currentPage?: number;
  totalPages?: number;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  buttonText = 'Next',
  onButtonPress,
  showButton = true,
  showPagination = false,
  currentPage = 1,
  totalPages = 4,
}) => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#4a90e2', '#3b78c4', '#2c61a6']}
        className="flex-1 items-center justify-between py-10"
      >
        <View className="w-full flex-1 items-center justify-center px-6">
          {children}
        </View>

        {showPagination && (
          <View className="flex-row items-center justify-center my-4 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <View
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentPage - 1 ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </View>
        )}

        {showButton && (
          <TouchableOpacity
            onPress={onButtonPress}
            className="bg-white rounded-full w-[90%] py-4 items-center mt-4"
          >
            <Text className="text-blue-500 font-bold text-lg">{buttonText}</Text>
          </TouchableOpacity>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default OnboardingLayout; 