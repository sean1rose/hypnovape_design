import * as React from "react";
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg";

export default function PlaceholderBalloon(props: any) {
  const { width = 100, height = 120, color = "#FF6B6B" } = props;
  
  return (
    <Svg width={width} height={height} viewBox="0 0 100 120" {...props}>
      <Defs>
        <LinearGradient id="balloonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={color} stopOpacity="1" />
          <Stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </LinearGradient>
      </Defs>
      
      {/* Balloon body */}
      <Path
        d="M50 10 
           C70 10, 85 30, 85 55 
           C85 80, 65 95, 50 95 
           C35 95, 15 80, 15 55 
           C15 30, 30 10, 50 10 Z"
        fill="url(#balloonGradient)"
        stroke="#FFFFFF"
        strokeWidth="1"
      />
      
      {/* Balloon highlight */}
      <Circle
        cx="35"
        cy="35"
        r="10"
        fill="#FFFFFF"
        opacity="0.3"
      />
      
      {/* Balloon string */}
      <Path
        d="M50 95 
           C55 100, 45 105, 50 110
           C45 115, 55 120, 50 120"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Balloon knot */}
      <Circle
        cx="50"
        cy="95"
        r="3"
        fill="#FFFFFF"
        opacity="0.8"
      />
    </Svg>
  );
} 