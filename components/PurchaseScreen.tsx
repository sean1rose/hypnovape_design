import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, useWindowDimensions, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, Rect, Defs, Stop, G, Polygon, LinearGradient as SvgLinearGradient } from 'react-native-svg';
import { useRouter } from 'expo-router';

// Function to create the Vapenosis logo SVG
function VapenosisLogo() {
  return (
    <Svg width="200" height="200" viewBox="0 0 1000 1000">
      {/* Outer circle with gradient */}
      <Circle cx="500" cy="500" r="450" fill="#1e1e3a" stroke="#8B5CF6" strokeWidth="10" />
      
      {/* Concentric circles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Circle 
          key={i} 
          cx="500" 
          cy="500" 
          r={400 - i * 30} 
          fill="none" 
          stroke="#4c4c8a" 
          strokeWidth="2" 
          opacity="0.6"
        />
      ))}
      
      {/* V shape with gradient */}
      <SvgLinearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#4ade80" />
        <Stop offset="50%" stopColor="#60a5fa" />
        <Stop offset="100%" stopColor="#8B5CF6" />
      </SvgLinearGradient>
      
      <Path
        d="M350,300 L500,650 L650,300"
        stroke="url(#vGradient)"
        strokeWidth="60"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

function LogoWithAnimation() {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    // Pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ scale: pulseAnim }],
      }}
    >
      <VapenosisLogo />
    </Animated.View>
  );
}

interface PurchaseScreenProps {
  visible: boolean;
  onClose: () => void;
}

export default function PurchaseScreen({ visible, onClose }: PurchaseScreenProps) {
  const { width, height } = useWindowDimensions();
  const router = useRouter();

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* Background elements */}
          <View style={styles.backgroundContainer}>
            {/* Dark gradient background */}
            <LinearGradient
              colors={['#0f0f1e', '#1e1e3a', '#2d2d5a']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.backgroundGradient}
            />

            {/* Rainbow prism effect */}
            <View style={styles.prismEffectContainer}>
              <View style={styles.prismEffect}>
                <View style={[styles.rainbowStripe, { backgroundColor: '#4ade80' }]} />{' '}
                {/* Green */}
                <View style={[styles.rainbowStripe, { backgroundColor: '#60a5fa' }]} /> {/* Blue */}
                <View style={[styles.rainbowStripe, { backgroundColor: '#8B5CF6' }]} />{' '}
                {/* Purple */}
              </View>
            </View>

            {/* Star-like dots */}
            <View style={styles.starsContainer}>
              {Array.from({ length: 15 }).map((_, i) => (
                <View
                  key={i}
                  style={{
                    position: 'absolute',
                    height: 4,
                    width: 4,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    opacity: 0.6,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: [{ scale: Math.random() * 1.5 + 0.5 }],
                  }}
                />
              ))}
            </View>
          </View>

          {/* Close button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={20} color="#fff" />
          </TouchableOpacity>

          {/* Top image placeholder */}
          <View style={styles.imageContainer}>
            <LogoWithAnimation />
          </View>

          {/* Header text */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Purchase Vapenosis</Text>
          </View>

          {/* Features list */}
          <View style={styles.featuresContainer}>
            <FeatureItem text="Quit your vaping habit forever" />
            <FeatureItem text="3 hypnosis sessions (1st session free)" />
            <FeatureItem text="Lifetime access to all content" />
          </View>

          {/* Pricing option */}
          <View style={styles.pricingContainer}>
            {/* Single purchase option */}
            <TouchableOpacity style={styles.pricingOption}>
              <View style={styles.pricingRow}>
                <View>
                  <Text style={styles.pricingTitle}>One-time Purchase</Text>
                  <View style={styles.pricingSpacer} />
                  <Text style={styles.pricingSubtitle}>$24.99</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Purchase button */}
          <LinearGradient
            colors={['#4ade80', '#60a5fa', '#8B5CF6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.purchaseButtonGradient}>
            <TouchableOpacity
              style={styles.purchaseButton}
              onPress={() => {
                // Handle purchase logic here
                onClose();
              }}>
              <Text style={styles.purchaseButtonText}>Purchase Now</Text>
            </TouchableOpacity>
          </LinearGradient>

          <View style={styles.linksContainer}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Restore Purchase</Text>
            </TouchableOpacity>
            <Text style={styles.divider}>•</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

// Helper component for feature items
function FeatureItem({ text }: { text: string }) {
  return (
    <View style={styles.featureItem}>
      <View style={styles.checkmarkContainer}>
        <Ionicons name="checkmark-circle" size={24} color="#8B5CF6" />
      </View>
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  backgroundContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  prismEffectContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    opacity: 0.25,
  },
  prismEffect: {
    position: 'absolute',
    height: '150%',
    width: '100%',
    backgroundColor: 'transparent',
    transform: [{ rotate: '20deg' }],
    flexDirection: 'row',
    left: '0%',
    top: '-25%',
  },
  starsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: '33%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  headerContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  featuresContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkmarkContainer: {
    width: 24,
    height: 24,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    color: 'white',
    fontSize: 16,
  },
  pricingContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  pricingOption: {
    backgroundColor: 'rgba(31, 41, 55, 0.8)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pricingTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pricingSpacer: {
    height: 8, // Add vertical spacing between title and price
  },
  pricingSubtitle: {
    color: '#d1d5db',
    fontSize: 18,
  },
  purchaseButtonGradient: {
    marginTop: 'auto',
    marginBottom: 20,
    borderRadius: 9999,
    marginHorizontal: 24,
  },
  purchaseButton: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purchaseButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
    gap: 8,
  },
  linkText: {
    color: '#60A5FA',
    fontSize: 14,
  },
  divider: {
    color: '#6B7280',
  },
  rainbowStripe: {
    flex: 1,
    height: '100%',
  },
}); 