import * as React from 'react';
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const WaterGraph = (props: SvgProps) => (
  <Svg width={20} height={275} fill="none" {...props}>
    <Rect width={20} height={275} fill="#F7F8F8" rx={10} />
    <Path
      fill="url(#a)"
      d="M0 124h20v141c0 5.523-4.477 10-10 10s-10-4.477-10-10V124Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={10}
        x2={10}
        y1={-1.5}
        y2={215.5}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#B4C0FE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default WaterGraph;
