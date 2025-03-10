import * as React from "react";
import Svg, { Rect, Text } from "react-native-svg";

export default function PlaceholderImage(props: any) {
  const { width = 200, height = 200, text = "Image Placeholder" } = props;
  
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="#cccccc"
        stroke="#999999"
        strokeWidth="2"
      />
      <Text
        x={width / 2}
        y={height / 2}
        fontSize="16"
        fontWeight="bold"
        fill="#666666"
        textAnchor="middle"
      >
        {text}
      </Text>
    </Svg>
  );
} 