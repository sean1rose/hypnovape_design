import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CloudsPlaceholder = (props) => (
  <Svg
    width="100%"
    height={160}
    viewBox="0 0 400 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 120C20 100 40 140 60 120C80 100 100 140 120 120C140 100 160 140 180 120C200 100 220 140 240 120C260 100 280 140 300 120C320 100 340 140 360 120C380 100 400 140 420 120V160H0V120Z"
      fill="#FFFFFF"
      fillOpacity={0.2}
    />
    <Path
      d="M30 80C50 60 70 100 90 80C110 60 130 100 150 80C170 60 190 100 210 80C230 60 250 100 270 80C290 60 310 100 330 80C350 60 370 100 390 80V160H30V80Z"
      fill="#FFFFFF"
      fillOpacity={0.15}
    />
  </Svg>
);

export default CloudsPlaceholder; 