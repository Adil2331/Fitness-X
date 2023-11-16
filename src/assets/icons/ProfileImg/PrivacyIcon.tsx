import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const PrivacyIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.987 18.005s6.393-1.936 6.393-7.272c0-5.338.232-5.755-.28-6.268-.514-.513-5.275-2.173-6.113-2.173-.838 0-5.6 1.66-6.112 2.173-.513.513-.281.93-.281 6.268 0 5.336 6.393 7.272 6.393 7.272Z"
      clipRule="evenodd"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m7.822 9.896 1.576 1.579 3.248-3.25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16.433}
        x2={-0.782}
        y1={18.005}
        y2={16.912}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12.646}
        x2={6.262}
        y1={11.475}
        y2={10.741}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default PrivacyIcon;
