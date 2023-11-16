import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const NotifeIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10 14.873c4.7 0 6.873-.603 7.083-3.022 0-2.419-1.515-2.263-1.515-5.23 0-2.317-2.197-4.954-5.568-4.954-3.37 0-5.568 2.637-5.568 4.954 0 2.967-1.515 2.811-1.515 5.23.21 2.428 2.385 3.022 7.083 3.022Z"
      clipRule="evenodd"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M11.99 17.381c-1.136 1.262-2.91 1.277-4.057 0"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={17.083}
        x2={-1.781}
        y1={14.873}
        y2={13.307}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={11.991}
        x2={7.084}
        y1={18.333}
        y2={16.715}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default NotifeIcon;
