import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const WorkoutBtn = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={11.6}
      fill="#fff"
      stroke="url(#a)"
      strokeWidth={0.8}
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.958 7.917 14.042 12l-4.084 4.083"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={24}
        x2={-7.987}
        y1={24}
        y2={21.525}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={14.042}
        x2={12.387}
        y1={7.917}
        y2={18.61}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#C58BF2" />
        <Stop offset={1} stopColor="#EEA4CE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default WorkoutBtn;
