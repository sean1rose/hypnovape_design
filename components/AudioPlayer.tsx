import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Defs, LinearGradient as SvgLinearGradient, Stop, Rect, Circle } from 'react-native-svg';
import PrismEffect from '../assets/prism-effect';
import PrismProgressBar from './PrismProgressBar';
import FloatingPrism from './FloatingPrism';
import { useRouter } from 'expo-router';

interface AudioPlayerProps {
  title: string;
  subtitle: string;
  duration: string;
  currentTime?: string;
  isPlaying?: boolean;
}

export default function AudioPlayer({
  title = "Treat Yourself to 5 Gentle Breaths",
  subtitle = "Mindful Activity",
  duration = "1:02",
  currentTime = "0:00",
  isPlaying = false,
}: AudioPlayerProps) {
  const [playing, setPlaying] = useState(isPlaying);
  const [progress, setProgress] = useState(0);
  const [uiVisible, setUiVisible] = useState(true);
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  
  // Animation values
  const playButtonScale = useRef(new Animated.Value(1)).current;
  const playButtonGlow = useRef(new Animated.Value(0)).current;
  const uiOpacity = useRef(new Animated.Value(1)).current;
  
  // Timer for UI auto-hide
  const hideUITimer = useRef<NodeJS.Timeout | null>(null);

  // Simulate progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (playing) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 0.01;
          if (newProgress >= 1) {
            clearInterval(interval);
            setPlaying(false);
            return 1;
          }
          return newProgress;
        });
      }, 500); // Update every 500ms
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [playing]);

  // Setup UI hide/show timer
  useEffect(() => {
    startHideUITimer();
    
    return () => {
      if (hideUITimer.current) {
        clearTimeout(hideUITimer.current);
      }
    };
  }, []);

  const startHideUITimer = () => {
    // Clear any existing timer
    if (hideUITimer.current) {
      clearTimeout(hideUITimer.current);
    }
    
    // Set new timer to hide UI after 5 seconds
    hideUITimer.current = setTimeout(() => {
      hideUI();
    }, 5000);
  };

  const hideUI = () => {
    Animated.timing(uiOpacity, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      setUiVisible(false);
    });
  };

  const showUI = () => {
    setUiVisible(true);
    Animated.timing(uiOpacity, {
      toValue: 0.9, // Slight opacity as requested
      duration: 300,
      useNativeDriver: true,
    }).start();
    
    // Restart the hide timer
    startHideUITimer();
  };

  const handleScreenTouch = () => {
    if (!uiVisible) {
      showUI();
    } else {
      // If UI is already visible, just restart the timer
      startHideUITimer();
    }
  };

  const togglePlayPause = () => {
    // Animate button press
    Animated.sequence([
      Animated.parallel([
        Animated.timing(playButtonScale, {
          toValue: 1.2,
          duration: 200,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(playButtonGlow, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(playButtonScale, {
          toValue: 1,
          duration: 200,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(playButtonGlow, {
          toValue: playing ? 0 : 0.5, // Keep some glow if playing
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
    
    setPlaying(!playing);
    startHideUITimer(); // Restart the hide timer when play state changes
  };

  // Convert progress to time string
  const getTimeFromProgress = () => {
    try {
      // Parse the duration string (e.g., "1:02")
      const parts = duration.split(':');
      const minutes = parseInt(parts[0]) || 0;
      const seconds = parseInt(parts[1]) || 0;
      const totalSeconds = minutes * 60 + seconds;
      
      // Calculate current seconds based on progress
      const currentSeconds = Math.floor(totalSeconds * progress);
      const currentMinutes = Math.floor(currentSeconds / 60);
      const remainingSeconds = currentSeconds % 60;
      
      return `${currentMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    } catch (error) {
      // Fallback in case of parsing errors
      return "0:00";
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenTouch}>
      <SafeAreaView className="flex-1 bg-black">
        {/* Dark Side of the Moon inspired background - matching home screen */}
        <View className="absolute inset-0">
          <LinearGradient
            colors={['#000000', '#0f172a', '#1e1b4b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ height: '100%', width: '100%' }}
          />
        </View>
        
        {/* Rainbow prism effect - matching home screen */}
        <View className="absolute inset-0 overflow-hidden opacity-40">
          <View className="absolute h-[200%] w-[120%] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 to-blue-500 to-indigo-500 to-purple-500 rotate-[30deg] -translate-x-[10%] -translate-y-[50%]" />
        </View>
        
        {/* Pink Floyd Dark Side of the Moon Prism */}
        <View className="absolute right-0 bottom-0 w-full h-full opacity-30">
          <PrismEffect />
        </View>
        
        {/* Floating Prisms */}
        <View className="absolute inset-0 overflow-hidden">
          <FloatingPrism size={100} opacity={0.4} style={{ top: '20%', left: '15%' }} />
          <FloatingPrism size={80} opacity={0.3} style={{ top: '40%', right: '10%' }} />
          <FloatingPrism size={60} opacity={0.2} style={{ bottom: '30%', left: '25%' }} />
        </View>
        
        {/* Progress bar - always visible */}
        <View className="absolute bottom-12 left-0 right-0 px-6">
          <PrismProgressBar progress={progress} height={4} />
        </View>
        
        {/* UI Elements that fade out */}
        <Animated.View style={{ opacity: uiOpacity, flex: 1 }}>
          {/* Header with close button */}
          <View className="flex-row justify-between items-center px-4 py-2">
            <View className="w-10" /> {/* Empty view for balance */}
            <Text className="text-white/70 text-center font-medium">{subtitle}</Text>
            <TouchableOpacity 
              onPress={() => router.back()}
              className="w-10 h-10 items-center justify-center"
            >
              <Ionicons name="close" size={28} color="white" />
            </TouchableOpacity>
          </View>
          
          {/* Title */}
          <View className="px-6 mt-4">
            <Text className="text-white text-4xl font-bold text-center">{title}</Text>
          </View>
          
          {/* Main content area with play button */}
          <View className="flex-1 justify-center items-center">
            {/* Glow effect behind button */}
            <Animated.View
              style={{
                position: 'absolute',
                width: 120,
                height: 120,
                borderRadius: 60,
                backgroundColor: '#ffffff',
                opacity: playButtonGlow,
                transform: [{ scale: playButtonScale }],
              }}
            />
            
            <Animated.View
              style={{
                transform: [{ scale: playButtonScale }],
              }}
            >
              <TouchableOpacity
                onPress={(e) => {
                  e.stopPropagation(); // Prevent the screen touch handler from firing
                  togglePlayPause();
                }}
                className="w-24 h-24 rounded-full bg-white/20 items-center justify-center"
                style={{
                  shadowColor: "#fff",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.3,
                  shadowRadius: 10,
                  elevation: 5,
                }}
              >
                <Ionicons 
                  name={playing ? "pause" : "play"} 
                  size={40} 
                  color="white" 
                  style={{ marginLeft: playing ? 0 : 4 }}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
          
          {/* Time indicators - these fade out */}
          <View className="px-6 mb-12">
            <View style={{ height: 4 }} /> {/* Spacer for the always-visible progress bar */}
            <View className="flex-row justify-between mt-2">
              <Text className="text-white/70">{getTimeFromProgress()}</Text>
              <Text className="text-white/70">{duration}</Text>
            </View>
          </View>
          
          {/* Home indicator area for iOS */}
          <View className="h-1 w-1/3 bg-white/50 rounded-full mx-auto mb-2" />
        </Animated.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
} 