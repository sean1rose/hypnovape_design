import * as React from "react";
import Svg, { Path, Circle, Ellipse, Defs, LinearGradient, Stop } from "react-native-svg";

export default function PlaceholderMeditation(props: any) {
  const { width = 150, height = 150, color = "#6A5ACD" } = props;
  
  return (
    <Svg width={width} height={height} viewBox="0 0 150 150" {...props}>
      <Defs>
        <LinearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={color} stopOpacity="1" />
          <Stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </LinearGradient>
        <LinearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#FFC8A2" stopOpacity="1" />
          <Stop offset="100%" stopColor="#E6B894" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      
      {/* Meditation mat/cushion */}
      <Ellipse
        cx="75"
        cy="110"
        rx="40"
        ry="15"
        fill="#D1C4E9"
        stroke="#B39DDB"
        strokeWidth="1"
      />
      
      {/* Body - sitting cross-legged */}
      <Path
        d="M75 100
           C85 100, 95 90, 95 80
           L95 60
           C95 50, 85 40, 75 40
           C65 40, 55 50, 55 60
           L55 80
           C55 90, 65 100, 75 100 Z"
        fill="url(#bodyGradient)"
        stroke="#483D8B"
        strokeWidth="1"
      />
      
      {/* Head */}
      <Circle
        cx="75"
        cy="30"
        r="15"
        fill="url(#faceGradient)"
        stroke="#A67C52"
        strokeWidth="1"
      />
      
      {/* Left arm */}
      <Path
        d="M55 70
           C45 75, 40 85, 45 95
           C50 100, 60 95, 65 90"
        fill="url(#bodyGradient)"
        stroke="#483D8B"
        strokeWidth="1"
      />
      
      {/* Right arm */}
      <Path
        d="M95 70
           C105 75, 110 85, 105 95
           C100 100, 90 95, 85 90"
        fill="url(#bodyGradient)"
        stroke="#483D8B"
        strokeWidth="1"
      />
      
      {/* Left leg */}
      <Path
        d="M65 100
           C55 105, 45 110, 50 115
           C60 120, 70 115, 75 110"
        fill="url(#bodyGradient)"
        stroke="#483D8B"
        strokeWidth="1"
      />
      
      {/* Right leg */}
      <Path
        d="M85 100
           C95 105, 105 110, 100 115
           C90 120, 80 115, 75 110"
        fill="url(#bodyGradient)"
        stroke="#483D8B"
        strokeWidth="1"
      />
      
      {/* Peaceful face - closed eyes */}
      <Path
        d="M70 30 L65 30"
        stroke="#333"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <Path
        d="M85 30 L80 30"
        stroke="#333"
        strokeWidth="1"
        strokeLinecap="round"
      />
      
      {/* Smile */}
      <Path
        d="M70 35 C72 38, 78 38, 80 35"
        stroke="#333"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Aura/energy circles */}
      <Circle
        cx="75"
        cy="75"
        r="50"
        fill="none"
        stroke="#B39DDB"
        strokeWidth="1"
        opacity="0.3"
      />
      <Circle
        cx="75"
        cy="75"
        r="60"
        fill="none"
        stroke="#B39DDB"
        strokeWidth="1"
        opacity="0.2"
      />
    </Svg>
  );
} 