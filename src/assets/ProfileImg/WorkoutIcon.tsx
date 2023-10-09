import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const WorkoutIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M6.143 8.501v5.717"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10.032 5.766v8.452"
    />
    <Path
      stroke="url(#c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M13.857 11.523v2.695"
    />
    <Path
      stroke="url(#d)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M13.905 1.667h-7.81c-2.722 0-4.428 1.926-4.428 4.654v7.358c0 2.728 1.698 4.654 4.428 4.654h7.81c2.73 0 4.428-1.926 4.428-4.654V6.321c0-2.728-1.698-4.654-4.428-4.654Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={6.54}
        x2={5.476}
        y1={14.218}
        y2={14.207}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={10.429}
        x2={9.365}
        y1={14.218}
        y2={14.211}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={14.254}
        x2={13.191}
        y1={14.218}
        y2={14.194}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={18.333}
        x2={-3.88}
        y1={18.333}
        y2={16.614}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default WorkoutIcon;
