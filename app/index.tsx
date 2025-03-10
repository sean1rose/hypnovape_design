import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Line, Circle, Defs, LinearGradient as SvgLinearGradient, Stop, Path } from 'react-native-svg';
import BalloonPlaceholder from '../assets/placeholder-balloon';
import HandPlaceholder from '../assets/placeholder-hand';
import MeditationPlaceholder from '../assets/placeholder-meditation';
import PrismEffect from '../assets/prism-effect';
import { useRouter } from 'expo-router';

type MeditationPoint = 'A' | 'B' | 'C';

interface MeditationItem {
  title: string;
  subtitle: string;
  duration: string;
  meditating: number;
  ImageComponent: React.ComponentType<any>;
}

// Updated content for vaping cessation journey
const meditationContent: Record<MeditationPoint, MeditationItem> = {
  A: {
    title: 'Session A: Beginning of the End',
    subtitle: 'Conversation & Hypnosis',
    duration: '28 min',
    meditating: 0,
    ImageComponent: BalloonPlaceholder,
  },
  B: {
    title: 'Session B: Quit Vaping Now',
    subtitle: 'Conversation & Hypnosis',
    duration: '33 min',
    meditating: 0,
    ImageComponent: HandPlaceholder,
  },
  C: {
    title: 'Session C: Quit Vaping Forever',
    subtitle: 'Conversation & Hypnosis',
    duration: '29 min',
    meditating: 324,
    ImageComponent: MeditationPlaceholder,
  },
};

