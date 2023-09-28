import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Btn3 = (props: SvgProps) => (
  <Svg width={62} height={62} fill="none" {...props}>
    <Circle cx={31} cy={31} r={29.75} stroke="#F7F8F8" strokeWidth={0.5} />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 31c0 16.569 13.431 30 30 30 16.569 0 30-13.431 30-30C61 14.431 47.569 1 31 1"
    />
    <Circle cx={31} cy={31} r={25} fill="url(#b)" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m28.375 25.75 5.25 5.25-5.25 5.25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={61}
        x2={-18.968}
        y1={61}
        y2={54.812}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={56}
        x2={-10.64}
        y1={56}
        y2={50.843}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Btn3;
