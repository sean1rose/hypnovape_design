import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import Onboarding from '../components/onboarding/Onboarding';

export default function OnboardingScreen() {
  const router = useRouter();

  const handleOnboardingComplete = () => {
    // Navigate to the main app after onboarding is complete
    router.replace('/');
  };

  return (
    <View className="flex-1">
      <Onboarding onComplete={handleOnboardingComplete} />
    </View>
  );
} 