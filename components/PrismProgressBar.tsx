import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Rect } from 'react-native-svg';

interface PrismProgressBarProps {
  progress: number; // 0 to 1
  height?: number;
}

export default function PrismProgressBar({ progress = 0.25, height = 4 }: PrismProgressBarProps) {
  // Ensure progress is between 0 and 1
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  
  return (
    <View style={[styles.container, { height }]}>
      {/* Background track */}
      <View style={[styles.track, { height }]} />
      
      {/* Rainbow progress */}
      <View style={[styles.progressContainer, { width: `${clampedProgress * 100}%`, height }]}>
        <LinearGradient
          colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
      </View>
      
      {/* Glow effect */}
      <View 
        style={[
          styles.glow, 
          { 
            left: `${clampedProgress * 100}%`,
            height: height * 3,
            top: -height,
            opacity: 0.7
          }
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 2,
    overflow: 'hidden',
    position: 'relative',
  },
  track: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
  },
  progressContainer: {
    position: 'absolute',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 2,
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  glow: {
    position: 'absolute',
    width: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    transform: [{ translateX: -5 }],
  }
}); 