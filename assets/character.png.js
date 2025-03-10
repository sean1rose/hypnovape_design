import * as React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

const CharacterPlaceholder = (props) => (
  <Svg
    width={120}
    height={150}
    viewBox="0 0 120 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Head */}
    <Circle cx={60} cy={40} r={20} fill="#7FB3F5" />
    
    {/* Sunglasses */}
    <Rect x={40} y={35} width={40} height={10} fill="#333333" />
    <Circle cx={50} cy={40} r={8} fill="#333333" />
    <Circle cx={70} cy={40} r={8} fill="#333333" />
    
    {/* Body - Yellow polka dot outfit */}
    <Path
      d="M30 60L20 150H100L90 60H30Z"
      fill="#FFD966"
    />
    
    {/* Polka dots */}
    <Circle cx={40} cy={80} r={3} fill="#FFFFFF" />
    <Circle cx={60} cy={70} r={3} fill="#FFFFFF" />
    <Circle cx={80} cy={80} r={3} fill="#FFFFFF" />
    <Circle cx={50} cy={100} r={3} fill="#FFFFFF" />
    <Circle cx={70} cy={90} r={3} fill="#FFFFFF" />
    <Circle cx={40} cy={120} r={3} fill="#FFFFFF" />
    <Circle cx={60} cy={110} r={3} fill="#FFFFFF" />
    <Circle cx={80} cy={120} r={3} fill="#FFFFFF" />
    <Circle cx={50} cy={140} r={3} fill="#FFFFFF" />
    <Circle cx={70} cy={130} r={3} fill="#FFFFFF" />
    
    {/* Striped shirt */}
    <Rect x={30} y={60} width={60} height={10} fill="#FFFFFF" />
    
    {/* Shoes */}
    <Path
      d="M20 150C20 140 30 140 40 145C50 150 60 140 60 150H20Z"
      fill="#FF6B6B"
    />
    <Path
      d="M100 150C100 140 90 140 80 145C70 150 60 140 60 150H100Z"
      fill="#FF6B6B"
    />
    
    {/* Shoe bows */}
    <Circle cx={30} cy={145} r={5} fill="#FF6B6B" />
    <Circle cx={25} cy={145} r={5} fill="#FF6B6B" />
    <Circle cx={90} cy={145} r={5} fill="#FF6B6B" />
    <Circle cx={95} cy={145} r={5} fill="#FF6B6B" />
  </Svg>
);

export default CharacterPlaceholder; 