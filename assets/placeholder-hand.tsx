import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default function PlaceholderHand(props: any) {
  const { width = 120, height = 150, color = "#FFC8A2" } = props;
  
  return (
    <Svg width={width} height={height} viewBox="0 0 120 150" {...props}>
      <Defs>
        <LinearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={color} stopOpacity="1" />
          <Stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </LinearGradient>
      </Defs>
      
      {/* Palm */}
      <Path
        d="M60 100
           C40 100, 30 80, 30 60
           C30 40, 40 30, 50 30
           C55 30, 60 35, 60 40
           L60 100 Z"
        fill="url(#handGradient)"
        stroke="#A67C52"
        strokeWidth="1"
      />
      
      {/* Thumb */}
      <Path
        d="M30 60
           C25 55, 20 50, 20 40
           C20 30, 25 25, 35 25
           C45 25, 50 30, 50 35
           L50 30"
        fill="url(#handGradient)"
        stroke="#A67C52"
        strokeWidth="1"
      />
      
      {/* Index finger */}
      <Path
        d="M60 40
           C60 30, 65 15, 70 15
           C75 15, 80 20, 80 30
           L80 60
           L60 60"
        fill="url(#handGradient)"
        stroke="#A67C52"
        strokeWidth="1"
      />
      
      {/* Middle finger */}
      <Path
        d="M60 60
           C60 50, 75 10, 80 10
           C85 10, 90 15, 90 25
           L90 65
           L60 65"
        fill="url(#handGradient)"
        stroke="#A67C52"
        strokeWidth="1"
      />
      
      {/* Ring finger */}
      <Path
        d="M60 65
           C60 55, 70 15, 75 15
           C80 15, 85 20, 85 30
           L85 70
           L60 70"
        fill="url(#handGradient)"
        stroke="#A67C52"
        strokeWidth="1"
      />
      
      {/* Pinky finger */}
      <Path
        d="M60 70
           C60 60, 65 25, 70 25
           C75 25, 80 30, 80 40
           L80 75
           L60 75"
        fill="url(#handGradient)"
        stroke="#A67C52"
        strokeWidth="1"
      />
      
      {/* Wrist */}
      <Path
        d="M30 100
           C40 110, 80 110, 90 100
           L90 120
           C80 130, 40 130, 30 120
           L30 100"
        fill="url(#handGradient)"
        stroke="#A67C52"
        strokeWidth="1"
      />
    </Svg>
  );
} 