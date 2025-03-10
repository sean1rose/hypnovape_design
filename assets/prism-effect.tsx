import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop, RadialGradient, Filter, FeGaussianBlur, FeColorMatrix, FeBlend } from "react-native-svg";

export default function PrismEffect(props: any) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 200 200" {...props}>
      <Defs>
        <LinearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#FF0000" />
          <Stop offset="16.67%" stopColor="#FF7F00" />
          <Stop offset="33.33%" stopColor="#FFFF00" />
          <Stop offset="50%" stopColor="#00FF00" />
          <Stop offset="66.67%" stopColor="#0000FF" />
          <Stop offset="83.33%" stopColor="#4B0082" />
          <Stop offset="100%" stopColor="#8B00FF" />
        </LinearGradient>
        
        <LinearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.7" />
        </LinearGradient>
        
        <Filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <FeGaussianBlur stdDeviation="2" result="blur" />
          <FeColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 1 0"
            result="glow"
          />
          <FeBlend in="SourceGraphic" in2="glow" mode="normal" />
        </Filter>
      </Defs>
      
      {/* Prism */}
      <Path
        d="M50 40 L150 40 L100 160 Z"
        fill="#333"
        opacity="0.7"
        stroke="#fff"
        strokeWidth="1"
      />
      
      {/* Enhanced light beam entering prism */}
      <Path
        d="M0 10 L100 40"
        stroke="url(#beamGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      
      {/* Light beam cone effect */}
      <Path
        d="M0 5 L100 35 L100 45 L0 15 Z"
        fill="#FFFFFF"
        opacity="0.2"
      />
      
      {/* Rainbow light beams exiting prism */}
      <Path
        d="M100 160 L20 180"
        stroke="url(#rainbowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M100 160 L40 190"
        stroke="url(#rainbowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M100 160 L60 195"
        stroke="url(#rainbowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M100 160 L80 198"
        stroke="url(#rainbowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M100 160 L100 200"
        stroke="url(#rainbowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M100 160 L120 198"
        stroke="url(#rainbowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M100 160 L140 195"
        stroke="url(#rainbowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M100 160 L160 190"
        stroke="url(#rainbowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M100 160 L180 180"
        stroke="url(#rainbowGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Svg>
  );
} 