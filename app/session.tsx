import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import AudioPlayer from '../components/AudioPlayer';

export default function SessionScreen() {
  const { title, subtitle, duration } = useLocalSearchParams();
  
  return (
    <AudioPlayer 
      title={title as string || "Treat Yourself to 5 Gentle Breaths"}
      subtitle={subtitle as string || "Mindful Activity"}
      duration={duration as string || "1:02"}
    />
  );
} 