export default function Home() {
  const [activePoint, setActivePoint] = useState<MeditationPoint>('A');
  const { width, height } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView>(null);
  const [scrollX] = useState(new Animated.Value(0));
  const router = useRouter();
  
  // Animation values
  const [glowOpacity] = useState(new Animated.Value(0.5));
  const [triangleScale] = useState(new Animated.Value(1));
  const [triangleRotate] = useState(new Animated.Value(0));
  const [pointAGlow] = useState(new Animated.Value(activePoint === 'A' ? 1 : 0));
  const [pointBGlow] = useState(new Animated.Value(activePoint === 'B' ? 1 : 0));
  const [pointCGlow] = useState(new Animated.Value(activePoint === 'C' ? 1 : 0));
  
  // Setup animations
  useEffect(() => {
    // Pulsing glow effect
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowOpacity, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(glowOpacity, {
          toValue: 0.5,
          duration: 1500,
          useNativeDriver: true,
        })
      ])
    ).start();
    
    // Triangle subtle pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(triangleScale, {
          toValue: 1.05,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(triangleScale, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        })
      ])
    ).start();
    
    // Triangle subtle rotation animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(triangleRotate, {
          toValue: 0.02,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(triangleRotate, {
          toValue: -0.02,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(triangleRotate, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        })
      ])
    ).start();
  }, []);
  
  // Update point glow animations when active point changes
  useEffect(() => {
    // Animate all points to their inactive state
    Animated.parallel([
      Animated.timing(pointAGlow, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(pointBGlow, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(pointCGlow, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
    
    // Animate the active point to its active state
    Animated.timing(
      activePoint === 'A' ? pointAGlow : activePoint === 'B' ? pointBGlow : pointCGlow,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }
    ).start();
  }, [activePoint]);
  
  // Handle carousel scroll
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );
  
  useEffect(() => {
    // Update active point based on scroll position
    const listener = scrollX.addListener(({ value }) => {
      const pageIndex = Math.round(value / width);
      if (pageIndex === 0) setActivePoint('A');
      else if (pageIndex === 1) setActivePoint('B');
      else if (pageIndex === 2) setActivePoint('C');
    });
    
    return () => {
      scrollX.removeListener(listener);
    };
  }, [width]);
  
  // Handle point press
  const handlePointPress = (point: MeditationPoint) => {
    setActivePoint(point);
    
    // Scroll to the corresponding page
    if (scrollViewRef.current) {
      const pageIndex = point === 'A' ? 0 : point === 'B' ? 1 : 2;
      scrollViewRef.current.scrollTo({ x: pageIndex * width, animated: true });
    }
  };
  
  // Handle navigation to session screen
  const handleStartSession = (point: MeditationPoint) => {
    const session = meditationContent[point];
    router.push({
      pathname: '/session',
      params: {
        title: session.title,
        subtitle: session.subtitle,
        duration: session.duration
      }
    });
  };
  
  // Triangle dimensions - make it responsive
  const triangleSize = Math.min(width * 0.8, 300);
  
  // Calculate triangle coordinates for perfect equilateral triangle
  const triangleHeight = triangleSize * (Math.sqrt(3) / 2);
  
  // Define the triangle vertices
  const triangleVertices = {
    top: { x: triangleSize / 2, y: 0 },
    left: { x: 0, y: triangleHeight },
    right: { x: triangleSize, y: triangleHeight }
  };
  
  // Size of the point buttons
  const pointSize = 48;
  const pointRadius = pointSize / 2;
  
  // Calculate positions for the points (centered on the triangle vertices)
  const pointPositions = {
    B: { 
      left: triangleSize / 2 - pointRadius, 
      top: -pointRadius 
    },
    A: { 
      left: -pointRadius, 
      top: triangleHeight - pointRadius 
    },
    C: { 
      left: triangleSize - pointRadius, 
      top: triangleHeight - pointRadius 
    }
  };
  
  // Calculate opacity for each card based on scroll position
  const getCardOpacity = (index: number) => {
    const pageOffset = index * width;
    
    return scrollX.interpolate({
      inputRange: [
        pageOffset - width, 
        pageOffset, 
        pageOffset + width
      ],
      outputRange: [0.7, 1, 0.7],
      extrapolate: 'clamp'
    });
  };
  
  // Calculate scale for each card based on scroll position
  const getCardScale = (index: number) => {
    const pageOffset = index * width;
    
    return scrollX.interpolate({
      inputRange: [
        pageOffset - width, 
        pageOffset, 
        pageOffset + width
      ],
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp'
    });
  };
  
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
      
      {/* Pink Floyd Dark Side of the Moon Prism */}
      <View className="absolute right-0 bottom-0 w-full h-full opacity-30">
        <PrismEffect />
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
      
      {/* Updated Header - positioned further from top */}
      <View className="pt-4 pb-20 z-10 items-center">
        <Text className="text-white text-3xl font-bold tracking-tight">Your Journey to Quit Vaping</Text>
        <Text className="text-white/80 text-base font-medium mt-1">3 Sessions Remaining</Text>
      </View>
      
      {/* Triangle Timeline with Carousel - adjusted for full-screen layout */}
      <View className="flex-1 z-10 justify-between">
        {/* Triangle Container - adjusted spacing */}
        <View className="items-center justify-center pt-6 pb-8">
          <Animated.View 
            style={{
              width: triangleSize,
              height: triangleHeight,
              transform: [
                { scale: triangleScale },
                { rotate: triangleRotate.interpolate({
                  inputRange: [-1, 1],
                  outputRange: ['-30deg', '30deg']
                }) }
              ]
            }}
            className="relative"
          >
            <Svg width="100%" height="100%" viewBox={`0 0 ${triangleSize} ${triangleHeight}`}>
              <Defs>
                {/* Rainbow gradient definitions */}
                <SvgLinearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#ef4444" />
                  <Stop offset="50%" stopColor="#f59e0b" />
                  <Stop offset="100%" stopColor="#10b981" />
                </SvgLinearGradient>
                
                <SvgLinearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#10b981" />
                  <Stop offset="50%" stopColor="#3b82f6" />
                  <Stop offset="100%" stopColor="#8b5cf6" />
                </SvgLinearGradient>
                
                <SvgLinearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#8b5cf6" />
                  <Stop offset="50%" stopColor="#ec4899" />
                  <Stop offset="100%" stopColor="#ef4444" />
                </SvgLinearGradient>
                
                {/* Glow effect for active line */}
                <SvgLinearGradient id="activeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <Stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                </SvgLinearGradient>
              </Defs>
              
              {/* Triangle lines with glow effect */}
              <Line 
                x1={triangleVertices.left.x} 
                y1={triangleVertices.left.y} 
                x2={triangleVertices.top.x} 
                y2={triangleVertices.top.y} 
                stroke={activePoint === 'A' || activePoint === 'B' ? "url(#activeGlow)" : "url(#lineGradient1)"} 
                strokeWidth={activePoint === 'A' || activePoint === 'B' ? 6 : 4} 
                strokeLinecap="round"
              />
              <Line 
                x1={triangleVertices.top.x} 
                y1={triangleVertices.top.y} 
                x2={triangleVertices.right.x} 
                y2={triangleVertices.right.y} 
                stroke={activePoint === 'B' || activePoint === 'C' ? "url(#activeGlow)" : "url(#lineGradient2)"} 
                strokeWidth={activePoint === 'B' || activePoint === 'C' ? 6 : 4} 
                strokeLinecap="round"
              />
              <Line 
                x1={triangleVertices.left.x} 
                y1={triangleVertices.left.y} 
                x2={triangleVertices.right.x} 
                y2={triangleVertices.right.y} 
                stroke={activePoint === 'A' || activePoint === 'C' ? "url(#activeGlow)" : "url(#lineGradient3)"} 
                strokeWidth={activePoint === 'A' || activePoint === 'C' ? 6 : 4} 
                strokeLinecap="round"
              />
            </Svg>
            
            {/* Point A - Bottom Left */}
            <Animated.View
              style={{
                position: 'absolute',
                left: pointPositions.A.left - 4,
                top: pointPositions.A.top - 4,
                width: pointSize + 8,
                height: pointSize + 8,
                borderRadius: (pointSize + 8) / 2,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                opacity: pointAGlow,
                transform: [
                  { scale: pointAGlow.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1.2]
                  }) }
                ]
              }}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: pointPositions.A.left,
                top: pointPositions.A.top,
                width: pointSize,
                height: pointSize,
                borderRadius: pointSize / 2,
                backgroundColor: activePoint === 'A' ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#ffffff',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: activePoint === 'A' ? 0.8 : 0.3,
                shadowRadius: 10,
                elevation: activePoint === 'A' ? 8 : 4,
                zIndex: 10,
              }}
              onPress={() => handlePointPress('A')}
            >
              <Text style={{ color: activePoint === 'A' ? '#000000' : '#ffffff', fontWeight: 'bold' }}>A</Text>
            </TouchableOpacity>
            
            {/* Point B - Top - replaced with lock icon */}
            <Animated.View
              style={{
                position: 'absolute',
                left: pointPositions.B.left - 4,
                top: pointPositions.B.top - 4,
                width: pointSize + 8,
                height: pointSize + 8,
                borderRadius: (pointSize + 8) / 2,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                opacity: pointBGlow,
                transform: [
                  { scale: pointBGlow.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1.2]
                  }) }
                ]
              }}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: pointPositions.B.left,
                top: pointPositions.B.top,
                width: pointSize,
                height: pointSize,
                borderRadius: pointSize / 2,
                backgroundColor: activePoint === 'B' ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#ffffff',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: activePoint === 'B' ? 0.8 : 0.3,
                shadowRadius: 10,
                elevation: activePoint === 'B' ? 8 : 4,
                zIndex: 10,
              }}
              onPress={() => handlePointPress('B')}
            >
              <Ionicons 
                name="lock-closed" 
                size={20} 
                color={activePoint === 'B' ? '#000000' : '#ffffff'} 
              />
            </TouchableOpacity>
            
            {/* Point C - Bottom Right - replaced with lock icon */}
            <Animated.View
              style={{
                position: 'absolute',
                left: pointPositions.C.left - 4,
                top: pointPositions.C.top - 4,
                width: pointSize + 8,
                height: pointSize + 8,
                borderRadius: (pointSize + 8) / 2,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                opacity: pointCGlow,
                transform: [
                  { scale: pointCGlow.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1.2]
                  }) }
                ]
              }}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: pointPositions.C.left,
                top: pointPositions.C.top,
                width: pointSize,
                height: pointSize,
                borderRadius: pointSize / 2,
                backgroundColor: activePoint === 'C' ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#ffffff',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: activePoint === 'C' ? 0.8 : 0.3,
                shadowRadius: 10,
                elevation: activePoint === 'C' ? 8 : 4,
                zIndex: 10,
              }}
              onPress={() => handlePointPress('C')}
            >
              <Ionicons 
                name="lock-closed" 
                size={20} 
                color={activePoint === 'C' ? '#000000' : '#ffffff'} 
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
        
        {/* Flexible spacer to push content down */}
        <View className="flex-grow" />
        
        {/* Carousel Content - positioned lower on screen */}
        <View style={{ height: 220 }} className="justify-center mb-12">
          <Animated.ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={width}
          >
            {/* Page A */}
            <Animated.View 
              style={{ 
                width, 
                opacity: getCardOpacity(0),
                transform: [{ scale: getCardScale(0) }]
              }} 
              className="px-4"
            >
              <View className="bg-gray-900/70 rounded-3xl overflow-hidden backdrop-blur-lg border border-white/10">
                <View className="flex-row p-5">
                  <View className="flex-1 pr-4">
                    <View className="bg-green-500/20 px-3 py-1 rounded-full self-start mb-2">
                      <Text className="text-green-300 text-xs font-medium">{meditationContent.A.subtitle}</Text>
                    </View>
                    <Text className="text-white text-xl font-bold mb-2">{meditationContent.A.title}</Text>
                    <View className="flex-row items-center">
                      <Ionicons name="time-outline" size={14} color="#d1d5db" />
                      <Text className="text-gray-300 text-sm ml-1">{meditationContent.A.duration}</Text>
                    </View>
                  </View>
                  <View className="w-24 h-24 bg-green-900/30 rounded-2xl overflow-hidden justify-center items-center">
                    <meditationContent.A.ImageComponent width={80} height={80} />
                  </View>
                </View>
                <TouchableOpacity 
                  className="bg-green-600 py-4 items-center"
                  onPress={() => handleStartSession('A')}
                >
                  <Text className="text-white font-semibold">Start Module</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
            
            {/* Page B */}
            <Animated.View 
              style={{ 
                width, 
                opacity: getCardOpacity(1),
                transform: [{ scale: getCardScale(1) }]
              }} 
              className="px-4"
            >
              <View className="bg-gray-900/70 rounded-3xl overflow-hidden backdrop-blur-lg border border-white/10">
                <View className="flex-row p-5">
                  <View className="flex-1 pr-4">
                    <View className="bg-blue-500/20 px-3 py-1 rounded-full self-start mb-2">
                      <Text className="text-blue-300 text-xs font-medium">{meditationContent.B.subtitle}</Text>
                    </View>
                    <Text className="text-white text-xl font-bold mb-2">{meditationContent.B.title}</Text>
                    <View className="flex-row items-center">
                      <Ionicons name="time-outline" size={14} color="#d1d5db" />
                      <Text className="text-gray-300 text-sm ml-1">{meditationContent.B.duration}</Text>
                    </View>
                    <View className="mt-2">
                      <Text className="text-gray-400 text-xs">Upgrade to unlock all modules.</Text>
                    </View>
                  </View>
                  <View className="w-24 h-24 bg-blue-900/30 rounded-2xl overflow-hidden justify-center items-center">
                    <meditationContent.B.ImageComponent width={80} height={80} />
                  </View>
                </View>
                <View className="bg-gray-700/50 py-4 items-center">
                  <Text className="text-gray-400 font-semibold">Locked</Text>
                </View>
              </View>
            </Animated.View>
            
            {/* Page C */}
            <Animated.View 
              style={{ 
                width, 
                opacity: getCardOpacity(2),
                transform: [{ scale: getCardScale(2) }]
              }} 
              className="px-4"
            >
              <View className="bg-gray-900/70 rounded-3xl overflow-hidden backdrop-blur-lg border border-white/10">
                <View className="flex-row p-5">
                  <View className="flex-1 pr-4">
                    <View className="bg-purple-500/20 px-3 py-1 rounded-full self-start mb-2">
                      <Text className="text-purple-300 text-xs font-medium">{meditationContent.C.subtitle}</Text>
                    </View>
                    <Text className="text-white text-xl font-bold mb-2">{meditationContent.C.title}</Text>
                    <View className="flex-row items-center">
                      <Ionicons name="time-outline" size={14} color="#d1d5db" />
                      <Text className="text-gray-300 text-sm ml-1">{meditationContent.C.duration}</Text>
                    </View>
                    <View className="mt-2">
                      <Text className="text-gray-400 text-xs">This module will unlock 7 days after completion of Module B.</Text>
                    </View>
                  </View>
                  <View className="w-24 h-24 bg-purple-900/30 rounded-2xl overflow-hidden justify-center items-center">
                    <meditationContent.C.ImageComponent width={80} height={80} />
                  </View>
                </View>
                <View className="bg-gray-700/50 py-4 items-center">
                  <Text className="text-gray-400 font-semibold">Locked</Text>
                </View>
              </View>
            </Animated.View>
          </Animated.ScrollView>
          
          {/* Pagination Indicator */}
          <View className="flex-row justify-center items-center py-2">
            {(['A', 'B', 'C'] as MeditationPoint[]).map((point) => (
              <TouchableOpacity 
                key={point}
                onPress={() => handlePointPress(point)}
                className="mx-2"
              >
                <View 
                  className={`w-2 h-2 rounded-full ${activePoint === point ? 'bg-white' : 'bg-white/30'}`}
                  style={{
                    width: activePoint === point ? 8 : 6,
                    height: activePoint === point ? 8 : 6,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}