import * as React from 'react';
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Btn4 = (props: SvgProps) => (
  <Svg width={60} height={60} fill="none" {...props}>
    <Circle cx={30} cy={30} r={29.75} stroke="#F7F8F8" strokeWidth={0.5} />
    <Circle cx={30} cy={30} r={29} stroke="url(#a)" strokeWidth={2} />
    <Circle cx={30} cy={30} r={25} fill="url(#b)" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m27.375 24.75 5.25 5.25-5.25 5.25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={60}
        x2={-19.968}
        y1={60}
        y2={53.812}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={55}
        x2={-11.64}
        y1={55}
        y2={49.843}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Btn4;
