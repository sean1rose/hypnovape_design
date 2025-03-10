import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View, ViewStyle } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface FloatingPrismProps {
  size?: number;
  opacity?: number;
  style?: ViewStyle;
}

export default function FloatingPrism({ size = 120, opacity = 0.7, style }: FloatingPrismProps) {
  // Animation values
  const floatAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  // Setup animations
  useEffect(() => {
    // Floating animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 3000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
    
    // Rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
    
    // Subtle scale animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.05,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  
  // Interpolate animations
  const translateY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });
  
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  
  return (
    <Animated.View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          opacity,
          transform: [
            { translateY },
            { rotate },
            { scale: scaleAnim },
          ],
        },
        style,
      ]}
    >
      <Svg width="100%" height="100%" viewBox="0 0 100 100">
        <Defs>
          <LinearGradient id="prismGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <Stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </LinearGradient>
        </Defs>
        
        {/* Prism shape */}
        <Path
          d="M50 10 L90 80 L10 80 Z"
          fill="url(#prismGradient)"
          stroke="#ffffff"
          strokeWidth="0.5"
        />
        
        {/* Rainbow light beam */}
        <Path
          d="M50 80 L30 95"
          stroke="#FF0000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <Path
          d="M50 80 L40 95"
          stroke="#FF7F00"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <Path
          d="M50 80 L50 95"
          stroke="#FFFF00"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <Path
          d="M50 80 L60 95"
          stroke="#00FF00"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <Path
          d="M50 80 L70 95"
          stroke="#0000FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </Svg>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
}); 