import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, useWindowDimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import OnboardingScreen1 from '../components/OnboardingScreen1';
import OnboardingScreen2 from '../components/OnboardingScreen2';
import OnboardingScreen3 from '../components/OnboardingScreen3';
import SurveyScreen1 from '../components/SurveyScreen1';
import SurveyScreen2 from '../components/SurveyScreen2';
import SurveyScreen3 from '../components/SurveyScreen3';
import SurveyScreen4 from '../components/SurveyScreen4';
import SurveyScreen5 from '../components/SurveyScreen5';
import SurveyScreen6 from '../components/SurveyScreen6';
import SurveyScreen7 from '../components/SurveyScreen7';
import SurveyScreen8 from '../components/SurveyScreen8';
import SurveyScreen9 from '../components/SurveyScreen9';
import SurveyScreen10 from '../components/SurveyScreen10';
import SurveyScreen11 from '../components/SurveyScreen11';

export default function Onboarding() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const screens = [
    { id: '1', component: OnboardingScreen1 },
    { id: '2', component: OnboardingScreen2 },
    { id: '3', component: OnboardingScreen3 },
    { id: '4', component: SurveyScreen1 },
    { id: '5', component: SurveyScreen2 },
    { id: '6', component: SurveyScreen3 },
    { id: '7', component: SurveyScreen4 },
    { id: '8', component: SurveyScreen5 },
    { id: '9', component: SurveyScreen6 },
    { id: '10', component: SurveyScreen7 },
    { id: '11', component: SurveyScreen8 },
    { id: '12', component: SurveyScreen9 },
    { id: '13', component: SurveyScreen10 },
    { id: '14', component: SurveyScreen11 },
  ];

  const handleNext = () => {
    if (currentIndex < screens.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      // Last screen, go back to home
      router.push('/');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
      setCurrentIndex(currentIndex - 1);
    } else {
      // First screen, go back to home
      router.push('/');
    }
  };

  const handleSkip = () => {
    router.push('/');
  };

  const renderItem = ({ item }: { item: typeof screens[0] }) => {
    const ScreenComponent = item.component;
    return (
      <View style={{ width }}>
        <ScreenComponent 
          onNext={handleNext} 
          onBack={handleBack} 
          onSkip={handleSkip}
        />
      </View>
    );
  };

  // Hide navigation controls for survey screens (after index 3)
  const showNavigation = currentIndex < 4;

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Dark Side of the Moon inspired background */}
      <View className="absolute inset-0">
        <LinearGradient
          colors={['#000000', '#0f172a', '#1e1b4b']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ height: '100%', width: '100%' }}
        />
      </View>
      
      {/* Rainbow prism effect */}
      <View className="absolute inset-0 overflow-hidden opacity-40">
        <View className="absolute h-[200%] w-[120%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 to-blue-500 to-indigo-500 to-purple-500 rotate-[30deg] -translate-x-[10%] -translate-y-[50%]" />
      </View>
      
      {/* Subtle star-like dots in background */}
      <View className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <View 
            key={i}
            className="absolute h-1 w-1 bg-white rounded-full opacity-60"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              transform: [{ scale: Math.random() * 1.5 + 0.5 }]
            }}
          />
        ))}
      </View>

      {/* Close button - only show for onboarding screens */}
      {currentIndex < 4 && (
        <TouchableOpacity 
          className="absolute top-4 right-4 z-50 bg-white/20 rounded-full p-2"
          onPress={handleSkip}
        >
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      )}

      {/* Onboarding content */}
      <FlatList
        ref={flatListRef}
        data={screens}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
        scrollEnabled={currentIndex < 4} // Only allow scrolling for onboarding screens
      />

      {/* Navigation controls - only show for onboarding screens */}
      {showNavigation && (
        <View className="flex-row justify-between items-center px-6 pb-10">
          {/* Back button */}
          <TouchableOpacity 
            onPress={handleBack}
            className="bg-white/10 rounded-full p-3"
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          {/* Pagination dots - only show for first 4 screens */}
          <View className="flex-row">
            {screens.slice(0, 4).map((_, index) => (
              <View
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
                style={{
                  width: index === currentIndex ? 8 : 6,
                  height: index === currentIndex ? 8 : 6,
                }}
              />
            ))}
          </View>

          {/* Next button */}
          <TouchableOpacity 
            onPress={handleNext}
            className="bg-white/10 rounded-full p-3"
          >
            <Ionicons 
              name={currentIndex === 3 ? "checkmark" : "arrow-forward"} 
              size={24} 
              color="white" 
            />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
} 