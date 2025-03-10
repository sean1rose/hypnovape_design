import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const LogoPlaceholder = (props) => (
  <Svg
    width={96}
    height={96}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={48} cy={48} r={48} fill="#FFFFFF" />
    <Path
      d="M65 35C65 35 60 30 50 35C40 40 35 35 35 35C35 35 30 40 35 50C40 60 35 65 35 65C35 65 40 70 50 65C60 60 65 65 65 65C65 65 70 60 65 50C60 40 65 35 65 35Z"
      fill="#4a90e2"
    />
    <Path
      d="M30 40C30 40 35 35 40 40C45 45 50 40 50 40"
      stroke="#FFFFFF"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);

export default LogoPlaceholder; 