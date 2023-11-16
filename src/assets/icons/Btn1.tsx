import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Btn1 = (props: SvgProps) => (
  <Svg width={61} height={61} fill="none" {...props}>
    <Circle cx={30} cy={31} r={29.75} stroke="#F7F8F8" strokeWidth={0.5} />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeWidth={2}
      d="M60 31C60 14.431 46.569 1 30 1"
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
        x2={20.016}
        y1={31}
        y2={27.906}
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
export default Btn1;
