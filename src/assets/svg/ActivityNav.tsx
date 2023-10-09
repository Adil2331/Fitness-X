import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Circle,
  Defs,
  Stop,
  LinearGradient,
} from 'react-native-svg';
const ActivityNav = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#ADA4A5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m7.245 14.781 2.993-3.89 3.414 2.682 2.93-3.78"
    />
    <Circle
      cx={19.995}
      cy={4.2}
      r={1.922}
      stroke="#ADA4A5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
    />
    <Path
      stroke="#ADA4A5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.925 3.12H7.657c-3.012 0-4.879 2.133-4.879 5.144v8.083c0 3.011 1.83 5.135 4.879 5.135h8.604c3.011 0 4.879-2.124 4.879-5.135v-7.04"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={14}
        x2={8.669}
        y1={31}
        y2={30.587}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ActivityNav;
