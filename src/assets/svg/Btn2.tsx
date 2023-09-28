import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Btn2 = (props: SvgProps) => (
  <Svg width={61} height={62} fill="none" {...props}>
    <Circle cx={30} cy={31} r={29.75} stroke="#F7F8F8" strokeWidth={0.5} />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeWidth={2}
      d="M30 61c16.569 0 30-13.431 30-30C60 14.431 46.569 1 30 1"
    />
    <Circle cx={30} cy={31} r={25} fill="url(#b)" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m27.375 25.75 5.25 5.25-5.25 5.25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={60}
        x2={19.837}
        y1={61}
        y2={59.446}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={55}
        x2={-11.64}
        y1={56}
        y2={50.843}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Btn2;
