import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Achievement = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M13.097 13.52H7.08"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M13.097 10.03H7.08"
    />
    <Path
      stroke="url(#c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.376 6.55H7.08"
    />
    <Path
      stroke="url(#d)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m13.257 2.292-6.407.003c-2.3.014-3.725 1.527-3.725 3.836v7.663c0 2.32 1.435 3.84 3.755 3.84l6.408-.003c2.3-.015 3.725-1.529 3.725-3.837V6.131c0-2.32-1.436-3.84-3.756-3.84Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={13.097}
        x2={6.949}
        y1={13.936}
        y2={10.501}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={13.097}
        x2={6.949}
        y1={10.447}
        y2={7.013}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={9.376}
        x2={6.432}
        y1={6.967}
        y2={6.339}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={17.013}
        x2={-1.516}
        y1={17.633}
        y2={16.335}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92A3FD" />
        <Stop offset={1} stopColor="#9DCEFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Achievement;
