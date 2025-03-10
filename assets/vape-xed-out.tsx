import * as React from "react";
import Svg, { Path, Line, Defs, LinearGradient, Stop, Rect, Circle } from "react-native-svg";

export default function VapeXedOut(props: any) {
  const { width = 120, height = 150, color = "#4A90E2" } = props;
  
  return (
    <Svg width={width} height={height} viewBox="0 0 120 150" {...props}>
      <Defs>
        <LinearGradient id="vapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={color} stopOpacity="1" />
          <Stop offset="100%" stopColor="#2C5282" stopOpacity="0.8" />
        </LinearGradient>
        <LinearGradient id="vaporGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <Stop offset="100%" stopColor="#CCCCCC" stopOpacity="0.1" />
        </LinearGradient>
      </Defs>
      
      {/* Vapor cloud */}
      <Path
        d="M60 5
           C65 0, 75 0, 80 5
           C85 0, 95 0, 100 5
           C105 10, 105 20, 100 25
           C105 30, 105 40, 100 45
           C95 50, 85 50, 80 45
           C75 50, 65 50, 60 45
           C55 50, 45 50, 40 45
           C35 40, 35 30, 40 25
           C35 20, 35 10, 40 5
           C45 0, 55 0, 60 5 Z"
        fill="url(#vaporGradient)"
        opacity="0.7"
      />
      
      {/* Vape body - main cylinder */}
      <Rect
        x="35"
        y="30"
        width="50"
        height="90"
        rx="5"
        ry="5"
        fill="url(#vapeGradient)"
        stroke="#2C5282"
        strokeWidth="1"
      />
      
      {/* Vape mouthpiece */}
      <Rect
        x="45"
        y="20"
        width="30"
        height="15"
        rx="3"
        ry="3"
        fill="#333333"
        stroke="#222222"
        strokeWidth="1"
      />
      
      {/* Button */}
      <Circle
        cx="60"
        cy="55"
        r="5"
        fill="#CCCCCC"
        stroke="#999999"
        strokeWidth="1"
      />
      
      {/* LED indicator */}
      <Rect
        x="55"
        y="100"
        width="10"
        height="5"
        rx="2"
        ry="2"
        fill="#FF6B6B"
        stroke="#CC5555"
        strokeWidth="1"
      />
      
      {/* Air vents */}
      <Rect
        x="45"
        y="110"
        width="30"
        height="5"
        rx="2"
        ry="2"
        fill="#333333"
        stroke="#222222"
        strokeWidth="1"
      />
      
      {/* Metallic details */}
      <Rect
        x="35"
        y="80"
        width="50"
        height="2"
        fill="#CCCCCC"
        opacity="0.5"
      />
      
      <Rect
        x="35"
        y="70"
        width="50"
        height="2"
        fill="#CCCCCC"
        opacity="0.5"
      />
      
      {/* X mark over the vape - thick red lines */}
      <Line
        x1="25"
        y1="20"
        x2="95"
        y2="130"
        stroke="#FF0000"
        strokeWidth="8"
        strokeLinecap="round"
      />
      
      <Line
        x1="95"
        y1="20"
        x2="25"
        y2="130"
        stroke="#FF0000"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </Svg>
  );
} 